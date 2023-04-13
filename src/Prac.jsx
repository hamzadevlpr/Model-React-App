import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export default function Prac() {
  var [counter, setCounter] = useState(1);
  const [selectedValue, setSelectedValue] = useState('123');
  const [selectedText, setSelectedText] = useState('Banana');

  function handleSelectChange(event) {
    const value = event.target.value;
    const multipliedValue = value * counter;
    const nn = event.target.options[event.target.selectedIndex].text;
    setSelectedValue(multipliedValue);
    setSelectedText(nn);
  }


  return (
    <>
      <select value={selectedValue} onChange={handleSelectChange}>
        <option value="123">Banana</option>
        <option value="600">Mango</option>
        <option value="456">Orange</option>
        <option value="876">Struberry</option>
        <option value="56">Watermelon</option>
      </select>
      <h1>{selectedText} : {selectedValue} PKR</h1>
      <h1>{counter}  /  {selectedValue * counter} PKR</h1>
      <button className='btn btn-outline-danger btn-lg w-25 shadow-none' onClick={() => setCounter(counter + 1)}><AddIcon /></button>
      <button className='btn btn-outline-danger btn-lg w-25 shadow-none' onClick={() => setCounter(0)}><RestartAltIcon /></button>
      <button className='btn btn-outline-danger btn-lg w-25 shadow-none' onClick={() => setCounter(counter > 1 ? counter - 1 : counter = 1)}><RemoveIcon /></button>
    </>
  )
}
