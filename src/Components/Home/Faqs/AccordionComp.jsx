import React, { useState } from "react";
import Accordion from "./Accordion";
import { faqs } from "./api";

const AccordionComp = () => {
  const [data, setData] = useState(faqs);

  return (
    <>
      {data.map((currElemnt) => {
        const { id } = currElemnt;
        return <Accordion key={id} {...currElemnt} />;
      })}
    </>
  );
};

export default AccordionComp;
