// function tambah(a,b) {
// 	return a + b;
// }

// function kali(a,b) {
// 	return a * b;
// }

// console.log(kali(tambah(2,3), tambah(2,3)));

function tambah() {
	var hasil = 0;
	for( var i = 0; i < arguments.length; i++ ) {
		hasil += arguments[i];
	}
	return hasil;
}

var coba = tambah(1,2,3,4,5);
console.log(coba);