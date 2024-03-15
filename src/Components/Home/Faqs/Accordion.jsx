import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const Accordion = ({ answer, question }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className=" h-fit w-[70%] p-4 bg-black/10 rounded-md "
      onClick={() => setShow((prev) => !prev)}
    >
      <div className="flex items-center justify-between ">
        <p className="font-medium">{question}</p>
        <span className={`${show && "rotate-90"} `}>
          <FiChevronRight size={20} />
        </span>
      </div>
      <p
        className={`${
          show ? "h-20 block text-sm mt-3 " : "h-0"
        } transition-all duration-200 overflow-hidden`}
      >
        {answer}
      </p>
    </div>
  );
};

export default Accordion;
