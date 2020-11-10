import React, { useContext } from "react";
import { Context } from "../context";
import cart from "../img/imag.png";
import "./add.css";

const TodoItem = ({ title, id, like }) => {
  const { onLike, onDelete } = useContext(Context);

  const clk = ["todo"];

  if (like) {
    clk.push("like");
  }

  return (
    <li className={clk.join(" ")} key={id}>
      <label>
        <input type="checkbox" checked={like} onChange={() => onLike(id)} />
        <span>{title}</span>
        <i className="delete" onClick={() => onDelete(id)}>
          <img style={{ width: "25px" }} src={cart} alt="cart" />
        </i>
      </label>
    </li>
  );
};

export default TodoItem;
