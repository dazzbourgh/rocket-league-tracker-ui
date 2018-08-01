export class Item {
  constructor(id: Number, name: String) {
    this._id = id;
    this._name = name;
  }

  private _id: Number;
  private _name: String;

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }
}
