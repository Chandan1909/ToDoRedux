import express from 'express';
import * as todocontroller from './../controllers/todo-controller.js'

const router =express.Router();
//Routing based on the url
router.route('/todo')
    .post(todocontroller.post)
    .get(todocontroller.index);

//Routing based on id value only
router.route('/todo/:id')
    .get(todocontroller.get)
    .put(todocontroller.update)
    .delete(todocontroller.remove);
//Exporting the values;
export default router;