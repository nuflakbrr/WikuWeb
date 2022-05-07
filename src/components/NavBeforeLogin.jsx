import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import "../index.css";
import { Link } from "react-router-dom";

const navigation = [
    { name: "Home", href: "/", active: false },
    { name: "About", href: "/about", active: false },
    { name: "Login", href: "/login", active: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function NavBeforeLogin(props) {
    return (
        <Disclosure as="nav" className="bg-[#080809]">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                                <div className="flex-shrink-0 flex items-center text-slate-50 font-lato font-medium text-2xl">
                                    <h1 className="block lg:hidden h-8 w-auto">WIKU</h1>
                                    <h1 className="hidden lg:block h-8 w-auto font-bold">
                                        WIKUSAMA
                                    </h1>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4 font-lato text-sm font-medium">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.active
                                                        ? "bg-[#F8BC37] text-white"
                                                        : "text-gray-300 hover:text-white",
                                                    "px-3 py-2 rounded-md"
                                                )}
                                                aria-current={item.current ? "page" : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure >
    );
}