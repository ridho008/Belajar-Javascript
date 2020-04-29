// const p3 = document.querySelector('.p3');

// p3.addEventListener('click', function() {
// 	p3.classList.toggle('biru-muda');
// });

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function(){
// 	const ul = document.querySelector('section#b ul');
// 	const liBaru = document.createElement('li');
// 	const textLiBaru = document.createTextNode('Item Baru');
// 	liBaru.prepend(textLiBaru);
// 	ul.prepend(liBaru);
	
// });


const p3 = document.querySelector('.p3');
// p3.onclick = function() {
// 	p3.style.backgroundColor = 'lightblue';
// }

p3.addEventListener('dblclick', function(){
	p3.style.backgroundColor = 'lightblue';
})

// p3.addEventListener('click', function(){
// 	p3.style.color = 'red';
// })

const source = document.querySelector('div.source');

source.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
});