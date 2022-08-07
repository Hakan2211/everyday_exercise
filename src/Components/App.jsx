import MenuList from "./PropsExercise/Menu/MenuList";
import { useEffect, useState } from "react";
import { data } from "../data/data";

const App = () => {
  const [dataMenu, setDataMenu] = useState([]);
  useEffect(() => {
    setDataMenu(data);
  }, [data]);
  return (
    <>
      <h1>Menu</h1>
      <MenuList data={dataMenu} />
    </>
  );
};
export default App;
