const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/superheroes-api', require('./superheroes-api'))
router.use('/superheroes', require('./superheroes'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
