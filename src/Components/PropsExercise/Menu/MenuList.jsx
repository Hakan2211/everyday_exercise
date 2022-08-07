import Ingredients from "./Ingredients";

const MenuList = ({ data }) => {
  console.log(data);
  return (
    <>
      <h1>MenuList</h1>
      {data.map((food) => (
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
