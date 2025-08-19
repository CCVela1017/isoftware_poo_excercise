
export default class PostDescription {
  public value: string;

  constructor(value: string) {
    this.isValid(value);
    this.value = value;
  }

  private isValid(description: string) {
    if (typeof description !== "string") {
      throw new Error("Invalid description format");
    }

    if (!(description.length > 0 && description.length <= 500)) {
      throw new Error("Invalid description length");
    }
  }
}
