import * as React from 'react';
import { FC, MouseEvent, ReactElement } from 'react';
import './styles.styl';

export interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  text: string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: FC<ButtonProps> = (props): ReactElement => {
  const { onClick, text, className, disabled, type } = props;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(event);
  };

  return (
    <button className={`button ${className}`} disabled={disabled} onClick={handleClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
