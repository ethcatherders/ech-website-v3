import Button from "../button/page";
export default function HelpUs() {
  return (
    <div className="lg:pb-20 md:pb-16 sm:pb-12 pb-8 flex flex-col text-left items-center gap-y-8">
      <h1 className="text-left lg:text-6xl md:text-5xl sm:text-5xl text-4xl w-full  font-bold text-darkGray ">
        Want to help the Ethereum Cat Herders?
      </h1>

      <p className="lg:text-2xl md:text-xl sm:text-lg text-md text-justify font-light font-roboto">
        There&apos;s plenty of opportunities to weigh in the Ethereum Cat
        Herders, help with documenting meeting notes, writing blogs, make
        community outreach, participate in process improvements, and even earn
        bounty.
      </p>

      <div className="flex sm:flex-row flex-col gap-4 justify-start w-full">
        <Button
          text="Join our Discord"
          link="https://discord.io/EthCatHerders"
          inverted={true}
          fontSize={"xl"}
          size="sm"
        />
        <Button
          text="Join ECH"
          link="https://docs.google.com/forms/d/1o2Oidzt6qZZ296KkqeNMi6xAALIv8zsBK1Va3Lzc9IQ/viewform?edit_requested=true"
          inverted={true}
          fontSize={"xl"}
          size="sm"
        />
      </div>
    </div>
  );
}
