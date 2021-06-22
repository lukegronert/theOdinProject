const img = document.querySelector('img');
const search = document.querySelector('#search');
const newBtn = document.querySelector('#newBtn');
const errorMsg = document.querySelector('#errorMsg');
const loading = document.querySelector('#loading');

// takes a searched word and fetches a GIF related to that word
const getGIF = async (searchedWord) => {
    // when the search is started, hide the img, show Loading...
    img.style.display = 'none';
    loading.style.display = 'block';
    // fetch the gif
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=PwpEvZEU3wBmwjqJIbCRs0EeMCep1rNV&s=${searchedWord}`,
    {mode: 'cors'})
    // turn the response into a json object
        .then(response => {
            return response.json();
        }).then(data => {
            // set the fetched GIF's url to be the img's src attribute
            img.src = data.data.images.original.url;
            // show the image and hide loading 
            img.style.display = 'block';
            loading.style.display = 'none';
        }).catch((err) => {
            console.log(err);
        });
    }

// Async/await version
// Declare an async function
// async function asyncGetGIF (searchedWord) {
//     // wait for the fetch call to get data and set it to response
//     const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=PwpEvZEU3wBmwjqJIbCRs0EeMCep1rNV&s=${searchedWord}`,
//         {mode: 'cors'});
//     // wait for response to be turned into json object
//     const GIFdata = await response.json();
//     // Set the img src to the url of the GIF
//     img.src = response.data.images.original.url;
//     }

    // After pressing a key while typing in the search input
search.addEventListener('keyup', (e) => {
    // if the key you pressed was 'enter'
    if (e.keyCode === 13) {
        e.preventDefault();
        // treat it as if you clicked newBtn
        newBtn.click();
    }
});

// When you click newBtn
newBtn.addEventListener('click', () => {
    // Take the value typed into the input
    let searchWord = search.value;
    // Fetch a GIF related to that word
    getGIF(searchWord);
});

// Initial GIF fetch to be shown on page load
getGIF('cat');
