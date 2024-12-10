const iconv = require("iconv-lite");

const icoString = "Café au lait : €3.50";

console.log(icoString);

const utf8Buff = iconv.encode(icoString, "utf8");
