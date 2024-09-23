"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./_ui/logo";
import { MenuNav } from "./_ui/menu-nav";
import ThemeToggler from "./theme-toggle";
import { Button } from "@//shared/ui/button";
import { ArrowRight } from "lucide-react";


const Header = () => {
    // Sticky Navbar
    const [sticky, setSticky] = useState(false);
    const handleStickyNavbar = () => {
        if (window.scrollY >= 80) {
        setSticky(true);
        } else {
        setSticky(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleStickyNavbar);
    });


    return (
        <>
        <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
            : "absolute bg-transparent"
        }`}
        >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
               <Logo />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>

                <MenuNav />

              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <Link
                  href="https://te.me"
                  className="hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
                  target="true"
                >

                </Link>
                <Link
                  href="/auth"
              >
                    <Button variant='primary'>
					Войти

				</Button>

                </Link>
                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
        </header>

        </>
    )




}

export default Header;
