import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import menuImage from "@/assets/images/menu.svg";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  return (
    <section className="py-4 lg:py-8 sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:pr-2 items-center bg-neutral-950/70 backdrop-blur">
          <div>
            <Image src={logoImage} alt="Logo" className="h-9 md:h-auto w-auto" />
          </div>
          <div className="lg:flex justify-center items-center hidden">
            <nav className="flex gap-6 font-medium">
                {navLinks.map(link => (
                    <a href={link.href} key={link.label}>{link.label}</a>
                ))}
            </nav>
          </div>
          <div className="flex justify-end gap-4">
            <Image
              src={menuImage}
              alt="Logo"
              width={35}
              height={35}
              className="brightness-0 invert md:hidden"
            />
            <button className="border border-white h-12 rounded-full px-6 font-medium hidden md:inline-flex items-center">Log In</button>
            <button className="border h-12 rounded-full px-6 font-medium bg-lime-400 text-neutral-950 border-lime-400 hidden md:inline-flex items-center">Sign Up</button>
          </div>
        </div>
      </div>
    </section>
  );
}
