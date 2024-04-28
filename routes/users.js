const express = require('express')
const router = express.Router()

const { addNewUser,getUsers } = require('../controllers/user')


//add new user
router.post('/',addNewUser)

router.get('/',getUsers)


module.exports = router