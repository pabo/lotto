import {extendObservable} from 'mobx';

class LottoStore {
  constructor() {
    extendObservable(this, {
      filters: [],
      currentFilter: "",
      handleCardClick: (e) => {
        const value = e.target.classList.contains('number') ?
          e.target.innerText :
          e.target.nextSibling.innerText;

        if (e.target.closest('div.filters')) {
          // clickd on a filter; remove it
          this.filters = this.filters.filter(x => x !== value);
        }
        else {
          // clicked on non-a-filter, add as filter
          this.filters.push(value);
        }
      },
      clearHandler: () => {
        this.filters = [];
        this.currentFilter = "";
      },
      changeHandler: (e) => {
        this.currentFilter = e.target.value;
      },
      submitHandler: (e) => {
        e.preventDefault();
  
        this.filters.push(this.currentFilter);
        this.currentFilter = "";
      }
    });
  }
}

export default new LottoStore();