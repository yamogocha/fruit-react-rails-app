import React, {useState, Fragment} from "react";
import {fruitsActions} from "../../actions";

const NewFruit = ({dispatch, handleChange, handleSubmit}) => {
  return (
    <Fragment>
      <h1>Add New Fruit</h1>
      <form>
        <input
          name="name"
          onChange={handleChange}
          placeholder="Enter the name of the fruit"
        />
        <input
          name="description"
          onChange={handleChange}
          placeholder="Enter a description"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </Fragment>
  );
};

export default NewFruit;
