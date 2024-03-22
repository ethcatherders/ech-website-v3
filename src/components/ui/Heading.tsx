interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h1 className="xl:text-6xl lg:text-4xl sm:text-4xl text-3xl text-left font-roboto font-bold text-darkGray">
      {text}
    </h1>
  );
};

export default Heading;
