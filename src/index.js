import React, { Children } from 'react';
import { createRoot } from 'react-dom/client';
// CSS
import './index.css';
import {books} from './books';
import Book from './Book';
const container = document.getElementById('root');
const root = createRoot(container);

// Setup Vars

// const book = books.map((book)=>{
//   return book.img;
// })
function Bookslist(){
  return (
    <section className='booklist'>
      {books.map((book) => {
         return <Book key={book.id} {...book}/>
      })}
    </section>
  )
}


root.render(<Bookslist />);