import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formInput, setFormInput] = useState({
    name: "",
    category: "Produce",
  });

  function handleOnChange(e) {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
    // console.log(formInput)
  }

  function handleSubmit (e) {
    e.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      ...formInput,
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" 
          value={formInput.name}
          onChange={handleOnChange}
        />
      </label>

      <label>
        Category:
        <select name="category"
        value={formInput.category}
        onChange={handleOnChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
