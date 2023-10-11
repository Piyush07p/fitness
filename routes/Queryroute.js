const express =require('express')
const router=express.Router();
const ControllerClass=require('../controllers/QueryController')

router.get('/',ControllerClass.getQuery)
router.post('/',ControllerClass.createQuery)
router.get('/edit/:id',ControllerClass.editQuery)
router.post('/update/:id',ControllerClass.updateQuery)
router.post('/delete/:id',ControllerClass.delQuery)


// for reply functionality

router.get('/reply',ControllerClass.getReply)
router.post('/reply/:id',ControllerClass.replyData)








module.exports=router