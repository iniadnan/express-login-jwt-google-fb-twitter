// GET DATA NOW
const getDateNow = () => {
  let dateNow = new Date();
  let monthNow =
    dateNow.getMonth() + 1 < 10
      ? "0" + (dateNow.getMonth() + 1)
      : dateNow.getMonth() + 1;
  let hoursNow =
    dateNow.getHours() < 10 ? "0" + dateNow.getHours() : dateNow.getHours();
  let minutesNow =
    dateNow.getMinutes() < 10
      ? "0" + dateNow.getMinutes()
      : dateNow.getMinutes();
  let secondsNow =
    dateNow.getSeconds() < 10
      ? "0" + dateNow.getSeconds()
      : dateNow.getSeconds();
  let today =
    dateNow.getFullYear() +
    "-" +
    monthNow +
    "-" +
    dateNow.getDate() +
    " " +
    hoursNow +
    ":" +
    minutesNow +
    ":" +
    secondsNow;

  return today;
};

module.exports = getDateNow;
