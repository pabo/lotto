import {makeAutoObservable} from 'mobx';

const INDEX_OF_MULTIBALL = 5;

class LottoStore {
    constructor() {
        makeAutoObservable(this);
    };

    filters = [];
    multiFilter = null;
    currentFilter = '';
    hideNonMatching = true;

    handleToggle = (e) => {
        this.hideNonMatching = e.target.checked;
    }

    removeFilter = (value, isMulti) => {
        console.log("removing", value)
        console.log("isMulti", isMulti)
        if (isMulti) {
            this.multiFilter = undefined;
        }
        else {
            this.filters = this.filters.filter(x => x !== value);
        }
    }

    addFilter = (value, isMulti) => {
        if (isMulti) {
            this.multiFilter = value;
        }
        else {
            this.filters = Array.from(new Set([...this.filters, value]));
        }
    }

    handleFilterClick = (e, isMulti) => {
        const value = e.target.getAttribute('data-value');

        this.removeFilter(value, isMulti);
    }

    handleCardClick = (e, isMulti) => {
        if (!isMulti && this.filters.length >= INDEX_OF_MULTIBALL) {
            return;
        }

        const value = e.target.getAttribute('data-value');

        this.addFilter(value, isMulti);
    };

    clearState = () => {
        this.filters = [];
        this.currentFilter = "";
        this.multiFilter = undefined;
    };

    changeHandler = (e) => {
        this.currentFilter = e.target.value;
    };

    submitHandler = (e) => {
        e.preventDefault();

        let paddedCurrentFilter = this.currentFilter;

        if (this.currentFilter.length === 1) {
           paddedCurrentFilter = `0${this.currentFilter}` ;
        }

        this.addFilter(paddedCurrentFilter);
        this.currentFilter = "";
    };
}

export default new LottoStore();