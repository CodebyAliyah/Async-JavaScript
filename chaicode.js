
const sayAli = function() {
  console.log("Ali Yahya")
}  

setTimeout(sayAli, 2000)

const changeText = function () {
document.querySelector('h1').innerHTML = 'js best series'
}
 const changMe = setTimeout (changeText, 3000)

 document.querySelector('#stop').addEventListener('click' , function () {
  // clearTimeout(changMe) 
  console.log("sTopped")
 } )


setInterval(() => {

  console.log('Ali Yahya',Date.now())

}, 1000);

document.querySelector('#stop').addEventListener('click' , function () {
  
  console.log('stopped')
})
 