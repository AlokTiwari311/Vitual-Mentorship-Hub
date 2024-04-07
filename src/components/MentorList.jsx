import React from "react";
import Mentor from "./Mentor";

function MentorList({ mentors }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {mentors.map((mentor) => (
        <div
          key={mentor.id}
          className="bg-white p-4 border rounded-md shadow-md"
        >
          <Mentor mentor={mentor} />
        </div>
      ))}
    </div>
  );
}

export default MentorList;
