import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecomendedMentors from "./RecomendedMentors";
import { IoTimeSharp } from "react-icons/io5";
import { IoIosChatbubbles } from "react-icons/io";
import { FaRankingStar } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";
import Footer from "./Footer";

const MentorProfile = () => {
    const { id } = useParams(); // Get the mentor ID from URL params
    const [mentor, setMentor] = useState(null);

    // Simulated mentor data (replace with actual data fetching logic)
    const mentors = [
        {
            id: 1,
            name: "John Doe",
            role: "Software Engineer at Google",
            imageUrl:
                "https://images.unsplash.com/photo-1517702145080-e4a4d91435bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            skills: [
                "Brand Strategy",
                "Personal Branding",
                "Marketing",
                "Leadership",
                "Social Media",
                "Interview Preparation",
            ],
            description: "John is one of our most experienced mentors.",
            profileLink: "/mentor/profile/1",
            about: "John is one of our most experienced mentors. With over 10 years of experience in software engineering, he has contributed to numerous projects at Google and has a deep understanding of brand strategy, personal branding, marketing, leadership, social media, and interview preparation."
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "Data Scientist at Microsoft",
            imageUrl:
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRhdGF8ZW58MHx8MHx8fA%3D%3D",
            skills: [
                "Machine Learning",
                "Data Analysis",
                "Python Programming",
                "Statistics",
                "Data Visualization",
            ],
            description:
                "Jane specializes in applying machine learning techniques to solve real-world problems.",
            profileLink: "/mentor/profile/2",
            about: "Jane is one of our most experienced mentors. With over 10 years of experience in software engineering, he has contributed to numerous projects at Google and has a deep understanding of brand strategy, personal branding, marketing, leadership, social media, and interview preparation."
        },
        {
            id: 3,
            name: "Michael Johnson",
            role: "UX Designer at Apple",
            imageUrl:
                "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            skills: [
                "User Experience Design",
                "Prototyping",
                "Wireframing",
                "Usability Testing",
                "UI Design",
            ],
            description:
                "Michael is passionate about creating intuitive and delightful user experiences.",
            profileLink: "/mentor/profile/3",
            about: "Michael is one of our most experienced mentors. With over 10 years of experience in software engineering, he has contributed to numerous projects at Google and has a deep understanding of brand strategy, personal branding, marketing, leadership, social media, and interview preparation."
        },
        {
            id: 4,
            name: "Emily Wang",
            role: "Product Manager at Facebook",
            imageUrl:
                "https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            skills: [
                "Product Management",
                "Agile Methodologies",
                "Market Research",
                "Product Strategy",
                "User Feedback Analysis",
            ],
            description:
                "Emily excels in driving product development from ideation to launch.",
            profileLink: "/mentor/profile/4",
            about: "Emily is one of our most experienced mentors. With over 10 years of experience in software engineering, he has contributed to numerous projects at Google and has a deep understanding of brand strategy, personal branding, marketing, leadership, social media, and interview preparation."
        },
        {
            id: 5,
            name: "David Lee",
            role: "Software Architect at Amazon",
            imageUrl:
                "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            skills: [
                "Software Architecture",
                "Cloud Computing",
                "Distributed Systems",
                "Microservices",
                "System Design",
            ],
            description:
                "David specializes in designing scalable and resilient software systems.",
            profileLink: "/mentor/profile/5",
            about: "David is one of our most experienced mentors. With over 10 years of experience in software engineering, he has contributed to numerous projects at Google and has a deep understanding of brand strategy, personal branding, marketing, leadership, social media, and interview preparation."
        },
        {
            id: 6,
            name: "Sarah Kim",
            role: "Digital Marketing Manager at LinkedIn",
            imageUrl:
                "https://images.unsplash.com/photo-1558072844-b2e8b546d415?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            skills: [
                "Digital Marketing Strategy",
                "Content Marketing",
                "SEO",
                "Email Marketing",
                "Analytics",
            ],
            description:
                "Sarah has a proven track record of driving successful digital marketing campaigns.",
            profileLink: "/mentor/profile/6",
            about: "Sarah is one of our most experienced mentors. With over 10 years of experience in software engineering, he has contributed to numerous projects at Google and has a deep understanding of brand strategy, personal branding, marketing, leadership, social media, and interview preparation."
        },
        {
            id: 7,
            name: "Chris Evans",
            role: "Cybersecurity Analyst at IBM",
            imageUrl:
                "https://plus.unsplash.com/premium_photo-1672857822411-ad82b8180078?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            skills: [
                "Cybersecurity",
                "Incident Response",
                "Penetration Testing",
                "Network Security",
                "Threat Intelligence",
            ],
            description:
                "Chris is dedicated to protecting organizations from cyber threats through advanced security measures.",
            profileLink: "/mentor/profile/7",
            about: "Chris is one of our most experienced mentors. With over 10 years of experience in software engineering, he has contributed to numerous projects at Google and has a deep understanding of brand strategy, personal branding, marketing, leadership, social media, and interview preparation."
        },
        {
            id: 8,
            name: "Rachel Chang",
            role: "Financial Analyst at Goldman Sachs",
            imageUrl:
                "https://images.unsplash.com/photo-1619539465730-fea9ebf950f8?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            skills: [
                "Financial Analysis",
                "Investment Banking",
                "Risk Management",
                "Financial Modeling",
                "Valuation",

            ],
            description:
                "Rachel possesses deep expertise in financial analysis and investment strategies.",
            profileLink: "/mentor/profile/8",
            about: "Rachel is one of our most experienced mentors. With over 10 years of experience in software engineering, he has contributed to numerous projects at Google and has a deep understanding of brand strategy, personal branding, marketing, leadership, social media, and interview preparation."
        },
        {
            id: 9,
            name: "Daniel Brown",
            role: "AI Research Scientist at NVIDIA",
            imageUrl:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            skills: [
                "Artificial Intelligence",
                "Machine Learning Research",
                "Deep Learning",
                "Natural Language Processing",
                "Computer Vision",
            ],
            description:
                "Daniel is at the forefront of AI research, pushing the boundaries of what's possible with machine learning.",
            profileLink: "/mentor/profile/9",
            about: "Daniel is one of our most experienced mentors. With over 10 years of experience in software engineering, he has contributed to numerous projects at Google and has a deep understanding of brand strategy, personal branding, marketing, leadership, social media, and interview preparation."
        },
    ];

    useEffect(() => {
        const selectedMentor = mentors.find((mentor) => mentor.id === parseInt(id));
        setMentor(selectedMentor);
    }, [id, mentors]);

    if (!mentor) {
        return <div>Loading...</div>;
    }

    return (
        <div className=" w-11/12 mx-auto">
            <div className="flex my-2 items-center space-x-[10vw] flex-col md:flex-row">
                <img
                    src={mentor.imageUrl}
                    alt={mentor.name}
                    className="mb-4 rounded-md"
                    width={200}
                />


                <div className="text-gray-600 ml-[5vw]">
                    <a href="/chat" className=" bg-[#2BB17A] ml-6 text-white py-3 px-4 rounded-lg flex  items-center text-xl hover:bg-[#20875c] mb-3"> <IoIosChatbubbles className="mx-2" /> Chat Now</a>
                    <p className="flex items-center text-xl"><FaLocationPin className="text-green-600 mr-1 text-xl" /> Delhi</p>
                    <p className="flex items-center text-xl"><FaRankingStar className="text-green-600 mr-1 text-xl" />5.0 (1 review)</p>
                    <p className="flex items-center text-xl"><IoTimeSharp className="text-green-600 mr-1 text-xl" />  Active yesterday</p>
                    <p className="flex items-center text-xl"><IoIosChatbubbles className="text-green-600 mr-1 text-xl" />Usually responds in a few hours</p>
                </div>
            </div>
            <div className=" flex space-x-6">
                <div>
                    <h2 className="text-2xl font-bold mb-4">{mentor.name}</h2>
                    <p className="text-lg">{mentor.role}</p>
                    <p className="mt-4 font-semibold">{mentor.description}</p>
                </div>
                <div className="">
                    <h3 className="font-bold text-2xl">Skills:</h3>
                    <ul className="grid  md:grid-cols-3 gap-4">
                        {mentor.skills.map((skill, index) => (
                            <li key={index} className="bg-gray-200 rounded-full py-1 px-2 mx-1 text-center">{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className="mt-4 w-10/12">{mentor.about}</p>


            <div className="max-w-screen-lg px-4 mx-auto py-8">
                <h2 className="my-[5vw] sm:my-[5vh] text-gray-950 font-bold text-3xl sm:text-4xl  w-[80vw]">Recommended for you</h2>
            </div>
            <RecomendedMentors />
            <Footer />
        </div>
    );
};

export default MentorProfile;