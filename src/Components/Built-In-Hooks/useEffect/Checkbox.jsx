import { useState, useEffect, useReducer } from "react";
useReducer;

const Checkbox = () => {
  //const [checked, setChecked] = useState(false);
  const [checked, toggle] = useReducer((checked) => !checked, false);

  //   useEffect(() => {
  //     alert(`checked:${checked.toString()}`);
  //   });

  //   const toggle = () => {
  //     setChecked((checked) => !checked);
  //   };
  //alert(`checked:${checked.toString()}`); // will render after clicking ok ----> use useEffect

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={toggle}
        aria-label="Checked"
      />
      {checked ? "Checked" : "not checked"}
    </>
  );
  // alert(`checked:${checked.toString()}`); unreachable code
};
export default Checkbox;
