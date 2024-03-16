"use client";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import CreateUserApi from "../../../../api/CreateUserApi";
import LoginUserApi from "../../../../api/LoginUserApi";

const AuthComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isLogin === false) {
      const data = await CreateUserApi({ password, username, email });
      if (data.success === true) {
        toast.success(data.message);
        setEmail("");
        setPassword("");
        setUsername("");
        setIsLogin(true);
      } else {
        toast.error(data.message);
      }
    } else {
      const data = await LoginUserApi({ email, password });
      if (data.success === true) {
        toast.success(data.message);
        const { accessToken } = data.data;
        localStorage.setItem("token", accessToken);
        router.push("/", { scroll: false });
      } else {
        toast.error(data.message);
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-200 p-8 rounded-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? "Sign in to your account" : "Create a new account"}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            {isLogin === false && (
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="email"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            )}
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${
                  isLogin === true ? "rounded-t-md" : ""
                } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#184E77] hover:bg-[#1e394e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#184E77]"
            >
              {isLogin ? "Sign in" : "Sign up"}
            </button>
          </div>
        </form>
        {isLogin && (
          <div
            onClick={() => {
              setEmail("");
              setPassword("");
              setUsername("");
              setIsLogin(false);
            }}
            className="flex justify-center hover:underline cursor-pointer"
          >
            <p>Dont have an account? Register Now</p>
          </div>
        )}
        {!isLogin && (
          <div
            onClick={() => {
              setEmail("");
              setPassword("");
              setUsername("");
              setIsLogin(true);
            }}
            className="flex justify-center hover:underline cursor-pointer"
          >
            Already have an account ! Login now
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthComponent;
