


import axios from "axios"


export default function Home() {

  const m = axios.get('https://jsonplaceholder.typicode.com/posts');

  console.log(m);


  return (
    <div>

    </div>
  )
}

