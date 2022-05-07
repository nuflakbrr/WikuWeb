import React, { useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

import { SEO } from '../components'

export default function Register() {
    // Required State Register
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Setting SEO
    const SEOPage = {
        title: "Daftar - WIKUSAMA",
        description: "WIKUSAMA",
        siteUrl: "https://wikusama.com",
        ogType: "website",
        ogImage: "https://wikusama.com/og.jpg",
        twitter: "@wikusama",
        twImage: "https://wikusama.com/tw.jpg",
    }

    // POST data from form
    const handleSubmit = async (e) => {
        e.preventDefault()

        const api = 'http://103.176.79.55:3000'

        const data = {
            username: username,
            email: email,
            password: password,
        }

        try {
            const res = await axios.post(`${api}/register`, data)
            if (res.data.message === "success") {
                alert(res.data.message)
                window.location.href = "/login"
            } else {
                alert(res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <SEO title={SEOPage.title} description={SEOPage.description} siteUrl={SEOPage.siteUrl} ogType={SEOPage.ogType} ogImage={SEOPage.ogImage} twitter={SEOPage.twitter} twImage={SEOPage.twImage} />
            <section>
                <div className="container bg-[#F9F9F9]">
                    <div className="mx-auto">
                        <div className="flex flex-wrap">
                            {/* Form Component */}
                            <div className="w-full md:w-1/2 p-10 lg:p-20">
                                {/* Greetings */}
                                <div className="mb-16">
                                    <h1 className="font-bold text-[36px] leading-[43.2px]">Sign Up</h1>
                                    <p className="font-medium text-[16px] leading-[19.2px] mt-2">Welcome to wikusama’s family, create your account first.</p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-col">
                                        <label htmlFor="username" className="font-semibold">Username</label>
                                        <input type="text" name="username" id="username" className="mt-2 p-3 border-2 border-[#070708]" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                    <div className="flex flex-col mt-5">
                                        <label htmlFor="emregisterail" className="font-semibold">Email</label>
                                        <input type="email" name="email" id="email" className="mt-2 p-3 border-2 border-[#070708]" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="flex flex-col mt-5">
                                        <label htmlFor="password" className="font-semibold">Password</label>
                                        <input type="password" name="password" id="password" className="mt-2 p-3 border-2 border-[#070708]" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="flex flex-col mt-5">
                                        <button type="submit" className="bg-[#070708] hover:bg-[#1f1f24] text-white font-bold py-3 px-4">Create Account</button>
                                    </div>
                                </form>

                                {/* Sign Up */}
                                <div className="flex items-center justify-center mt-5">
                                    <p className="text-sm text-center">Already have account ?</p>
                                    <NavLink to="/login" className="text-sm text-center font-semibold ml-2">Log In</NavLink>
                                </div>
                            </div>

                            {/* Image Component */}
                            <div className="w-full md:w-1/2">
                                <div className="flex flex-col items-center">
                                    <img src="/Register.png" alt="Register" className="w-[100vw] md:h-screen bg-cover bg-center" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
