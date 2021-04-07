let joke = document.querySelector('.joke')

fetch("https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
.then(res =>{return res.json()})
.then(data => {
        joke.addEventListener('click', function(){
            if(data.type === 'single'){
           console.log(data.joke) 
        }else if(data.type === 'twopart'){
            console.log(data.setup, '\n', data.delivery)
        }
    })
})
.catch(error => console.log('Whoops wrong turn!'))
