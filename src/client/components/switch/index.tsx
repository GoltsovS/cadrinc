import * as React from "react";
import {FC, ReactElement} from "react";
import './styles.styl';

export interface SwitchProps {
  className?: string;
  id: string;
  label: string;
}
const Switch: FC<SwitchProps> = (props): ReactElement => {
  const {className, id, label } = props;
  return (
    <div className={`switch ${className ? className : ''}`}>
      <span>{label}</span>
      <input type="checkbox" id={id}/>
      <label htmlFor={id}></label>
    </div>
  );
};

export default Switch;