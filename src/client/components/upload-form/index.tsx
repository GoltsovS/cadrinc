import * as React from 'react';
import { FC, FormEvent, ReactElement, useState } from 'react';
import Button from '../button';
import axios, { AxiosResponse } from 'axios';
import './styles.styl';

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
        <input type="file" name="video" />
      </div>
      <div className="upload-form__row upload-form__buttons">
        <Button
          text="Кадрировать видео"
          className="upload-form__button"
          data-convert-type="cadring"
          onClick={() => {
            setConvertType('cadring');
          }}
        />
        <Button
          text="Развернуть видео"
          className="upload-form__button"
          onClick={() => {
            setConvertType('reverse');
          }}
        />
        <Button
          text="Бумеранг"
          className="upload-form__button"
          data-convert-type="boomerang"
          onClick={() => {
            setConvertType('boomerang');
          }}
        />
      </div>
    </form>
  );
};

export default UplaodForm;
