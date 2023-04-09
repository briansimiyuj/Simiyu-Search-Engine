import { setSearchFocus } from './searchBar.js'

import { getSearchTerm, retreiveSearchResults } from './dataFunction.js'

document.addEventListener("readystatechange", (e) =>{

    initApp()

})


const initApp = () =>{

   const form = document.querySelector("form") as HTMLFormElement

   form.addEventListener("submit", submitTheSearch)

}


const submitTheSearch = (e:Event) =>{

   e.preventDefault()

   processTheSearch()

   setSearchFocus()

}



const processTheSearch = async () =>{

   const searchTerm = getSearchTerm()

   if(searchTerm === '') return

   const resultArray = await retreiveSearchResults(searchTerm) 

}