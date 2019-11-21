import React from 'react';

const Button = ({ className, children, addFunc, id, content, title, price }) => {
  return (
  <button className={className} onClick={() => addFunc({id, content, title, price})}>{children}</button>
  );
}

const SecondaryButton = ({ className, children, addFunc, id, content, title, price }) => {
  return (
  <button className={className}>{children}</button>
  );
}

export {
  Button,
  SecondaryButton
}
