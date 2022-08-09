import StarRating from "./StarRating";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { useColors } from "../../hooks/color-hooks";

const Color = ({ id, title, color, rating }) => {
  const { removeColor, rateColor } = useColors();
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <ColorBar color={color} />
      <StarRating
        selectedStars={rating}
        onRate={(rating) => rateColor(id, rating)}
      />
    </section>
  );
};

const ColorBar = styled.div`
  height: 50px;
  background-color: ${({ color }) => color};
  cursor: pointer;
`;
export default Color;
