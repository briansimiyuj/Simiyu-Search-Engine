const search = document.querySelector("#search");
const clear = document.querySelector("#clear");
const mic = document.querySelector("#mic");
export const setSearchFocus = () => {
    search.focus();
};
export const showClearTextButton = () => {
    if (search.value.length) {
        clear.classList.remove("none");
        clear.classList.add("flex");
    }
    else {
        clear.classList.add("none");
        clear.classList.remove("flex");
    }
};
export const clearSearchText = (e) => {
    e.preventDefault();
    search.value = '';
    clear.classList.add("none");
    clear.classList.remove("flex");
    setSearchFocus();
};
export const clearPushListener = (e) => {
    if (e.key === "Enter" || e.key === " ") {
        clear.click();
    }
};
export const escape = (e) => {
    if (e.key === "Escape") {
        clear.click();
    }
};
export const micOn = (e) => {
    const recognition = new window.webkitSpeechRecognition;
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(() => {
        recognition.onstart = () => {
            mic.classList.add("on");
        };
        recognition.start();
        recognition.onresult = (event) => {
            const result = event.results[0][0].transcript;
            console.log(result);
        };
    }).catch((error) => {
        alert('Error while accessing microphone');
    });
};
export const micOff = (e) => {
    mic.classList.remove("on");
};
