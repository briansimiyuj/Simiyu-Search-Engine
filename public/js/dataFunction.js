var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const getSearchTerm = () => {
    const rawSearchTerm = document.querySelector("#search");
    const rawSearchTermValue = rawSearchTerm.value.trim();
    const regex = /[ ]{2,}/gi;
    const searchTerm = rawSearchTermValue.replace(regex, ' ');
    return searchTerm;
};
export const retreiveSearchResults = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const wikiSearchString = getWikiSearchString(searchTerm);
    const wikiSearchResults = yield requestData(wikiSearchString);
    let resultsArray = [];
    if (wikiSearchResults.hasOwnProperty('query')) {
        resultsArray = processWikiResults(wikiSearchResults.query.pages);
        return resultsArray;
    }
    else {
        const statsLine = document.querySelector("#stats");
        statsLine.textContent = 'Sorry, no results found';
    }
});
const getWikiSearchString = (searchTerm) => {
    const maxChars = getMaxChars();
    const rawSearchString = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchTerm}&gsrlimit=20&prop=pageimages|extracts&exchars=${maxChars}&exintro&explaintext&exlimit=max&format=json&origin=*`;
    const searchString = encodeURI(rawSearchString);
    return searchString;
};
const getMaxChars = () => {
    const width = window.innerWidth || document.body.clientWidth;
    let maxChars;
    if (width < 414)
        maxChars = 65;
    if (width >= 414 && width < 1400)
        maxChars = 100;
    if (width >= 1400)
        maxChars = 200;
    return maxChars;
};
const requestData = (searchString) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(searchString);
        const data = yield response.json();
    }
    catch (err) {
        alert(err);
    }
});
