import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiMysql, SiPython, SiDatabricks, SiLinux, SiAmazon } from "react-icons/si";

const skills = [
    { name: "React", icon: <FaReact size={50} /> },
    { name: "Next.js", icon: <SiNextdotjs size={50} /> },
    { name: "JavaScript", icon: <FaJsSquare size={50} /> },
    { name: "TypeScript", icon: <SiTypescript size={50} /> },
    { name: "HTML5", icon: <FaHtml5 size={50} /> },
    { name: "CSS3", icon: <FaCss3Alt size={50} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={50} /> },
    { name: "Node.js", icon: <FaNodeJs size={50} /> },
    { name: "MongoDB", icon: <SiMongodb size={50} /> },
    { name: "MySQL", icon: <SiMysql size={50} /> },
    { name: "Python", icon: <SiPython size={50} /> },
    { name: "SQL Server", icon: <SiDatabricks size={50} /> },
    { name: "Git", icon: <FaGitAlt size={50} /> },
    { name: "Linux", icon: <SiLinux size={50} /> },
    { name: "AWS", icon: <SiAmazon size={50} /> },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24">
            <div className="container mx-auto px-6">
                <h1 className="text-5xl font-bold text-purple-100 text-center mb-12">Skills</h1>
                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-14 justify-items-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            {/* Zoom in when mouse hover */}
                            <div className="text-white transition-transform transform group-hover:scale-110">
                                {skill.icon}
                            </div>

                            <p className="mt-3 text-lg font-medium text-white text-center">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
