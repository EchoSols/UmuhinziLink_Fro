"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AuthNavbar from "./navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

export default function SignIn() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const redirectToDashboard = (userRole: string) => {
    switch (userRole) {
      case "farmer":
        router.push("/farmer_dashboard");
        break;
      case "supplier":
        router.push("/supplier_dashboard");
        break;
      case "buyer":
        router.push("/buyer_dashboard");
        break;
      default:
        router.push("/farmer_dashboard");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/signin`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Sign in failed");

      const data = await res.json();

      if (data.token) localStorage.setItem("token", data.token);
      if (data.role) {
        localStorage.setItem("userRole", data.role);
        redirectToDashboard(data.role);
      } else {
        redirectToDashboard("farmer");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      setErrorMsg("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
                    className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-white"
                  />
                  <Label htmlFor="remember" className="text-gray-700 font-medium text-sm">
                    Remember Me
                  </Label>
                </div>

                {/* Error */}
                {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

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
