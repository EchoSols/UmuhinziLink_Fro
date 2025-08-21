import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Users,
  TrendingUp,
  CreditCard,
  Package,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Brain,
  ShoppingCart,
  WifiOff,
  Globe,
  Archive,
  Sprout,
  Smartphone,
  Building2,
  Heart,
  MessageSquare,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Connect Farmers to <span className="text-green-600">Digital Markets</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Empowering smallholder farmers in Rwanda with Technology to access markets, get AI-powered farming
                  advice and secure agricultural loans
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/login">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    Get Started
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  View Demo
                </Button>
              </div>

              <div className="flex flex-wrap gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-muted-foreground">Registered Farmers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-muted-foreground">Input Suppliers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-muted-foreground">Transactions Completed</div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/african-woman-farmer.png"
                  alt="Smiling farmer with fresh produce"
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-white/20"
                />
                {/* Decorative elements for better visual appeal */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-300 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative pb-8 pr-8">
              <div className="relative">
                <img 
                  src="/african-farmer-woman.png" 
                  alt="Farmer working in field" 
                  className="w-full h-96 lg:h-[28rem] rounded-full object-cover shadow-xl border-4 border-white/20" 
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32">
                  <img 
                    src="/market.jpg" 
                    alt="Fresh produce basket" 
                    className="w-full h-full rounded-full object-cover shadow-lg border-4 border-white" 
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                About UmuhinziLink
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Bridging the Gap Between Farmers and Markets
              </h2>

              <p className="text-muted-foreground">
                UmuhinziLink is Rwanda's first comprehensive digital agriculture platform, designed specifically for
                smallholder farmers. We combine cutting-edge technology with deep understanding of local farming
                practices to create sustainable solutions.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Market Access</h3>
                    <p className="text-sm text-muted-foreground">Direct connection to buyers and pricing information</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">AI-Powered Advice</h3>
                    <p className="text-sm text-muted-foreground">Smart farming recommendations based on local data</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Financial Inclusion</h3>
                    <p className="text-sm text-muted-foreground">Access to agricultural loans and input financing</p>
                  </div>
                </div>
              </div>

              <Button className="bg-green-600 hover:bg-green-700 text-white">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Who We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three interconnected communities driving agricultural growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Farmers</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Mobile OTP & Kinyarwanda support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>AI-powered agronomy tips</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Credit access for inputs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Market price trends</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Suppliers</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>List agri-inputs & inventory</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Farmer demand matching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Credit request management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Sales tracking & analytics</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Buyers</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span>Browse fresh produce</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span>Filter by region & price</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span>Direct farmer contact</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span>Secure payment processing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Platform Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive tools for modern agriculture</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                  <Brain className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">AI-Powered Advisory</h3>
                <p className="text-muted-foreground">
                  Get personalized farming advice, tips via chatbot and SMS based on your crops and local conditions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Crop-specific recommendations</li>
                  <li>• Weather-based recommendations</li>
                  <li>• Pest prediction analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Market Access</h3>
                <p className="text-muted-foreground">
                  Connect directly with buyers and access real-time market information and pricing trends.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time price updates</li>
                  <li>• Price trend analysis</li>
                  <li>• Demand forecasting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Input Credit</h3>
                <p className="text-muted-foreground">
                  Access credit for agricultural inputs via microfinance institutions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Quick credit approval</li>
                  <li>• 100% partnerships</li>
                  <li>• Flexible payment terms</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                  <WifiOff className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Offline Support</h3>
                <p className="text-muted-foreground">
                  Stay connected even in low-connectivity areas with SMS-based features and notifications.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• SMS login & tips</li>
                  <li>• Offline notifications</li>
                  <li>• USSD functionality</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Kinyarwanda Support</h3>
                <p className="text-muted-foreground">
                  Full platform support in Kinyarwanda for UI, chatbot interactions, and SMS communications.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Native language UI</li>
                  <li>• Kinyarwanda chatbot</li>
                  <li>• Local SMS support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
                  <Archive className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Inventory Management</h3>
                <p className="text-muted-foreground">
                  Manage your produce listings and input inventory with real-time updates and tracking.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time inventory</li>
                  <li>• Automated updates</li>
                  <li>• Stock alerting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">How UmuhinziLink Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Simple steps to transform your farming business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground">Register</h3>
              <p className="text-muted-foreground">
                Sign up via mobile OTP or email. Quick and secure registration process.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground">List & Request</h3>
              <p className="text-muted-foreground">List your produce or request agri-inputs on our platform.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground">Connect</h3>
              <p className="text-muted-foreground">
                Get matched with buyers, suppliers, and receive AI-powered farming advice.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto text-white text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-foreground">Grow</h3>
              <p className="text-muted-foreground">
                Manage transactions, track growth, and scale your farming operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboards Section */}
      <section id="agribusiness" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Intuitive Dashboards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Tailored interfaces for each user type</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <CardContent className="space-y-6">
                <h3 className="text-xl font-bold text-foreground">Farmer Dashboard</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-muted-foreground">Dashboard</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-muted-foreground">My Produce</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-muted-foreground">Input Credit</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-muted-foreground">AI Tips</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-muted-foreground">Market Insights</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="space-y-6">
                <h3 className="text-xl font-bold text-foreground">Supplier Dashboard</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-muted-foreground">Dashboard</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-muted-foreground">My Inputs</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-muted-foreground">Farmer Requests</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-muted-foreground">Orders</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-muted-foreground">Messages</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
              <CardContent className="space-y-6">
                <h3 className="text-xl font-bold text-foreground">Buyer Dashboard</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-muted-foreground">Dashboard</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-muted-foreground">Browse Produce</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-muted-foreground">Saved Items</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-muted-foreground">Orders</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-muted-foreground">Messages</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Impact & Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real farmers, real results from our Nyagatare pilot
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <img src="/african-woman-farmer.png" alt="Marie Uwimana" className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-semibold text-foreground">Marie Uwimana</h4>
                    <p className="text-sm text-muted-foreground">Maize Farmer, Nyagatare</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "UmuhinziLink helped me sell my maize directly to buyers at better prices. The SMS tips improved my
                  harvest by 30%."
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <img src="/african-woman-farmer.png" alt="Jean Baptiste" className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-semibold text-foreground">Jean Baptiste</h4>
                    <p className="text-sm text-muted-foreground">Bean Farmer, Nyagatare</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Getting credit for seeds through the platform was game-changing. Now I can plan my seasons better."
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <img src="/african-woman-farmer.png" alt="Agnes Mukamana" className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-semibold text-foreground">Agnes Mukamana</h4>
                    <p className="text-sm text-muted-foreground">Vegetable Farmer, Nyagatare</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "The AI chatbot in Kinyarwanda answers all my farming questions. It's like having an expert in my
                  pocket."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="lenders" className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Farming?</h2>
            <p className="text-xl text-green-100">
              Join thousands of farmers already using UmuhinziLink to grow their business
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Get Started - Farmers
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                <Building2 className="mr-2 h-4 w-4" />
                Join as Business
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                SMS: +123-456
              </Button>
            </div>

            <p className="text-sm text-green-200">No card needed. No upfront fees. Access to sales in Kinyarwanda</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="/favicon.png" alt="UmuhinziLink Logo" className="h-6 w-6" />
                <span className="text-xl font-bold text-green-400">UmuhinziLink</span>
              </div>
              <p className="text-slate-300 text-sm">
                Empowering Rwandan farmers through digital agriculture and AI-powered solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">About</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div>Our Mission</div>
                <div>Team</div>
                <div>Partners</div>
                <div>Careers</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Support</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div>Help Center</div>
                <div>Contact Us</div>
                <div>SMS Support</div>
                <div>Training</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Contact Info</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+250 788 123 456</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>support@umuhinzilink.rw</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Kigali, Rwanda</span>
                </div>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="bg-green-600 text-white">
                    English
                  </Badge>
                  <Badge variant="secondary" className="bg-green-600 text-white">
                    Kinyarwanda
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm text-slate-400">
            <p className="flex items-center justify-center gap-2">
              © 2025 UmuhinziLink. All rights reserved. Built for Rwandan farmers with 
              <Heart className="h-4 w-4 text-red-500" />
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
