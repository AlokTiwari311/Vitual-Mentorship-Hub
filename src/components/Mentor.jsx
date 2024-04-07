import React from "react";
import logo from "../assets/login.png";

function Mentor({ mentor }) {
  return (
    <div className="bg-white p-4 border rounded-md flex items-center space-x-4 shadow-md">
      <img src={logo} alt={mentor.name} className="w-16 h-16 rounded-full" />
      <div>
        <h2 className="text-xl font-bold mb-2">{mentor.name}</h2>
        <p>
          <strong>Subject:</strong> {mentor.subject}
        </p>
        <p>
          <strong>Experience:</strong> {mentor.experience} years
        </p>
      </div>
    </div>
  );
}

export default Mentor;
