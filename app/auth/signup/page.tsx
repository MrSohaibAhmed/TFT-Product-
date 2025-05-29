"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "", username: "" });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const { email, password, username } = user;
    setButtonDisabled(!(email && password && username));
  }, [user]);

  const onSignup = async () => {
    setLoading(true);
    console.log("Trying to register:", user);
    try {
      await registerUser(user);
      alert("Signup successful!");
      router.push("/auth/login");
    } catch (error: any) {
      console.error("Signup failed:", error);
      alert(
        "Signup failed: " + (error.response?.data?.message || error.message)
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
      <Card className="w-full max-w-[400px] bg-white dark:bg-black text-black dark:text-white border border-gray-200 dark:border-gray-500 rounded-lg shadow-lg">
        <CardContent className="space-y-6 p-6">
          <h1 className="text-2xl font-semibold text-center">Signup</h1>
          <div className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Enter your username"
                className="w-full p-2 mt-1 border rounded-md text-black dark:text-white"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Enter your email"
                type="email"
                className="w-full p-2 mt-1 border rounded-md text-black dark:text-white"
              />
            </div>
            <div className="relative">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Enter your password"
                className="mt-1 w-full pr-10  text-black dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[48px] transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <Button
              onClick={onSignup}
              disabled={buttonDisabled}
              className="w-full mt-4 py-2 bg-black text-white rounded-lg dark:bg-white dark:text-black hover:bg-black"
            >
              {loading ? "Signing up..." : "Signup"}
            </Button>
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-blue-500 underline">
                Login
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
