import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <section>
                <div className="container bg-[#F9F9F9]">
                    <div className="mx-auto">
                        <div className="flex flex-wrap">
                            {/* Form Component */}
                            <div className="w-full md:w-1/2 p-10 lg:p-20">
                                {/* Greetings */}
                                <div className="mb-16">
                                    <h1 className="font-bold text-[36px] leading-[43.2px]">Login</h1>
                                    <p className="font-medium text-[16px] leading-[19.2px] mt-2">Nice to see you again wikusama’s 👋</p>
                                </div>

                                {/* Form */}
                                <form>
                                    <div className="flex flex-col">
                                        <label htmlFor="username" className="font-semibold">Username</label>
                                        <input type="text" name="username" id="username" className="mt-2 p-3 border-2 border-[#070708]" placeholder="Enter your username" />
                                    </div>
                                    <div className="flex flex-col mt-5">
                                        <label htmlFor="password" className="font-semibold">Password</label>
                                        <input type="password" name="password" id="password" className="mt-2 p-3 border-2 border-[#070708]" placeholder="Enter your password" />
                                    </div>
                                    <div className="flex items-center justify-between mt-5">
                                        <div className="flex items-center">
                                            <input type="checkbox" name="remember" id="remember" />
                                            <label htmlFor="remember" className="ml-2 text-sm">Remember me</label>
                                        </div>
                                        <div className="flex">
                                            <a href="#" className="text-sm">Forgot password ?</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-5">
                                        <button type="button" className="bg-[#070708] hover:bg-[#1f1f24] text-white font-bold py-3 px-4">Login</button>
                                    </div>
                                    <div className="flex flex-col mt-5">
                                        <button type="button" className="flex items-center justify-center bg-white hover:bg-zinc-200 font-bold py-3 px-4">
                                            <span className="mr-2">
                                                <svg
                                                    role="img"
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z" fill="#4285F4" />
                                                    <path d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z" fill="#34A853" />
                                                    <path d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z" fill="#FBBC05" />
                                                    <path d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z" fill="#EA4335" />
                                                </svg>
                                            </span>
                                            Login with Google
                                        </button>
                                    </div>
                                </form>

                                {/* Sign Up */}
                                <div className="flex items-center justify-center mt-5">
                                    <p className="text-sm text-center">Don’t have an account ?</p>
                                    <NavLink to="/register" className="text-sm text-center font-semibold ml-2">Sign Up for Free</NavLink>
                                </div>
                            </div>

                            {/* Image Component */}
                            <div className="w-full md:w-1/2">
                                <div className="flex flex-col items-center">
                                    <img src="/Login.png" alt="Login" className="w-[100vw] md:h-screen bg-cover bg-center" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
