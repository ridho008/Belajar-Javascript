// document.querySelector()
// const paragraf4 = document.querySelector('#b p');
// const li2 = document.querySelector('#b li:nth-child(2n)')
// paragraf4.style.color = 'green';
// li2.style.backgroundColor = 'orange';

// document.querySelectorAll(), mengembalikan nodelist
// const p = document.querySelectorAll('p');
// for(let i = 0; i < p.length; i++) {
// 	p[i].style.backgroundColor = 'lightblue';
// }


// const p4 = document.getElementsByTagName('p');
// p4[3].style.backgroundColor = 'lightblue';

const sectionB = document.getElementById('b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';