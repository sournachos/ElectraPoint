//.catch(error => console.log('Whoops wrong turn!'))

// Get the modal
var modal = document.getElementById("myModal");
var modalContent = document.querySelector(".modalp");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    fetch("https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
    .then(res =>{return res.json()})
    .then(data => {
            if(data.type === 'single'){
                var joke = (data.joke);
                modalContent.innerHTML = joke;
                console.log(joke); 
            }else if(data.type === 'twopart'){
                modalContent.innerHTML = data.setup + '<br>' + data.delivery;
                console.log(data.setup, '\n', data.delivery)
            }
        })
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

