const {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    login
} = require('./user.controller');

const router = require('express').Router();
const { checkToken } = require('../auth/tokenValidation');

router.post('/', createUser);
router.get('/', checkToken, getUsers);
router.get('/:id', checkToken, getUserById);
router.patch('/', checkToken, updateUser);
router.delete('/', checkToken, deleteUser);
router.post('/login', login);

module.exports = router;
