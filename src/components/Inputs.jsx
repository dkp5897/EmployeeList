import React from "react";

const Inputs = (props) => {
  const { text, onchangeHandler, onsubmit, getEdit,onEditSubmit } = props;
  return (
    <div className="input">
      <div>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        placeholder="Enter your name"
        value={text.name}
        name="name"
        onChange={onchangeHandler}
      />
      </div>

      <div>
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        placeholder="Enter your Email id"
        value={text.email}
        name="email"
        onChange={onchangeHandler}
      />
      </div>

      <div>
      <label htmlFor="age">Salary: </label>
      <input
        type="number"
        placeholder="Enter your salary"
        value={text.age}
        name="age"
        onChange={onchangeHandler}
      />
      </div>

      {getEdit ? (
        <button type="submit" onClick={onEditSubmit}>
          Edit
        </button>
      ) : (
        <button type="submit" onClick={onsubmit}>
          Submit
        </button>
      )}
    </div>
  );
};

export default Inputs;
