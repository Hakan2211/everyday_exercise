import { useEffect, useState } from "react";

const Phrase = () => {
  const [val, setVal] = useState();
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    setVal("");
  };

  useEffect(() => {
    console.log(`typing "${val}"`);
  }, [val]);
  useEffect(() => {
    console.log(`saved phrase "${phrase}"`);
  }, [phrase]);
  useEffect(() => {
    console.log("either val pr phrase has changed");
  }, [val, phrase]);
  useEffect(() => {
    console.log("log only after initial render");
  }, []);

  return (
    <>
      <label>Favorite phrase:</label>
      <input
        type="text"
        aria-label="Favorite phrase"
        value={val}
        placeholder="phrase"
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={createPhrase}>Send</button>
    </>
  );
};
export default Phrase;
