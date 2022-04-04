import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { NavLink } from "react-router-dom"
import '../index.css'

const navigation = [
<<<<<<< HEAD
  { name: "Home", href: "#", active: false },
  { name: "About", href: "#about", active: false },
];
=======
  { name: "Home", href: "/", current: true },
  { name: "About", href: "#about", current: false },
]
>>>>>>> 0c513ad16636d17e6943ff08fe524f6da173a54c

const userMenu = [
  { name: "Profile dashboard", href: "#profile-dashboard" },
  { name: "Settings", href: "#settings" },
  { name: "Log out", href: "#logout" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar(props) {
  return (
<<<<<<< HEAD
    <Disclosure as="nav" className="bg-black">
=======
    <Disclosure as="nav" className="bg-[#080809]">
>>>>>>> 0c513ad16636d17e6943ff08fe524f6da173a54c
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
<<<<<<< HEAD
                <div className="flex-shrink-0 flex items-center text-slate-50 font-lato font-medium text-2xl">
                  <h1 className="block lg:hidden h-8 w-auto">WIKU</h1>
                  <h1 className="hidden lg:block h-8 w-auto font-bold">
                    WIKUSAMA
                  </h1>
=======
                <div className="flex-shrink-0 flex items-center text-slate-50 uppercase font-semibold text-2xl">
                  <NavLink to="/" className="block lg:hidden h-8 w-auto">Wikusama</NavLink>
                  <NavLink to="/" className="hidden lg:block h-8 w-auto">Wikusama</NavLink>
>>>>>>> 0c513ad16636d17e6943ff08fe524f6da173a54c
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 font-lato text-sm font-medium">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
<<<<<<< HEAD
                          item.active
                            ? "bg-[#F8BC37] text-white"
                            : "text-gray-300 hover:text-white",
                          "px-3 py-2 rounded-md"
=======
                          item.current
                            ? "bg-gray-800 text-white"
                            : "text-gray-300 hover:bg-gray-800 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
>>>>>>> 0c513ad16636d17e6943ff08fe524f6da173a54c
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <div>
<<<<<<< HEAD
                    <Menu.Button className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
=======
                    <Menu.Button className="flex items-center justify-center px-2 py-1 text-sm rounded-full">
                      <h4 className="text-white mr-2 capitalize hidden lg:hidden">Andi Firman</h4>
                      <h4 className="text-white mr-2 capitalize hidden lg:block">Andi Firman</h4>
>>>>>>> 0c513ad16636d17e6943ff08fe524f6da173a54c
                      <span className="sr-only">Open user menu</span>
                      <h1 className="hidden sm:block text-white py-2 px-3 font-semibold">
                        Andi Firman
                      </h1>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none font-lato text-sm">
                      {userMenu.map((item) => (
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-gray-700"
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 font-lato font-medium">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.active
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base"
                  )}
                  aria-current={item.active ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
