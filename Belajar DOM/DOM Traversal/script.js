// const card = document.querySelector('.card');
// const close = document.querySelector('.close');
// close.addEventListener('click', function(){
// 	card.style.display = 'none';
// })


// DOM TRAVELSAL
// const close = document.querySelectorAll('.close');

// for( let i = 0; i < close.length; i++) {
// 	close[i].addEventListener('click', function(e){
// 		// close[i].parentElement.style.display = 'none';
// 		e.target.parentElement.style.display = 'none';
// 	});
// }


// preventDefault, berfungsi sebagai menghentikan fungsi default(dasar), seperti mengisi sebuah form, menekan sebuah tombol
// bisa juga menggunakan javascript::void(0), masukkan kedalam href="javascript::void(0)"
// close.forEach(function(el){
// 	el.addEventListener('click', function(e){
// 		e.target.parentElement.style.display = 'none';
// 		e.preventDefault();
// 		e.stopPropagation();
// 	});
// });


// const card = document.querySelectorAll('.card');
// card.forEach(function(card){
// 	card.addEventListener('click', function(e){
// 		alert('ok');
// 	})
// })


// const nama = document.querySelector('.nama');
// console.log(nama.previousElementSibling);


// EVENT BUBBLING
// const container = document.querySelector('.container');
// container.addEventListener('click', function(e){
// 	if(e.target.className == 'close') {
// 		e.target.parentElement.style.display = 'none';
// 		e.target.preventDefaul(); //menjaga agar tidak menekan href
// 	}
// });



const container = document.querySelector('.container');
container.addEventListener('click', function(e){
	if(e.target.className == 'close') {
		e.target.parentElement.style.display = 'none';
		e.target.preventDefault();
	}
})