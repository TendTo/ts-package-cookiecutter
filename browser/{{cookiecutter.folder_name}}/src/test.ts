export class Test {
    private _button: HTMLButtonElement;
    constructor(private _selector: string) {
      const button = document.querySelector(this._selector);
      if (!(button instanceof HTMLButtonElement)) {
        throw new Error(`Button with selector ${this._selector} not found`);
      }
      this._button = button;
      this.addOnClick();
    }
  
    public get selector(): string {
      return this._selector;
    }
  
    private addOnClick() {
      this._button.addEventListener('click', () => {
        this._button.innerText = 'Fest';
      });
    }
  }
  