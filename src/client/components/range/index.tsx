import * as React from 'react';
import { FC, ReactElement } from 'react';
import './styles.styl';

export interface RangeProps {
  id: string;
  className?: string;
  min: number;
  max: number;
  step?: number;
  label: string;
}

const defaultProps: RangeProps = {
  id: '',
  min: 0,
  max: 10,
  step: 1,
  label: '',
};

const Range: FC<RangeProps> = (props): ReactElement => {
  const { id, className, min, max, step, label } = props;
  return (
    <div className="range">
      <label htmlFor={id}>{label}</label>
      <span>{min}</span>
      <input type="range" id={id} className={className} min={min} max={max} step={step} />
      <span>{max}</span>
    </div>
  );
};

Range.defaultProps = defaultProps;

export default Range;
