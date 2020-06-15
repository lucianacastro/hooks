import React, { useState } from 'react';
import './IlusKawai.css';
import { Cat } from 'react-kawaii';

const IlusKawai = () => {

  const [properties, setProperties] = useState({
    color: '#596881',
    mood: 'lovestruck'
  });

  const colors = ['#596881', '#FFC0CB', '#F4ADB0', '#EDB5F5', '#9AE0E2', '#80D3F8', '#FBD233'];
  const moods = ['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko'];

  const chooseOneItemRandom = list => list[Math.floor(Math.random()*list.length)];

  const handleMouseHover = (event) => {
    setProperties({
      ...properties,
      color: chooseOneItemRandom(colors),
      mood: chooseOneItemRandom(moods),
    });
  };

  return(
    <div className="ilus-kawai-wrapper" onMouseOver={handleMouseHover}>
      <Cat size={320} mood={properties.mood} color={properties.color} />
    </div>
  );
};

export default IlusKawai;