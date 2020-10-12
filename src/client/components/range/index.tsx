import * as React from 'react';
import { FC, ReactElement, ChangeEvent, useState } from 'react';
import './styles.styl';

export interface RangeProps {
  id: string;
  className?: string;
  min: number;
  max: number;
  step?: number;
  label: string;
  val?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const defaultProps: RangeProps = {
  id: '',
  min: 0,
  max: 10,
  step: 1,
  label: '',
};

const Range: FC<RangeProps> = (props): ReactElement => {
  const { id, className, min, max, step, label, val, onChange } = props;
  const [value, setValue] = useState<number>(val ? val : min);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event);
    setValue(Number(event.target.value));
  };
  return (
    <div className={`range ${className ? className : ''}`}>
      <label htmlFor={id}>
        {label}: {value}
      </label>
      <span className="range__value range__value_min">{min}</span>
      <input
        type="range"
        id={id}
        className={className}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
      <span className="range__value range__value_max">{max}</span>
    </div>
  );
};

Range.defaultProps = defaultProps;

export default Range;
