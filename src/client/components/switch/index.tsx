import * as React from 'react';
import { FC, ReactElement, useState, ChangeEvent } from 'react';
import './styles.styl';

export interface SwitchProps {
  className?: string;
  id: string;
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Switch: FC<SwitchProps> = (props): ReactElement => {
  const { className, id, label, onChange } = props;
  const [isChecked, toggleChecked] = useState<boolean>(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    toggleChecked(!isChecked);
    if (onChange) onChange(event);
  };
  return (
    <div className={`switch ${className ? className : ''}`}>
      <span>
        {label} : {isChecked ? 'вкл' : 'выкл'}
      </span>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={(event) => {
          handleChange(event);
        }}
      />
      <label htmlFor={id} />
    </div>
  );
};

export default Switch;
