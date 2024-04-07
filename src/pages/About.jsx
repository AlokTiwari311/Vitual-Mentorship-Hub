// import React from "react";
import image2 from "../assets/image1.jpg";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function About() {
  let message = `Welcome to our vibrant team, where collaboration, innovation, and passion converge to drive excellence and achieve remarkable results. Meet the dedicated individuals who form the backbone of our organization.`;

  const renderTeamMember = (name, role, imageUrl, linkedinUrl, instagramUrl) => (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
      <div className="overflow-hidden shadow-lg rounded-lg transition-all duration-300 hover:bg-[#2BB17A] hover:shadow-xl hover:-translate-y-1">
        <img src="" className="align-middle" alt={name} />
        <div className="px-6 py-4">
          <h3 className="text-xl font-semibold mb-1 hover:text-white">{name}</h3>
          <p className="text-gray-800 text-sm mb-3 hover:text-white">{role}</p>
          <p className="text-gray-600 text-sm hover:text-white">
            Valuable member of our team, bringing a diverse skill set and a keen eye for detail to every project. With a passion for Web Development,dedicated to delivering high-quality results and driving success for our team. Connect on LinkedIn and Instagram to learn more about his contributions.
          </p>
          <ul className="flex justify-center mt-4">
            <li className="mr-6">
              <a href={linkedinUrl} className="hover:text-white">
                <FaLinkedin className="text-blue-500 hover:text-white text-2xl" />
              </a>
            </li>
            <li>
              <a href={instagramUrl} className="hover:text-white">
                <FaInstagram className="text-pink-500 hover:text-white text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const teamMembers = [
    { name: "Alok Tiwari", role: "Team Member", imageUrl: image2, linkedinUrl: "https://www.linkedin.com/in/alok-tiwari-714230241/", instagramUrl: "https://www.instagram.com/aloktiwari311/" },
    { name: "Shashi Bharti", role: "Team Member", imageUrl: image2, linkedinUrl: "https://www.linkedin.com/in/shashi-bharti-53367722b/", instagramUrl: "https://www.instagram.com/shashi_bharti9567/" },
    { name: "Bhawar Syal", role: "Team Member", imageUrl: image2, linkedinUrl: "https://www.linkedin.com/in/bhawar-syal-5ab224251/", instagramUrl: "#" },
    { name: "Mayank Chaturvedi", role: "Team Member", imageUrl: image2, linkedinUrl: "https://www.linkedin.com/in/mayank-chaturvedi-680944241/", instagramUrl: "https://www.instagram.com/mayank.ch11/" },
    { name: "Rohit Mishra", role: "Team Member", imageUrl: image2, linkedinUrl: "https://www.linkedin.com/in/rohit-mishra954/", instagramUrl: "https://www.instagram.com/rohit_mishra954/" }
  ];

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 justify-center">
          <div className="w-full px-4 text-center mb-10">
            <h2 className="text-4xl font-bold mb-5 text-[#30986d] tracking-tight leading-tight sm:text-5xl md:text-6xl">
              The Team Behind the Project
            </h2>
            <p className="text-lg mb-6 font-light text-gray-600 sm:text-xl md:text-2xl">
              {message}
            </p>
          </div>

          <div className="flex flex-wrap justify-center"> {/* Adjusted to align top row in the middle */}
            {teamMembers.slice(0, 3).map((member, index) => (
              renderTeamMember(member.name, member.role, member.imageUrl, member.linkedinUrl, member.instagramUrl)
            ))}
          </div>

          <div className="flex flex-wrap justify-center"> {/* Adjusted to align bottom row in the middle */}
            {teamMembers.slice(3).map((member, index) => (
              renderTeamMember(member.name, member.role, member.imageUrl, member.linkedinUrl, member.instagramUrl)
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;