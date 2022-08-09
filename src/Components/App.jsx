import { useState } from "react";
import { colorData } from "../data/color-data";
import AddColorForm from "./Forms/AddColorForm";
import NewForm from "./Forms/NewForm";
import ColorList from "./State/ColorList";

const App = () => {
  const [colors, setColors] = useState(colorData);
  return (
    <>
      <ColorList
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
      <NewForm />
    </>
  );
};
export default App;
