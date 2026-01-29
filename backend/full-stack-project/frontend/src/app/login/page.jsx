'use client'

import { axiosAPIinstance, notify } from "@/utils/helper";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AuthPage = () => {
    const router = useRouter()
    const [isLogin, setIsLogin] = useState(true);
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);


    function submitHandler(e) {
        e.preventDefault()
        const payload = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        axiosAPIinstance.post("user/login", payload).then((response) => {
            notify(response.data.message, response.data.success);
            if (response.data.success) {
                router.push("/")
            }
        }).catch((error) => {
            notify(error?.response?.data?.message, false)
        })

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white w-[90%] max-w-6xl rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">

                {/* LEFT SECTION */}
                <div className="hidden md:flex items-center justify-center bg-gray-50">
                    <img
                        src="log.png"
                        alt="auth illustration"
                        className="w-[80%]"
                    />
                </div>

                {/* RIGHT SECTION */}
                <div className="p-10">
                    <h2 className="text-2xl font-semibold text-center text-teal-600">
                        {isLogin ? "Login" : "Register"}
                    </h2>
                    <p className="text-center text-gray-400 text-sm mb-8">
                        JOIN TO US
                    </p>

                    {/* FORM */}
                    <form onSubmit={submitHandler} className="space-y-4">
                        {!isLogin && (
                            <div>
                                <label className="text-sm text-gray-600">Your name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Deo"
                                    className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                />
                            </div>
                        )}

                        <div>
                            <label className="text-sm text-gray-600">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@gmail.com"
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                            />
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <label className="text-sm text-gray-600">Password</label>
                            <div className="relative">
                                <input
                                    type={showPass ? "text" : "password"}
                                    placeholder="••••••"
                                    name="password"
                                    className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                />
                                <span
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute right-3 top-3 cursor-pointer text-gray-500"
                                >
                                    {showPass ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>

                        {/* CONFIRM PASSWORD (ONLY REGISTER) */}
                        {!isLogin && (
                            <div>
                                <label className="text-sm text-gray-600">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPass ? "text" : "password"}
                                        placeholder="••••••"
                                        className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                    />
                                    <span
                                        onClick={() =>
                                            setShowConfirmPass(!showConfirmPass)
                                        }
                                        className="absolute right-3 top-3 cursor-pointer text-gray-500"
                                    >
                                        {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* BUTTON */}
                        <button
                            type="submit"
                            className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md transition"
                        >
                            {isLogin ? "LOGIN" : "REGISTER"}
                        </button>
                    </form>

                    {/* TOGGLE */}
                    <p className="text-center text-sm text-gray-500 mt-6">
                        {isLogin ? "New user?" : "Already user?"}{" "}
                        <span
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-teal-600 cursor-pointer font-medium"
                        >
                            {isLogin ? "Register" : "Login"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
