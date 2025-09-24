"use client";

import React from "react";
import {
  LayoutGrid,
  MessageSquare,
  Settings,
  AlertTriangle,
  FilePlus,
  BarChart2,
  ShoppingCart,
  User,
  Mail,
  Bell,
  Package,
  Leaf,
  Send,
  LogOut
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { logout } from '@/lib/auth';

const menuItems = [
  { label: "Dashboard", href: "/farmer_dashboard", icon: LayoutGrid },
  { label: "Products", href: "/farmer_dashboard/products", icon: Package },
  { label: "Input Request", href: "/farmer_dashboard/requests", icon: FilePlus },
  { label: "AI Tips", href: "/farmer_dashboard/ai", icon: MessageSquare },
  { label: "Market Analytics", href: "/farmer_dashboard/market_analysis", icon: BarChart2 },
  { label: "Messages", href: "/farmer_dashboard/message", icon: Mail },
  { label: "Notifications", href: "/farmer_dashboard/notifications", icon: Bell },
  { label: "Profile", href: "/farmer_dashboard/profile", icon: User },
  { label: "Orders", href: "/farmer_dashboard/orders", icon: ShoppingCart },
  { label: "Settings", href: "/farmer_dashboard/settings", icon: Settings },
  { label: "Logout", href: "#", icon: LogOut, isLogout: true },
];

const tips = [
  {
    title: "Maize Planting Tips",
    description: "Get comprehensive tips on when and how to plant maize for optimal yields and healthy crop development.",
    image: "/maize-field.jpg",
    tags: ["Planting", "Maize"],
    views: 1234
  },
  {
    title: "Maize Planting Tips",
    description: "Get comprehensive tips on when and how to plant maize for optimal yields and healthy crop development.",
    image: "/maize-field.jpg",
    tags: ["Planting", "Maize"],
    views: 1234
  },
  {
    title: "Maize Planting Tips",
    description: "Get comprehensive tips on when and how to plant maize for optimal yields and healthy crop development.",
    image: "/maize-field.jpg",
    tags: ["Planting", "Maize"],
    views: 1234
  },
  {
    title: "Maize Planting Tips",
    description: "Get comprehensive tips on when and how to plant maize for optimal yields and healthy crop development.",
    image: "/maize-field.jpg",
    tags: ["Planting", "Maize"],
    views: 1234
  },
];

const Logo = () => (
  <div className="flex items-center px-6 py-4">
    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
      <Leaf className="w-5 h-5 text-green-600" />
    </div>
    <span className="font-bold text-xl text-white">
      UmuhinziLink
    </span>
  </div>
);

export default function AiDashboard() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logout(router);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#00A63E] flex flex-col fixed left-0 top-0 h-screen overflow-y-auto">
        <Logo />
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            const showDivider = index === 4 || index === 9;
            return (
              <div key={item.label}>
                {item.isLogout ? (
                  <div
                    onClick={handleLogout}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all text-sm font-medium text-white hover:bg-green-700`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                    <span>{item.label}</span>
                  </div>
                ) : (
                  <Link href={item.href} className="block">
                    <div
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all text-sm font-medium
                        ${isActive
                          ? "bg-white text-green-600 shadow-sm rounded-lg"
                          : "text-white hover:bg-green-700"
                        }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? "text-green-600" : "text-white"}`} />
                      <span>{item.label}</span>
                    </div>
                  </Link>
                )}
                {showDivider && <div className="border-t border-gray-200 my-2 mx-4"></div>}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b h-16 flex items-center justify-between px-8 shadow-sm">
          <h1 className="text-xl font-semibold text-gray-900">AI Tips</h1>
        </header>

        <div className="p-6">
          {/* Weather Alert */}
          <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl p-6 mb-8 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-6 h-6" />
              <div>
                <span className="font-semibold">Urgent Weather Alert</span>
                <p className="text-sm opacity-90 mt-1">Heavy rainfall expected in the next 3 days. Prepare your crops and watch out for pests.</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">Now</div>
              <div className="font-bold">15:30</div>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Left Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Suggested AI Tips</h2>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm text-gray-600">Ask AI Assistant</span>
                </div>
              </div>

              {/* Tips Grid */}
              <div className="space-y-4">
                {tips.map((tip, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-start space-x-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={tip.image} alt={tip.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{tip.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          {tip.tags.map((tag, i) => (
                            <span key={i} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">{tip.views} views</span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar - AI Assistant */}
            <div className="w-80">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-semibold text-gray-900">Ask AI Assistant</span>
                </div>
                
                <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
                  <div className="text-sm text-gray-600">
                    Hi! I&apos;m your AI farming assistant. Ask me anything about farming, crops, or agricultural best practices.
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">You</div>
                    <div className="text-sm">How do I prepare soil for maize planting?</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">AI Assistant</div>
                    <div className="text-sm">For maize planting, start by testing your soil pH (should be 6.0-7.0). Clear weeds, till the soil to 20-25cm depth, and add organic matter like compost. Ensure good drainage and apply recommended fertilizers based on soil test results.</div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Type your question..."
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
