var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { setSearchFocus } from './searchBar.js';
import { getSearchTerm } from './dataFunction.js';
document.addEventListener("readystatechange", (e) => {
    initApp();
});
const initApp = () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", submitTheSearch);
};
const submitTheSearch = (e) => {
    e.preventDefault();
    processTheSearch();
    setSearchFocus();
};
const processTheSearch = () => __awaiter(void 0, void 0, void 0, function* () {
    const searchTerm = getSearchTerm();
    if (searchTerm === '')
        return;
});
