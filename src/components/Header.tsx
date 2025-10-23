import * as React from "react";
import { Button } from "./ui/button";
import { Menu, Search, User } from "lucide-react";

export default function Header() {
  return (
    <header
      className="font-[Inter] sticky top-0 z-50 w-full bg-white/95 backdrop-blur 
                 supports-[backdrop-filter]:bg-white/75 border-b border-border"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Trippleog</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12 ps-12 ms-12">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Destinations
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Tours
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Hotels
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Flights
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="hidden sm:flex">
              Sign In
            </Button>
            <Button className="hidden sm:flex bg-black text-white">Book Now</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
