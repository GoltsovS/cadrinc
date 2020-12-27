import * as React from 'react';
import './styles.styl';
import { ChangeEvent, FC, ReactElement } from 'react';
import FilterDropdown from '../filter-dropdown';

export interface FilterCardProps {
  title: string;
  name: string;
  description: string;
  position?: 'left' | 'right';
  buttonText: string;
  className?: string;
  onChange: (event: ChangeEvent) => void;
}

const FilterCard: FC<FilterCardProps> = (props): ReactElement => {
  const { title, description, position, buttonText, className, onChange, children, name } = props;
  const positionClass = position === 'right' ? 'filter-card_right' : 'filter-card_left';
  const filterDropdown = children ? <FilterDropdown>{children}</FilterDropdown> : null;
  const inputId = `filter-card-${name}`;

  return (
    <section className={`filter-card ${className} ${positionClass}`}>
      <div className="filter-card__info">
        <h2 className="filter-card__title">{title}</h2>
        <p className="filter-card__description">{description}</p>
        <input
          className="upload-form__input"
          type="file"
          accept="video/mp4,video/x-m4v,video/*"
          name={name}
          id={inputId}
          onChange={onChange}
        />
        <label htmlFor={inputId} className="button filter-card__upload">
          {buttonText}
        </label>
        {filterDropdown}
      </div>
      <figure className="filter-card__figure">
        <img src="" alt={title} />
      </figure>
    </section>
  );
};

export default FilterCard;
