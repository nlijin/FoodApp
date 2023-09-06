import ItemList from "../components/ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [accordionToggle, setAccordionToggle] = useState(false);

  const handleClick = () => {
    setAccordionToggle(!accordionToggle);
  };

  return (
    <div className="">
      {/* {Accordion Header} */}
      <div className="w-6/12 mx-auto my-2 bg-gray-100 shadow-md">
        <div
          className="flex justify-between px-4 items-center"
          onClick={handleClick}
        >
          <span className="text-2xl font-bold my-4">
            {data.title} ({data.itemCards.length})
          </span>
          <span>+</span>
        </div>
        {/* {Accordion Body} */}

        {accordionToggle && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
