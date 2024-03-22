interface ContentProps {
  children: React.ReactNode;
}
const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className="lg:text-2xl md:text-xl sm:text-lg text-md text-justify font-light font-roboto">
      {children}
    </div>
  );
};

export default Content;
