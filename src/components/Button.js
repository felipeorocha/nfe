import React from 'react';

const Button = ({ className, children, addFunc, id, content, title, price }) => {
  return (
  <button className={className} onClick={() => addFunc({id, content, title, price})}>{children}</button>
  );
}

export default Button;
