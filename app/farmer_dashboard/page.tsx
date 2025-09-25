"use client";

import { useState } from 'react';
import {
  LayoutGrid, FilePlus, BarChart2, MessageSquare,
  ShoppingCart, User, Settings, CloudSun, Mail, Leaf, Package,
  Search, Bell, ChevronDown, TrendingUp, Users, LogOut, Clock, DollarSign
} from 'lucide-react';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { FarmerGuard } from '@/components/auth/AuthGuard';
import { logout } from '@/lib/auth';

//menu items
const menuItems = [
  { label: 'Dashboard', href: '/farmer_dashboard', icon: LayoutGrid },
  { label: 'Products', href: '/farmer_dashboard/products', icon: Package },
  { label: 'Input Request', href: '/farmer_dashboard/requests', icon: FilePlus },
  { label: 'AI Tips', href: '/farmer_dashboard/ai', icon: MessageSquare },
  { label: 'Market Analytics', href: '/farmer_dashboard/market_analysis', icon: BarChart2 },
  { label: 'Messages', href: '/farmer_dashboard/message', icon: Mail },
  { label: 'Notifications', href: '/farmer_dashboard/notifications', icon: Bell },
  { label: 'Profile', href: '/farmer_dashboard/profile', icon: User },
  { label: 'Orders', href: '/farmer_dashboard/orders', icon: ShoppingCart },
  { label: 'Settings', href: '/farmer_dashboard/settings', icon: Settings },
  { label: 'Logout', href: '#', icon: LogOut, isLogout: true },
];

// Chart data
const chartData = [
  { name: 'Jan', value: 200000 },
  { name: 'Feb', value: 180000 },
  { name: 'Mar', value: 220000 },
  { name: 'Apr', value: 250000 },
  { name: 'May', value: 280000 },
  { name: 'Jun', value: 320000 },
  { name: 'Jul', value: 300000 },
  { name: 'Aug', value: 340000 },
  { name: 'Sep', value: 380000 },
  { name: 'Oct', value: 360000 },
  { name: 'Nov', value: 400000 },
  { name: 'Dec', value: 420000 }
];

// Recent items data
const recentItems = [
  {
    id: 1,
    item: 'Tomatoes',
    date: '2024-07-15',
    quantity: '50kg',
    price: '25,000',
    location: 'Kigali',
    status: 'Active',
    action: 'Edit'
  },
  {
    id: 2,
    item: 'Potatoes',
    date: '2024-07-14',
    quantity: '100kg',
    price: '35,000',
    location: 'Northern',
    status: 'Active',
    action: 'View'
  },
  {
    id: 3,
    item: 'Beans',
    date: '2024-07-13',
    quantity: '75kg',
    price: '20,000',
    location: 'Eastern',
    status: 'Sold',
    action: 'View'
  },
  {
    id: 4,
    item: 'Maize',
    date: '2024-07-12',
    quantity: '200kg',
    price: '45,000',
    location: 'Southern',
    status: 'Pending',
    action: 'Edit'
  },
  {
    id: 5,
    item: 'Fresh Tomatoes',
    date: '2024-03-15',
    quantity: '50 kg',
    price: '25,000',
    location: 'Kigali',
    status: 'Active',
    action: 'Edit'
  },
  {
    id: 2,
    item: 'Organic Potatoes',
    date: '2024-03-14',
    quantity: '100 kg',
    price: '40,000',
    location: 'Musanze',
    status: 'Sold',
    action: 'View'
  },
  {
    id: 3,
    item: 'Green Beans',
    date: '2024-03-13',
    quantity: '30 kg',
    price: '15,000',
    location: 'Rubavu',
    status: 'Pending',
    action: 'Edit'
  }
];

