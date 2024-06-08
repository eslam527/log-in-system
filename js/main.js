var sinUpBtn =document.getElementById('signUp');
var sinInBtn = document.querySelector('.in');
var signUp = document.getElementById('sinUp');
var logbtn = document.querySelector('.log');
var wrongName =document.querySelector('.wrong-name');
var wrongEmail = document.querySelector('.wrong-email');
var wrongPass = document.querySelector('.wrong-pass');
var nameInp =document.querySelector('.name input');
var mailInp =document.querySelector('.mail input');
var passInp =document.querySelector('.passwrd input');
var noteOf =document.querySelector('.noteOf');
var noteOn =document.querySelector('.noteOn');
var logInEmailInpute =document.getElementById('logInEmail');
var logInpassInpute =document.getElementById('logInpass');
var logInBtn = document.querySelector('.logInBtn')
var logInForm=document.getElementById('logInForm')
var alarm = document.querySelector('.alarm')
var emailalarm =document.querySelector('.emailalarm')
var passalarm =document.querySelector('.passalarm')
var logInArry =[];
var uersArray =[];
if(localStorage.getItem('usreDataPese') != null){
     uersArray = JSON.parse(localStorage.getItem('usreDataPese'))
}
if(localStorage.getItem('usreDataPese') != null){
     logInArry = JSON.parse(localStorage.getItem('usreDataPese'))
}

sinUpBtn.addEventListener('click',function(e){
     document.querySelector('.signUp').classList.replace('d-none','d-flex')
     document.querySelector('.logIn').classList.replace('d-flex','d-none')

})

sinInBtn.addEventListener('click' , function(e){
     document.querySelector('.logIn').classList.replace('d-none','d-flex')
     document.querySelector('.signUp').classList.replace('d-flex','d-none')

})
 
signUp.addEventListener('click', function(e){
     e.preventDefault()
      if(allIsValied()){
         add()
      }
})



function add(){
     var uerDatas = {
          uerName:nameInp.value,
          usrEmail:mailInp.value,
          userPass:passInp.value
     }

if(emailIsFuned (uerDatas)== true){
}
     else{
          uersArray.push(uerDatas)
          localStorage.setItem('usreDataPese',JSON.stringify(uersArray))
          console.log(uersArray);
          noteOn.classList.remove('d-none')
          noteOn.classList.add('d-block')
          noteOf.classList.remove('d-block')
          noteOf.classList.add('d-none')

     
}


}
function emailIsFuned(uerDatas){
     for(i=0; i<uersArray.length;i++){
          if(uersArray[i].usrEmail.toLowerCase() == uerDatas.usrEmail.toLowerCase() ){
              noteOf.classList.remove('d-none')
              noteOf.classList.add('d-block')
     
               return true
          }
     }

}

//  logbtn.addEventListener('click',function(e){
//      e.preventDefault()
//      console.log(('hhh'));
//      if()
//  })

function validition(ragex,element,warining){
     var puttern = ragex
     if(puttern.test(element.value)){
        console.log(('valid'));
        warining.classList.replace('d-block','d-none')
        element.classList.replace('is-invalid','is-valid')
        return true;


     }else{
          console.log('eror');
          warining.classList.replace('d-none','d-block')
          element.classList.add('is-invalid')
          return false;
     }
}

function allIsValied(){
     if(
          validition(/^[a-zA-Z0-9]{5,8}$/,nameInp,wrongName) == true &&
          validition(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,mailInp,wrongEmail) == true &&
          validition(/^[A-Z]{1}[a-z]{6}!$/,passInp,wrongPass) ==true
     ){
          console.log('ok');
return true
     }
     else{
          console.log('no');
          return false
     }
}



logInForm.addEventListener('submit',function(e){
     e.preventDefault()
     // logInArry.push(logInUsers)
     // console.log(logInArry);
     // localStorage.setItem('usreLogInDataPese',JSON.stringify(logInArry))
     // if(logInUsers.userEmail == uerDatas.usrEmail && logInUsers.userPass==uerDatas.userPass){
     //      console.log('hello');
     // }
     // console.log(logInArry);
     logIn()
})

function logIn(){
     var logInUsers={
          userEmail:logInEmailInpute.value,
          userPass:logInpassInpute.value
     }
     if(     userValidition(logInUsers) == true     ){
          window.location.href='../wellcom.html'
          console.log(('login'));
          alarm.classList.replace('d-block','d-none')

     }else{
          alarm.classList.replace('d-none','d-block')
          console.log('not found');
     }
     if(emailValidition(logInUsers) == true){
          console.log('email ok');
          emailalarm.classList.replace('d-block','d-none')

     }else{
          console.log('email is wrong');
          emailalarm.classList.replace('d-none','d-block')
     }
     if(passValidition(logInUsers)){
          console.log('password ok');
          passalarm.classList.replace('d-block','d-none')

     }else{
          console.log('password is wrong');
          passalarm.classList.replace('d-none','d-block')

     }

}

function userValidition(logInUsers){
     for(i=0;i<uersArray.length;i++){
      if(uersArray[i].usrEmail.toLowerCase() == logInUsers.userEmail.toLowerCase() && uersArray[i].userPass == logInUsers.userPass ){
          console.log('user found');
          localStorage.setItem('userName',uersArray[i].uerName)
          return true
      }
     }
}
function emailValidition (logInUsers){
     for(i=0;i<uersArray.length;i++){

     if(uersArray[i].usrEmail.toLowerCase() == logInUsers.userEmail.toLowerCase()){
          console.log('email ok');
          return true
      }
     }
}


function passValidition (logInUsers){
     for(i=0;i<uersArray.length;i++){

     if(uersArray[i].userPass == logInUsers.userPass ){
          console.log('pass ok');
          return true
      }
     }
}