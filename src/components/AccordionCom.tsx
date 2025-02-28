import React from "react";
import { Accordion } from "@mantine/core";
import { faq } from "../dummyData/data";
import { FaPlus } from "react-icons/fa6";
const AccordionCom: React.FC = () => {
  return (
    <Accordion
      styles={(theme) => ({
        item: {
          backgroundColor: theme.colors.brand[0],
          borderRadius: "3px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          marginBottom: "10px",
          width: "auto",
        },
        control: {
          fontWeight: "bold",
          fontSize: "18px",
          width: "fit-content",
          minWidth: "200px",
        },
        panel: {
          fontSize: "16px",
          width: "auto",
          maxWidth: "40rem",
        },
      })}
    >
      {faq.map((value) => {
        return (
          <Accordion.Item key={value.id} value={value.id.toString()}>
            <Accordion.Control icon={<FaPlus />}>
              {value.title}
            </Accordion.Control>
            <Accordion.Panel>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              animi deserunt doloribus ad, dolore facilis sequi nulla
              exercitationem asperiores reprehenderit praesentium corrupti enim
              earum sapiente est doloremque tenetur, quam voluptatibus magni
              harum natus odio esse molestiae. Unde perspiciatis amet saepe et
              voluptas est id, rerum nihil voluptatum, ipsam autem impedit
              numquam odio nisi dolores omnis, iure tempora ab eum ea libero
              temporibus? Nihil commodi optio sequi iste unde soluta? Quae,
              cumque rerum ea hic q
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default AccordionCom;
