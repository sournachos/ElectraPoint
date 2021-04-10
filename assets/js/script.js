// Get the modal, its content <div>, the button to open it, and the span to close it.
var modal = document.getElementById("myModal");
var modalContent = document.querySelector(".modalp");
var span = document.getElementsByClassName("close")[0];
var menu = document.getElementById("nav-content");
var but = document.getElementsByClassName("button");

// When the user clicks the button, modal opens, fetches JokeAPI, and displays it in the modal on screen.
function jokey() {
  fetch("https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
  .then(res =>{return res.json()})
  .then(data => {
          if(data.type === 'single'){
            var joke = (data.joke);
              modalContent.innerHTML = joke;
                localStorage.setItem('joke1',JSON.stringify(joke));
                  console.log(joke); 
          }else if(data.type === 'twopart'){
              modalContent.innerHTML = data.setup + '<br><br>' + data.delivery;
                localStorage.setItem('joke2',JSON.stringify(data.setup, '<br><br>',data.delivery));
                  console.log(data.setup, '<br><br>',data.delivery)
          }
      })
menu.style.transform = "translate(-150px)"      
modal.style.display = "block";

    span.onclick = function() {
      modal.style.display = "none";
      // menu.style.transform = "translate(0px)" 
      location.reload()
    }
        window.onclick = function(event) {
         if (event.target == modal) {
          modal.style.display = "none";
          // menu.style.transform = "translate(0px)"
          location.reload()
         }
        } 
          
}
//menu.style.transform = "translate(-150px)"; 
