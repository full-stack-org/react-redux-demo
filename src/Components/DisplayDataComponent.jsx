import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, multiply, divide } from "../Components/Action/";
import { orderCake, orderIceCream } from "../Components/Action/OrderAction";
import fetchData from "../Components/Shared/FetchApi";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Container,Row} from 'react-bootstrap'

export default function 
DisplayDataComponent() {
  const dispath = useDispatch();

  const count = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.logged);
  const cake = useSelector((state) => state.cake.cakes);
  const ice = useSelector((state) => state.ice.icreams);
  const customerData = useSelector((state) => state.user);
  const finalData = customerData.data.map((user) => user.username);
  const errorMessage = customerData.errerror;

  return (
    <div>
      <div>
        Counter: {count} <br />
        {logged ? <h2>User Logged IN</h2> : <h2>User Not Logged In</h2>}
        <br />
        Cakes: {cake}
        <br />
        Ice Cream: {ice}
        <br />
      </div>
      <button onClick={() => dispath(increment(5))}>Increment</button>
      <button onClick={() => dispath(decrement(3))}>Decrement</button>
      <button onClick={() => dispath(multiply(2))}>Multiply</button>
      <button onClick={() => dispath(divide(3))}>Divide</button>
      <button onClick={() => dispath(orderIceCream())}>Order IceCream</button>
      <button onClick={() => dispath(orderCake())}>Order Cake</button>
      <h2>Getting Customer Data</h2>
      <div>
        <button onClick={() => dispath(fetchData())}>Get Customer Data</button>
        <br />
        <br />
        <h4>User Data is {finalData} </h4>{" "}
        <h2 className="errorMessage">{errorMessage}</h2>
      </div>
    </div>
  );
}
