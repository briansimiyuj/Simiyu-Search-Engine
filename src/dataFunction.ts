export const getSearchTerm = () =>{

    const rawSearchTerm = document.querySelector("#search") as HTMLInputElement

    const rawSearchTermValue = rawSearchTerm.value.trim()

    const regex = /[ ]{2,}/gi

    const searchTerm = rawSearchTermValue.replace(regex, ' ')

    return searchTerm

}


export const retreiveSearchResults = async(searchTerm: string) =>{

   const wikiSearchString = getWikiSearchString(searchTerm)

   const wikiSearchResults = await requestData(wikiSearchString)

}


const getWikiSearchString = (searchTerm: string) =>{

   const maxChars = getMaxChars()

   const rawSearchString = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchTerm}&gsrlimit=20&prop=pageimages|extracts&exchars=${maxChars}&exintro&explaintext&exlimit=max&format=json&origin=*`

   const searchString = encodeURI(rawSearchString)

   return searchString

}


const getMaxChars = () =>{

   const width = window.innerWidth || document.body.clientWidth

   let maxChars 

   if(width < 414) maxChars = 65

   if(width >= 414 && width < 1400) maxChars = 100

   if(width >= 1400) maxChars = 200

   return maxChars

} 


const requestData = async (searchString: string) =>{

   try {
      
      const response = await fetch(searchString)

      const data = await response.json()

      return data

   } catch (err) {
      
      alert(err)

   }

}