/* eslint-disable */
export default class API {
  constructor() {
    this.url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LDqE4jqcttj5TFLLJ2je/books';
  }

  // async get(leaderboard) {
  //   const response = await fetch(this.url);

  //   const data = await response.json();

  //   leaderboard.load(data.result);
  // }

  async post(payload) {
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
}