"use client"
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/Store/reducer/CounterReducer";

const page = () => {
  const dispatch = useDispatch();
  const {value}=useSelector((state) => state.CounterReducer)

  const AddHandler = () => {
    dispatch(increment(1));
  }

  const SubHandler = () => {
    dispatch(decrement(1));
  }


  return (
    <>
      <h1>Likes:{value}</h1>

      <button onClick={ AddHandler}> ADD 1</button>
      
      
      <button  onClick= {value === 0 ? 0 : SubHandler}> SUB 1</button>

     

    </>
  )
}

export default page