function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    logout(router);
  };

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


  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <aside className="w-64 bg-[#00A63E] border-r flex flex-col fixed left-0 top-0 h-screen overflow-y-auto">
          <Logo />
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item, index) => {
              const isActive = item.label === 'Dashboard';
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
        <main className="flex-1 overflow-auto ml-64 relative">
          <header className="fixed top-0 left-64 right-0 z-30 bg-white border-b h-16 flex items-center justify-between px-8 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  className="pl-10 pr-4 py-2 w-80 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  placeholder="Search here ..."
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>🇷🇼</span>
                <span>English</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <Bell className="w-5 h-5 text-gray-600" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">JD</span>
                </div>
                <span className="text-sm font-medium text-gray-700">John Doe</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          </header>

          <div className="p-6 mt-16 space-y-6">
            {/* Welcome Section */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Tuesday, 16 July 2024</p>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Good Morning 👋</h1>
              <p className="text-gray-600">Here&apos;s what&apos;s happening with your farm today.</p>
            </div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  id: 'total-sales',
                  title: 'Total Sales',
                  value: '156,000',
                  change: '+12%',
                  icon: <TrendingUp className="w-6 h-6 text-green-600" />,
                  iconBg: 'bg-green-100',
                  changeColor: 'text-green-500',
                  currency: 'RWF'
                },
                {
                  id: 'total-orders',
                  title: 'Total Orders',
                  value: '2,420',
                  change: '+8%',
                  icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
                  iconBg: 'bg-blue-100',
                  changeColor: 'text-green-500'
                },
                {
                  id: 'active-products',
                  title: 'Active Products',
                  value: '24',
                  change: '+4',
                  icon: <Package className="w-6 h-6 text-purple-600" />,
                  iconBg: 'bg-purple-100',
                  changeColor: 'text-green-500'
                },
                {
                  id: 'pending-orders',
                  title: 'Pending Orders',
                  value: '12',
                  change: '-2',
                  icon: <Clock className="w-6 h-6 text-yellow-600" />,
                  iconBg: 'bg-yellow-100',
                  changeColor: 'text-red-500'
                },
                {
                  id: 'total-revenue',
                  title: 'Total Revenue',
                  value: '1,250,000',
                  change: '+15%',
                  icon: <DollarSign className="w-6 h-6 text-green-600" />,
                  iconBg: 'bg-green-50',
                  changeColor: 'text-green-500',
                  currency: 'RWF'
                }
              ].map((card) => (
                <div key={card.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center`}>
                      {card.icon}
                    </div>
                    <span className={`${card.changeColor} text-sm font-medium`}>{card.change}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {card.currency ? `${card.currency} ${card.value}` : card.value}
                  </h3>
                  <p className="text-sm text-gray-500">{card.title}</p>
                </div>
              ))}
            </div>

            {/* Total Products */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-green-500 text-sm font-medium">+15%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">316,000</h3>
              <p className="text-sm text-gray-500">Total Products</p>
            </div>

            {/* Total Users */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-green-500 text-sm font-medium">+3%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">1,240</h3>
              <p className="text-sm text-gray-500">Total Users</p>
            </div>

            {/* Revenue Card with Progress */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Revenue</h3>
                <span className="text-xs text-gray-500">This Week</span>
              </div>
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#10b981"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2.51 * 75} ${2.51 * (100 - 75)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">75%</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">5,824,213</p>
                <p className="text-sm text-gray-500">Weekly Revenue</p>
              </div>
            </div>
          </div>
          {/* Weather & AI Tips Section */}
          <div className="grid grid-cols-3 gap-6">
            {/* Weather Card */}
            <div className="bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl p-6 text-white shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Today&apos;s Weather</h3>
                <CloudSun className="w-8 h-8 opacity-90" />
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold mb-1">24°C</p>
                <p className="text-sm opacity-90 mb-1">Partly Cloudy</p>
                <p className="text-xs opacity-80">Kigali, Rwanda</p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                <div>
                  <p className="opacity-80">Wed</p>
                  <p className="font-semibold">26°C</p>
                </div>
                <div>
                  <p className="opacity-80">Thu</p>
                  <p className="font-semibold">23°C</p>
                </div>
                <div>
                  <p className="opacity-80">Fri</p>
                  <p className="font-semibold">25°C</p>
                </div>
              </div>
            </div>

            {/* AI Farming Tips */}
            <div className="bg-white rounded-xl p-6 shadow-sm col-span-2">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">AI Farming Tips</h3>
              <div className="space-y-3">
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
                  <p className="font-medium text-gray-900 mb-1">🌱 Planting Season</p>
                  <p className="text-sm text-gray-600">It&apos;s the perfect time to plant seeds. Prepare early for the best harvest results.</p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                  <p className="font-medium text-gray-900 mb-1">🌧️ Weather Alert</p>
                  <p className="text-sm text-gray-600">Rain expected in the next 3 days. Prepare protection for your crops.</p>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                  <p className="font-medium text-gray-900 mb-1">💰 Market Price</p>
                  <p className="text-sm text-gray-600">Tomato prices increased by 15% this month. Great time to sell if you have stock.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Market Trends and Regions Section */}
          <div className="grid grid-cols-3 gap-6">
            {/* Market Trends Chart */}
            <div className="col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Market Trends Prices</h2>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>In 2024</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
              <div className="mb-4">
                <p className="text-3xl font-bold text-gray-900">200,342,113</p>
              </div>
              <div style={{ width: '100%', height: 200 }}>
                <ResponsiveContainer>
                  <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                    />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                      formatter={(value) => [value.toLocaleString(), 'Value']}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#10b981"
                      strokeWidth={2}
                      fill="url(#colorGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Current Regions to Work With */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Current regions to work with</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Rwanda</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">594</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">India</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">1,294</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Kenya</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">894</span>
                </div>
              </div>
              <div className="mt-6 relative">
                <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs">🗺️</span>
                    </div>
                    <p className="text-xs text-gray-500">Interactive Map</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Recent Items */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Recent Items</h2>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left bg-gray-50">
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">Item</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">Date Created</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">Quantity</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">Price</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">Location</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-900">{item.item}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{item.date}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{item.quantity}</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">RWF {item.price}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{item.location}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${item.status === 'Active' ? 'bg-green-100 text-green-700' :
                          item.status === 'Sold' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className={`text-sm font-medium ${item.action === 'Edit' ? 'text-blue-600 hover:text-blue-900' : 'text-green-600 hover:text-green-900'
                          }`}>
                          {item.action}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function FarmerDashboard() {
  return (
    <FarmerGuard>
      <Dashboard />
    </FarmerGuard>
  );
}