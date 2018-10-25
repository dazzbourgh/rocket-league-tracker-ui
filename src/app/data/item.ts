export class Item {
  constructor(id: Number, name: String) {
    this._id = id;
    this._name = name;
  }

  private readonly _id: Number;
  private readonly _name: String;

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }
}
