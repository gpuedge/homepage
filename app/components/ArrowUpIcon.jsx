import React, { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
const ArrowUpIcon = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const handleVisibility = () => {
      window.pageYOffset > 400 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleVisibility);
    return () => {
      window.removeEventListener("scroll", handleVisibility);
    };
  }, []);
  return (
    <>
      {showButton && (
        <div
          className="arrowUpIcon"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <BsFillArrowUpCircleFill />
        </div>
      )}
    </>
  );
};

export default ArrowUpIcon;
