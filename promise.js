const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise( async (resolve) => {
    let jumlahFilmByEmosi = 0;

    const dataTheaterIXX = await promiseTheaterIXX();
    dataTheaterIXX.forEach((film) => {
      if (film.hasil === emosi) jumlahFilmByEmosi++;
    });

    const dataTheaterVGC = await promiseTheaterVGC();
    dataTheaterVGC.forEach((film) => {
      if (film.hasil === emosi) jumlahFilmByEmosi++;
    });

    resolve(jumlahFilmByEmosi);
  });
}

module.exports = {
  promiseOutput,
};
