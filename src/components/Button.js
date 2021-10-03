import React from 'react';

export const Button = ({
  color = 'primary',
  children,
  icon,
  fn = () => {},
}) => {
  return (
    <button
      onClick={fn}
      className={color === 'primary' ? 'btn__primary' : 'btn__secondary'}>
      <span>{children}</span>
      {icon}
    </button>
  );
};
