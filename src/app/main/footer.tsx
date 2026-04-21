"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Search, ChevronDown } from "lucide-react";

// Inline SVG components for social icons to avoid lucide-react version issues
const SocialIcons = {
  // use named .svg file from /images
  Instagram: () => (
    <Image src="/images/instagram.svg" alt="Instagram" width={35} height={35} />
  ),
  Facebook: () => (
    <Image src="/images/facebook.svg" alt="Facebook" width={35} height={35} />
  ),
  Linkedin: () => (
    <Image src="/images/linkedin.svg" alt="Linkedin" width={35} height={35} />
  ),
  TwitterX: () => (
    <Image src="/images/x.svg" alt="Twitter" width={35} height={35} />
  ),
  Behance: () => (
    <Image src="/images/behance.svg" alt="Behance" width={35} height={35} />
  ),
  Youtube: () => (
    <Image src="/images/youtube.svg" alt="Youtube" width={35} height={35} />
  ),
};

const companyLinks = [
  { label: "Why Us?", href: "#" },
  { label: "How We Work?", href: "#" },
  { label: "Client Speaks", href: "#" },
  { label: "Our Partners", href: "#" },
  { label: "Who Are We?", href: "#" },
  { label: "Where We Work?", href: "#" },
  { label: "Join Us", href: "#" },
];

const hireLinks = [
  { label: "Hire React Developer", href: "#" },
  { label: "Hire Vuejs Developer", href: "#" },
  { label: "Hire Flutter Developer", href: "#" },
  { label: "Hire Laravel Developer", href: "#" },
  { label: "Hire Node Developer", href: "#" },
  { label: "Hire React Native Developer", href: "#" },
  { label: "Hire Devops Developer", href: "#" },
];

const socialLinks = [
  { icon: SocialIcons.Instagram, href: "#" },
  { icon: SocialIcons.Facebook, href: "#" },
  { icon: SocialIcons.Linkedin, href: "#" },
  { icon: SocialIcons.TwitterX, href: "#" },
  { icon: SocialIcons.Behance, href: "#" },
  { icon: SocialIcons.Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-footer-bg text-white pt-20 pb-10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/images/footer_bg.svg"
          alt="footer background"
          fill
          className="object-cover"
        />
      </div>

      <Container className="relative z-10">
        {/* Top Section: Logo and Links */}
        {/* Logo Column */}
        <div className="md:col-span-4">
          <Image
            src="/images/logo_dark.png"
            alt="Innvonix Logo"
            width={300}
            height={80}
            className="mb-8"
          />
        </div>
        {/* our company and hire developer in one line by left and right  */}
        <div className="grid grid-cols-1 md:grid-cols-5  mb-10">
          {/* Links Columns */}
          <div className="md:col-span-2">
            <h3 className="text-primary text-xl font-bold mb-8 uppercase tracking-wider">
              Our Company
            </h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-0">
              {companyLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm md:text-base font-medium opacity-80 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div />
          <div className="md:col-span-2">
            <h3 className="text-primary text-xl font-bold mb-8 uppercase tracking-wider">
              Hire Developers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
              {hireLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm md:text-base font-medium opacity-80 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* horizontal devider with linear gradiant */}
        <div className="w-full h-0.5 bg-gradient-to-r from-primary to-accent-purple mb-10" />

        {/* Contact Section */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            LET'S GET IN TOUCH
          </h1>
          <p className="text-lg md:text-xl font-medium mb-12">
            <span className="bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
              Say Hi!
            </span>{" "}
            and we won't disappoint you.... Promise!
          </p>

          <div className="bg-footer-card/80 overflow-hidden grid grid-cols-1 md:grid-cols-2">
            {/* Form Side */}
            <div className="p-8 md:p-12">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="w-full bg-footer-bg px-4 py-3 outline-none transition-colors text-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-footer-bg  px-4 py-3 outline-none transition-colors text-white"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="w-20 shrink-0">
                    <div className="relative">
                      <select className="w-full bg-footer-bg  px-3 py-3 appearance-none outline-none text-white">
                        <option>+01</option>
                        <option>+91</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 size-4 opacity-50" />
                    </div>
                  </div>
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    className="grow bg-[#0a0a0a]  px-4 py-3 outline-none transition-colors text-white"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-footer-bg  px-4 py-3 outline-none transition-colors text-white"
                  />
                </div>
                <div className="relative">
                  <select className="w-full bg-footer-bg  px-4 py-3 appearance-none outline-none text-white">
                    <option>Looking For...</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-5 opacity-50" />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={1}
                    className="w-full bg-[#0a0a0a]  px-4 py-3 outline-none transition-colors text-white resize-none"
                  />
                </div>
                <Button className="w-48 h-12 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wide">
                  Send Inquiry
                </Button>
              </form>
            </div>

            {/* Info Side */}
            <div className="p-8 md:p-12 flex flex-col gap-10">
              <div className="flex gap-6 items-start">
                <div className="size-14 bg-footer-bg  flex items-center justify-center shrink-0">
                  <Mail className="text-primary size-6" />
                </div>
                <div>
                  <p className="text-gray-400 font-medium ">Email</p>
                  <p className="text-lg font-bold">hello@innvonix.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="size-14 bg-footer-bg  flex items-center justify-center shrink-0">
                  <Phone className="text-primary size-6" />
                </div>
                <div>
                  <p className="text-gray-400 font-medium ">Contact</p>
                  <p className="text-lg font-bold">+91 70964 99910</p>
                </div>
              </div>

              <div className="space-y-6 font-bold">
                <div>
                  <p className="text-primary font-bold mb-1 uppercase">India</p>
                  <p className="text-sm opacity-80 leading-relaxed max-w-sm">
                    1105-1108, I Square Corporate Park, Shukan Mall Cross Road,
                    Science City Road, Sola, Ahmedabad-380060, India
                  </p>
                </div>
                <div>
                  <p className="text-primary font-bold mb-1 uppercase">USA</p>
                  <p className="text-sm opacity-80 leading-relaxed max-w-sm">
                    5 Penn Plaza, Suite# 1918, New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <p className="text-primary font-bold mb-4 uppercase">
                  Follow Us On
                </p>
                <div className="flex gap-8">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className="bg-transparent flex items-center justify-center transition-all transition-colors  size-10"
                    >
                      <social.icon />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-footer-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-10">
            <Image
              src="/images/logo_dark.png"
              alt="Logo"
              width={120}
              height={40}
            />
            <div className="hidden md:flex gap-6 text-sm font-medium opacity-80">
              <Link href="#" className="hover:text-primary">
                Privacy Policy
              </Link>
              <span className="opacity-30">|</span>
              <Link href="#" className="hover:text-primary">
                Terms & Conditions
              </Link>
              <span className="opacity-30">|</span>
              <Link href="#" className="hover:text-primary">
                Sitemap
              </Link>
            </div>
          </div>

          <p className="text-sm opacity-60 font-medium">
            © Innvonix Tech Solutions 2026 . All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
