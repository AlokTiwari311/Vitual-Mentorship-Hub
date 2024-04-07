const RecomendedMentors = () => {
    // Sample data (replace with your actual mentor data)
    const mentors = [
        {
            id: 1,
            name: "John Doe",
            role: "Software Engineer at Google",
            imageUrl: "https://images.unsplash.com/photo-1517702145080-e4a4d91435bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            skills: ["Brand Strategy", "Personal Branding", "Marketing", "Leadership", "Social Media", "Interview Preparation"],
            description: "John is one of our most experienced mentors.",
            profileLink: "/mentor/profile/1"
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "Data Scientist at Microsoft",
            imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRhdGF8ZW58MHx8MHx8fA%3D%3D",
            skills: ["Machine Learning", "Data Analysis", "Python Programming", "Statistics", "Data Visualization"],
            description: "Jane specializes in applying machine learning techniques to solve real-world problems.",
            profileLink: "/mentor/profile/2"
        },
        {
            id: 3,
            name: "Michael Johnson",
            role: "UX Designer at Apple",
            imageUrl: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            skills: ["User Experience Design", "Prototyping", "Wireframing", "Usability Testing", "UI Design"],
            description: "Michael is passionate about creating intuitive and delightful user experiences.",
            profileLink: "/mentor/profile/3"
        },
        {
            id: 4,
            name: "Emily Wang",
            role: "Product Manager at Facebook",
            imageUrl: "https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            skills: ["Product Management", "Agile Methodologies", "Market Research", "Product Strategy", "User Feedback Analysis"],
            description: "Emily excels in driving product development from ideation to launch.",
            profileLink: "/mentor/profile/4"
        },
        {
            id: 5,
            name: "David Lee",
            role: "Software Architect at Amazon",
            imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            skills: ["Software Architecture", "Cloud Computing", "Distributed Systems", "Microservices", "System Design"],
            description: "David specializes in designing scalable and resilient software systems.",
            profileLink: "/mentor/profile/5"
        },
        {
            id: 6,
            name: "Sarah Kim",
            role: "Digital Marketing Manager at LinkedIn",
            imageUrl: "https://images.unsplash.com/photo-1558072844-b2e8b546d415?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            skills: ["Digital Marketing Strategy", "Content Marketing", "SEO", "Email Marketing", "Analytics"],
            description: "Sarah has a proven track record of driving successful digital marketing campaigns.",
            profileLink: "/mentor/profile/6"
        },
        {
            id: 7,
            name: "Chris Evans",
            role: "Cybersecurity Analyst at IBM",
            imageUrl: "https://plus.unsplash.com/premium_photo-1672857822411-ad82b8180078?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            skills: ["Cybersecurity", "Incident Response", "Penetration Testing", "Network Security", "Threat Intelligence"],
            description: "Chris is dedicated to protecting organizations from cyber threats through advanced security measures.",
            profileLink: "/mentor/profile/7"
        },
        {
            id: 8,
            name: "Rachel Chang",
            role: "Financial Analyst at Goldman Sachs",
            imageUrl: "https://images.unsplash.com/photo-1619539465730-fea9ebf950f8?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            skills: ["Financial Analysis", "Investment Banking", "Risk Management", "Financial Modeling", "Valuation"],
            description: "Rachel possesses deep expertise in financial analysis and investment strategies.",
            profileLink: "/mentor/profile/8"
        },
        {
            id: 9,
            name: "Daniel Brown",
            role: "AI Research Scientist at NVIDIA",
            imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            skills: ["Artificial Intelligence", "Machine Learning Research", "Deep Learning", "Natural Language Processing", "Computer Vision"],
            description: "Daniel is at the forefront of AI research, pushing the boundaries of what's possible with machine learning.",
            profileLink: "/mentor/profile/9"
        },
    ];


    return (
        <div className="relative flex flex-col w-full">
            {/* Map through mentors array */}
            {mentors.map((mentor) => (
                <a key={mentor.id} href={`/mentor/profile/${mentor.id}`} className="border-2 border-gray-200 px-2 mx-auto w-11/12 rounded-md flex space-x-6 flex-col md:flex-row py-4">
                    <div className="max-w-30 64px;">
                        <img src={mentor.imageUrl} className="rounded-md mx-2" width={100} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
                        <p className="text-gray-900 font-normal">{mentor.role}</p>
                        <span className="text-gray-700 font-semibold">{mentor.description}</span>
                        <div className="mt-2">
                            {/* Map through skills array */}
                            {mentor.skills.map((skill, index) => (
                                <span key={index} className="mx-1 bg-gray-200 py-1 px-3 rounded-full">{skill}</span>
                            ))}
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default RecomendedMentors;
