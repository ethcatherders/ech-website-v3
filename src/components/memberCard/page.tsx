import { useState } from "react";
import { BsTwitterX, BsGithub } from "react-icons/bs";
import Image from "next/image";

export default function MemberCard(member: any) {
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
            <Image
              src={member.image ? member.image : "/assets/about_no_pic.png"}
              alt={member.name}
              width={300}
              height={300}
              className="rounded-full w-[10rem] h-[10rem] border-2"
            />
            <h2 className="text-3xl text-center font-antonio">
              {member.name.toUpperCase()}
            </h2>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-y-8 p-6">
            <p className="text-justify">{member.description}</p>
            <div className="flex space-x-4">
              {member.twitter && (
                <a href={member.twitter} target="_blank">
                  <BsTwitterX size={25} />
                </a>
              )}
              {member.github && (
                <a href={member.github} target="_blank">
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
