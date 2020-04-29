var mahasiswa = {
	nama: "Ridho Surya",
	umur: 21,
	ips: [3.60,2.00,3.1],
	alamat: {
		jalan: "Jl.pepaya",
		kota: "pekanbaru",
		provinsi: "riau"
	}
};

var orang = {
	nama: "toni",
	umur: 30,
	pekerjaan: 'Dosen',
	sapa: function() {
		return 'Halo nama saya' + this.nama + ' umur' + this.umur + ' pekerjaan seorang' + this.pekerjaan; 
		console.log(sapa);
	}

};