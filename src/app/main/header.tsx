import Image from "next/image";
import logoLight from "@/public/images/logo_light.png";
import logoDark from "@/public/images/logo_dark.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="h-20 max-w-7xl mx-auto flex items-center w-full">
      <div className="flex items-center justify-between px-6 w-full">
        <Image
          loading="eager"
          src={logoDark}
          alt="Innvonix"
          className="object-contain hidden dark:block"
        />
        <Image
          loading="eager"
          src={logoLight}
          alt="Innvonix"
          className="object-contain block dark:hidden"
        />
        <nav>
          <ul className="lg:flex items-center gap-4 text-foreground">
            <li>
              <Link
                className="hover:text-foreground transition-colors"
                href="/"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-foreground transition-colors"
                href="/"
              >
                Technology
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-foreground transition-colors"
                href="/"
              >
                Industries
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-foreground transition-colors"
                href="/"
              >
                Our Work
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-foreground transition-colors"
                href="/"
              >
                Company
              </Link>
            </li>
          </ul>
        </nav>
        <ul className="flex items-center gap-4">
          <li>
            <ThemeToggle />
          </li>
          <li>
            <Link href="/">
              <Button
                className="font-bold px-4 py-6"
                variant="default"
                size="lg"
              >
                GET A QUOTE
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
