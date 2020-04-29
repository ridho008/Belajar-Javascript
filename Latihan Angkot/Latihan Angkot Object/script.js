// membuat object angkot
function Angkot(supir, trayek, penumpang, kas)
{
	this.supir = supir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	this.penumpangNaik = function(namaPenumpang) {
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	}

	this.penumpangTurun = function(namaPenumpang, bayar) {
		// jika angkot masih kosong
		if(this.penumpang.length === 0) {
			alert('Angkot masih kosong');
			return false;
		}

		// cek jika ada nama penumpang yang sama


		// cek keseluruhan penumpang didalam angkot
		for(var i = 1; i < this.penumpang.length; i++) {
			// apakah ada nama penumpang didalam itu sama ?
			if(this.penumpang[i] == namaPenumpang) {
				this.penumpang[i] = undefined;
				this.kas += bayar;
				return this.penumpang;
			}
		}
	}
}

var angkot1 = new Angkot('Ridho', ['Pekanbaru','Kampar'], [], 0);
var angkot2 = new Angkot('Surya', ['Pandau','Simpang Tiga'], [], 0);