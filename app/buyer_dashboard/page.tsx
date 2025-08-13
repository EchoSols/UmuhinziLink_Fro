"use client";

import { useState } from "react";
import {
  Star,
  MapPin,
  User as UserIcon,
  Search,
  LayoutGrid,
  List,
  CheckCircle,
  LayoutGrid as GridIcon,
  FilePlus,
  MessageSquare,
  BarChart2,
  Mail,
  ShoppingCart,
  Phone,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  { label: "Dashboard", href: "/buyer_dashboard", icon: CheckCircle },
  { label: "My Purchase", href: "/buyer_dashboard/purchases", icon: GridIcon },
  { label: "Browse product", href: "/buyer_dashboard/product", icon: FilePlus },
  { label: "Saved items", href: "/buyer_dashboard/saved", icon: MessageSquare },
  { label: "Message", href: "/messages", icon: Mail },
  { label: "Profile", href: "/profile", icon: UserIcon },
  { label: "Contact", href: "/contact", icon: Phone },
  { label: "Settings", href: "/settings", icon: Settings },
  { label: "Logout", href: "/logout", icon: LogOut },
];

const productsList = [
  { name: "Fresh Tomatoes", price: "$2.50/kg", available: "500 kg", farmer: "Mary Uwimana", location: "Kigali", rating: 4.8, image: "/tomatoes.jpg" },
  { name: "Organic Lettuce", price: "$1.80/kg", available: "200 kg", farmer: "Jean Baptiste", location: "Musanze", rating: 4.6, image: "/lettuce.jpg" },
  { name: "Yellow Maize", price: "$0.85/kg", available: "2000 kg", farmer: "Pierre Nkurunziza", location: "Huye", rating: 4.9, image: "/maize.jpg" },
  { name: "Fresh Carrots", price: "$1.20/kg", available: "300 kg", farmer: "Agnes Mukamana", location: "Kigali", rating: 4.7, image: "/carrots.jpg" },
  { name: "Red Apples", price: "$3.50/kg", available: "150 kg", farmer: "Grace Uwase", location: "Musanze", rating: 4.8, image: "/apples.jpg" },
  { name: "Green Beans", price: "$2.20/kg", available: "180 kg", farmer: "Samuel Habimana", location: "Nyagatare", rating: 4.5, image: "/beans.jpg" },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [cropFilter, setCropFilter] = useState("All Crops");
  const [locationFilter, setLocationFilter] = useState("All Locations");

  const filteredProducts = productsList.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCrop = cropFilter === "All Crops" || p.name.includes(cropFilter);
    const matchesLocation = locationFilter === "All Locations" || p.location.includes(locationFilter);
    return matchesSearch && matchesCrop && matchesLocation;
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-64 bg-white border-r h-screen flex flex-col">
        <div className="h-16 flex items-center justify-center border-b font-extrabold text-green-700">
          Umuhinzi<span className="text-black">Link</span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item, index) => {
            const isActive = item.label === "Dashboard";
            const Icon = item.icon;
            const showDivider = index === 4 || index === 8;
            return (
              <div key={item.label}>
                <Link href={item.href} className="block">
                  <div
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all text-sm font-medium
                      ${isActive
                        ? "bg-green-600 text-white shadow-sm"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-500"}`} />
                    <span>{item.label}</span>
                  </div>
                </Link>
                {showDivider && <div className="border-t border-gray-200 my-2 mx-4"></div>}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex flex-col flex-1 ml-64">
        {/* Green Welcome Bar */}
        <div className="bg-green-600 text-white px-6 py-5 shadow-sm">
          <h1 className="text-lg font-semibold">Welcome back, Buyer Chance!</h1>
          <p className="text-sm opacity-90">
            Manage your agricultural inputs and connect with farmers across Rwanda
          </p>
        </div>

        {/* Search + Filter Bar */}
        <div className="bg-white border-b px-6 py-4 flex gap-4 items-center flex-wrap">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search crops..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded pl-9 pr-3 py-2 text-sm"
            />
          </div>

          <select
            className="border rounded px-3 py-2 text-sm"
            value={cropFilter}
            onChange={(e) => setCropFilter(e.target.value)}
          >
            <option>All Crops</option>
            <option>Tomatoes</option>
            <option>Lettuce</option>
            <option>Maize</option>
            <option>Carrots</option>
          </select>

          <select
            className="border rounded px-3 py-2 text-sm"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option>All Locations</option>
            <option>Kigali</option>
            <option>Musanze</option>
            <option>Huye</option>
            <option>Nyagatare</option>
          </select>

          <select className="border rounded px-3 py-2 text-sm">
            <option>Price Range</option>
          </select>

          <button className="bg-green-600 text-white px-4 py-2 rounded text-sm">
            Filter
          </button>
        </div>

        {/* Products Grid */}
        <main className="flex-1 overflow-auto p-6">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-600">
              Showing 1-{filteredProducts.length} of {productsList.length} results
            </p>
            <div className="flex gap-2 text-gray-500">
              <LayoutGrid className="w-5 h-5 cursor-pointer hover:text-green-600" />
              <List className="w-5 h-5 cursor-pointer hover:text-green-600" />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProducts.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-lg shadow-sm border overflow-hidden"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-green-600 font-bold">{p.price}</p>
                  <p className="text-sm text-gray-500">
                    Available: {p.available}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <UserIcon className="w-4 h-4 mr-1" /> {p.farmer}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" /> {p.location}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500 mt-1">
                    <Star className="w-4 h-4" /> {p.rating}
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button className="bg-green-600 text-white px-3 py-1 rounded text-sm">
                      Buy Now
                    </button>
                    <button className="border border-gray-300 px-3 py-1 rounded text-sm">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
