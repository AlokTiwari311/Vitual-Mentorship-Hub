import React from "react";
import RecomendedMentors from "../components/RecomendedMentors";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <>
      <div className="bg-gray-900 w-full py-12 sm:py-24 px-4 text-center h-[70vh]">
        <h1 className="text-[7vw] sm:text-4xl text-white font-bold">
          Welcome, Rohit Kumar!
        </h1>
        <p className="text-white py-6 max-w-lg mb-4 mx-auto">
          Are you ready to take your career to the next level? Connect with experienced mentors who can guide you towards success!
        </p>
        <a href="/mentor/browse" className="bg-white text-gray-900 py-4 px-8 rounded-md font-semibold">
          Browse mentors
        </a>
      </div>
      {/* If user is new and not added update profile image */}
      <div className="bg-[#2BB17A] text-white text-center py-3 px-2">
        Double your chances of success for your applications with our proven approach.
        <a href="/mentee/management/" className="font-bold underline text-white ml-1">
          Add a profile image →
        </a>
      </div>
      <div className="max-w-screen-lg px-4 mx-auto py-8">
        <h2 className="my-[5vw] sm:my-[5vh] text-gray-950 font-bold text-3xl sm:text-4xl  w-[80vw]">Recommended for you</h2>
      </div>
      <RecomendedMentors />
      <Footer />
    </>
  );
};

export default Dashboard;
