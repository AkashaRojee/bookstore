export default class BookInfo {
  constructor(category, title, author) {
    this.item_id = `${title}-${author}`;
    this.category = category;
    this.title = title;
    this.author = author;
  }
}
