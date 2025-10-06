import parkir from "../model/parkir.js"
import users from "../model/user.js"

export default class parkirControler {
    static async order (req, res) {
        const {duration, nopol} = req.body
        const user_id = req.userId
        const total  = duration * 3000

        const parkirOrder = await parkir.create({duration, nopol, total, user_id})
        return res.json(parkirOrder)
    }

    static async show (req, res) {
        const user_id = req.userId

        const show = await parkir.findAll({where : {user_id}, include : [users]})
        return res.json(show)
    }

    static async update (req,res) {
        const {duration, nopol} = req.body;
        const user_id = req.userId;
        const total = duration * 3000;

        const parkir_id = req.params.id;
        
        const update = await parkir.update({duration, nopol, total, user_id}, {where : {id : parkir_id}});
        return res.json(update);
    }

    static async cancel (req, res) {
        const parkir_id = req.params.id;

        const parkingCancel = await parkir.destroy({where : {id : parkir_id}})
        return res.json(parkingCancel)
    }

    
}