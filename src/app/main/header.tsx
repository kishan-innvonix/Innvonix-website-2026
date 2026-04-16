import Image from "next/image"
import logo from "@/public/images/Logo.webp"
import Link from "next/link";

export default function Header() {
    return (
        <header className="h-1/12 max-w-5xl mx-auto bg-black/10 flex items-center">
            <div className="flex items-center justify-between py-2 px-4 w-full">
                <Image src={logo} alt="Innvonix" width={100} height={100} className="w-[15%] object-contain" />
                <nav>
                    <ul className="lg:flex items-center gap-2">
                        <li>
                            <Link href="/">Know Us</Link>
                        </li>
                        <li>
                            <Link href="/">Services</Link>
                        </li>
                        <li>
                            <Link href="/">Hire Developers</Link>
                        </li>
                        <li>
                            <Link href="/">Resources</Link>
                        </li>
                        <li>
                            <Link href="/">Portfolio</Link>
                        </li>
                        <li>
                            <Link href="/">Contact Us</Link>
                        </li>
                        <li>
                            <Link href="/">Get A Quote</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}