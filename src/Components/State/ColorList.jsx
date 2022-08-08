import Color from "./Color";

const ColorList = ({ colors = [], onRemoveColor, onRateColor }) => {
  if (!colors.length) return <div>No Colors listed.</div>;

  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
};
export default ColorList;
