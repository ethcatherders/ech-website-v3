interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="flex justify-center min-h-screen w-full lg:pt-[25dvh] md:pt-[20dvh] pt-[15dvh]">
      <div className="lg:max-w-[65vw] md:max-w-[75vw] sm:max-w-[85vw] max-w-[95vw] left-0">
        <div className="flex flex-col space-y-8">{children}</div>
      </div>
    </div>
  );
};

export default PageContainer;
