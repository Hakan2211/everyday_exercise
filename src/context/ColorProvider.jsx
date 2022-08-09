import { useState, createContext } from "react";
import { colorData } from "../data/color-data";
import { v4 } from "uuid";

const ColorContext = createContext();
const ColorProvider = () => {
  const [colors, setColors] = useState(colorData);

  const addColor = (title, color) => {
    setColors([
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color,
      },
    ]);
  };

  const rateColor = (id, rating) => {
    setColors(
      colors.map((color) => (color.id === id ? { ...color, rating } : color))
    );
  };

  const removeColor = (id) =>
    setColors(colors.filter((color) => color.id !== id));

  return (
    <ColorContext.Provider value={{ colors, addColor, rateColor, removeColor }}>
      {children}
    </ColorContext.Provider>
  );
};
export default ColorProvider;
