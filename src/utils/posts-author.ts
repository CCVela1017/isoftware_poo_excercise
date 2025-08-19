
export default class PostAuthor {
  public value: string;

  constructor(value: string) {
    this.isValid(value);
    this.value = value;
  }

  private isValid(author: string) {
    if (typeof author !== "string") {
      throw new Error("Invalid author format");
    }

    if (!(author.length > 0 && author.length <= 50)) {
      throw new Error("Invalid author length");
    }
  }
}
