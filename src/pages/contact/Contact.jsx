import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import { Button, Card, List, ListItem } from '@material-tailwind/react';

export default function Home() {
  const [isRed, setChange] = useState(false);
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');

  const toggleColor = () => setChange(prev => !prev);
  const generateEmail = () => setEmail(faker.internet.email());
  const generateImage = () => setImage(faker.image.avatar());

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <Button onClick={toggleColor} className={`text-white ${isRed ? 'bg-red-600' : 'bg-black'}`}>
        Change Color
      </Button>

      <Button onClick={generateEmail}>Generate Email</Button>
      <Card className="w-96">
        <List>
          <ListItem>{email}</ListItem>
        </List>
      </Card>

      <Button onClick={generateImage}>Generate Image</Button>
      {image && <img className="h-[400px] w-[400px] object-cover" src={image} alt="Avatar" />}
    </div>
  );
}
