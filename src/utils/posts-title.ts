export default class PostTitle {
  public value: string;

  constructor(value: string) {
    this.isValid(value);
    this.value = value;
  }

  private isValid(title: string) {
    if (typeof title !== "string") {
      throw new Error("Invalid title format");
    }

    if (!(title.length > 0 && title.length <= 100)) {
      throw new Error("Invalid title length");
    }
  }
}