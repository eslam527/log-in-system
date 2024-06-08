var validUser = localStorage.getItem('userName')
  var Display =document.querySelector('.Display')
  Display.innerHTML=('wellcom ' +validUser)
var goBackBtn = document.getElementById('goBack')

goBackBtn.addEventListener('click',function(e){
    localStorage.removeItem('userName')
})
