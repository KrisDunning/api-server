'use strict';

const validator = (req, res, next) => {
  let { name } = req.query;
  if (name) {
    next();
  }
  else res.status(500).send({
    error:500,
    message:'Invalid, no name property in query',
  });

};

module.exports = validator;
