const apiKey = 'gzTJvfnEbH7y4mpsJZW4mOSuKeqtbRHS';

const peticion  = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion.then(resp => {
    resp.json()
    console.log(resp)
})
.catch(console.warn)