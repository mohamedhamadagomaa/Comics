import { useEffect, useState } from "react";
import Card from "./components/card";
export default function App() {
  const [data, SetData] = useState([]);
  const dataShow = data.map((item) => (
    <Card name={item.name} id={item.id} key={item.id} url={item.url} />
  ));
  console.log(data);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => SetData(data.data.memes.map((res) => res)));
  }, []);
  return <div className="container">{dataShow}</div>;
}
