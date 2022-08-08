import { useRef, useState } from "react";
import useInput from "../../hooks/useInput";

const AddColorForm = ({ onNewColor = (f) => f }) => {
  //Uncontrolled via DOM
  //   const txtTitle = useRef();
  //   const hexColor = useRef();

  //   const submit = (e) => {
  //     e.preventDefault();
  //     const text = txtTitle.current.value;
  //     const color = hexColor.current.value;
  //     onNewColor(text, color);
  //     txtTitle.current.value = "";
  //     hexColor.current.value = "";
  //   };

  //Controlled via React(state)
  //const [title, setTitle] = useState("");
  //const [color, setColor] = useState("#000000");
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const submit = (e) => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetTitle("");
    resetColor("");
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        aria-label="title"
        required
        //ref={txtTitle}
      />
      <input {...colorProps} type="color" aria-label="color" required />
      <button>Add</button>
    </form>
  );
};
export default AddColorForm;
