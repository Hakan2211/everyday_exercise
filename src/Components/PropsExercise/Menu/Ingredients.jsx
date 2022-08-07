const Ingredients = ({ name, ingredients, steps }) => {
  return (
    <>
      <h1>{name}</h1>
      <h3>Ingredients</h3>
      {ingredients.map((ingredient, i) => {
        return (
          <div key={i}>
            <h5>{ingredient.name}</h5>
            <p>
              {ingredient.amount} - {ingredient.measurement}
            </p>
          </div>
        );
      })}
      <hr />
      {steps.map((step, i) => (
        <p key={i}>{step}</p>
      ))}
      <hr></hr>
    </>
  );
};
export default Ingredients;

// You can create another components for ingredients and steps and pass the props further to the child.
// Change Ingredients to food
// Prop drilling => therefore state management
// 3 different arts of state management: flux,proxy,atomic pattern
