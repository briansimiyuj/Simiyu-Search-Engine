export const buildSearchResults = (resultArray) => {
    resultArray.forEach(result => {
        const resultItem = createResultItem(result);
    });
};
const createResultItem = (item) => {
    const resultItem = document.createElement("div");
    resultItem.classList.add("resultItem");
};
