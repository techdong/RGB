import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const projects = [
    {
        title: "JourneyWise: AI-Based Travel Plan Website",
        video: "/AI-Based Travel Plan Website.mov",
        tags: ["React", "Next.js", "TypeScript", "OpenAI API", "Google Maps API", "Firebase"],
        description:
            "An AI-powered travel planning website generating personalized itineraries using OpenAI API. Features interactive maps, location-based recommendations, and user-friendly travel insights.",
        liveLink: "",
        codeLink: "",
    },
    {
        title: "HSE Performance Data Visualization Report",
        images: [
            "/HSE Performance Data Analysis & Visualization Report1.jpg",
            "/HSE Performance Data Analysis & Visualization Report2.jpg",
            "/HSE Performance Data Analysis & Visualization Report3.jpg",
        ],
        tags: ["Power BI", "Excel", "SQL", "Python", "Pandas"],
        description:
            "Developed Power BI dashboards and SQL-based data models for analyzing safety performance metrics, generating insights for strategic decision-making.",
        liveLink: "",
        codeLink: "",
    },
    {
        title: "Automated Data Collection System",
        image: "/underconstruction.png",
        tags: ["Microsoft Power Automate", "PowerShell", "SharePoint", "Outlook API"],
        description:
            "An automated system streamlining data collection via Power Automate, automating email notifications with Outlook, and seamless data uploads to SharePoint.",
        liveLink: "",
        codeLink: "",
    },
    {
        title: "Airline Reservation Website & Database Development",
        image: "/underconstruction.png",
        tags: ["Java", "JDBC", "SQL Server", "MVC"],
        description:
            "An airline reservation system with dynamic booking and user management, designed with SQL Server for optimized query performance and maintainability.",
        liveLink: "",
        codeLink: "",
    },
    {
        title: "Macrodata Refinement System (WIP)",
        image: "/mrs1.png",
        tags: ["React", "Next.js", "TypeScript", "Artificial Intelligence", "Data Classification", "Custom Algorithm"],
        description:
            "A data refinement system inspired by the Macrodata Refinement Department in the TV series 'Severance'. This system enables users to scan and classify numerical data based on undefined emotional patterns, mimicking the enigmatic task performed by Lumon Industries employees.",
        liveLink: "",
        codeLink: "",
    },    
];

export default function ProjectsSection() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
    };

    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <h1 className="text-5xl font-bold text-purple-100 text-center mb-5">Projects</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden min-h-[550px] flex flex-col">
                            <div className="w-full h-[300px] relative">
                                {/* 轮播图（多张） */}
                                {project.images ? (
                                    <Slider {...sliderSettings}>
                                        {project.images.map((image, i) => (
                                            <div key={i} className="w-full h-[300px]">
                                                <Image
                                                    src={image}
                                                    alt={`${project.title} ${i + 1}`}
                                                    width={400}
                                                    height={300}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </Slider>
                                ) : project.image ? (
                                    // 单张图片
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    // 视频
                                    <video
                                        className="w-full h-full object-cover"
                                        controls
                                        muted
                                        playsInline
                                        disablePictureInPicture
                                        controlsList="nodownload noremoteplayback"
                                        onContextMenu={(e) => e.preventDefault()}
                                    >
                                        <source src={project.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-xl font-semibold text-gray-900">{project.title}</h2>

                                <div className="flex flex-wrap mt-2 gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="bg-gray-200 text-gray-700 text-sm font-semibold px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="mt-4 text-gray-700 flex-grow">{project.description}</p>

                                <div className="mt-auto flex gap-4">
                                    {project.liveLink && (
                                        <Link href={project.liveLink} target="_blank" className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition">
                                            Live Site ↗
                                        </Link>
                                    )}
                                    {project.codeLink && (
                                        <Link href={project.codeLink} target="_blank" className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition">
                                            See Code 🔗
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
