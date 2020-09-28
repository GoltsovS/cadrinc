import * as React from 'react';
import { FC, ReactElement, ReactNode, useState } from 'react';
import Button from '../button';
import './styles.styl';

export interface FilterDropdownProps {
  children?: ReactNode;
}

const FilterDropdown: FC = (props: FilterDropdownProps): ReactElement => {
  const { children } = props;
  const [isOpen, changeVisible] = useState<boolean>(false);

  const toggleVisible = () => changeVisible(!isOpen);

  const dropdownBody = <div className="filter-dropdown__container">{children}</div>;
  return (
    <>
      <Button
        text="Опции"
        type="button"
        className={`filter-dropdown__button${isOpen ? ' active' : ''}`}
        onClick={toggleVisible}
      />
      {isOpen ? dropdownBody : null}
    </>
  );
};

export default FilterDropdown;
