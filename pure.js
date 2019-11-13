let button = document.querySelector('#sign-up-btn');
// let mobile = document.querySelector(".fa-align-justify");
// let nav = document.getElementById("nav");
// let close = document.getElementById('close');

// mobile.addEventListener('click', function(e){
//     nav.classList.remove('hide-mobile');
//     nav.classList.add('mobile-view')
//     mobile.style.display = 'none';
// })

// close.addEventListener('click', function(e){
// 	nav.classList.add('hide-mobile');
// 	mobile.style.display = 'block';
// })
 var isGrey = false;
 setInterval(function(){
 	if (isGrey){
 		button.style.background = 'orange';
 	} else {
 		button.style.background = '#F4F4F4';
 		button.style.color = "Black";
 	}
 	isGrey = !isGrey;
 },1000)
