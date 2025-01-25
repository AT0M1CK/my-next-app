"use-client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Eye, EyeOff, Github, Mail } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="flex flex-col shadow-2xl w-96 rounded-lg p-5 bg-white text-center">
        <span>Login / SignUp</span>
        <form action="" className="space-y-4">
          <div className="text-start space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email..."
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              required
            />
          </div>
          <div className="text-start space-y-2 ">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                placeholder="Enter your password..."
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                required
              />
              <button
                type="button"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me </Label>
            </div>
            <a
              href="#"
              className="text-sm text-primary-500 hover:text-primary-600"
            >
              Forgot password?
            </a>
          </div>
          <Button className="w-full" type="submit">
            SUBMIT
          </Button>
        </form>
      </div>
    </>
  );
};

export default HomePage;
