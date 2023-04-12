type ResultArray ={
   
    id: string, 
    
    text:string, 
    
    title:string, 
    
    img: string | null

}[]


type ResultItem ={

    id: string, 
    
    text:string, 
    
    title:string, 
    
    img: string | null

}


export const buildSearchResults = (resultArray: ResultArray) =>{

   resultArray.forEach(result =>{
   
        const resultItem = createResultItem(result)
   
   })

}   


const createResultItem = (item: ResultItem) =>{

   const resultItem = document.createElement("div")

   resultItem.classList.add("resultItem")

}