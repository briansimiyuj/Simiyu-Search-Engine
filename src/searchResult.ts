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

        const resultContents = document.createElement("div")

        resultContents.classList.add("resultContents")

        if(result.img){

         const resultImage = createResultImage(result)

         if(resultImage){

               resultContents.append(resultImage)

         }

        }


        const resultText = createResultText(result)

        resultContents.append(resultText)

        resultItem.append(resultContents)

        const searchResults = document.querySelector("#searchResults") as HTMLDivElement

        searchResults.append(resultItem)
   
   })

}   


const createResultItem = (item: ResultItem) =>{

   const resultItem = document.createElement("div")

   resultItem.classList.add("resultItem")

   const resultTitle = document.createElement("div")

   resultTitle.classList.add("resultTitle")

   const link = document.createElement("a")

   link.href = `https://en.wikipedia.org/?curid=${item.id}`

   link.textContent = item.title

   link.target = '_blank'

   resultTitle.append(link)

   resultItem.append(resultTitle)

   return resultItem

}


const createResultImage = (result: ResultItem) =>{

   if (result.img) {

      const resultImage = document.createElement("div")

      resultImage.classList.add("resultImage")  

      const img = document.createElement("img")

      img.src = result.img

      img.alt = result.title

      resultImage.append(img)

      return resultImage

   }

}


const createResultText = (result: ResultItem) =>{

   const resulText = document.createElement("div")

   resulText.classList.add("resultText")

   const resultDesc = document.createElement("p")

   resultDesc.textContent = result.text

   resulText.append(resultDesc)

   return resulText

}


export const setStatsLine = (numberOfResults: number) =>{

   const stats = document.querySelector("#stats") as HTMLDivElement

   if(numberOfResults){

      stats.textContent = `Displaying ${numberOfResults} results.`
      
   }else{

      stats.textContent = 'Sorry, no results.'

   }

}


export const deleteSearchResults = () =>{

   const searchResults = document.querySelector("#searchResults") as HTMLDivElement 

   let child = searchResults.lastElementChild

   while(child){

      searchResults.removeChild(child)

      child = searchResults.lastElementChild
      
   }

}


export const clearStatsLine = () =>{

   document.querySelector("#stats")!.textContent = ''

}