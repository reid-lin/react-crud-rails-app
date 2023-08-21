import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createPostAsync } from './postSlice';

function PostForm() {
  const dispatch = useDispatch<any>();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function submitHandler(e: any) {
    e.preventDefault();
    const formData = {
      post: {
        title: title,
        body: body,
      }
    }

    dispatch(createPostAsync(formData));
    resetState();
  }

  function resetState() {
    setTitle('');
    setBody('');
  }

  return (
    <div>
      <h1>PostFrom</h1>
      <form action="">
        <input
          type="text"
          className='form-control text-start'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className='form-control text-start'
          name='body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button
          type='submit'
          onClick={(e) => submitHandler(e)}>Submit</button>
      </form>
    </div>
  )
}

export default PostForm