"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { loginUser } from "@/services";

export default function LoginPage() {
  const router = useRouter();
  const [email, setIdentifier] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await loginUser({ email, password });
      localStorage.setItem("token", res.data.token); // Assuming the token is returned in the response

      // Yahan aap token localStorage ya cookies mein save kar sakte hain agar response mein milta ho
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = !email.trim() || !password.trim() || loading;

  return (
    <div className="flex items-center fixed inset-0 w-full justify-center bg-white dark:bg-black">
      <Card className="w-full max-w-md bg-white dark:bg-black text-black dark:text-white border border-gray-200 dark:border-gray-500 rounded-lg shadow-lg">
        <CardContent className="space-y-6 p-6">
          <h1 className="text-2xl font-semibold text-center">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label
                htmlFor="identifier"
                className="text-black dark:text-white"
              >
                Username or Email
              </Label>
              <Input
                id="email"
                type="text"
                placeholder="Enter your username or email"
                value={email}
                onChange={(e) => setIdentifier(e.target.value)}
                className="mt-1 w-full bg-white dark:bg-transparent text-black dark:text-white rounded "
              />
            </div>
            <div className="relative">
              <Label htmlFor="password" className="text-black dark:text-white">
                Password
              </Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full pr-10 bg-white dark:bg-transparent text-black dark:text-white rounded"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Logging in..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
