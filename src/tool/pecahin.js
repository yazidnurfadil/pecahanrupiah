import inputToValidInt from "./validator.js";
export default function(uangnya) {
  let uang = inputToValidInt(uangnya);
  if (!uang.err) {
    let hasil = [];
    const pecahan = [100000, 50000, 20000, 10000, 5000, 500, 100, 50];
    const pecahanTerdekat = pecahan.filter(
      pecah =>
        pecah.toString().length <= uang.toString().length && pecah <= uang
    );
    pecahanTerdekat.map(pecah => {
      if (~~(uang / pecah)) {
        hasil.push({
          pecahan: pecah,
          jumlah: ~~(uang / pecah)
        });
        uang = uang - pecah * ~~(uang / pecah);
      }
    });
    if (uang > 0) hasil.push({ sisa: uang });
    return hasil;
  }
  return uang;
}
