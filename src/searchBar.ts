const search = document.querySelector("#search") as HTMLInputElement

const clear = document.querySelector("#clear") as HTMLDivElement


export const setSearchFocus = () =>{

   search.focus()

}


export const showClearTextButton = () =>{

   if(search.value.length){
   
      clear.classList.remove("none")

      clear.classList.add("flex")

  }else{

      clear.classList.add("none")

      clear.classList.remove("flex")

  }

}


export const clearSearchText = (e: MouseEvent | KeyboardEvent) =>{

   e.preventDefault()
   
   search.value = ''

   clear.classList.add("none")

   clear.classList.remove("flex")

   setSearchFocus()

}


export const clearPushListener = (e: KeyboardEvent) =>{

   if(e.key === "Enter" || e.key === " "){

      clear.click()
      
   }

}


export const escape = (e: KeyboardEvent) =>{
   
   if(e.key === "Escape"){

      clear.click()

   }

}