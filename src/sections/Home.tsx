import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeSection() {
    const words = ["Full Stack Engineer", "Frontend Developer", "Backend Developer", "Data Analyst"];
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(100);

    useEffect(() => {
        const currentWord = words[index];

        const updateText = () => {
            if (isDeleting) {
                setText((prev) => prev.slice(0, -1));
                setSpeed(100); // delete speed
            } else {
                setText((prev) => currentWord.slice(0, prev.length + 1));
                setSpeed(150); // type speed
            }

            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), 1000); // delete after 1 second
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timer = setTimeout(updateText, speed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, index, speed, words]);

    return (
        <section id="home" className="h-screen flex items-center justify-center text-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
                {/* 文字部分 */}
                <div className="md:w-1/2 text-left">
                    <h1 className="text-6xl font-bold text-purple-50">Hi! 🙋🏻‍♀️</h1>
                    <h2 className="text-5xl font-bold text-purple-200 mt-2">
                        I&apos;m <span className="text-purple-300">Kako Dong</span>
                    </h2>
                    <h3 className="text-2xl font-semibold mt-2">
                        <span className="text-purple-400">{text}</span>
                        <span className="text-purple-500">|</span>
                    </h3>
                    {/* View Projects 按钮 */}
                    <div className="mt-16">
                        <Link
                            href="#projects"
                            className="px-6 py-3 bg-purple-900 text-purple-200 font-semibold rounded-lg shadow-md hover:bg-purple-800 transition inline-block"
                        >
                            View Projects
                        </Link>
                    </div>
                </div>

                {/* 图片部分 */}
                <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
                    <Image
                        src="/header.png"
                        alt="Developer Illustration"
                        width={1500}
                        height={1500}
                        className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
}