import { setSearchFocus, showClearTextButton, clearSearchText, clearPushListener, escape } from './searchBar.js'

import { getSearchTerm, retreiveSearchResults } from './dataFunction.js'

import { buildSearchResults, setStatsLine, deleteSearchResults, clearStatsLine } from './searchResult.js';

document.addEventListener("readystatechange", (e) =>{

    initApp()

})


const initApp = () =>{

   const form = document.querySelector("form") as HTMLFormElement

   form.addEventListener("submit", submitTheSearch)

   const search = document.querySelector("#search") as HTMLInputElement

   const clear = document.querySelector("#clear") as HTMLDivElement

   clear.addEventListener("click", clearSearchText)

   clear.addEventListener("keydown", clearPushListener)

   search.addEventListener("input", showClearTextButton)

   search.addEventListener("keydown", escape)

   setSearchFocus()

}


const submitTheSearch = (e:Event) =>{

   e.preventDefault()

   deleteSearchResults()

   processTheSearch()

   setSearchFocus()

}



const processTheSearch = async () =>{

   clearStatsLine()

   const searchTerm = getSearchTerm()

   if(searchTerm === '') return

   const resultArray = await retreiveSearchResults(searchTerm) 

   if(resultArray) buildSearchResults(resultArray)

   if(resultArray) setStatsLine(resultArray.length)

}