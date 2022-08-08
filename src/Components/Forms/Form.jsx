const Form = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="color title..."
        aria-label="title"
        required
      />
      <input type="color" aria-label="color" required />
      <button>Add</button>
    </form>
  );
};
export default Form;
