import StarRating from "./StarRating";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

const Color = ({
  id,
  title,
  color,
  rating,
  onRemove = (f) => f,
  onRate = (f) => f,
}) => {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <ColorBar color={color} />
      <StarRating
        selectedStars={rating}
        onRate={(rating) => onRate(id, rating)}
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
