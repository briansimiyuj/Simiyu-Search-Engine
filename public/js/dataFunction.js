export const getSearchTerm = () => {
    const rawSearchTerm = document.querySelector("#search");
    const rawSearchTermValue = rawSearchTerm.value.trim();
    const regex = /[ ]{2,}/gi;
    const searchTerm = rawSearchTermValue.replace(regex, ' ');
    return searchTerm;
};
