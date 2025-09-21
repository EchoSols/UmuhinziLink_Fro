"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AuthNavbar from "./navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { Eye, EyeOff } from "lucide-react";
import {
  storeAuthData,
  redirectToDashboard,
  isAuthenticated,
  type LoginResponse
} from "@/lib/auth";

export default function SignIn() {
  const router = useRouter();
  const { addToast } = useToast();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // Check if user is already authenticated and handle URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const isLogout = urlParams.get('logout');
    const fromSignup = urlParams.get('from');
    const registered = urlParams.get('registered');

    if (isLogout) {
      console.log("User logged out successfully");
    }

    if (fromSignup && registered) {
      console.log("Registration successful, please sign in");
    }

    if (isAuthenticated() && !isLogout) {
      console.log("User already authenticated, redirecting to dashboard");
      redirectToDashboard(router);
    } else {
      setIsCheckingAuth(false);
    }
  }, [router]);

  // Load saved credentials if remember me was enabled
  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    const savedRememberMe = localStorage.getItem('rememberMe') === 'true';

    if (savedEmail && savedRememberMe) {
      setFormData(prev => ({ ...prev, email: savedEmail }));
      setRememberMe(true);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRememberMe = (email: string) => {
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
      localStorage.setItem('rememberMe', 'true');
    } else {
      localStorage.removeItem('rememberedEmail');
      localStorage.removeItem('rememberMe');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validate form data
    if (!formData.email || !formData.password) {
      addToast({
        type: 'error',
        title: 'Missing Information',
        description: 'Please fill in all fields.',
      });
      setLoading(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      addToast({
        type: 'error',
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
      });
      setLoading(false);
      return;
    }

    console.log("Attempting login with:", { email: formData.email });

    try {
      const res = await fetch(
        "/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password
          }),
        }
      );

      if (!res.ok) {
        const errorData = await res.text();
        throw new Error(`Login failed: ${res.status} - ${errorData}`);
      }

      const response: LoginResponse = await res.json();
      console.log("Login response:", response);

      if (response.success && response.data) {
        // Store authentication data using utility
        storeAuthData(response.data);

        // Handle remember me functionality
        handleRememberMe(formData.email);

        console.log("Login successful for user:", response.data.user.names);
        console.log("User role:", response.data.user.role);

        // Show success message
        const userName = response.data.user.names || 'User';
        const userRole = response.data.user.role;
        addToast({
          type: 'success',
          title: 'Login Successful!',
          description: `Welcome back ${userName}! Redirecting to your ${userRole.toLowerCase()} dashboard...`,
          duration: 3000,
        });

        // Redirect based on role using utility after a short delay
        setTimeout(() => {
          redirectToDashboard(router, response.data.user.role);
        }, 1500);
      } else {
        throw new Error(response.message || "Login failed");
      }
    } catch (error: unknown) {
      console.error("Error signing in:", error);

      // Provide specific error messages
      let errorTitle = "Login Failed";
      let errorDescription = "Please try again.";
      
      const errorMessage = error instanceof Error ? error.message : String(error);
      
      if (errorMessage.includes('401')) {
        errorTitle = "Invalid Credentials";
        errorDescription = "Invalid email or password. Please try again.";
      } else if (errorMessage.includes('404')) {
        errorTitle = "Account Not Found";
        errorDescription = "Account not found. Please check your email or sign up.";
      } else if (errorMessage.includes('403')) {
        errorTitle = "Account Disabled";
        errorDescription = "Your account is disabled. Please contact support.";
      } else if (errorMessage.includes('429')) {
        errorTitle = "Too Many Attempts";
        errorDescription = "Too many login attempts. Please try again later.";
      } else if (errorMessage.includes('500')) {
        errorTitle = "Server Error";
        errorDescription = "Server error. Please try again later.";
      } else if (errorMessage.includes('Failed to fetch')) {
        errorTitle = "Network Error";
        errorDescription = "Network error. Please check your connection and try again.";
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

  // Show loading while checking authentication
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-h-screen bg-gray-50 flex justify-center">
      <div className="w-full relative">
        {/* Navbar */}
        <AuthNavbar />

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Form */}
          <div className="flex-1">
            <div className="max-w-xl mx-auto">
              <h1 className="text-green-600 font-extrabold text-4xl py-3">
                Welcome back
              </h1>
              <p className="text-sm font-medium text-gray-500 mb-6">
                Enter your email and password to sign in
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium text-sm">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={loading}
                    required
                    className="text-gray-700 text-sm font-medium outline-gray-200 rounded-xl"
                  />
                </div>

                {/* Password */}
                <div>
                  <Label htmlFor="password" className="text-gray-700 font-medium text-sm">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      disabled={loading}
                      required
                      className="text-gray-700 text-sm font-medium outline-gray-200 pr-10 rounded-xl"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center space-x-2">
                  <Switch
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={setRememberMe}
                    className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-white"
                  />
                  <Label htmlFor="remember" className="text-gray-700 font-medium text-sm">
                    Remember Me
                  </Label>
                </div>

                {/* Error */}

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium text-sm"
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 hidden md:block">
            <Image
              src="/image.png"
              alt="thumbnail"
              className="w-full h-screen object-cover"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
