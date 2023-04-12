type ResultArray ={
   
    id: string, 
    
    text:string, 
    
    title:string, 
    
    img: string | null

}[]


export const buildSearchResults = (resultArray: ResultArray) =>{

   resultArray.forEach(result =>{
   
        const resultItem = createResultItem(result)
   
   })

}   