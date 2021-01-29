import { ChangeEvent, FC, ReactElement, useEffect, useState } from 'react';
import * as React from 'react';
import { pictureCards, uploadPicturePath } from '../../api.routes';
import axios, { AxiosResponse } from 'axios';
import { ICard } from '../../database/interfaces/cards';

import FilterCard from '../components/filter-card';

const UploadPicture: FC = (): ReactElement => {
  const [fps, setFps] = useState<number | null>(null);
  const [cardList, setCardList] = useState<Array<ICard>>([]);

  useEffect(() => {
    axios
      .get(pictureCards)
      .then(({ data }) => {
        const { cardList } = data;
        setCardList(cardList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChangeInputFile = (event: ChangeEvent) => {
    const { files } = event.target as HTMLInputElement;
    const [file] = files as FileList;
    const formData = new FormData();
    formData.append('pictures', file);

    axios
      .post(uploadPicturePath, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        params: { fps },
      })
      .then((data: AxiosResponse) => {
        console.log(data);
      });
  };

  return (
    <form className="upload-form">
      {cardList.map(({ title, description, name }, index) => (
        <FilterCard
          key={name}
          title={title}
          name={name}
          description={description}
          buttonText="Загрузить"
          position={index % 2 === 0 ? 'right' : 'left'}
          onChange={handleChangeInputFile}
        />
      ))}
    </form>
  );
};

export default UploadPicture;
