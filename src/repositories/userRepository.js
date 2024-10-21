// UserRepository class responsible of fetching data from MongoDB (users)
class UserRepository{
    constructor(userModel){
        this.userModel = userModel;
    }

    //Creates a new user in the database
    async createUser(userData){
        try{
            const newUser = new this.userModel(userData);
            return await newUser.save();
        }
        catch(error){
            console.error('Error in UserRepository creating user:', error.message);
            throw error;
        }
    }

    //Finds and fetch data from user through email
    async findUserByEmail(email){
        try{
            return await this.userModel.findOne(email);
        }
        catch(error){
            console.error('Error in UserRepository finding user by email:', error.message);
        }
    }

    //Finds and fetch data from user through id
    async findUserById(userId){
        try{
            return await this.userModel.findOne(userId);
        }
        catch(error){
            console.error('Error in UserRepository finding user by id:', error.message);
        }
    }

    //Finds and fetch data from all users
    async findAllUsers(){
        try{
            return await this.userModel.find();
        }
        catch(error){
            console.error('Error in UserRepository finding all users:', error.message)
        }
    }
}

export default UserRepository;