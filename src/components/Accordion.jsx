import { useState } from "react";
import AccordionItem from "./AccordionItem";

const data = [
  {
    id: 1,
    title: "Q1. Lorem ipsum dolor sit amet consectetur?",
    content: "Lorem ipsum dolor sit amet consectetur. Sit mauris ante sed ullamcorper adipiscing. Cras tortor nunc sed risus sit dictum gravida nunc facilisis. Vulputate sit risus ornare integer ut faucibus posuere. Fringilla eros pulvinar lectus arcu adipiscing nunc. At posuere faucibus urna mattis ipsum velit augue penatibus elementum. Interdum sagittis mi lorem vitae dolor. In diam pulvinar leo elit massa varius aliquam eget. Ut proin urna in sit sodales. Fermentum viverra nisl pellentesque tortor fermentum proin justo purus mollis. Lorem ultrices integer nulla nulla enim amet scelerisque porta eu. Orci dictumst integer auctor turpis venenatis."
  },
  {
    id: 2,
    title: "Q2. Lorem ipsum dolor sit amet consectetur?",
    content: "Lorem ipsum dolor sit amet consectetur. Velit a aliquet semper et cursus. Porttitor lectus sit eu sit vel quis arcu. Elit varius arcu eget diam egestas fusce magnis. Ut suspendisse scelerisque pulvinar proin. Ornare tristique ac ultricies posuere dolor massa faucibus viverra augue. Ornare interdum accumsan orci porta quis nunc venenatis. Nunc est at amet habitant enim a.."
  },
  {
    id: 3,
    title: "Q3. Lorem ipsum dolor sit amet consectetur?",
    content: "Lorem ipsum dolor sit amet consectetur. Velit a aliquet semper et cursus. Porttitor lectus sit eu sit vel quis arcu. Elit varius arcu eget diam egestas fusce magnis. Ut suspendisse scelerisque pulvinar proin. Ornare tristique ac ultricies posuere dolor massa faucibus viverra augue. Ornare interdum accumsan orci porta quis nunc venenatis. Nunc est at amet habitant enim a. ncfcndjkcnksnooaecmkldnklco cndkjncac akj va.."
  },
  {
    id: 4,
    title: "Q4. Lorem ipsum dolor sit amet consectetur?",
    content: "Lorem ipsum dolor sit amet consectetur. Enim ut justo quis lobortis arcu facilisis. Eu dictum lacinia leo massa sit eget id. At consequat molestie lorem integer adipiscing elementum eros dolor. Sit est aliquam diam nunc gravida massa nibh risus. Turpis lectus scelerisque amet velit rhoncus metus morbi. Gravida rutrum pellentesque lectus turpis nullam morbi nisl amet vel."
  },
  {
    id: 5,
    title: "Q5. Lorem ipsum dolor sit amet consectetur?",
    content: "Lorem ipsum dolor sit amet consectetur. Enim ut justo quis lobortis arcu facilisis. Eu dictum lacinia leo massa sit eget id. At consequat molestie lorem integer adipiscing elementum eros dolor. Sit est aliquam diam nunc gravida massa nibh risus. Turpis lectus scelerisque amet velit rhoncus metus morbi. Gravida rutrum pellentesque lectus turpis nullam morbi nisl amet vel."
  },
];

export default function Accordion() {
  const [openItemId, setOpenItemId] = useState(null);

  const handleClick = (id) => {
    setOpenItemId(prevId => (prevId === id ? null : id));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white dark:bg-black text-black dark:text-white">

      {data.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          isOpen={openItemId === item.id}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}
