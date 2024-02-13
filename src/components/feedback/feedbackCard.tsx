import Image from "next/image";
export default function FeedbackCard(feedback: any) {
  return (
    <div className="flex flex-col box-black-bg w-full justify-between h-[30rem] items-center p-6 border-2 border-black rounded-2xl space-y-8">
      <div className="flex flex-col gap-4 items-center justify-center">
        <Image
          src={feedback.image ? feedback.image : "/assets/about_no_pic.png"}
          alt="feedback"
          width={300}
          height={300}
          className="rounded-full w-[10rem] h-[10rem] border-2"
        />
        <a href={feedback.socail} target="_blank">
          <h3 className="text-center text-3xl font-bold">{feedback.name}</h3>
        </a>
      </div>

      <p className="text-xl text-center flex h-full justify-center items-center">
        {feedback.feedback}
      </p>
    </div>
  );
}
