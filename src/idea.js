class Idea {
  constructor(title, body) {
    //needed plus one when adding ideas through main.js during dev
    //not needed for manual creation
    this.id = Date.now() + 1 + "";
    this.title = title;
    this.body = body;
    this.star = false;
  }
}
