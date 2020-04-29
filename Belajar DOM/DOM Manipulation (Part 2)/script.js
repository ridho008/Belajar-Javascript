// MANIPULASI NODE

const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan kedalam paragraf
pBaru.appendChild(textPBaru);

// simpan pbaru di akhir sectionA
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


// Membuat list baru
const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('item baru');
liBaru.appendChild(textLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2n)');

ul.insertBefore(liBaru, li2);

// const textlibaru3 = document.createTextNode('diatas 3');
// liBaru.appendChild(textlibaru3);
// const liItem3 = ul.querySelector('li:nth-child(1n)');

// ul.appendChild(liBaru, liItem3);

// parentNode.prepend = menambahkan elemetn di awal.
const pAwalBaru = document.createElement('p');
const textPAwalBaru = document.createTextNode('Paragraf Awal Baru');
pAwalBaru.prepend(textPAwalBaru);

sectionA.prepend(pAwalBaru);


// parentNode.append = menambahkan element di akhir.
const pAkhirBaru = document.createElement('h2');
const textAkhirBaru = document.createTextNode('Akhir Pargraf');
pAkhirBaru.append(textAkhirBaru);

sectionA.append(pAkhirBaru);


// childNode.before
const pBaruAtasP3 = document.createElement('h3');
const textAtasP3 = document.createTextNode('ini adalah link');
pBaruAtasP3.append(textAtasP3);

const p3 = document.querySelector('p:nth-child(4n)');
sectionA.before(pBaruAtasP3, p3);


// REMOVE 
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// REPLACE / replaceWith
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const texth2Baru = document.createTextNode('h2 baru');
h2Baru.appendChild(texth2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightblue';
liBaru.style.backgroundColor = 'lightblue';
h2Baru.style.backgroundColor = 'lightblue';
