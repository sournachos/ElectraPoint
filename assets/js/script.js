let city = document.querySelector('.userInp').value
let btn = document.querySelector('.btn')

fetch("https://api.openchargemap.io/v3/poi/?output=json&countrycode=US&maxresults=5")
.then(res =>{return res.json()})
// .then(data => console.log(data))
// .catch(error => console.log('Whoops wrong turn!'))

// btn.addEventListener('click', function(){
// console.log(data)

// })




