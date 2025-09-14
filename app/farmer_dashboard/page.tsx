"use client";

import {
  LayoutGrid, FilePlus, BarChart2, MessageSquare,
  ShoppingCart, User, Phone, Settings, LogOut, CloudSun, Mail, Leaf, Package, CheckCircle
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import Link from 'next/link';

//menu items
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

//chart data
const chartData = Array.from({ length: 12 }).map((_, i) => ({
  name: `${(i + 1) * 5}k`,
  value: Math.round(20 + Math.sin(i / 2) * 5 + Math.random() * 4)
}));

export default function Dashboard() {
  const Logo = () => (
    <span className="font-extrabold text-2xl tracking-tight">
      <span className="text-green-700">Umuhinzi</span><span className="text-black">Link</span>
    </span>
  );

  const orders = [
    { id: '#ORD001', crop: 'Amaru (Beans)', buyer: 'Kimisagara Market', amount: '50kg', status: 'Delivered' },
    { id: '#ORD002', crop: 'Ibirayi (Potatoes)', buyer: 'Fresh Foods Ltd', amount: '100kg', status: 'Pending' },
    { id: '#ORD003', crop: 'Inyanya (Tomatoes)', buyer: 'Hotel des Mille Collines', amount: '25kg', status: 'Processing' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <header className="sticky top-0 z-30 bg-white border-b h-16 flex items-center px-8 shadow-sm">
        <Logo />
      </header>
      <div className="flex flex-1 min-h-0">

        {/* Sidebar */}
        <aside className="w-64 bg-[#00A63E] border-r flex flex-col fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item, index) => {
              const isActive = item.label === 'Dashboard';
              const Icon = item.icon;
              const showDivider = index === 4 || index === 8;
              return (
                <div key={item.label}>
                  <Link href={item.href} className="block">
                    <div
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all text-sm font-medium
                        ${isActive
                          ? "bg-white text-green-600 shadow-sm rounded-lg"
                          : "text-white"
                        }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? "text-green-600" : "text-white"}`} />
                      <span>{item.label}</span>
                    </div>
                  </Link>
                  {showDivider && <div className="border-t border-gray-200 my-2 mx-4"></div>}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto ml-64">

          {/* Welcome Banner */}
          <div className="bg-green-500 text-white mb-8 rounded-xl p-6 shadow-sm">
            <h1 className="text-xl font-semibold mb-1">Welcome back, Farmer Chance!</h1>
            <p className="text-sm opacity-90">Manage your agricultural inputs and connect with farmers across Rwanda</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Produce Listed', value: 12, icon: Leaf, bgColor: 'bg-green-50', iconColor: 'text-green-600', textColor: 'text-green-600' },
              { label: 'Active Orders', value: 5, icon: Package, bgColor: 'bg-blue-50', iconColor: 'text-blue-600', textColor: 'text-blue-600' },
              { label: 'Credit Requests', value: 3, icon: FilePlus, bgColor: 'bg-orange-50', iconColor: 'text-orange-600', textColor: 'text-orange-600' },
              { label: 'New Messages', value: 8, icon: Mail, bgColor: 'bg-purple-50', iconColor: 'text-purple-600', textColor: 'text-purple-600' }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-2xl font-bold ${stat.textColor} mb-1`}>{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                    <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${stat.iconColor}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Weather & Tips */}
          <div className="grid grid-cols-3 gap-6">
            {/* Weather Card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-md">
              <h3 className="text-lg font-medium mb-6">Today's Weather</h3>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-5xl font-bold">24°C</p>
                  <p className="text-sm opacity-90">Partly Cloudy</p>
                  <p className="text-sm opacity-80">Kigali, Rwanda</p>
                </div>
                <div className="flex flex-col items-center">
                  <CloudSun className="w-12 h-12 mb-2 opacity-90" />
                  <p className="text-sm">Rain: 20%</p>
                </div>
              </div>
              <div className="border-t border-white/30 pt-4 grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-sm opacity-80">Tomorrow</p>
                  <p className="text-lg font-semibold">26°C</p>
                </div>
                <div>
                  <p className="text-sm opacity-80">Thursday</p>
                  <p className="text-lg font-semibold">23°C</p>
                </div>
                <div>
                  <p className="text-sm opacity-80">Friday</p>
                  <p className="text-lg font-semibold">25°C</p>
                </div>
              </div>
            </div>

            {/* AI Farming Tips */}
            <div className="bg-white rounded-xl p-6 shadow-sm col-span-2">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">AI Farming Tips</h3>
              <div className="space-y-3">
                <div className="bg-green-50 border-l-5 border-green-200 p-4 rounded-lg">
                  <p className="font-medium text-[#1F2937]">Umunamuro w'umweru</p>
                  <p className="text-sm text-[#4B5563]">Ni igihe cyo gutera imbuto. Korera imbere imbere y'igihe kugira ngo uzane umusaruro mwiza.</p>
                </div>
                <div className="bg-[#f8f8f8] border-l-5 border-[#60A5FA] p-4 rounded-lg">
                  <p className="font-medium text-[#1F2937]">Weather Alert</p>
                  <p className="text-sm text-[#4B5563]">Imvura irashobora kugwa mu minsi 3 iri imbere. Tegura uburyo bwo gukingira imbuto zawe.</p>
                </div>
                <div className="bg-yellow-50 border-l-5 border-yellow-200 p-4 rounded-lg">
                  <p className="font-medium text-[#1F2937]">Market Price</p>
                  <p className="text-sm text-[#4B5563]">Igiciro cy'inyanya cyiyongereye 15% mu kwezi gushize. Niba ushaka kugurisha, uyu ni umwanya mwiza.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Market Price Trends */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Market Price Trends</h2>
            <div style={{ width: '100%', height: 250 }}>
              <ResponsiveContainer>
                <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 100]}
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#10b981',
                      border: 'none',
                      borderRadius: '6px',
                      color: '#fff',
                      padding: '6px 10px'
                    }}
                    formatter={(value) => [value.toLocaleString(), '']}
                  />
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={{ r: 4, fill: '#10b981' }}
                    activeDot={{ r: 5, fill: '#10b981' }}
                    fill="url(#colorValue)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left bg-gray-50">
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">Order ID</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">Crop</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">Buyer</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {orders.map((o) => (
                    <tr key={o.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{o.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{o.crop}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{o.buyer}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{o.amount}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${o.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                          o.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                          {o.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {o.status === 'Pending' ? (
                          <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">Update</button>
                        ) : (
                          <button className="text-green-600 hover:text-green-900 text-sm font-medium">View</button>
                        )}
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
