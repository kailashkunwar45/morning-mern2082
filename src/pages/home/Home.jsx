import { Button } from "@material-tailwind/react";
import axios from "axios"
import { useState } from "react";




export default function Home() {

  const [data, setData] = useState();

  const getData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
    } catch (err) {
      console.log(err);
    }

  }
  // getData();
  // console.log('hello jee');

  // console.log('render');


  return (
    <div>
      <Button onClick={getData}>Click Me</Button>

    </div>
  )
}