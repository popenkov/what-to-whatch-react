import React from 'react';
import { Link } from 'react-router-dom';

function NotFound404() {
  return (
    <>
      <h1>404 страница не найдена</h1>
      <Link to='/'>На главную</Link>
    </>
  );
}

export default NotFound404;
