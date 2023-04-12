export const buildSearchResults = (resultArray) => {
    resultArray.forEach(result => {
        const resultItem = createResultItem(result);
    });
};
