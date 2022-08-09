import { useColors } from "../../hooks/color-hooks";
import Color from "./Color";

const ColorList = () => {
  const { colors } = useColors();

  if (!colors.length) return <div>No Colors listed.</div>;

  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
};
export default ColorList;
