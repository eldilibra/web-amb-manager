module.exports = function (err, req, res, next) {
  console.log('*******SOMETHING WENT WRONG*******\n' + err);
  res.send(500, { error: err });
};
