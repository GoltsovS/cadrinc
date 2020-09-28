import * as React from 'react';
import { FC, FormEvent, ReactElement, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import './styles.styl';
import FilterCard from '../filter-card';
import Switch from '../switch';

const UplaodForm: FC = (): ReactElement => {
  const [convertType, setConvertType] = useState<string | null>(null);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.target as HTMLFormElement);
    axios
      .post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        params: { convertType },
      })
      .then((data: AxiosResponse) => {
        console.log(data);
      });
  };

  return (
    <form
      className="upload-form"
      onSubmit={(event) => {
        event.preventDefault();
        submitForm(event);
      }}
    >
      <div className="upload-form__row">
        <input className="upload-form__input" type="file" name="video" id="upload-file" />
        <label className="upload-form__label" htmlFor="upload-file">
          Выбрать файл
        </label>
      </div>
      <FilterCard
        title="Кадрировать видео"
        description="Этот фильтр позволяет перевернуть ваше видео задом на перед"
        buttonText="Загрузить"
        position="right"
        className="upload-form__card"
        onClick={() => {
          setConvertType('cadring');
        }}
      />
      <FilterCard
        title="Развернуть видео"
        description="Этот фильтр позволяет перевернуть ваше видео задом на перед"
        buttonText="Загрузить"
        className="upload-form__card"
        onClick={() => {
          setConvertType('reverse');
        }}
      >
        <Switch id="cadring-audio-switch" label="Звук" />
      </FilterCard>
      <FilterCard
        title="Бумеранг"
        description="Этот фильтр позволяет перевернуть ваше видео задом на перед"
        buttonText="Загрузить"
        position="right"
        className="upload-form__card"
        onClick={() => {
          setConvertType('boomerang');
        }}
      />
    </form>
  );
};

export default UplaodForm;
