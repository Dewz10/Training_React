import { useParams } from "react-router-dom";
import { useEffect } from "react";
import blogs from "../data/blogs";

export default function Details() {
  const {id} = useParams();
  useEffect(()=>{
    const result = blogs.find((item)=>item.id === parseInt(id));
  },[])
  return (
    <>
    <h2>รายละเอียดบทความ: {id}</h2>
    </>
  );
}