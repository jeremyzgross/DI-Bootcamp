import ListItem from "./ListItem";

interface List {
  list: ListItem[]
  clearList(): void
  addItem(item:ListItem): void
  removeItem(id: string): void
}

export default class FullList implements List {
  private _list: ListItem[] = []
  get list(): ListItem[]{
    return this._list
  }
  clearList(): void {
    this._list = []
  }
  addItem(item: ListItem): void{
    this._list.push(item)
  }
  removeItem(id: string): void {
      this._list = this._list.filter((item)=> item.id !== id)
  }
}