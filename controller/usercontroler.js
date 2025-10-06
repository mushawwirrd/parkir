import { Op } from "sequelize";
import users from "../model/user.js";

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export default class userController {
    
    static async register (req, res) {
        let {email, username, password} = req.body
        password = bcrypt.hashSync(password, 8)

        const user = await users.create({email, username, password})
    
        const token = jwt.sign({userId : user.id}, "kata", {expiresIn: '1h'})
        return res.json({tokenAccess : token})

    }
    
    static async login (req,res) {
        const {username, password} = req.body

        //user log in 
        //user memasukkan username atau email
        const user = await users.findOne({where : {[Op.or] : [{username : username},{email : username}]} })
        if (user == null) {
            return res.json("User tidak ditemukan")
        }

        //user memasukkan password
        const isPassMatch = await bcrypt.compare(password, user.password)
        if (!isPassMatch) {
            return res.json("Password salah")
        }

        //user berhasil login, user mendapatkan token
        const token = jwt.sign({userId : user.id}, "kata", {expiresIn: '1h'})
        return res.json({tokenAccess : token})
    }

    //aunthentication, memeriksa kecocokan token yang didapat
    static async me (req, res) {
        const userId = req.userId
        const tokenUser = await users.findOne({where : {id: userId}})
        res.json(tokenUser)
    }

    //create
    static async create(req, res){
        let {username, password, email} = req.body
        password = bcrypt.hashSync(password, 10)

        const createUser = await users.create({email, username, password})
        res.json(createUser)
    }
//menampilkan semua isi database
    static async read (req, res) {
        const readUser = await users.findAll()
        res.json(readUser)
    }
//menampilkan databse tertentu
    static async detail (req, res) {
        const detailUser = await users.findOne({where : {id : req.params.id}})
        res.json(detailUser)
    }

    static async update (req, res) {
        let {email, username, password} = req.body
        password = bcrypt.hashSync(password, 8)

        const updateUser = await users.update({email, username, password}, {where : {id : req.params.id}})
        res.json(updateUser)
    }

    static async delete (req, res) {
        const deleteUser = await users.destroy({where : {id : req.params.id}})
        res.json(deleteUser)
    }


}

 
