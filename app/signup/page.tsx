"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { BiLogoFacebookCircle, BiLogoGoogle } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { data } from "../signin/navbar";

export default function SignUp() {
  const router = useRouter();
  const { addToast } = useToast();

  const socialLinks = [
    { icon: <BiLogoFacebookCircle size={25} />, link: "https://facebook.com" },
    { icon: <BiLogoGoogle size={25} />, link: "https://google.com" },
  ];

  const [formData, setFormData] = useState({
    names: "",
    email: "",
    phoneNumber: "",
    password: "",
    agreeToTerms: false,
    role: "FARMER", // default
  });

  const [showPassword, setShowPassword] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    names: "",
    email: "",
    phoneNumber: "",
    password: "",
    agreeToTerms: "",
    role: ""
  });
  const [touched, setTouched] = useState({
    names: false,
    email: false,
    phoneNumber: false,
    password: false,
    agreeToTerms: false,
    role: false
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear field error when user starts typing
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, formData[name as keyof typeof formData]);
  };

  const validateField = (name: string, value: any) => {
    let error = "";

    switch (name) {
      case "names":
        if (!value.trim()) {
          error = "Full name is required";
        } else if (value.trim().length < 2) {
          error = "Name must be at least 2 characters long";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            error = "Please enter a valid email address";
          }
        }
        break;
      case "phoneNumber":
        if (!value.trim()) {
          error = "Phone number is required";
        } else if (value.replace(/\D/g, '').length < 10) {
          error = "Phone number must be at least 10 digits";
        }
        break;
      case "password":
        if (!value.trim()) {
          error = "Password is required";
        } else if (value.length < 6) {
          error = "Password must be at least 6 characters long";
        } else if (!/(?=.*[a-z])/.test(value)) {
          error = "Password must contain at least one lowercase letter";
        } else if (!/(?=.*\d)/.test(value)) {
          error = "Password must contain at least one number";
        }
        break;
      case "agreeToTerms":
        if (!value) {
          error = "You must agree to the terms and conditions";
        }
        break;
      case "role":
        if (!value) {
          error = "Please select an account type";
        }
        break;
    }

    setFieldErrors((prev) => ({ ...prev, [name]: error }));
    return error === "";
  };

  const validateForm = () => {
    const namesValid = validateField("names", formData.names);
    const emailValid = validateField("email", formData.email);
    const phoneValid = validateField("phoneNumber", formData.phoneNumber);
    const passwordValid = validateField("password", formData.password);
    const termsValid = validateField("agreeToTerms", formData.agreeToTerms);
    const roleValid = validateField("role", formData.role);

    setTouched({
      names: true,
      email: true,
      phoneNumber: true,
      password: true,
      agreeToTerms: true,
      role: true
    });

    return namesValid && emailValid && phoneValid && passwordValid && termsValid && roleValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validate form data
    if (!validateForm()) {
      addToast({
        type: 'error',
        title: 'Validation Error',
        description: 'Please fix the errors below and try again.',
        duration: 4000,
      });
      setLoading(false);
      return;
    }

    // Prepare the request body according to the API specification
    const requestBody = {
      names: formData.names,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      password: formData.password,
      role: formData.role
    };

    // Debug: Log the request body to ensure role is included
    console.log("Request body being sent:", requestBody);
    console.log("Current form data:", formData);

    try {
      // Use the Next.js API route to avoid CORS issues

      const res = await fetch(`/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(requestBody)
      });

      const response = await res.json();

      if (!res.ok) {
        throw new Error(response.message || `Registration failed: ${res.status}`);
      }

      console.log("Account created successfully:", response);

      // Store auth data immediately if available
      if (response.success && response.data?.token) {
        localStorage.setItem('authToken', response.data.token);
        if (response.data.user) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }

        // Show success message
        const userName = response.data.user?.names || 'User';
        addToast({
          type: 'success',
          title: 'Registration Successful',
          description: `Welcome, ${userName}! You're being redirected...`,
          duration: 3000,
        });
      } else {
        // If no token but registration was successful, redirect to login
        addToast({
          type: 'success',
          title: 'Registration Successful',
          description: 'Please log in with your new credentials.',
          duration: 3000,
        });
        router.push('/signin');
      }
    } catch (err: any) {
      // Error handling
      let errorTitle = "Registration Failed";
      let errorDescription = "Please try again.";

      const errorMessage = err instanceof Error ? err.message : String(err);

      if (errorMessage.includes('Failed to fetch') || errorMessage.includes('NetworkError')) {
        errorTitle = "Network Error";
        errorDescription = "Unable to reach the registration server. Please check your connection and try again.";
      } else if (errorMessage.includes('400')) {
        errorTitle = "Invalid Data";
        errorDescription = "Please check your information and try again.";
      } else if (errorMessage.includes('409') || errorMessage.toLowerCase().includes('already exists')) {
        errorTitle = "Account Already Exists";
        errorDescription = "An account with this email already exists. Please try signing in instead.";
        setFieldErrors(prev => ({ ...prev, email: "Email already registered" }));
        setTouched(prev => ({ ...prev, email: true }));
      } else if (errorMessage.includes('422')) {
        errorTitle = "Invalid Format";
        errorDescription = "Please check your information and try again.";
      } else if (errorMessage.includes('500')) {
        errorTitle = "Server Error";
        errorDescription = "Our servers are experiencing issues. Please try again in a few minutes.";
      } else if (errorMessage.toLowerCase().includes('email')) {
        errorTitle = "Email Error";
        errorDescription = errorMessage;
        setFieldErrors(prev => ({ ...prev, email: errorMessage }));
        setTouched(prev => ({ ...prev, email: true }));
      } else if (errorMessage.toLowerCase().includes('password')) {
        errorTitle = "Password Error";
        errorDescription = errorMessage;
        setFieldErrors(prev => ({ ...prev, password: errorMessage }));
        setTouched(prev => ({ ...prev, password: true }));
      } else if (errorMessage.toLowerCase().includes('phone')) {
        errorTitle = "Phone Number Error";
        errorDescription = errorMessage;
        setFieldErrors(prev => ({ ...prev, phoneNumber: errorMessage }));
        setTouched(prev => ({ ...prev, phoneNumber: true }));
      } else if (errorMessage) {
        errorDescription = errorMessage;
      }

      addToast({
        type: 'error',
        title: errorTitle,
        description: errorDescription,
        duration: 6000,
      });
    } finally {
      setLoading(false);
    }
  };

  const accountTypes = [
    { value: "FARMER", label: "Farmer" },
    { value: "SUPPLIER", label: "Supplier" },
    { value: "BUYER", label: "Buyer" }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-72 sm:h-96 flex flex-col justify-center items-center text-center">
        {/* Background Image */}
        <Image
          src="/image.png"
          alt="background"
          fill
          className="absolute right-0 top-0 object-cover w-full h-full"
        />

        {/* Navbar */}
        <div className="absolute top-4 left-0 right-0 max-w-5xl mx-auto flex justify-between items-center px-6 sm:px-8 z-20">
          <h1 className="text-white font-bold text-lg">UmuhinziLink</h1>
          <div className="flex gap-6">
            {data.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="flex items-center gap-2 text-white hover:text-green-400 transition text-xs font-medium"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>
          <Button className="bg-white text-green-600 rounded-2xl px-4 py-2 hover:bg-green-50 transition">
            Free Download
          </Button>
        </div>

        {/* Welcome Text */}
        <h1 className="text-white text-4xl sm:text-5xl font-extrabold z-10 relative mt-8">
          Welcome!
        </h1>
        <p className="text-white z-10 relative mt-2 text-sm sm:text-base px-4 sm:px-0">
          Use these awesome forms to login or create a new <br /> account in your project for free
        </p>
      </div>

      <div className="w-full max-w-md bg-white shadow-lg rounded-xl -mt-20 p-6 sm:p-8 z-20 relative">
        <h1 className="text-center text-gray-800 font-extrabold text-xl sm:text-2xl mb-4">
          Register with
        </h1>

        <div className="flex gap-4 justify-center mb-4">
          {socialLinks.map((linkItem, idx) => (
            <Link
              key={idx}
              href={linkItem.link}
              target="_blank"
              className="p-3 text-gray-700 transition border border-gray-100 rounded-md hover:bg-gray-100"
            >
              {linkItem.icon}
            </Link>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mb-6">Or continue with your details</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="names" className="text-gray-700 font-medium text-sm">
              Full Name
            </Label>
            <Input
              id="names"
              name="names"
              placeholder="John Doe"
              value={formData.names}
              onChange={handleInputChange}
              onBlur={handleBlur}
              disabled={loading}
              className={`text-gray-700 font-medium text-sm border ${touched.names && fieldErrors.names
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-green-500 focus:ring-green-500"
                }`}
              required
            />
            {touched.names && fieldErrors.names && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                {fieldErrors.names}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="email" className="text-gray-700 font-medium text-sm">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              disabled={loading}
              className={`text-gray-700 font-medium text-sm border ${touched.email && fieldErrors.email
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-green-500 focus:ring-green-500"
                }`}
              required
            />
            {touched.email && fieldErrors.email && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                {fieldErrors.email}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="phoneNumber" className="text-gray-700 font-medium text-sm">
              Phone Number
            </Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              placeholder="+250 7..."
              value={formData.phoneNumber}
              onChange={handleInputChange}
              onBlur={handleBlur}
              disabled={loading}
              className={`text-gray-700 font-medium text-sm border ${touched.phoneNumber && fieldErrors.phoneNumber
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-green-500 focus:ring-green-500"
                }`}
              required
            />
            {touched.phoneNumber && fieldErrors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                {fieldErrors.phoneNumber}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="account" className="text-gray-700 font-medium text-sm">
              Account Type
            </Label>
            <div className="flex gap-4 mt-2 mb-5">
              {accountTypes.map((type) => (
                <div key={type.value} className="flex items-center gap-2">
                  <Switch
                    id={type.value}
                    checked={formData.role === type.value}
                    onCheckedChange={() =>
                      setFormData((prev) => ({ ...prev, role: type.value }))
                    }
                    className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-gray-200"
                  />
                  <span className="text-gray-700 text-sm">{type.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Label htmlFor="password" className="text-gray-700 font-medium text-sm">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={formData.password}
              onChange={handleInputChange}
              onBlur={handleBlur}
              disabled={loading}
              className={`text-gray-700 font-medium text-sm border pr-10 ${touched.password && fieldErrors.password
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-green-500 focus:ring-green-500"
                }`}
              required
            />
            <button
              type="button"
              className="absolute right-2 top-9 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {touched.password && fieldErrors.password && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                {fieldErrors.password}
              </p>
            )}
          </div>

          {/* Agree Terms */}
          <div className="flex items-center space-x-2">
            <Switch
              id="agreeToTerms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({ ...prev, agreeToTerms: checked }))
              }
              className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-gray-200"
            />
            <Label htmlFor="agreeToTerms" className="text-gray-700 font-medium text-sm">
              I agree to the terms & conditions
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium text-sm"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </Button>

          <p className="text-gray-700 text-sm text-center">
            Already have an account?{" "}
            <Link href="/signin" className="text-green-600 font-semibold">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
