import express from 'express'
import {create, getone, getall, update} from './controll.js'

const router=express.Router()

router.get('/',getall)

router.get('/:id',getone)

router.put('/:id',update)

router.post('/',create)

export default router;
