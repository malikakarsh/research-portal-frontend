import { useEffect } from "react";
import { useState } from "react";

const dummyImages = [
  "https://images.unsplash.com/photo-1562774053-701939374585?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1964&q=80",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1613685353742-5f7cad79f22f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80",
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1581087725018-45eb42ace6eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
];

const Landing = () => {
  const [current, setCurrent] = useState(0);

  const handleRightClick = () => {
    if (current + 1 === dummyImages.length) {
      setCurrent(0);
    } else {
      setCurrent((val) => val + 1);
    }
  };

  const handleLeftClick = () => {
    if (current === 0) {
      setCurrent(dummyImages.length - 1);
    } else {
      setCurrent((val) => val - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (current + 1 === dummyImages.length) {
        setCurrent(0);
      } else {
        setCurrent((val) => val + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="w-screen bg-gray-600 relative" style={{ height: "85vh" }}>
      <img src={dummyImages[current]} alt="home" className="w-full h-full object-cover" style={{objectPosition:'center'}} />
      <div
        onClick={handleLeftClick}
        className="h-10 w-10 lg:h-20 lg:w-20 md:h-14 md:w-14 rounded-full bg-transparent absolute top-1/2 left-10 bg-gray-600 hover:bg-gray-500 flex justify-center items-center bg-opacity-80 hover:bg-opacity-70"
      >
        <div className="h-2/4 w-2/4">
          <svg viewBox="0 0 20 20">
            <path
              fill="grey"
              opacity="0.8"
              d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"
            ></path>
          </svg>
        </div>
      </div>
      <div
        onClick={handleRightClick}
        className="h-10 w-10 lg:h-20 lg:w-20 md:h-14 md:w-14 rounded-full bg-transparent absolute top-1/2 right-10 bg-gray-600 hover:bg-gray-500 flex justify-center items-center bg-opacity-80 hover:bg-opacity-70"
      >
        <div className="h-2/4 w-2/4">
          <svg viewBox="0 0 20 20">
            <path
              fill="grey"
              opacity="0.8"
              d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
            ></path>
          </svg>
        </div>
      </div>
      <p className=" absolute lg:text-6xl text-4xl w-full text-center top-1/3 text-gray-50 font-bold">
        Welcome to NITT
      </p>
    </div>
  );
};

export default Landing;
