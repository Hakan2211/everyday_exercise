import Checkbox from "./Built-In-Hooks/useEffect/Checkbox";
import Phrase from "./Built-In-Hooks/useEffect/Phrase";
import AddColorForm from "./Forms/AddColorForm";

import NewForm from "./Forms/NewForm";
import ColorList from "./State/ColorList";

const App = () => {
  return (
    <>
      {/* <AddColorForm />
      <ColorList />
      <Phrase />
      <Checkbox /> */}

      {/* <ColorList

        colors={colors}
        onRateColor={(id, rating) => {
          const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newColors);
        }}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id !== id);
          setColors(newColors);
        }}
      />

      <AddColorForm />

      <AddColorForm /> */}
      <NewForm />
    </>
  );
};
export default App;
