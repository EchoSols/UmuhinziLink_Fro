import { Button } from "@/components/ui/button";
import { House, Key, User, User2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const AuthNavbar = () => {
    const links = [
        { name: "HOME PAGE", icon: <House size={18} />, url: "/" },
        { name: "PROFILE", icon: <User size={18} />, url: "/profile" },
        { name: "SIGN UP", icon: <User2 size={18} />, url: "/signup" },
        { name: "SIGN IN", icon: <Key size={18} />, url: "/signin" },
    ];

    return (
        <div className="absolute top-0 left-0 right-0 max-w-5xl mx-auto flex justify-between items-center px-8 py-4 bg-white/80 backdrop-blur-md rounded-2xl border-2 border-white my-5">
            {/* Logo */}
            <h1 className="text-green-600 font-bold text-lg">UmuhinziLink</h1>

            {/* Links */}
            <div className="flex gap-6">
                {links.map((link, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-[#0F7033] transition-colors"
                    >
                        {link.icon}
                        <Link href={link.url} className="text-sm font-medium">{link.name}</Link>
                    </div>
                ))}
            </div>

            {/* Button */}
            <Button className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl">
                Free Download
            </Button>

        </div>
    );
};

export default AuthNavbar;
