class Geometric {
    color:string;
    constructor(color: string) {
      this.color = color;
    }
  
    add(): void {
      const boxes = document.querySelector('.boxes') as HTMLDivElement;
      const select = document.getElementById('select') as HTMLSelectElement;
      const Element = document.createElement('div');
      if(select.value!="uchburchak"){
        Element.style.background=`${this.color}`
      }
      Element.style.borderBottom=`100px solid ${this.color}`
      Element.className = `${select.value}`;
      boxes.appendChild(Element);
    }
}
class Shakllar extends Geometric{
    
}
  const shakl = new Shakllar("red");
  const btn = document.querySelector(".Submit") as HTMLButtonElement;
  
  
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.getElementById('input') as HTMLInputElement;
    const boxes = document.querySelector('.boxes') as HTMLDivElement;

    boxes.innerHTML = "";
    for (let i = 0; i < +input.value; i++) {
      shakl.add();
    }
    input.value="";
  });
  
  
  
  