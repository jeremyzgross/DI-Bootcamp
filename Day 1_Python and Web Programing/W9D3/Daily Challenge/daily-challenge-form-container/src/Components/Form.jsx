// Form.js
import React, { useState } from 'react';

const Form = (props) => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    age: '',
    gender: '',
    destination: 'Thailand',
    dietaryRestrictions: {
      nuts: false,
      lactose: false,
      vegan: false
    }
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    let updatedForm;
    if (name === 'nuts' || name === 'lactose' || name === 'vegan') {
      updatedForm = {...form, dietaryRestrictions: {...form.dietaryRestrictions,[name]: value
        }
      };
    } else {
      updatedForm = {
        ...form,
        [name]: value
      };
    }

    // pass the updated form data to the parent component
    props.onFormDataChange(updatedForm);

    setForm(updatedForm);
  };

  return (
    <>
      <form>
        <input type="text" name="firstname" placeholder="First Name" value={form.firstname} onChange={handleInputChange} />
        <input type="text" name="lastname" placeholder="Last Name" value={form.lastname} onChange={handleInputChange} />
        <input type="text" name="age" placeholder="Age" value={form.age} onChange={handleInputChange} />

        <label>
          Female
          <input type="radio" name="gender" value="Female" checked={form.gender === "Female"} onChange={handleInputChange} />
        </label>
        <label>
          Male
          <input type="radio" name="gender" value="Male" checked={form.gender === "Male"} onChange={handleInputChange} />
        </label>
        <br />

        <label htmlFor="destination">Destination:</label>
        <select name="destination" value={form.destination} onChange={handleInputChange}>
          <option value="Thailand">Thailand</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
        </select>

        <p>Dietary Restrictions</p>
        <label>
          Nuts-Free
          <input type="checkbox" name="nuts" checked={form.dietaryRestrictions.nuts} onChange={handleInputChange} />
        </label>
        <label>
          Lactose-Free
          <input type="checkbox" name="lactose" checked={form.dietaryRestrictions.lactose} onChange={handleInputChange} />
        </label>
        <label>
          Vegan
          <input type="checkbox" name="vegan" checked={form.dietaryRestrictions.vegan} onChange={handleInputChange} />
        </label>

      </form>
    </>
  );
};

export default Form;
