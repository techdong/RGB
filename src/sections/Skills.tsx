import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGitAlt, FaCogs, FaSync } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiFirebase, SiMysql, SiPython, SiDatabricks, SiTableau } from "react-icons/si";
import { GrShare } from "react-icons/gr";
import { BsMicrosoft } from "react-icons/bs";

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
    { name: "Advanced Excel", icon: <BsMicrosoft size={50} /> },
    { name: "Microsoft SharePoint", icon: <GrShare size={50} /> },
    { name: "Microsoft Power Automate", icon: <FaCogs size={50} /> },
    { name: "Microsoft Power BI", icon: <SiDatabricks size={50} /> },
    { name: "Tableau", icon: <SiTableau size={50} /> },
    { name: "Git", icon: <FaGitAlt size={50} /> },
    // { name: "Firebase", icon: <SiFirebase size={50} /> },
];


export default function SkillsSection() {
    return (
        <section id="skills" className="py-24">
            <div className="container mx-auto px-6">
                <h1 className="text-5xl font-bold text-purple-100 text-center mb-12">Skills</h1>
                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-14 justify-items-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            {/* 图标部分，鼠标悬浮时放大 */}
                            <div className="text-white transition-transform transform group-hover:scale-110">
                                {skill.icon}
                            </div>
                            {/* 文字部分，始终居中 */}
                            <p className="mt-3 text-lg font-medium text-white text-center">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
