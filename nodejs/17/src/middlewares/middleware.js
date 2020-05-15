exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Este é o valor da variável local'
  next()
}
exports.checkCSRFerror = (err, req, res, next) => {
  console.log('checkCSRFerr :>> ', err)
  if (err && err.code === 'EBADCSRFTOKEN') {
    return res.send('BAD CSRF')
  }
  next()
}

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken()
  console.log('res.locals.csrfToken :>> ', res.locals.csrfToken)
  next()
}
