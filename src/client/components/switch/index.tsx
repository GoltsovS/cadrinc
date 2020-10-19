import * as React from 'react';
import { FC, ReactElement, MouseEvent, useState } from 'react';
import './styles.styl';

export interface SwitchProps {
  className?: string;
  id: string;
  label: string;
  onClick?: (event: MouseEvent) => void;
}

const Switch: FC<SwitchProps> = (props): ReactElement => {
  const { className, id, label, onClick } = props;
  const [isChecked, toggleChecked] = useState<boolean>(false);
  const handleClick = (event: MouseEvent) => {
    if (onClick) onClick(event);
    toggleChecked(!isChecked);
  };
  return (
    <div className={`switch ${className ? className : ''}`}>
      <span>
        {label} : {isChecked ? 'вкл' : 'выкл'}
      </span>
      <input type="checkbox" id={id} checked={isChecked} />
      <label
        htmlFor={id}
        onClick={(event) => {
          event.preventDefault();
          handleClick(event);
        }}
      />
    </div>
  );
};

export default Switch;
