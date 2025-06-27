

import React, { useEffect, useRef, useState } from 'react'



// const m = axios.get("https://jsonplaceholder.typicode.com/posts")

export default function Home() {

  const resultref = useRef('loading...');
  const [render, setrender]
    = useState(false);

  useEffect(() => {
    const m = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Rajesh Hamal");
      }, 2000)
    });
  });

  m.then((val) => {
    console.log(`Sucess : ${val}`);
  }).catch((err) => {
    console.log(`rejected : ${err}`);
  })
  // .finally(() => {
  //   console.log('hello')
  // })

  return (
    <div>
      {resultref.current}
    </div>
  )
}




