import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // 监听滚动事件
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full h-16 z-50 transition-all duration-300 ${
                isScrolled ? "bg-background/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* logo */}
                <Link href="/" className="flex items-center">
                    <Image src="/logo.png" alt="Logo" width={150} height={10} />
                </Link>

                {/* menu for larger screens */}
                <div className="hidden md:flex space-x-20">
                    <Link href="#home" className="text-xl text-purple-300 font-semibold hover:text-purple-200">
                        Home
                    </Link>
                    <Link href="#projects" className="text-xl text-purple-300 font-semibold hover:text-purple-200">
                        Projects
                    </Link>
                    <Link href="#skills" className="text-xl text-purple-300 font-semibold hover:text-purple-200">
                        Skills
                    </Link>
                    <Link href="#about" className="text-xl text-purple-300 font-semibold hover:text-purple-200">
                        About
                    </Link>
                </div>

                {/* menu button for small screens */}
                <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                </button>
            </div>

            {/* drop list for small screens */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full backdrop-blur-lg shadow-lg md:hidden">
                    <Link href="#home" className="block text-purple-100 font-semibold py-3 px-6 hover:text-gray-600">
                        Home
                    </Link>
                    <Link href="#projects" className="block text-purple-100 font-semibold py-3 px-6 hover:text-purple-300">
                        Projects
                    </Link>
                    <Link href="#skills" className="block text-purple-100 font-semibold py-3 px-6 hover:text-purple-300">
                        Skills
                    </Link>
                    <Link href="#about" className="block text-purple-100 font-semibold py-3 px-6 hover:text-purple-300">
                        About
                    </Link>
                </div>
            )}
        </nav>
    );
}