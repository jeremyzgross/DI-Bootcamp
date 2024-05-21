import FullList from "./Model/FullList";

interface DOMList {
  ul: HTMLLinkElement;
  clear(): void,
  render(list: FullList): void
}

export default class ListTemplate implements DOMList{
  public ul:HTMLUListElement
  constructor(){
    this.ul = document.getElementById("listItems") as HTMLUListElement
  }
  clear(): void{
    this.ul.innerHTML = ""
  }
  render(FullList: FullList): void {
    this.clear()
    FullList.list.forEach((item)=>{
      const li = document.createElement("li") as HTMLLIElement
      li.className = 'item'

      const checkbox = document.createElement("input") as HTMLInputElement
      checkbox.type = "checkbox"
      checkbox.id = item.id
      checkbox.checked = item.checked
      li.appendChild(checkbox)

      checkbox.addEventListener("change", )

    })
  }
}