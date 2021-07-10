const Content = () => {
  return (
    <div
      className="w-screen bg-red-800 grid md:grid-cols-3 grid-cols-1"
      style={{ marginTop: "30vh", minHeight: "85vh",paddingTop:'10vh' }}
    >
      <div className=" w-full md:col-span-2 col-span-1 lg:p-14 md:p-8 p-6 flex justify-center items-start flex-col">
        <p className="xl:text-7xl lg:text-6xl md:text-5xl text-3xl text-red-100 border-b-2 border-gray-100 pb-3 font-bold">
          Piece of Content
        </p>
        <p className="xl:text-2xl lg:text-xl md:text-lg text-sm text-gray-100 mt-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus diam
          quam odio donec fringilla sed. Egestas pharetra, egestas consequat sit
          erat. Condimentum vel vestibulum, facilisi euismod id ornare fermentum
          ac. Bibendum turpis faucibus faucibus lectus cursus elementum.
          Suscipit mauris viverra pellentesque nisi, diam rhoncus vitae purus.
          Sed purus sed lectus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Senectus diam quam odio donec fringilla sed. Egestas
          pharetra, egestas consequat sit erat.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus diam
          quam odio donec fringilla sed. Egestas pharetra, egestas consequat sit
          erat. Condimentum vel vestibulum, facilisi euismod id ornare fermentum
          ac. Bibendum turpis faucibus faucibus lectus cursus elementum.
          Suscipit mauris viverra pellentesque nisi, diam rhoncus vitae purus.
          Sed purus sed lectus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Senectus diam quam odio donec fringilla sed. Egestas
          pharetra, egestas consequat sit erat.
        </p>
      </div>
      <div className=" w-full md:col-span-1 col-span-1 flex justify-center items-center lg:pl-14 md:pl-8 pl-6 md:mb-0 mb-6">
        <img
          src={
            "https://images.unsplash.com/photo-1605976988186-e62871d46505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          }
          alt="dummy"
          className="w-full md:h-1/2 h-full rounded-l-3xl"
        />
      </div>
    </div>
  );
};

export default Content;
