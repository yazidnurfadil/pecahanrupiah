export default function(uangnya) {
  uangnya = uangnya === undefined ? "" : uangnya;
  const logicRegex = [
    {
      patternString: "^\\s+$|^$",
      errMsg: "Input tidak boleh kosong"
    },
    {
      patternString: "(?!^)(Rp |Rp)",
      errMsg: 'Kode Rupiah ("Rp" / "Rp ") harus berada di awal inputan'
    },
    {
      patternString:
        "^(?!(R(p($|\\ ($|\\d($|[0-9.]+)($|\\,($|0{1,2})))|\\d($|[0-9.]+)($|\\,($|0{1,2})))|$)|\\d($|[0-9.]+)($|\\,($|0{1,2})))$).*$",
      errMsg:
        'Input harus diawali dengan Kode Rupiah ("Rp" / "Rp ") diikuti dengan nominal ATAU langsung nominal'
    },
    {
      patternString: "\\.(?!\\b\\d{3}\\b)",
      errMsg: "Angka setelah titik ribuan harus 3 digit"
    }
  ];
  try {
    logicRegex.map(regCode => {
      if (new RegExp(regCode.patternString).test(uangnya)) {
        throw { err: regCode.errMsg };
      }
    });
  } catch (error) {
    return error;
  }
  return parseInt(uangnya.split(",")[0].replace(/\D/g, ""));
}
