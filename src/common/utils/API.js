/* eslint-disable */
export default class API {
  constructor() {
    this.base = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LDqE4jqcttj5TFLLJ2je/books';
  }

  async get() {
    this.url = this.base;

    const response = await fetch(this.url);

    const data = await response.json();

    return data;
  }

  async post(payload) {

    this.url = this.base;

    await fetch(

      this.url,

      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(payload),
      },

    );
  }

  async delete(payload) {

    this.url = this.base + `/${payload}`;

    const res = await fetch (

      this.url,

      {
        method: 'DELETE'
      }
    );

    console.log(res);
  }
}