type SpeechRecognitionResult = { 

   results: { 
   
      transcript: any 

   }[][]

}
 

const search = document.querySelector("#search") as HTMLInputElement

const clear = document.querySelector("#clear") as HTMLDivElement

const mic = document.querySelector("#mic") as HTMLButtonElement


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


export const micOn = (e:MouseEvent) =>{

   const recognition = new (window as any).webkitSpeechRecognition

   navigator.mediaDevices.getUserMedia({ audio: true })

   .then(() =>{

      recognition.onstart = () =>{

         mic.classList.add("on")

      }

      recognition.start()

      recognition.onresult = (event: SpeechRecognitionResult) =>{

         const result = event.results[0][0].transcript

         console.log(result)

      }

   }).catch((error) =>{

      alert('Error while accessing microphone')

   })

}


export const micOff = (e:MouseEvent) =>{

   mic.classList.remove("on")

}