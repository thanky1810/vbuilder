import { X, MessageCircle, Sun, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "./image/Logo.png";
import h1 from "./image/h1.jpg";
export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Header */}
      <header
        className="flex items-center justify-between p-6 relative z-10"
        style={{
          borderBottom: "1px solid black",
        }}
      >
        <div className="flex items-center">
          <Image
            src={logo}
            alt="hello"
            style={{
              width: 35,
              height: 35,
              marginRight: 2,
            }}
          />
          <span className="text-lg font-mono text-gray-800 font-bold">
            V.Builder
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-[#C29860]"
          >
            <Facebook className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-[#C29860]"
          >
            <Instagram className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-gray-800"
          >
            <X className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-gray-800"
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-gray-800"
          >
            <Sun className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-12 relative z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="max-w-2xl flex-1">
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8 font-mono">
              <span
                className="text-[#C29860]"
                style={{
                  fontSize: 80,
                }}
              >
                V.Builder
              </span>
            </h1>

            {/* Description */}
            <div className="border-l-4 border-[#C29860] pl-6 mb-12">
              <p
                className="text-lg text-gray-600 leading-relaxed"
                style={{
                  fontSize: 30,
                }}
              >
                The space for builders – sparking creativity, fostering
                connection, driving projects further.
              </p>
            </div>

            {/* Feature Pills */}
          </div>

          <div className="hidden lg:block flex-1 ml-12">
            <div className="relative">
              <Image src={h1} alt="hub" className="rounded-2xl shadow-2xl" />
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#C29860]/20 to-[#293352]/20 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full overflow-hidden pointer-events-none">
        {/* Main Wave */}
        <div className="absolute top-1/4 -right-32 w-[800px] h-[600px] opacity-80">
          <div className="w-full h-full bg-gradient-to-br from-[#C29860]/20 via-[#C29860]/10 to-transparent rounded-full blur-3xl transform rotate-12"></div>
        </div>

        {/* Secondary Wave */}
        <div className="absolute top-1/3 -right-20 w-[600px] h-[400px] opacity-60">
          <div className="w-full h-full bg-gradient-to-bl from-[#293352]/15 via-[#293352]/8 to-transparent rounded-full blur-2xl transform -rotate-6"></div>
        </div>

        {/* Accent Elements */}
        <div className="absolute top-1/2 right-20 w-32 h-32 bg-[#C29860]/10 rounded-full blur-xl"></div>
        <div className="absolute top-3/4 right-40 w-20 h-20 bg-[#293352]/15 rounded-full blur-lg"></div>

        {/* Floating Particles */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#C29860] rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#293352] rounded-full opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 right-1/5 w-3 h-3 bg-[#C29860]/50 rounded-full opacity-30 animate-pulse delay-500"></div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#C29860] via-[#293352] to-transparent"></div>
    </div>
  );
}
