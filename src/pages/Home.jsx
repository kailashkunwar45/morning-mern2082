import React from 'react'
import axios from 'axios'
export default function Home() {

  const getdata = async () => {
    try {
      const m = await axios.get("https://jsomplaceholder.typicode.com/posts");
      console.log(m.data);

    }
  }

  return (
    <div>

    </div>
  )
}
