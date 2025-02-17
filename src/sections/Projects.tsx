import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomPrevArrow = (props: any) => (
    <button {...props} className="absolute left-0.5 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/5 hover:bg-black/15 p-1 rounded-full">
        <FaChevronLeft size={15} />
    </button>
);

const CustomNextArrow = (props: any) => (
    <button {...props} className="absolute right-0.5 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/5 hover:bg-black/15 p-1 rounded-full">
        <FaChevronRight size={15} />
    </button>
);


const projects = [
    {
        title: "JourneyWise: AI-Based Travel Plan Website",
        video: "/AI-Based Travel Plan Website.mov",
        tags: ["React", "Next.js", "TypeScript", "LLM", "Prompt Engineer", "Authentication"],
        description:
            "An AI-powered travel planning website generating personalized itineraries using OpenAI API. Features interactive maps, location-based recommendations, and user-friendly travel insights.",
        liveLink: "",
        codeLink: "",
    },
    {
        title: "Fields Ireland",
        image: "/fields1.png",
        tags: ["JavaScript", "HTML", "CSS", "UI/UX Design"],
        description:
            "A redesigned functional prototype for Fields Ireland.",
        liveLink: "",
        codeLink: "",
    },
    {
        title: "Macrodata Refinement System (WIP)",
        image: "/mrs1.png",
        tags: ["Vue", "Node.js", "TypeScript", "Data Classification", "Custom Algorithm"],
        description:
            "A data refinement system inspired by the Macrodata Refinement Department in the TV series 'Severance'. This system enables users to scan and classify numerical data based on undefined emotional patterns, mimicking the enigmatic task performed by Lumon Industries employees.",
        liveLink: "",
        codeLink: "",
    },  
    {
        title: "HSE Performance Data Visualization Report",
        images: [
            "/HSE Performance Data Analysis & Visualization Report1.png",
            "/HSE Performance Data Analysis & Visualization Report2.png",
            "/HSE Performance Data Analysis & Visualization Report3.png",
            "/HSE Performance Data Analysis & Visualization Report4.png",
        ],
        tags: ["MS Power BI", "Python", "Pandas", "NumPy", "Excel", "PostgreSQL"],
        description: (
            <>
            A Power BI dashboard utilizing SQL-based data models.
                <br />
                <br />
                <span className="text-sm text-gray-500">
                    🔒 Confidentiality Notice: The data in the dashboard is intentionally blurred due to 
                    confidentiality policies and GDPR compliance.
                </span>
            </>
        ),        
        liveLink: "",
        codeLink: "",
    }, 
    {
        title: "Airline Reservation Website & Database Development",
        image: "/underconstruction.png",
        tags: ["Java", ".NET core", "SQL Server", "MVC"],
        description:
            "An airline reservation system with dynamic booking and user management, designed with SQL Server for optimized query performance and maintainability.",
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
    } 
];

export default function ProjectsSection() {
    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <h1 className="text-5xl font-bold text-purple-100 text-center mb-5">Projects</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden min-h-[550px] flex flex-col">
<div className="relative w-full border-[10px] border-card rounded-lg overflow-hidden">
    <div className="w-full aspect-[16/9] flex items-center justify-center overflow-hidden">
        {project.images ? (
            <Slider {...sliderSettings} className="w-full h-full">
                {project.images.map((image, i) => (
                    <div key={i} className="w-full h-full">
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
            <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
            />
        ) : (
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
</div>



                            <div className="p-5 flex flex-col flex-grow">
                                <h2 className="text-xl font-semibold text-gray-900">{project.title}</h2>

                                <div className="flex flex-wrap mt-2 gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="bg-gray-200 text-gray-700 text-sm font-semibold px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="mt-3 text-gray-700 flex-grow">{project.description}</p>

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
