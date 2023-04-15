const search = document.querySelector("#search");
const clear = document.querySelector("#clear");
export const setSearchFocus = () => {
    search.focus();
};
export const showClearTextButton = () => {
    if (search.value.length) {
        clear.classList.remove("none");
        clear.classList.add("flex");
    }
    else {
        clear.classList.add("none");
        clear.classList.remove("flex");
    }
};
export const clearSearchText = (e) => {
    e.preventDefault();
    search.value = '';
    clear.classList.add("none");
    clear.classList.remove("flex");
    setSearchFocus();
};
export const clearPushListener = (e) => {
    if (e.key === "Enter" || e.key === " ") {
        clear.click();
    }
};
export const escape = (e) => {
    if (e.key === "Escape") {
        clear.click();
    }
};
