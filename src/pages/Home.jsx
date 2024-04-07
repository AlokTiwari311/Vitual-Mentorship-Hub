import React from "react";
import Cards from "../components/Card";
import MertorCard from "../components/MertorCard";
import Footer from "../components/Footer";

const Home = ({ isLoggedIn }) => {
  return (
    <section className="w-[11/12] border-0 border-green-300  mx-[2vw] mt-[2vw]">
      <div className="flex flex-col md:flex-row h-[80vh]">
        {/* left */}
        <div className="w-full md:w-7/12 mt-[6vw]">
          <h1 className="text-[4vh] md:text-[4vw] font-bold text-[#2BB17A]">
            Receive mentorship from industry experts at any time and from
            anywhere.
          </h1>
          <h2 className="text-[2vh] md:text-[1.5vw]">
            Get access to the best mentors who can offer you support, knowledge,
            and skills to help you achieve your goals.
          </h2>
        </div>
        {/* Right */}
        <div className="w-full md:w-6/12">
          <img
            src="https://mentorlink.in/static/media/landingPagebannner.699a8c4717d18b43b54f.png"
            alt=""
            loading="lazy"
            className="mt-[2vw] w-[100vh]  md:w-[50vw]"
          />
        </div>
      </div>

      
      {/* Why us */}
      <div className="mt-[3vh] md:t-[3vw] text-center">
        <h2 className=" text-[3vh] md:text-[2.5vw] font-serif">
          Why choose us?
        </h2>
        <div className="mt-[3vh] md:mt-[3vw] ">
          <Cards />
        </div>
      </div>

      {/* How Mentor work */}

      <div className="my-[6vh] md:my-[6vw]">
        <h2 className="text-[3vh] md:text-[2.5vw] font-serif text-center mt-2">
          How Mentorlink works
        </h2>
        <p className=" text-[1.8vh] md:text-[1.5vw] text-center">
          Find and schedule industry experts to mentor you and learn skills that
          will help you land your dream job.
        </p>
        <MertorCard
          customClass={"flex-row"}
          text={"Find mentors"}
          desctiption={
            "Looking for a way to enhance your skills and expertise? With Vitual Mentorship Hub, you can connect with knowledgeable mentors who can provide valuable feedback on your work. Whether you're just starting out in your field or seeking to take your career to the next level, our platform can help you achieve your goals. Join us today and take the first step towards professional success!"
          }
          imgSrc={`https://mentorlink.in/static/media/skills1.de1d6ba6c5309d6fdb4a.png`}
        />
        <MertorCard
          customClass={"md:flex-row-reverse"}
          text={"Schedule a session"}
          desctiption={
            "Easily schedule one-on-one sessions with experienced mentors by choosing a date and time that works best for you. Our platform provides a comprehensive list of available experts, so you can find the perfect match for your needs. Whether you're seeking guidance in your career, personal life, or any other area, our mentors are here to help you unlock your full potential.Schedule sessions with experts by selecting your preferred date and time and browsing through a list of available mentors."
          }
          imgSrc={`https://mentorlink.in/static/media/skills2.066cd5e008fd1dc9def2.png`}
        />
        <MertorCard
          customClass={"flex-row"}
          text={"Get the right mentorship"}
          desctiption={
            "Our platform provides you with the opportunity to connect with mentors, have your portfolio reviewed, and expand your network. Use our platform to access these resources and take your career to the next level."
          }
          imgSrc={`https://mentorlink.in/static/media/skills3.54cbc5b5ccb6b5114ed0.png`}
        />
      </div>

      <Footer />
    </section>
  );
};

export default Home;
