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
import { data } from "../signin/navbar";

export default function SignUp() {
  const router = useRouter();

  const socialLinks = [
    { icon: <BiLogoFacebookCircle size={25} />, link: "https://facebook.com" },
    { icon: <BiLogoGoogle size={25} />, link: "https://google.com" },
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    agreeToTerms: false,
    accountType: "farmer", // default
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      const data = await res.json();
      console.log("Account created:", data);
      router.push("/signin?from=signup");
    } catch (err) {
      console.error("Signup failed:", err);
      alert("Signup failed. Please try again.");
    }
  };

  const accountTypes = ["farmer", "supplier", "buyer"];

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-72 sm:h-96 flex flex-col justify-center items-center text-center">
        <Image
          src="/image.png"
          alt="background"
          fill
          className="object-cover w-full h-full"
        />
        {/* Navbar */}
        <div className="absolute top-4 left-0 right-0 max-w-5xl mx-auto flex justify-between items-center px-6 sm:px-8 z-10 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30">
          <h1 className="text-white font-bold text-lg">UmuhinziLink</h1>
          <div className="flex gap-6">
            {data.map((link, index) => (
              <div key={index} className="flex items-center gap-2 text-white hover:text-green-400 transition">
                {link.icon}
                <Link href={link.url} className="text-xs font-medium">
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
          <Button className="bg-white text-green-600 rounded-2xl px-4 py-2 hover:bg-green-50 transition">
            Free Download
          </Button>
        </div>
        <h1 className="text-white text-4xl sm:text-5xl font-extrabold z-10 relative mt-8">
          Welcome!
        </h1>
        <p className="text-white z-10 relative mt-2 text-sm sm:text-base px-4 sm:px-0">
          Use these awesome forms to login or create a new <br /> account in your project for free
        </p>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl -mt-20 p-6 sm:p-8 z-20 relative">
        <h1 className="text-center text-gray-800 font-extrabold text-xl sm:text-2xl mb-4">
          Register with
        </h1>

        {/* Social Links */}
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
            <Label htmlFor="fullName" className="text-gray-700 font-medium text-sm">
              Full Name
            </Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleInputChange}
              className="text-gray-700 font-medium text-sm border border-gray-300"
              required
            />
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
              className="text-gray-700 font-medium text-sm border border-gray-300"
              required
            />
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
              className="text-gray-700 font-medium text-sm border border-gray-300"
              required
            />
          </div>

          {/* Account Type with Switches */}
          <div>
            <Label htmlFor="account" className="text-gray-700 font-medium text-sm">
              Account Type
            </Label>
            <div className="flex gap-4 mt-2 mb-5">
              {accountTypes.map((type) => (
                <div key={type} className="flex items-center gap-2">
                  <Switch
                    id={type}
                    checked={formData.accountType === type}
                    onCheckedChange={() =>
                      setFormData((prev) => ({ ...prev, accountType: type }))
                    }
                    className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-gray-200"
                  />
                  <span className="capitalize text-gray-700 text-sm">{type}</span>
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
              className="text-gray-700 font-medium text-sm border border-gray-300 pr-10"
              required
            />
            <button
              type="button"
              className="absolute right-2 top-9 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
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
          >
            Sign Up
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
