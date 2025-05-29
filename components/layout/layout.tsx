"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
import { cn } from "@/lib/utils";
import { Toaster } from "../ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isLogin = pathname === "/auth/login";
  const isSignup = pathname === "/auth/signup";

  const [isMounted, setIsMounted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // auto-open sidebar on desktop
    const handleResize = () => setIsSidebarOpen(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    // check token once mounted
    const token = localStorage.getItem("token");
    if (!token && !isLogin && !isSignup) {
      router.replace("/auth/login");
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [isLogin, isSignup, router]);

  // don't render until after the first mount (avoids hydration errors)
  if (!isMounted) return null;

  // allow login/signup pages through without navbar/sidebar
  if (isLogin || isSignup) {
    return <>{children}</>;
  }

  return (
    localStorage.getItem("token") && (
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
            <Toaster />
          </main>
        </div>
      </div>
    )
  );
}
