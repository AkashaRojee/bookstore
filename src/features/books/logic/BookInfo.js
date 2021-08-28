export default class BookInfo {
  constructor(category, title, author, id) {
    this.id = id || `${title}-${author}`;
    this.category = category;
    this.title = title;
    this.author = author;
  }
}
