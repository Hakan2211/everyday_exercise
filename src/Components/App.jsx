import { useState } from "react";
import { colorData } from "../data/color-data";
import ColorList from "./State/ColorList";
import StarRating from "./State/StarRating";

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
    </>
  );
};
export default App;
