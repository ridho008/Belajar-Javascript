// DOM SELECTION
// document.getElementById // mengembalikan element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'salmon';


// document.getElementsByTagName() HTMLCollection
const p = document.getElementsByTagName('p');
for(let i = 0; i < p.length; i++) {
	p[i].style.backgroundColor = 'lightblue';
}


// document.getElementsByClassName()
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini diubah dengan javascript';