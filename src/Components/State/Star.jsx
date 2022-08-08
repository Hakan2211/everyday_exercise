import styled from "styled-components";
import { FaStar } from "react-icons/fa";
const Star = ({ selected = false, onSelect = (f) => f }) => {
  return <StarIcon color={selected ? "red" : "grey"} onClick={onSelect} />;
};

const StarIcon = styled(FaStar)`
  font-size: 25px;
  :hover {
    fill: red;
    cursor: pointer;
  }
`;

export default Star;
