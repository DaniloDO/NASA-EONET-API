// UserService class responsible for business logic implemented in user data
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"; 

dotenv.config();

class UserService{
    constructor(userRepository){
        this.userRepository = userRepository;
    }
    
    //Creates a new user in the database and hashes the password
    async registerUser(userData){
        try{
            // Check if the email is already registered
            const existingUser = await this.userRepository.findUserByEmail({email: userData.email});
            if(existingUser){
                throw new Error('Email is already registered');
            };

            // Hash the user's password
            const hashedPassword = await bcrypt.hash(userData.password, 10);
            const userHashedPassword = {...userData, password: hashedPassword};

            // Save the new user in the database
            return await this.userRepository.createUser(userHashedPassword);

        }
        catch(error){
            console.error('Error in UserService registering user:', error.message);
            throw error;
        }
    }

    // Login user (verify password and generate JWT)
    async loginUser(email, password){
        try{
            //Verifies if user is in database
            const user = await this.userRepository.findUserByEmail({email: email});
            if(!user){
                throw new Error('User not found');
            }

            // Check if the password matches
            const passwordValid = bcrypt.compare(password, user.password);
            if(!passwordValid){
                throw new Error('Invalid credentials');
            }

            // Generate a JWT token
            const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
            return {user, token}
        }
        catch(error){
            console.error('Error in UserService logging in user:', error.message);
            throw error; 
        }
    }

    //Finds and fetch data from user through id
    async findUserById(userId){
        try{
            const user = await this.userRepository.findUserById(userId);
        }
        catch(error){
            console.error('Error in UserService cant find user with id provided', error.message);
            throw error;
        }
    }

    //Finds and fetch data from all users
    async findAllUsers(){
        try{
            return await this.userRepository.findAllUsers();
        }
        catch(error){
            console.error('Error in UserService cant find users in database', error.message);
            throw error;
        }
    }
}

export default UserService;