const Jimp = require("jimp");

const resize = async (url, filename) => {
  const image = await Jimp.read(url);
  await image.resize(250, 250).writeAsync(url);
};

module.exports = resize;
