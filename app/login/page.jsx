'use client'
import { login } from "@/services/serviceHelper";
import React from "react";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter ();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  // const handleLogin = async () => {
  //   console.log("deneme");
  //   try {
  //     const userData = await login(email, password);
  //     router.push("/dashboard");
  //   } catch (error) {
  //     setError(error); // Hata durumunda hata mesajını göster
  //   }
  //   setEmail("");
  //   setPassword("");
  // };

  const formik=useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    onSubmit:async(values)=>{
      console.log(values)
      try {
        const userData = await login(values.email,values.password);
        router.push("/dashboard");
        console.log(userData)
      } catch (error) {
        setError(error); // Hata durumunda hata mesajını göster
      }
    }
  })
  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-2xl font-semibold">Login</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <form onSubmit={formik.handleSubmit} class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                  <input
                    autocomplete="off"
                    id="email"
                    name="email"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                    value={formik.email}
                    onChange={(e) =>formik.setFieldValue('email',e.target.value)}
                  />
                  <label
                    htmlFor="email"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div class="relative">
                  <input
                    autocomplete="off"
                    id="password"
                    name="password"
                    type="password"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                    value={formik.password}
                    onChange={(e) => formik.setFieldValue('password',e.target.value)}
                  />
                  <label
                    htmlFor="password"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div class="relative flex justify-center">
                  <button
                  type="submit"
                    // onClick={handleLogin}
                    class="bg-cyan-500 text-white rounded-md px-2 py-1"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
