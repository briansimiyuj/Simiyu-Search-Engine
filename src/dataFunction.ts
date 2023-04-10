export const getSearchTerm = () =>{

    const rawSearchTerm = document.querySelector("#search") as HTMLInputElement

    const rawSearchTermValue = rawSearchTerm.value.trim()

    const regex = /[ ]{2,}/gi

    const searchTerm = rawSearchTermValue.replace(regex, ' ')

    return searchTerm

}


export const retreiveSearchResults = async(searchTerm: string) =>{

   const wikiSearchString = getWikiSearchString(searchTerm)

}


const getWikiSearchString = (searchTerm: string) =>{

   const maxChars = getMaxChars()

}


const getMaxChars = () =>{

   const width = window.innerWidth || document.body.clientWidth

   let maxChars 

   if(width < 414) maxChars = 65

   if(width >= 414 && width < 1400) maxChars = 100

   if(width >= 1400) maxChars = 200

   return maxChars

} 