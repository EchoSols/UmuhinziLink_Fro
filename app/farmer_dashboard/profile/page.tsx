"use client";
import React, { useState, useEffect } from "react";
import {
  User,
  Phone,
  MapPin,
  Mail,
  Leaf,
  Edit2,
  Save,
  X,
  CheckCircle,
  LayoutGrid,
  FilePlus,
  MessageSquare,
  BarChart2,
  ShoppingCart,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";

// Reusable input style
const inputClass =
  "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition";

const Logo = () => (
  <span className="font-extrabold text-2xl tracking-tight">
    <span className="text-green-700">Umuhinzi</span>
    <span className="text-black">Link</span>
  </span>
);

const menuItems = [
  { label: 'Dashboard', href: '/farmer_dashboard', icon: CheckCircle },
  { label: 'My Products', href: '/farmer_dashboard/products', icon: LayoutGrid },
  { label: 'Input Request', href: '/farmer_dashboard/requests', icon: FilePlus },
  { label: 'AI Tips', href: '/farmer_dashboard/ai', icon: MessageSquare },
  { label: 'Market Analytics', href: '/farmer_dashboard/market_analysis', icon: BarChart2 },
  { label: 'Message', href: '/farmer_dashboard/message', icon: Mail },
  { label: 'Orders', href: '/farmer_dashboard/orders', icon: ShoppingCart },
  { label: 'Profile', href: '/farmer_dashboard/profile', icon: User },
  { label: 'Contact', href: '/farmer_dashboard/contact', icon: Phone },
  { label: 'Settings', href: '/farmer_dashboard/settings', icon: Settings },
  { label: 'Logout', href: '/logout', icon: LogOut },
];

export default function FarmerProfile() {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    district: "",
    sector: "",
    farmName: "",
    crops: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Load mock profile data
  useEffect(() => {
    const savedProfile = localStorage.getItem("farmerProfile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    } else {
      setProfile({
        firstName: "John",
        lastName: "Doe",
        phoneNumber: "0780000000",
        email: "john.doe@example.com",
        district: "Gasabo",
        sector: "Kimironko",
        farmName: "Green Harvest Farm",
        crops: "Maize, Beans, Tomatoes",
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem("farmerProfile", JSON.stringify(profile));
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white border-b h-16 flex items-center px-8 shadow-sm">
        <Logo />
      </header>

      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r flex flex-col fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto justify-between shadow-sm min-h-full">
          <div>
            <nav className="mt-4 space-y-2 px-4">
              {menuItems.map((m, index) => {
                const isActive = m.label === 'Profile';
                const showDivider = index === 4 || index === 8; 
                return (
                  <div key={m.label}>
                    <Link href={m.href} className="block">
                      <div
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all text-sm font-medium ${
                          isActive
                            ? 'bg-green-600 text-white shadow-sm'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <m.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                        <span>{m.label}</span>
                      </div>
                    </Link>
                    {showDivider && <div className="border-t border-gray-200 my-2 mx-4"></div>}
                  </div>
                );
              })}
            </nav>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto ml-64">
          <div className="max-w-4xl bg-white rounded-lg shadow-sm border p-8">
            {/* Profile Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                  <User className="w-10 h-10 text-green-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {profile.firstName} {profile.lastName}
                  </h1>
                  <p className="text-gray-500">Farmer</p>
                </div>
              </div>

              {isEditing ? (
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700"
                  >
                    <Save className="w-4 h-4" /> Save
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-300"
                  >
                    <X className="w-4 h-4" /> Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700"
                >
                  <Edit2 className="w-4 h-4" /> Edit
                </button>
              )}
            </div>

            {/* Profile Sections */}
            <div className="space-y-6">
              <Section title="Personal Information">
                <Field
                  label="First Name"
                  value={profile.firstName}
                  isEditing={isEditing}
                  name="firstName"
                  onChange={handleChange}
                />
                <Field
                  label="Last Name"
                  value={profile.lastName}
                  isEditing={isEditing}
                  name="lastName"
                  onChange={handleChange}
                />
              </Section>

              <Section title="Contact Information">
                <Field
                  label="Phone Number"
                  value={profile.phoneNumber}
                  icon={<Phone className="w-4 h-4 text-gray-500" />}
                  isEditing={isEditing}
                  name="phoneNumber"
                  onChange={handleChange}
                />
                <Field
                  label="Email"
                  value={profile.email}
                  icon={<Mail className="w-4 h-4 text-gray-500" />}
                  isEditing={isEditing}
                  name="email"
                  onChange={handleChange}
                />
              </Section>

              <Section title="Address">
                <Field
                  label="District"
                  value={profile.district}
                  icon={<MapPin className="w-4 h-4 text-gray-500" />}
                  isEditing={isEditing}
                  name="district"
                  onChange={handleChange}
                />
                <Field
                  label="Sector"
                  value={profile.sector}
                  isEditing={isEditing}
                  name="sector"
                  onChange={handleChange}
                />
              </Section>

            
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-3">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
    </div>
  );
}

function Field({
  label,
  value,
  icon,
  isEditing,
  name,
  onChange,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
  isEditing: boolean;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {isEditing ? (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className={inputClass}
        />
      ) : (
        <div className="flex items-center gap-2 text-gray-900 bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
          {icon}
          {value || <span className="text-gray-400">Not provided</span>}
        </div>
      )}
    </div>
  );
}
