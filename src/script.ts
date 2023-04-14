import { setSearchFocus, showClearTextButton } from './searchBar.js'

import { getSearchTerm, retreiveSearchResults } from './dataFunction.js'

import { buildSearchResults, setStatsLine, deleteSearchResults, clearStatsLine } from './searchResult.js';

document.addEventListener("readystatechange", (e) =>{

    initApp()

})


const initApp = () =>{

   const form = document.querySelector("form") as HTMLFormElement

   form.addEventListener("submit", submitTheSearch)

   const search = document.querySelector("#search") as HTMLInputElement

   search.addEventListener("input", showClearTextButton)

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