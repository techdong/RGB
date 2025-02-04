import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { IoIosGrid } from "react-icons/io";
import { GiJigsawPiece } from "react-icons/gi";
import { MdTravelExplore } from "react-icons/md";

export default function AboutSection() {
    return (
        <section id="about" className="py-20 text-purple-100">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                {/* Left Side: Text Content */}
                <div className="md:w-1/2 text-left">
                    <h1 className="text-5xl font-bold text-purple-100">Know a bit about <span className="text-purple-400">Kako</span></h1>
                    <p className="mt-4 text-lg"> 
                        I am passionate about software development and data analytics,  
                        continuously exploring new technologies to build innovative solutions.
                    </p>
                    <p className="mt-4 text-lg">
                        I have experience in <span className="text-lavenderPurple font-semibold">AI-driven travel planning</span>,  
                        <span className="text-lavenderPurple font-semibold">data visualization</span>,  
                        and <span className="text-lavenderPurple font-semibold">automated systems development</span>.  
                        My projects combine <span className="font-semibold">React, Next.js, Power BI, and AI APIs </span>  
                        to create impactful applications.
                    </p>

                    {/* Personal Interests with Icons */}
                    <p className="mt-6 text-lg font-semibold text-purple-300">Apart from developing, I enjoy:</p>
                    <ul className="mt-2 space-y-2">
                        <li className="flex items-center space-x-3">
                            <IoIosGrid className="text-purple-400 text-2xl" />
                            <span className="font-semibold text-purple-200">Sudoku</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <GiJigsawPiece className="text-purple-400 text-2xl" />
                            <span className="font-semibold text-purple-200">Jigsaw Puzzles</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <MdTravelExplore className="text-purple-400 text-2xl" />
                            <span className="font-semibold text-purple-200">Traveling & Exploring</span>
                        </li>
                    </ul>

                    {/* Quote */}
                    <p className="mt-6 italic text-purple-200">
                        &quot;Adventure awaits those who dare to explore!&quot;
                    </p>

                    {/* Social Media Icons with Glow and Border Effect */}
                    <div className="mt-6 flex space-x-6">
                        {[
                            { href: "https://www.linkedin.com/in/kakosd", icon: <FaLinkedin /> },
                            { href: "https://www.instagram.com/livingintardis", icon: <FaInstagram /> },
                            { href: "https://github.com/kakosd", icon: <FaGithub /> },
                        ].map((item, index) => (
                            <Link key={index} href={item.href} target="_blank" className="relative group">
                                {/* Main Icon with Border (Appears on Hover) */}
                                <div className="w-10 h-10 flex items-center justify-center bg-purple-50 rounded-full shadow-lg border-2 border-transparent transition-all duration-300 group-hover:border-purple-500">
                                    <span className="text-purple-600 text-xl">{item.icon}</span>
                                </div>

                                {/* Glow Effect (No scaling animation) */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                    <div className="w-10 h-10 rounded-full border-2 border-purple-500 shadow-[0_0_12px_4px_rgba(128,0,128,0.5)]"></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <Image
                        src="/aboutPhoto.png"
                        alt="Developer Illustration"
                        width={500}
                        height={500}
                        className="rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
}
