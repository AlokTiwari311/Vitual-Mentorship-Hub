import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import MentorList from "./MentorList";
import Pagination from "./Pagination";
import Footer from "./Footer";

function BrowseMentor() {
  const [mentors, setMentors] = useState([]);
  const [subjectFilter, setSubjectFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    // Updated list of mentors with different subjects
    setMentors([
      { id: 1, name: "John Doe", subject: "Web Development", experience: "5" },
      { id: 2, name: "Jane Smith", subject: "UI/UX Design", experience: "3" },
      {
        id: 3,
        name: "Sarah Kim",
        role: "Digital Marketing Manager at LinkedIn",
        imageUrl: "https://images.unsplash.com/photo-1558072844-b2e8b546d415?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        skills: ["Digital Marketing Strategy", "Content Marketing", "SEO", "Email Marketing", "Analytics"],
        description: "Sarah has a proven track record of driving successful digital marketing campaigns.",
        profileLink: "/mentor/profile/6"
        , subject: "Web Development", experience: "5"
      },
      {
        id: 4,
        name: "Mike Brown",
        subject: "Digital Marketing",
        experience: "2",
      },
      { id: 5, name: "Emily Davis", subject: "Data Science", experience: "6" },
      {
        id: 6,
        name: "Alex Wilson",
        subject: "Web Development",
        experience: "4",
      },
      { id: 7, name: "Sarah Miller", subject: "UI/UX Design", experience: "5" },
      { id: 8, name: "Chris Lee", subject: "Graphic Design", experience: "8" },
      {
        id: 9,
        name: "Olivia Martinez",
        subject: "Web Development",
        experience: "6",
      },
    ]);
  }, []);

  const filteredMentors = mentors.filter(
    (mentor) =>
      mentor.subject.toLowerCase().includes(subjectFilter.toLowerCase()) &&
      mentor.experience.includes(experienceFilter)
  );

  const indexOfLastMentor = currentPage * itemsPerPage;
  const indexOfFirstMentor = indexOfLastMentor - itemsPerPage;
  const currentMentors = filteredMentors.slice(
    indexOfFirstMentor,
    indexOfLastMentor
  );

  return (
    <>

      <div className="p-4">


        <Filter
          label="Subject"
          value={subjectFilter}
          onChange={(e) => setSubjectFilter(e.target.value)}
        />
        <Filter
          label="Experience"
          value={experienceFilter}
          onChange={(e) => setExperienceFilter(e.target.value)}
        />
        <MentorList mentors={currentMentors} />
        <Pagination
          currentPage={currentPage}
          totalItems={filteredMentors.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
        <Footer />
      </div>
    </>
  );
}

export default BrowseMentor;
