import React, {useState, Fragment} from "react";
import {fruitsActions} from "../../actions";
import {useSelector} from "react-redux";

const Fruit = ({fruit, fruits, setFruit, dispatch}) => {
  const [newFruit, setNewFruit] = useState({});
  const handleDelete = () => {
    dispatch(fruitsActions.deleteFruit(fruit.id));
  };

  const handleUpdate = e => {
    let {name, value} = e.target;
    setNewFruit({...newFruit, id: fruit.id, [name]: value});
  };

  const editable = useSelector(state => state.fruits.editable);
  const toggleEdit = () => {
    dispatch(fruitsActions.toggleEdit());
  };

  const submitUpdate = e => {
    if (editable) {
      e.preventDefault();
      dispatch(fruitsActions.updateFruit(newFruit, fruits));
      toggleEdit();
    } else toggleEdit();
  };

  return (
    <Fragment>
      {editable ? (
        <ul>
          <li>
            <input
              name="name"
              onChange={handleUpdate}
              placeholder="Change the fruit name"
              defaultValue={fruit.name}
            />
          </li>
          <li>
            <input
              name="description"
              onChange={handleUpdate}
              placeholder="Change the fruit description"
              defaultValue={fruit.description}
            />
          </li>
        </ul>
      ) : (
        <ul>
          <li>{fruit.name}</li>
          <li>{fruit.description}</li>
        </ul>
      )}
      <button onClick={submitUpdate}>{editable ? "Submit" : "Edit"}</button>
      <button onClick={handleDelete}>Delete</button>
    </Fragment>
  );
};

export default Fruit;
