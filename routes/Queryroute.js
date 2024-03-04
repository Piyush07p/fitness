const express =require('express')
const router=express.Router();
const auth=require('../middleware/auth.js')
const ControllerClass=require('../controllers/QueryController')

router.get('/',ControllerClass.getQuery)
router.post('/',auth.isLogin,ControllerClass.createQuery)
router.get('/edit/:id',ControllerClass.editQuery)
router.post('/update/:id',ControllerClass.updateQuery)
router.post('/delete/:id',ControllerClass.delQuery)

// for ai

router.post('/gptresponse',ControllerClass.askAiQuery)
router.get('/askai',ControllerClass.askai)
// for reply functionality

router.get('/reply/:id',ControllerClass.getReply)
router.post('/reply/:id',ControllerClass.replyData)
router.post('/reply/delete/:id',ControllerClass.delReply)
router.post('/reply/like/:id',ControllerClass.updateLike)
router.post('/reply/dislike/:id',ControllerClass.updateDislike)









module.exports=router