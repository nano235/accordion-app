import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [dropDown, setDropDown] = useState(false)

  return <article className='question'>
    <header>
      <h4>{title}</h4>
      <button className="btn" onClick={() => setDropDown(!dropDown)}>
        {dropDown ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
    </header>
    <p>{dropDown && info}</p>
  </article>;
};

export default Question;
