import { setSearchFocus } from './searchBar.js';
document.addEventListener("readystatechange", (e) => {
    initApp();
});
const initApp = () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", submitTheSearch);
};
const submitTheSearch = (e) => {
    e.preventDefault();
    setSearchFocus();
};
