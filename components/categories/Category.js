import {useEffect} from "react";

export default function Category({ name }) {
  useEffect(() => {
    console.log(name, "name")
  }, [name])
  return name
}
