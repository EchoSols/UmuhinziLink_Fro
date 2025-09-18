"use client";
import React from 'react';
import { 
  CheckCircle, LayoutGrid, FilePlus, MessageSquare, BarChart2, ShoppingCart, 
  User, Phone, Settings, LogOut, Mail, Search, ChevronDown, Filter
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-sm">F</span>
    </div>
    <span className="font-extrabold text-xl tracking-tight">
      <span className="text-green-700">Farm</span><span className="text-black">Link</span>
    </span>
  </div>
);

const menuItems = [
  { label: 'Dashboard', href: '/supplier_dashboard', icon: CheckCircle },
  { label: 'My Inputs', href: '/supplier_dashboard/products', icon: LayoutGrid },
  { label: 'Farmer Request', href: '/supplier_dashboard/requests', icon: FilePlus },
  { label: 'Orders', href: '/supplier_dashboard/orders',icon: ShoppingCart },
  { label: 'Message', href: '/messages', icon: Mail },
  { label: 'Profile', href: '/profile', icon: User },
  { label: 'Contact', href: '/contact', icon: Phone },
  { label: 'Settings', href: '/settings', icon: Settings },
  { label: 'Logout', href: '/logout', icon: LogOut },
];



export default function OrdersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white border-b h-16 flex items-center justify-between px-8 shadow-sm">
        <Logo />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-5 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
              <div className="w-3 h-2 bg-yellow-400 rounded-sm"></div>
            </div>
            <span>English</span>
          </div>
          <button className="bg-orange-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors cursor-pointer">
            Export
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-900">Agri Sup</p>
            </div>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <aside className="w-64 bg-green-600 flex flex-col fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex-1 px-4 py-6 space-y-1">
            {menuItems.map((item, index) => {
              const isActive = item.label === 'Orders';
              const Icon = item.icon;
              const showDivider = index === 3 || index === 7; 
              return (
                <div key={item.label}>
                  <Link href={item.href} className="block">
                    <div
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all text-sm font-medium
                        ${isActive
                          ? "bg-white text-green-600 shadow-sm"
                          : "text-white hover:bg-green-700"
                        }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-green-600" : "text-white"}`} />
                      <span>{item.label}</span>
                    </div>
                  </Link>
                  {showDivider && <div className="border-t border-green-500 my-2 mx-3"></div>}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto ml-64">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold text-gray-900">Order</h1>
          </div>


          {/* Search and Filters */}
          <div className="flex justify-between items-center mb-4 gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-white border border-gray-300 text-gray-600 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div className="flex gap-2">
              <button className="bg-white border border-gray-300 text-gray-700 rounded-md py-2 px-3 text-sm hover:bg-gray-50 transition-colors cursor-pointer">
                Status
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 rounded-md py-2 px-3 text-sm hover:bg-gray-50 transition-colors cursor-pointer">
                All products
              </button>
              <button className="bg-green-600 text-white rounded-md py-2 px-3 text-sm hover:bg-green-700 transition-colors cursor-pointer">
                Filter
              </button>
            </div>
          </div>

          {/* Order */}
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">ID</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">CUSTOMER</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">ADDRESS</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">DATE</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Products</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Amount</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">STATUS</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">#001</td>
                    <td className="py-4 px-4 text-gray-900">John Doe</td>
                    <td className="py-4 px-4 text-gray-900">123 Main St, Kigali</td>
                    <td className="py-4 px-4 text-gray-900">Jan 15, 2024</td>
                    <td className="py-4 px-4 text-gray-900">NPK Fertilizer (50kg)</td>
                    <td className="py-4 px-4 text-gray-900">$125.00</td>
                    <td className="py-4 px-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Delivered</span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                        <span className="text-lg">⋯</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">#002</td>
                    <td className="py-4 px-4 text-gray-900">Jane Smith</td>
                    <td className="py-4 px-4 text-gray-900">456 Oak Ave, Kigali</td>
                    <td className="py-4 px-4 text-gray-900">Jan 14, 2024</td>
                    <td className="py-4 px-4 text-gray-900">Corn Seeds (25kg)</td>
                    <td className="py-4 px-4 text-gray-900">$87.50</td>
                    <td className="py-4 px-4">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">Pending</span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                        <span className="text-lg">⋯</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">#003</td>
                    <td className="py-4 px-4 text-gray-900">Michael Brown</td>
                    <td className="py-4 px-4 text-gray-900">789 Pine Rd, Kigali</td>
                    <td className="py-4 px-4 text-gray-900">Jan 13, 2024</td>
                    <td className="py-4 px-4 text-gray-900">Organic Pesticide (10L)</td>
                    <td className="py-4 px-4 text-gray-900">$65.00</td>
                    <td className="py-4 px-4">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">Processing</span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                        <span className="text-lg">⋯</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">#004</td>
                    <td className="py-4 px-4 text-gray-900">Sarah Wilson</td>
                    <td className="py-4 px-4 text-gray-900">321 Elm St, Kigali</td>
                    <td className="py-4 px-4 text-gray-900">Jan 12, 2024</td>
                    <td className="py-4 px-4 text-gray-900">Wheat Seeds (75kg)</td>
                    <td className="py-4 px-4 text-gray-900">$195.00</td>
                    <td className="py-4 px-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Delivered</span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                        <span className="text-lg">⋯</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">#005</td>
                    <td className="py-4 px-4 text-gray-900">David Johnson</td>
                    <td className="py-4 px-4 text-gray-900">654 Maple Dr, Kigali</td>
                    <td className="py-4 px-4 text-gray-900">Jan 11, 2024</td>
                    <td className="py-4 px-4 text-gray-900">Tomato Seeds (5kg)</td>
                    <td className="py-4 px-4 text-gray-900">$42.50</td>
                    <td className="py-4 px-4">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">Pending</span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                        <span className="text-lg">⋯</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">#006</td>
                    <td className="py-4 px-4 text-gray-900">Emily Davis</td>
                    <td className="py-4 px-4 text-gray-900">987 Cedar Ln, Kigali</td>
                    <td className="py-4 px-4 text-gray-900">Jan 10, 2024</td>
                    <td className="py-4 px-4 text-gray-900">Organic Fertilizer (100kg)</td>
                    <td className="py-4 px-4 text-gray-900">$280.00</td>
                    <td className="py-4 px-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Delivered</span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                        <span className="text-lg">⋯</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">#007</td>
                    <td className="py-4 px-4 text-gray-900">Robert Taylor</td>
                    <td className="py-4 px-4 text-gray-900">147 Birch St, Kigali</td>
                    <td className="py-4 px-4 text-gray-900">Jan 09, 2024</td>
                    <td className="py-4 px-4 text-gray-900">Rice Seeds (30kg)</td>
                    <td className="py-4 px-4 text-gray-900">$96.00</td>
                    <td className="py-4 px-4">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">Processing</span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                        <span className="text-lg">⋯</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">#008</td>
                    <td className="py-4 px-4 text-gray-900">Lisa Anderson</td>
                    <td className="py-4 px-4 text-gray-900">258 Spruce Ave, Kigali</td>
                    <td className="py-4 px-4 text-gray-900">Jan 08, 2024</td>
                    <td className="py-4 px-4 text-gray-900">Fungicide (15L)</td>
                    <td className="py-4 px-4 text-gray-900">$78.00</td>
                    <td className="py-4 px-4">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">Pending</span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                        <span className="text-lg">⋯</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-between cursor-pointer items-center mt-6">
            <p className="text-sm text-gray-600">Showing 1 to 10 of 249 results</p>
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
                &lt;
              </button>
              <button className="bg-green-600 text-white px-3 py-2 cursor-pointer rounded-md text-sm font-medium">1</button>
              <button className="px-3 py-2 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors text-sm">2</button>
              <button className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors  cursor-pointer text-sm">3</button>
              <button className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
                &gt;
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}