import { setSearchFocus } from './searchBar.js';

document.addEventListener("readystatechange", (e) =>{

    initApp()

})


const initApp = () =>{

   const form = document.querySelector("form") as HTMLFormElement

   form.addEventListener("submit", submitTheSearch)

}


const submitTheSearch = (e:Event) =>{

   e.preventDefault()

   setSearchFocus()

}