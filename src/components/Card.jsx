import React from 'react';

const cardsData = [
    {
        title: "Find mentors within your field of expertise.",
        description: "Connect with experienced mentors from different domains in your network. Get your projects reviewed and receive guidance on topics of your choice.",
        imageUrl: "https://img.freepik.com/free-vector/students-with-laptops-are-searchig-information-computer-class-illustration_335657-264.jpg?w=900"
    },
    {
        title: "Schedule sessions anytime and anywhere.",
        description: "Once you discover mentors in your domain, check the available date and time and book a session with them. You get timely notifications before the session.",
        imageUrl: "https://img.freepik.com/free-vector/appointment-booking-landing-page-template_23-2148561042.jpg?w=900"
    },
    {
        title: "Improve your skills by learning from industry experts.",
        description: "Learn from industry experts, take notes, and receive feedback to upskill and be the best. Gain the latest skills.",
        imageUrl: "https://img.freepik.com/free-vector/hand-drawn-innovation-concept_23-2149167945.jpg?w=900"
    }
];

const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="w-[30%] flex flex-col justify-center items-center md:max-w-sm rounded-[16px] overflow-hidden shadow-lg bg-[#2BB17A] py-4 px-8">
            <img className=" rounded-[8px]"  src={imageUrl} alt="Card" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
};

const Cards = () => {
    return (
        <div className="flex justify-center items-center flex-col md:flex-row space-x-4 w-full space-y-4">
            {cardsData.map((card, index) => (
                <Card

                    key={index}
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                />
            ))}
        </div>
    );
};

export default Cards;
