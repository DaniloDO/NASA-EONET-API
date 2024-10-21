//authMiddleware to verify if user is logged in
import jwt from 'jsonwebtoken';
import dotenv from "dotenv"; 

dotenv.config();

//Verifies jwt token
const authMiddleware = (req, res, next) => {
    // const authHeader = req.headers.authorization;
    const cookie = req.cookies; 

    //Verifies if there's an authorization header or if the token follow jwt format (Bearer)
    if(!cookie.jwt){
        return res.status(401).json({message: 'No token provided, authorization denied'});
    }

    //Extracts token from string 
    const token = cookie.jwt;

    try{
        //Verifies if the token matches the jwt secret used to sign when login 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        //decoded provides user id and adds the id to the request
        req.user = decoded; 
        next(); 
    }
    catch(error){
        res.status(401).json({message: 'Token is not valid'});
    }

}

export default authMiddleware;