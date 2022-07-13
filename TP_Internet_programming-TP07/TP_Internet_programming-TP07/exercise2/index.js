const { KhmerDateTime } = require("./lib/khmerDateTime");

const date = new KhmerDateTime(new Date('2022-03-03T02:00:00'));

console.log(date.getDate());