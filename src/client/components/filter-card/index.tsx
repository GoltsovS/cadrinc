import * as React from 'react';
import './styles.styl';
import { FC, ReactElement } from 'react';
import Button from '../button';
import FilterDropdown from '../filter-dropdown';

export interface FilterCardProps {
  title: string;
  description: string;
  position?: 'left' | 'right';
  buttonText: string;
  className?: string;
  onClick?: () => void;
}

const FilterCard: FC<FilterCardProps> = (props): ReactElement => {
  const { title, description, position, buttonText, className, onClick, children } = props;
  const positionClass = position === 'right' ? 'filter-card_right' : 'filter-card_left';
  const filterDropdown = children ? <FilterDropdown>{children}</FilterDropdown> : null;

  return (
    <section className={`filter-card ${className} ${positionClass}`}>
      <div className="filter-card__info">
        <h2 className="filter-card__title">{title}</h2>
        <p className="filter-card__description">{description}</p>
        <Button text={buttonText} className="filter-card__button" onClick={onClick} />
        {filterDropdown}
      </div>
      <figure className="filter-card__figure">
        <img src="" alt={title} />
      </figure>
    </section>
  );
};

export default FilterCard;
