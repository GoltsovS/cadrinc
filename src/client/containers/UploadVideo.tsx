import * as React from 'react';
import { ChangeEvent, FC, ReactElement, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import '../components/upload-form/styles.styl';
import { videoCards, uploadVideoPath } from '../../api.routes';
import { ICard } from '../../database/interfaces/cards';

import FilterCard from '../components/filter-card';

const UploadVideo: FC = (): ReactElement => {
  const [cardList, setCardList] = useState<Array<ICard>>([]);

  useEffect(() => {
    axios
      .get(videoCards)
      .then(({ data }) => {
        setCardList(data.cardList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChangeInputFile = (event: ChangeEvent) => {
    const { name, files } = event.target as HTMLInputElement;
    const [file] = files as FileList;
    const formData = new FormData();
    formData.append('video', file);
    axios
      .post(uploadVideoPath, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        params: { convertType: name },
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

export default UploadVideo;
