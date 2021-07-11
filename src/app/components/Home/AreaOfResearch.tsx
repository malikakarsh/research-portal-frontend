import styled from "styled-components";

const Container = styled.div`
  min-height: 50vh;
  min-width: 45vw;
  box-shadow: -4.95575px -3.9646px 9.9115px rgba(0, 0, 0, 0.1),
    4.95575px 3.9646px 9.9115px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 991px) {
    min-width: 80vw;
  }
`;

const ScrollContainer = styled.div`
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar{
    display: none;
  }
`;

const StyledImage = styled.img`
transition: transform 1s;
:hover{
  transform: scale(1.1,1.1);
}
`;

const AreaOfResearchCard = () => {
  return (
    <Container className="lg:m-6 m-4 grid md:grid-cols-5 grid-cols-1 rounded-lg">
      <StyledImage
        src={
          "https://images.unsplash.com/photo-1574170609669-5b5aa0bd7349?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        }
        alt="dummy"
        className="md:col-span-2 col-span-1 h-full w-full rounded-lg"
      />
      <div className="md:col-span-3 col-span-1 flex justify-between items-start flex-col h-full w-full lg:p-8 md:p-6 p-4">
        <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl mb-3 sm:mb-0 text-red-800 font-bold">
          Research
        </p>
        <p className="xl:text-xl lg:text-lg md:text-sm text-xs mb-3 sm:mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi dictum
          pellentesque id ipsum urna consectetur ut. In enim semper ultricies
          morbi. Tristique potenti est accumsan . Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Mi dictum pellentesque id.
        </p>
        <p className="xl:text-2xl lg:text-lg md:text-sm text-xs mb-3 sm:mb-0 text-red-800 hover:text-red-600">Read More -&gt;</p>
      </div>
    </Container>
  );
};

const AreaOfResearch = () => {
  return (
    <div className="w-screen bg-red-50" style={{ minHeight: "85vh" }}>
      <div className=" w-full col-span-2 lg:p-14 md:p-8 p-6 flex justify-center items-start flex-col">
        <p className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-gray-800 border-b-2 border-gray-400 pb-3 font-bold">
          Area of Research
        </p>
      </div>
      <ScrollContainer className="h-full overflow-x-scroll flex  flex-row lg:p-14 md:p-8 p-6">
        <AreaOfResearchCard />
        <AreaOfResearchCard />
        <AreaOfResearchCard />
        <AreaOfResearchCard />
      </ScrollContainer>
    </div>
  );
};

export default AreaOfResearch;
