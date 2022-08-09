import { useState } from "react";
import { useLoginFormValidator } from "./hooks/useLoginFormValidator";

const NewForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { errors, validateForm, onBlurField } = useLoginFormValidator(form);

  const onSubmitForm = (e) => {
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;
    alert(JSON.stringify(form, null, 2));
  };

  const onUpdateField = (e) => {
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [field]: e.target.value,
    };
    setForm(nextFormState);
    if (errors[field].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
  };
  return (
    <form onSubmit={onSubmitForm}>
      <div>
        <label>Email</label>
        <input
          type="text"
          aria-label="Email"
          name="email"
          value={form.email}
          onChange={onUpdateField}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          aria-label="Password Field"
          name="password"
          value={form.password}
          onChange={onUpdateField}
        />
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          aria-label="Confirm password field"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={onUpdateField}
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};
export default NewForm;
