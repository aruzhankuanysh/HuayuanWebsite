import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  // Проверяем, существует ли объект ошибки и содержит ли он свойство statusText
  const errorMessage = error && error.statusText ? error.statusText : 'Unknown error';

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
