// membuat object
// 1. literal
// var mhs1 = {
// 	nama : "Ridho Surya",
// 	nrp : "98765479",
// 	email : "ridho@gmail.com",
// 	jurusan : "Teknik Informatika"
// };

// var mhs2 = {
// 	nama : "Surya",
// 	nrp : "9876547912",
// 	email : "surya@gmail.com",
// 	jurusan : "Teknik Informatika"
// };


// function declaration
// function buatObjectMahasiswa(nama, nrp, email, jurusan) {
// 	var mhs = {};
// 		mhs.nama = nama;
// 		mhs.nrp = nrp;
// 		mhs.email = email;
// 		mhs.jurusan = jurusan;
// 		return mhs;
// }

// var mhs3 = buatObjectMahasiswa('Ridho', '875987', 'ridho12@gmail.com', 'Teknik Informatika');



// constractor
// function Mahasiswa(nama, nrp, email, jurusan) {
// 	this.nama = nama;
// 	this.nrp = nrp;
// 	this.email = email;
// 	this.jurusan = jurusan;
// }

// var mhs4 = new Mahasiswa('Fani', '382754287', 'fani@gmail.com', 'Teknik Lingkungan');



// this
// 1. literal
// mengembalikan object yang bersangkutan
var obj1 = {};
obj1.halo = function() {
	console.log(this);
	console.log('Halo');
}
obj1.halo();


// 2. declaration
// mengembalikan windows / global
// function obj() {
// 	console.log(this);
// 	console.log('Halo');
// }
// obj();


// 3. constructor
// mengembalikan object yang baru saja di buat
function obj() {
	console.log(this);
	console.log('Halo');
}
var obj2 = new obj();
var obj3 = new obj();