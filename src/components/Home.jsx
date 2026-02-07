import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { ArrowRight, Star, TrendingUp, ShieldCheck, Truck, Clock } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const categories = [
    { name: "Electronics", image: "https://images.unsplash.com/photo-1498049860654-af1a5c5668ba?auto=format&fit=crop&q=80&w=300&h=300", link: "/products" },
    { name: "Jewelery", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=300&h=300", link: "/products" },
    { name: "Men's Clothing", image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&q=80&w=300&h=300", link: "/products" },
    { name: "Women's Clothing", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=300&h=300", link: "/products" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200')" }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Discover Your Style with <span className="text-amber-400">ShopHub</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
            Explore the latest trends in fashion, electronics, and accessories. Premium quality products at unbeatable prices.
          </p>
          <div className="flex gap-4">
            <Link
              to="/products"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-amber-400 hover:text-white transition shadow-lg transform hover:-translate-y-1"
            >
              Shop Now
            </Link>
            {!user && (
              <Link
                to="/register"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition"
              >
                Join Us
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Truck className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
            <p className="text-gray-600">On all orders over $50</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <ShieldCheck className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
            <p className="text-gray-600">100% secure payment gateways</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-amber-100 p-4 rounded-full mb-4">
              <Clock className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Dedicated support team</p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Categories</h2>
          <p className="text-gray-600 mt-2">Browse our most popular collections</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
             <Link key={idx} to={cat.link} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-bold group-hover:text-amber-400 transition">{cat.name}</h3>
                </div>
             </Link>
          ))}
        </div>
      </section>

      {/* Trending Products Preview (Static for Aesthetics) */}
       <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex justify-between items-end mb-10">
             <div>
                <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                  <TrendingUp className="text-red-500" /> Trending Now
                </h2>
                <p className="text-gray-600 mt-2">Top picks this week</p>
             </div>
             <Link to="/products" className="text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
               View All <ArrowRight size={18} />
             </Link>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* Mock Trending Items for Home Visuals */}
             {[1, 2, 3, 4].map((item) => (
               <div key={item} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition p-4 animate-fade-in-up">
                 <div className="h-48 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
                 <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                 <div className="h-4 bg-gray-200 rounded w-1/2"></div>
               </div>
             ))}
           </div>
           <p className="text-center text-gray-500 mt-8 italic">Loading latest styles...</p>
        </div>
      </section>

      {/* Footer Callout */}
      <section className="bg-gray-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
        <div className="max-w-md mx-auto flex gap-2 px-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <button className="bg-amber-400 text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-amber-500 transition">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
