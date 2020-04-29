var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
	// jika penumpang kosong
	if(penumpang.length == 0 ) {
		// tambahkan penumpang di awal array
		penumpang.push(namaPenumpang);
		// kembalikan isi array & keluar dari function
		return penumpang;
	} else {
		// telusuri seluruh kursi dari awal
		for( var i = 0; i < penumpang.length; i++) {
			// jika ada kursi kosong
			if( penumpang[i] == undefined ) {
				// tambahkan penumpang di kursi tersebut
				penumpang[i] =  namaPenumpang;
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
			// jika sudah ada nama yang sama
			else if( penumpang[i] == namaPenumpang ) {
				// tampilkan pesan kesalahan
				console.log(namaPenumpang + 'sudah ada didalam angkot.');
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
			// jika seluruh kursi terisi
			else if( i == penumpang.length - 1 ) {
				// tambahkan penumpang di akhir array
				penumpang.push(namaPenumpang);
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
		}
	}
}



var hapusPenumpang = function(namaPenumpang, penumpang) {
	if(!penumpang.length) {
		console.log('Angkot masih kosong');
		return penumpang;
	} else {
		for( var i = 0; i < penumpang.length; i++) {
			if(penumpang[i] == namaPenumpang) {
				penumpang[i] = undefined;
				return penumpang;
			} else if( i == penumpang.length - 1 ) {
				console.log(namaPenumpang + 'tidak ada didalam angkot');
				return penumpang;
			}
		}
	}
}