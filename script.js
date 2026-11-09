const chegirmaHisoblash = (mahsulotNarxi, chegirmaFoizi) => {
  if (!Number.isFinite(mahsulotNarxi) || !Number.isFinite(chegirmaFoizi)) {
    throw new Error("Narx va chegirma foizi son bo'lishi kerak");
  }

  if (mahsulotNarxi < 0 || chegirmaFoizi < 0 || chegirmaFoizi > 100) {
    throw new Error("Narx 0 dan kam, foiz 0 dan 100 gacha bo'lishi kerak");
  }

  const chegirmaSummasi = (mahsulotNarxi * chegirmaFoizi) / 100;
  const yakuniySumma = mahsulotNarxi - chegirmaSummasi;

  return Math.round((yakuniySumma + Number.EPSILON) * 100) / 100;
};

console.log(chegirmaHisoblash(100, 20));
console.log(chegirmaHisoblash(19.99, 15));