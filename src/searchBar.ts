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