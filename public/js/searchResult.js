export const buildSearchResults = (resultArray) => {
    resultArray.forEach(result => {
        const resultItem = createResultItem(result);
        const resultContents = document.createElement("div");
        resultContents.classList.add("resultContents");
        const resultImage = createResultImage(result);
    });
};
const createResultItem = (item) => {
    const resultItem = document.createElement("div");
    resultItem.classList.add("resultItem");
    const resultTitle = document.createElement("div");
    resultTitle.classList.add("resultTitle");
    const link = document.createElement("a");
    link.href = `https://en.wikipedia.org/?curid=${item.id}`;
    link.textContent = item.title;
    link.target = '_blank';
    resultTitle.append(link);
    resultItem.append(resultTitle);
    return resultItem;
};
const createResultImage = (result) => {
    if (result.img) {
        const resultImage = document.createElement("div");
        resultImage.classList.add("resultImage");
    }
};
