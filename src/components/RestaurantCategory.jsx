import ItemList from "../components/ItemList";

const RestaurantCategory = ({ data, showItems, toggleAccordion }) => {
  // console.log(props);

  return (
    <div className="">
      {/* {Accordion Header} */}
      <div className="w-6/12 mx-auto my-2 bg-gray-200 shadow-lg">
        <div
          className="flex justify-between px-4 items-center cursor-pointer"
          onClick={toggleAccordion}
        >
          <span className="text-2xl font-bold my-4">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "-" : "+"}</span>
        </div>
        {/* {Accordion Body} */}

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
