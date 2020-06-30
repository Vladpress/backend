function logErrors(err, req, res, next) {
  console.error(err.message);
  console.error(err.stack);
  next(err);
}

function clientErrorHandler(err, req, res, next) {
    res.status(500).send({ error: err.message });
}

module.exports = {
  logErrors,
  clientErrorHandler,
};
