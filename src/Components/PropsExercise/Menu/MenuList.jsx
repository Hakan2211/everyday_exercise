import { useEffect, useState } from "react";
import { data } from "../../../data/data";
import Ingredients from "./Ingredients";

const MenuList = () => {
  const [dataMenu, setDataMenu] = useState([]);

  useEffect(() => {
    setDataMenu(data);
  }, [data]);

  console.log(dataMenu);

  return (
    <>
      {" "}
      <h1>MenuList</h1>
      {dataMenu.map((food) => (
        <Ingredients
          key={food.name}
          name={food.name}
          ingredients={food.ingredients}
          steps={food.steps}
        />
      ))}
    </>
  );
};
export default MenuList;
