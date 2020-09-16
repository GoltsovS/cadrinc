import { Component } from 'react';
import * as React from 'react';
import axios, { AxiosResponse } from 'axios';

class Upload extends Component {
  submitForm(event: any) {
    const formData = new FormData(event.target.closest('form'));
    axios
      .post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((data: AxiosResponse) => {
        console.log(data);
      });
  }

  render() {
    return (
      <div>
        <form>
          <input type="file" name="video" />
          <button
            onClick={(event: any) => {
              event.preventDefault();
              this.submitForm(event);
            }}
          >
            Отправить
          </button>
        </form>
      </div>
    );
  }
}

export default Upload;
