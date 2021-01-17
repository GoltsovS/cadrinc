import * as React from 'react';
import { ChangeEvent, FC, ReactElement, useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import '../components/upload-form/styles.styl';
import FilterCard from '../components/filter-card';
import Switch from '../components/switch';
import Range from '../components/range';

const UploadVideo: FC = (): ReactElement => {
  const [loopCount, setLoopCount] = useState<number | null>(null);
  const [sound, toggleSound] = useState<boolean | null>(null);

  const handleChangeInputFile = (event: ChangeEvent) => {
    const { name, files } = event.target as HTMLInputElement;
    const [file] = files as FileList;
    const formData = new FormData();
    formData.append('video', file);
    axios
      .post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        params: { convertType: name, loopCount, sound },
      })
      .then((data: AxiosResponse) => {
        console.log(data);
      });
  };

  return (
    <form className="upload-form">
      <FilterCard
        title="Кадрировать видео"
        description="Этот фильтр позволяет перевернуть ваше видео задом на перед"
        buttonText="Загрузить"
        name="cadring"
        position="right"
        className="upload-form__card"
        onChange={handleChangeInputFile}
      >
        <Range id="cadring-fps" label="FPS" min={20} max={60} step={1} />
        <Range id="cadring-pts" label="PTS" min={0.5} max={2} step={0.1} />
      </FilterCard>
      <FilterCard
        title="Развернуть видео"
        description="Этот фильтр позволяет перевернуть ваше видео задом на перед"
        buttonText="Загрузить"
        name="reverse"
        className="upload-form__card"
        onChange={handleChangeInputFile}
      >
        <Switch
          id="cadring-audio-switch"
          label="Звук"
          onChange={(event) => {
            const isChecked = event.target.checked;
            toggleSound(isChecked);
          }}
        />
      </FilterCard>
      <FilterCard
        title="Бумеранг"
        description="Этот фильтр позволяет перевернуть ваше видео задом на перед"
        buttonText="Загрузить"
        name="boomerang"
        position="right"
        className="upload-form__card"
        onChange={handleChangeInputFile}
      >
        <Range
          id="boomerang-cicle-count"
          label="Количество циклов"
          min={1}
          max={5}
          val={2}
          onChange={(event) => {
            const value = Number(event.target.value);
            setLoopCount(value);
          }}
        />
      </FilterCard>
    </form>
  );
};

export default UploadVideo;
