import { useRef, useState } from "react";

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
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");
  const submit = (e) => {
    e.preventDefault();
    onNewColor(title, color);
    setTitle("");
    setColor("");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="color title..."
        aria-label="title"
        required
        //ref={txtTitle}
      />
      <input
        value={color}
        onChange={(e) => setColor(e.target.value)}
        type="color"
        aria-label="color"
        required
      />
      <button>Add</button>
    </form>
  );
};
export default AddColorForm;
