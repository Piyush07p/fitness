const express =require('express')
const router=express.Router();
const ControllerClass=require('../controllers/QueryController')

router.get('/',ControllerClass.getQuery)
router.post('/',ControllerClass.createQuery)
router.get('/edit/:id',ControllerClass.editQuery)
router.post('/update/:id',ControllerClass.updateQuery)
router.post('/delete/:id',ControllerClass.delQuery)






module.exports=router