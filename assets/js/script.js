// Get the modal, its content <div>, the button to open it, and the span to close it.
var modal = document.getElementById("myModal");
var modalContent = document.querySelector(".modalp");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var btn1 = document.getElementById("myBtn1");

// When the user clicks the button, modal opens, fetches JokeAPI, and displays it in the modal on screen.
btn.onclick = function() {
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
  modal.style.display = "block";
// When the user clicks on <span> (x), or outside the modal, the modal closes.
   span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

btn1.onclick = function() {
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
modal.style.display = "block";

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}



 
