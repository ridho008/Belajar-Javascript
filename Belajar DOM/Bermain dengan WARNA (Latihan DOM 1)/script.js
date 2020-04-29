const tombol = document.querySelector('.tombol');
const body = document.querySelector('body');

tombol.addEventListener('click', function() {
	// tombol.classList.add('bg-biru');
	body.classList.toggle('bg-biru');
});


// Membuat tombol
const tombolBaru = document.createElement('button');
const textTombol = document.createTextNode('Acak Warna');
tombolBaru.append(textTombol);
tombolBaru.setAttribute('type', 'button');

tombol.after(tombolBaru);
tombolBaru.addEventListener('click', function(){
	const r = Math.round(Math.random() * 255 + 1) ;
	const g = Math.round(Math.random() * 255 + 1) ;
	const b = Math.round(Math.random() * 255 + 1) ;
	console.log(r);
	body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});


// animasi ketiga mouse bergerak akan berubah warnanya
const sectionA = document.getElementById('a');
const sMerah = sectionA.querySelector('input[name=sMerah]');
const sHijau = sectionA.querySelector('input[name=sHijau]');
const sBiru = sectionA.querySelector('input[name=sBiru]');

sectionA.addEventListener('input', function(){
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;

	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})

// sMerah.addEventListener('input', function(){
// 	const r = sMerah.value;
// 	const g = sHijau.value;
// 	const b = sBiru.value;
// 	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// });

// sHijau.addEventListener('input', function(){
// 	const r = sMerah.value;
// 	const g = sHijau.value;
// 	const b = sBiru.value;
// 	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// });

// sBiru.addEventListener('input', function(){
// 	const r = sMerah.value;
// 	const g = sHijau.value;
// 	const b = sBiru.value;
// 	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// });



document.body.addEventListener('mousemove', function(event){
	// posisi mouse
	// console.log(event.clientY);
	// ukuran browser
	// console.log(window.innerWidth);

	const xPos = Math.round((event.clientX / innerWidth) * 255);
	const yPos = Math.round((event.clientY / innerHeight) * 255);
	// document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +', 100)';
});