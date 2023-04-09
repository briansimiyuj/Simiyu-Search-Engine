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