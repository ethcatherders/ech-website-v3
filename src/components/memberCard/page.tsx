import { useState } from "react";
import { MembersData } from "@/types/page";
import { BsTwitterX, BsGithub } from "react-icons/bs";

export default function MemberCard({ member }: { member: MembersData }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <div
        // ref={cardRef}
        onMouseEnter={() => {
          setIsFlipped(true);
        }}
        onMouseLeave={() => {
          setIsFlipped(false);
        }}
        className="border max-w-[35rem] h-[25rem] flex justify-center rounded-lg"
      >
        {!isFlipped ? (
          <div className="flex flex-col justify-center w-full items-center gap-y-6 p-6">
            <img
              src={member.image}
              alt={member.name}
              className="h-60 w-60 rounded-full"
            />
            <h2 className="text-3xl text-center font-antonio">
              {member.name.toUpperCase()}
            </h2>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-y-8 p-6">
            <p className="text-justify">{member.bio}</p>
            <div className="flex space-x-4">
              {member.twitterLink && (
                <a href={member.twitterLink} target="_blank">
                  <BsTwitterX size={25} />
                </a>
              )}
              {member.githubLink && (
                <a href={member.githubLink} target="_blank">
                  <BsGithub size={25} />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
