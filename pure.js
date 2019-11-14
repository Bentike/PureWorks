let button = document.querySelector('#sign-up-btn');
let form = document.getElementById('contact-form')
form.addEventListener('submit', event =>{
	let name = form.elements['name'];
	let email = form.elements['email'];
	let number = form.elements['number'];
	let address = form.elements['address'];
	let message = form.elements['message'];
	console.log(`Name: ${name.value}`)
	console.log(`Email: ${email.value}`)
	console.log(`Number: ${number.value}`)
	console.log(`Address: ${address.value}`)
	console.log(`Message: ${message.value}`)
	event.preventDefault();
})
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
