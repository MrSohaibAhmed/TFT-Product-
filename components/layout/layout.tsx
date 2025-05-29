"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
import { cn } from "@/lib/utils";
import { Toaster } from "../ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const isLogin = pathname === "/auth/login";
  const signup = pathname === "/auth/signup";

  const [isMounted, setIsMounted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => setIsSidebarOpen(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMounted) return null;

  if (isLogin || signup) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <main
          className={cn(
            "flex-1 overflow-y-auto p-4 sm:p-6 transition-all duration-300 ease-in-out",
            isSidebarOpen ? "md:ml-64" : "md:ml-0"
          )}
        >
          {children}
          <Toaster/>
        </main>
      </div>
    </div>
  );
}
