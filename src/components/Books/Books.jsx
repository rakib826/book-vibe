import React, { useEffect, useState } from 'react';

const Books = () => {
  const [books, setbooks] = useState([])
  useEffect(()=>{
    fetch('./booksData.json')
  },[])
  return (
    <div>
      <h2 className='text-4xl text-center pb-10'>Books</h2>
    </div>
  );
};

export default Books;