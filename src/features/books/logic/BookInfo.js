export default class BookInfo {
  constructor(category, title, author) {
    this.id = `${title}-${author}`;
    this.category = category;
    this.title = title;
    this.author = author;
  }
}
