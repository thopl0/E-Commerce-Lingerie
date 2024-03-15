import React from "react";
import Accordion from "./Accordion";
import AccordionComp from "./AccordionComp";

const Faqs = () => {
  return (
    <div className="my-20 mx-20">
      <div className="mx-10">
        <p className="text-3xl font-medium">Frequently Asked Questions</p>
        <span className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          eaque?
        </span>

        <div className="my-10 flex flex-col gap-5">
          <AccordionComp />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
