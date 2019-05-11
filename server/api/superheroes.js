const router = require('express').Router();
const { BasicInfo } = require('../db/models');

module.exports = router;

router.get('/alignment/:alignment', (req, res, next) => {
  console.log('Find characters by alignment:', req.params.alignment);
  BasicInfo.findAll({
    where: {
      alignment: {
        $eq: req.params.alignment
      }
    },
    order: [
      ['fullName', 'ASC']
    ]
    // attributes: ['id', 'full-name', 'alignment', 'url']
  }).then(data => {
    res.send(data);
  }).catch(error => console.error(error));
})

// router.get('/name/:substring', (req, res, next) => {
//   BasicInfo.findAll({
//     where: {
//       ['full-name']: {
//         $eq: req.params.alignment
//       }
//     },
//     // attributes: ['id', 'full-name', 'alignment', 'url']
//   }).then(data => {
//     res.send(data);
//   }).catch(error => console.error(error));
// })
