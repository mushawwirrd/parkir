import jwt from "jsonwebtoken"

//memeriksa kecocokan token yang didapat saat log in
const aunthenticate = (req, res, next) => {
    //memeriksa token
    const token = req.header ("Authorization")
    if (!token) return res.status(401).json({error : "Akses ditolak"})
    
    try {
    //jika token cocok, lanjut ke next step
    const decoded = jwt.verify(token, "kata")
    req.userId = decoded.userId
    next()
    }catch {
        res.status(401).json({error: "Token tidak valid"})
    }
}


export default aunthenticate