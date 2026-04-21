"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logoLight from "@/public/images/logo_light.png";
import logoDark from "@/public/images/logo_dark.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import { ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/", label: "Services" },
  { href: "/", label: "Technology" },
  { href: "/", label: "Industries" },
  { href: "/", label: "Our Work" },
  { href: "/", label: "Company" },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Smart sticky logic (show on scroll up, hide on scroll down)
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!mounted) return null;

  return (
    <header
      className={`h-1/12 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out bg-background/80 backdrop-blur-xl ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        <Link href="/" className="shrink-0">
          <Image
            loading="eager"
            src={logoDark}
            alt="Innvonix"
            className="h-8 w-auto hidden dark:block"
          />
          <Image
            loading="eager"
            src={logoLight}
            alt="Innvonix"
            className="h-8 w-auto block dark:hidden"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:block">
          <ul className="flex items-center gap-8 text-foreground font-semibold text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  className="hover:text-primary transition-colors"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <div className="hidden xl:block">
            <Link href="/">
              <Button
                className="bg-primary hover:bg-primary/90 text-white font-bold px-4 h-10 flex items-center gap-2 text-sm"
                variant="default"
              >
                GET A QUOTE
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="xl:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 flex flex-col gap-1.5 items-center justify-center">
                  <span className="h-[2px] w-6 bg-foreground rounded-full" />
                  <span className="h-[2px] w-6 bg-foreground rounded-full" />
                  <span className="h-[2px] w-6 bg-foreground rounded-full" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0">
                <SheetHeader className="flex flex-row items-center justify-between p-4 ">
                  <SheetTitle className="m-0">
                    <Image
                      src={logoLight}
                      alt="Innvonix"
                      className="h-8 w-auto block dark:hidden"
                    />
                    <Image
                      src={logoDark}
                      alt="Innvonix"
                      className="h-8 w-auto hidden dark:block"
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6 p-6 pt-0">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-lg font-bold hover:text-primary transition-colors border-b border-muted pb-4 flex justify-between items-center"
                    >
                      {link.label}
                      <ArrowRight className="size-4 opacity-50" />
                    </Link>
                  ))}
                  <Link href="/" className="pt-4">
                    <Button
                      className="w-full font-bold py-7 flex items-center justify-center gap-2 text-base"
                      size="lg"
                    >
                      GET A QUOTE
                      <ArrowRight className="size-5" />
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
