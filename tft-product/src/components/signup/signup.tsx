'use client';
import { Form, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const SignUp = () => {
  const form = useForm();

  return (
    <Form {...form}>
      <form className="space-y-5">
        <FormItem>
          <FormLabel className="text-gray-700 font-medium">Name</FormLabel>
          <Input
            placeholder="Enter your Name"
            className="w-full p-2 border rounded-lg"
          />
        </FormItem>
        <FormItem>
          <FormLabel className="text-gray-700 font-medium">Email</FormLabel>
          <Input
            placeholder="Enter your Email"
            type="password"
            className="w-full p-2 border rounded-lg"
          />
        </FormItem>
        <Select >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="manager">Manager</SelectItem>
            <SelectItem value="employee">Employee</SelectItem>
          </SelectContent>
        </Select>

        <Button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
          Sign up
        </Button>

        <div className="flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex flex-col gap-3">
          <Button
            variant="outline"
            className="border p-2 rounded-lg hover:bg-gray-100"
          >
            <FcGoogle className="text-xl" /> Sign up with Google
          </Button>
          <Button
            variant="outline"
            className=" border p-2 rounded-lg hover:bg-gray-100"
          >
            <FaGithub className="text-xl" /> Sign up with GitHub
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignUp;
