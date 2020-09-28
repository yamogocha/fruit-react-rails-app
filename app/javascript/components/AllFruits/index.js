import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fruitsActions} from "../../actions";
import axios from "axios";
import NewFruit from "../NewFruit";
import Fruit from "../Fruit";

const AllFruits = () => {
  const [fruit, setFruit] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fruitsActions.getFruits());
  }, []);
  const fruits = useSelector(state => state.fruits.fruits);

  const handleChange = e => {
    let {name, value} = e.target;
    setFruit({...fruit, id: fruits.length + 1, [name]: value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fruitsActions.addFruit(fruit, fruits));
  };

  const renderFruits = fruit => {
    return (
      <Fruit
        key={fruit.id}
        fruit={fruit}
        fruits={fruits}
        setFruit={setFruit}
        dispatch={dispatch}
      />
    );
  };

  return (
    <div>
      <h1>List of fruits</h1>
      {fruits && fruits.map(renderFruits)}
      <NewFruit
        dispatch={dispatch}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AllFruits;
