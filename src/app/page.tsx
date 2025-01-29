"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [displayContent, setDisplayContent] = useState("name");

  const changeDisplayContent = (content: string) => {
    setDisplayContent(content);
  };

  const skillTypes = ["Software Development", "Solution Design/Architecture", "Collaboration Tools", "Methodologies", "Technical Delivery", "Stakeholder Management", "Compliance and Standards", "Financial Management"];
  const skills = [["JavaScript", "Node.js", "React", "Python", "Ruby on Rails"], ["Microservices", "API", "Security", "AWS", "GCP", "Azure"], ["Jira", "Trello", "Confluence", "Notion", "Microsoft 365"], ["Agile (Scrum, SAFe)", "Waterfall", "ITIL"], ["Cloud migration", "API integration", "software and infrastructure upgrades"], ["C-level communication", "cross-functional alignment"], ["NIST", "CIS", "CPS 230", "ISO 27001"], ["Budget oversight", "cost reduction strategies", "vendor management"]];

  return (
    <div>
      <div className="w-screen h-screen flex flex-col items-center justify-between">
        <div className="flex items-center justify-center w-full h-24">
          <div
            className="w-64 h-24 bg-sky-200 opacity-100 hover:opacity-80 flex items-center justify-center transition-opacity duration-300 ease-in-out border border-white"
            onClick={() => changeDisplayContent("about")}
          >
            <div className=" text-xl font-bold">About Me</div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col flex-wrap items-center justify-between gap-4 md:gap-0 w-full h-full ">
          <div
            className="w-64 h-24 bg-blue-200 opacity-100 hover:opacity-80 flex items-center justify-center transition-opacity duration-300 ease-in-out border border-white"
            onClick={() => changeDisplayContent("skills")}
          >
            <div className="text-black text-xl font-bold">
              Skills and Experience
            </div>
          </div>

          <div className="size-auto max-w-[48rem] max-h-[25rem] overflow-hidden">
            {/* Dynamic content displayed below */}
            {displayContent === "name" && (
              <div className="flex flex-row items-center justify-center">
                <div className=" opacity-90 flex flex-row items-center justify-center mx-2">
                <div className="text-4xl align-middle font-bold text-indigo-100 px-1">Tom Wills</div>
                </div>
                
                
                <div className="h-[8rem] w-1 bg-indigo-200 m-1"> </div>

                <div className="flex flex-col items-start justify-center">
                  <div className="text-md bg-sky-900 text-white px-1 m-1 rounded font-bold text-left">Software Developer / Engineer</div>
                  <div className="text-md bg-sky-900 text-white px-1 m-1 rounded font-bold text-left">Cloud Architect</div>
                  <div className="text-md bg-sky-900 text-white px-1 m-1 rounded font-bold text-left">Engineering Lead / Manager</div>
                  <div className="text-md bg-sky-900 text-white px-1 m-1 rounded font-bold text-left">Security Consultant</div>
                  </div>
                
                <img src="/portfolio-site/profile-photo-dark.webp" alt="Profile Photo" width="160" height="179" />
              </div>
            )}
            {displayContent === "about" && (
              <div className="text-lg text-black p-2 bg-sky-100 text-center">
                <p>I build <strong>secure, scalable systems</strong> with a focus on <strong>cloud, security, large enterprise and fintech</strong>. With experience in <strong>fraud prevention, information security, risk management, and large-scale tech projects</strong>, I help teams deliver fast while staying compliant in highly regulated spaces. I enjoy solving complex problems, working with people, and making technology <strong>safer, faster and more efficient</strong>.</p>

              </div>
            )}
            {displayContent === "skills" && (
          
          <div className="flex flex-col items-start justify-start">
          {skillTypes.map((skillType, index) => (
            <div className="flex flex-row items-start justify-start"
            key={`${index}-${skillType}`}>
          <div className="text-md text-white font-bold mr-2 w-[14rem]">{skillType}</div>
          <div className="flex flex-row items-start justify-start">
            {skills[index].map((skill) => (
              <div className="text-sm text-black mx-1 font-bold rounded bg-blue-200 px-1"
              key={`${index}-${skill}`}
              >{skill}</div>
            ))}
          </div>
          </div>
    ))}
        </div>
            )}
            {displayContent === "projects" && (
              <div className="flex flex-row flex-wrap">
                <div className="rounded bg-indigo-200 text-black italic p-1 text-lg font-bold"><p>Projects content coming soon...</p></div>
              </div>
            )}
            {displayContent === "contact" && (
              <div className="flex flex-col items-center justify-center">
                <div className="text-2xl text-white font-bold m-1">Contact Information</div>
                <Link href="https://github.com/thomas-r-wills" className="bg-zinc-200 text-xl p-1 m-1 w-36 text-center hover:text-blue-500 hover:bg-blue-200 hover:underline">
              GitHub
              </Link>
              <Link href="https://www.linkedin.com/in/tomwills0001" className="bg-zinc-200 text-xl p-1 m-1 w-36 text-center hover:text-blue-500 hover:bg-blue-200 hover:underline">LinkedIn</Link>
              </div>
            )}
            {/* End of dynamic content */}
          </div>

          <div
            className="w-64 h-24 bg-indigo-200 opacity-100 hover:opacity-80 flex items-center justify-center transition-opacity duration-300 ease-in-out border border-white"
            onClick={() => changeDisplayContent("projects")}
          >
            <div className="text-black text-xl font-bold">Projects</div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-24">
          <div
            className="w-64 h-24 bg-zinc-200 opacity-100 hover:opacity-80 flex items-center justify-center transition-opacity duration-300 ease-in-out border border-white"
            onClick={() => changeDisplayContent("contact")}
          >
            <div className="text-black text-xl font-bold">
              Contact
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}