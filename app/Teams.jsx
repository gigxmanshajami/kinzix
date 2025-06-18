import React from 'react'

const teamMembers = [
  {
    name: "John Smith",
    title: "CEO and Founder",
    experience: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    img: "/john.png",
  },
  {
    name: "Jane Doe",
    title: "Director of Operations",
    experience: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    img: "/jane.png",
  },
  {
    name: "Michael Brown",
    title: "Senior SEO Specialist",
    experience: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    img: "/michael.png",
  },
  {
    name: "Emily Johnson",
    title: "PPC Manager",
    experience: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    img: "/emily.png",
  },
  {
    name: "Brian Williams",
    title: "Social Media Specialist",
    experience: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    img: "/brian.png",
  },
  {
    name: "Sarah Kim",
    title: "Content Creator",
    experience: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    img: "/sarah.png",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <h2 className="text-white text-[40px] font-medium bg-[#FE332F] px-5 py-1 rounded-[10px]">
            Team
          </h2>
          <p className="text-white max-w-[500px]">
            Meet the skilled and experienced team behind our successful digital marketing strategies
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[30px] shadow-md p-6 flex flex-col items-center text-center relative"
            >
              <div className="w-[100px] h-[100px] relative mb-4">
                <div className="absolute inset-0 bg-[#FE332F] rounded-full rotate-45 scale-110 z-0" />
                <img
                  src={member.img}
                  alt={member.name}
                  className="relative z-10 w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute top-4 right-4 w-6 h-6 bg-white rounded-full flex items-center justify-center border border-black">
                <span className="text-[12px] font-bold">in</span>
              </div>
              <h3 className="text-black font-semibold text-[18px]">{member.name}</h3>
              <p className="text-gray-700 text-[14px]">{member.title}</p>
              <hr className="w-full border-t border-gray-300 my-4" />
              <p className="text-[13px] text-gray-800">{member.experience}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-[#1A1A1A] text-white px-8 py-3 rounded-[15px] text-[16px]">
            See all team
          </button>
        </div>
      </div>
    </section>
  );
}
