'use client'
import { Form,FormItem,FormLabel } from "../ui/form"; 
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const form = useForm();

  return (
    <Form {...form}>
      <form className="space-y-5" >
        <FormItem>
          <FormLabel className="text-gray-700 font-medium">Email</FormLabel>
          <Input placeholder="Enter your email" className="w-full p-2 border rounded-lg" />
        </FormItem>
        <FormItem>
          <FormLabel className="text-gray-700 font-medium">Password</FormLabel>
          <Input placeholder="Enter your password" type="password" className="w-full p-2 border rounded-lg" />
        </FormItem>
    
        <Button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">Login</Button>
        
        <div className="flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex flex-col gap-3">
          <Button variant="outline" className="border p-2 rounded-lg hover:bg-gray-100">
            <FcGoogle className="text-xl" /> Login with Google
          </Button>
          <Button variant="outline" className=" border p-2 rounded-lg hover:bg-gray-100">
            <FaGithub className="text-xl" /> Login with GitHub
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Login;
