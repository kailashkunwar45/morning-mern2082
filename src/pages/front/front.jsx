
import React, { useRef } from 'react';
import { Button, Input } from '@material-tailwind/react';

export default function Home() {
  const inputRef = useRef();
  const timeRef = useRef();



  const handleAdd = () => {
    inputRef.current.focus();
    const time = new Date().toLocaleTimeString();
    const li = document.createElement('li');
    li.innerText = time;
    timeRef.current.appendChild(li);
  };

  const handleClear = () => {
    inputRef.current.value = '';
    timeRef.current.text = '';
  };

  const handleHighlight = () => {
    inputRef.current.style.border = '2px solid red';
    inputRef.current.style.outline = 'none';
  };

  return (
    <div className="p-6 flex flex-col gap-4 max-w-md mx-auto">
      <Input label="Type something..." inputRef={inputRef} />
      <div className="flex gap-2">
        <Button onClick={handleAdd} color="green">Add Timestamp</Button>
        <Button onClick={handleClear} color="blue-gray">Clear</Button>
        <Button onClick={handleHighlight} color="red">Highlight Input</Button>
      </div>
      <ul ref={timeRef} className="list-disc pl-5 text-gray-800"></ul>
    </div>
  );
}



import React, { useRef, useEffect } from 'react';
import { Button, Card } from '@material-tailwind/react';
import { faker } from '@faker-js/faker';

export default function Home() {
  const inputRef = useRef();
  const imageContainerRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addImage = () => {
    const newImg = document.createElement('img');
    newImg.src = faker.image.avatar();
    newImg.alt = 'Random Avatar';
    newImg.className = ' h-30 w-30 rounded-full border m-2';
    imageContainerRef.current.appendChild(newImg);
  };

  const clearInput = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  const clearImages = () => {
    imageContainerRef.current.innerHTML = '';
  };

  return (
    <div className="p-4 space-y-4">
      <input
        type="text"
        placeholder="Type your name"
        ref={inputRef}
        className="p-2 border rounded"
      />

      <div className="flex gap-2">
        <Button onClick={addImage} color="blue">Add Image</Button>
        <Button onClick={clearInput} color="red">Clear Input</Button>
        <Button onClick={clearImages} color="green">Clear Images</Button>
      </div>

      <Card className="p-4 mt-4">
        <div
          ref={imageContainerRef}
          className="flex flex-wrap gap-4"
        ></div>
      </Card>
    </div>
  );
}


import { Button } from '@material-tailwind/react';
import React, { useEffect } from 'react'
import { useRef } from 'react'

export default function Home() {
  const inputref = useRef();
  const deleteindexref = useRef();
  const containnerref = useRef();

  useEffect(() => {
    inputref.current.focus();
  }, []);

  const addpara = () => {
    const text = inputref.current.value.trim();
    if (text === '') return;

    const newpara = document.createElement('p');
    newpara.textContent = text;
    newpara.className = 'p-2 border-b border-gray-300';
    containnerref.current.appendChild(newpara);
    inputref.current.value = ''
    inputref.current.focus();
  };



  const clear = () => {
    inputref.current.value = ''
    inputref.current.focus();
  }



  return (
    <div className='p-5 gap-5 flex flex-col'>
      <input type="text" placeholder='write something'
        ref={inputref}
        className='p-2 border-b rounded-l-full rounded-r-full' />
      <div ref={containnerref} className='space-x-4 space-y-4'></div>

      <Button onClick={addpara}>click to add paragraph</Button>

      <Button onClick={clear}>clear paragraph</Button>


    </div>
  )
}


import { Button } from '@material-tailwind/react';
import React, { useRef } from 'react';
import { faker } from '@faker-js/faker';

export default function Home() {
  const refmail = useRef();

  const addmail = () => {
    const newmail = faker.internet.email();
    const p = document.createElement('p');
    p.textContent = newmail;
    p.className = 'text-lg my-1';
    refmail.current.appendChild(p);
  };

  return (
    <div className='p-5'>
      <Button onClick={addmail}>Add fake mail</Button>
      <div ref={refmail} className='mt-4'></div>
    </div>
  );
}



import { Button } from '@material-tailwind/react';
import React, { useEffect, useRef } from 'react';
import { faker } from '@faker-js/faker';

export default function Home() {
  const userRef = useRef();
  const mailRef = useRef();
  const imgref = useRef();

  const addImage = () => {
    const newimg = faker.image.avatar();
    const img = document.createElement('img');
    img.src = newimg;
    img.alt = 'Random Avatar';
    img.className = 'w-10 h-10 rounded-full m-2';
    imgref.current.appendChild(img);
  };


  const addMail = () => {
    const newMail = faker.internet.email();
    const li = document.createElement('li');
    li.textContent = newMail;
    li.className = "my-2";  // margin-y for spacing
    mailRef.current.appendChild(li);
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const addName = () => {
    const newName = faker.internet.userName();
    const li = document.createElement('li');
    li.textContent = newName;
    li.className = "my-2";
    userRef.current.appendChild(li);
  };

  const clearimage = () => {
    imgref.current.innerHTML = '';
  };
  const clearNames = () => {
    userRef.current.textContent = '';
  };

  const clearMails = () => {
    mailRef.current.textContent = '';
  };

  return (
    <div className='gap-5 flex flex-col p-5'>
      <div className='gap-10 flex'>
        <Button onClick={addName}>Add Names</Button>
        <Button onClick={addMail}>Add Emails</Button>
        <Button onClick={addImage}>add image</Button>
      </div>

      <div className='flex gap-5 mt-5'>
        <div ref={userRef} className='font-bold text-gray-700 text-xs flex flex-col'></div>
        <div ref={mailRef} className='font-bold text-green-900 text-xs flex flex-col'></div>
        <div ref={imgref} className="flex flex-col gap-2"></div>

      </div>

      <div className='flex gap-10 mt-4'>
        <Button onClick={clearNames} color='red'>Clear Names</Button>
        <Button onClick={clearMails} color='red'>Clear Emails</Button>
        <Button onClick={clearimage} color='red'>clearimage</Button>
      </div>
    </div>
  );
}