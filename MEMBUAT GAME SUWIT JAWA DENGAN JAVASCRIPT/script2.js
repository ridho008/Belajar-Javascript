// Tebak Angka
var ulang = true;

while(ulang) {
var kesempatan = 3;
var comp = Math.floor(Math.random() * 10) + 1;
var hasil = '';

while(comp >= 1) {
	alert('memulai permainan dengan ' + kesempatan + 'kesempatan');
	var p = parseInt(prompt('tebak angka 1-10'));

	if(p === comp) {
		hasil = 'BENAR';
		alert('anda ' + hasil + 'angka yang ditebak adalah' + comp);
		break;
	} else if(p < comp) {
		hasil = 'RENDAH';
		kesempatan -= 1;
		alert('terlalu' + hasil + 'anga tebakan adalah' + p + '\nsisa' + kesempatan + 'kesempatan lagi');
	} else if(p>comp) {
		hasil = 'TINGGI';
		kesempatan -= 1;
		alert('Terlalu ' + hasil + ' angka yang anda tebak adalah ' + p + '\ntersisa ' + kesempatan + ' kesempatan lagi.');
	}

	if(kesempatan === 0) {
		alert('anda gagal \nangka yang di cari adalah' + comp);
	}




}
ulang = confirm('ulang ?');
}
alert('terima kasih');