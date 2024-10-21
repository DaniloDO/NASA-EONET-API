// UserController class to handle HTTP requests for user related endpoints. 
class UserController{
    constructor(userService){
        this.userService = userService;
    }

    // Controller method to register user
    async register(req, res){
        try{
            const user = await this.userService.registerUser(req.body);
            res.status(201).json(user);
        }
        catch(error){
            res.status(400).json({message: error.message});
        }
    }

    // Controller method to login user
    async login(req, res){
        try{
            const { email, password } = req.body;
            const { user, token } = await this.userService.loginUser(email, password);

            //setting cookie with jwt token
            res.cookie('jwt', token, {
                httpOnly: true,
                secure: false,
                maxAge: 1000*60*60*1 
            });

            res.json({user, token});
        }
        catch(error){
            res.status(400).json({message: error.message});
        }
    }

    // Controller method to logout user (clear cookies)
    async logout(req, res){
        res.clearCookie('jwt');
        res.status(200).json({message: 'Logged out successfully'});
    }

    // Controller method to get all users
    async findAllUsers(req, res){
        try{
            const users = await this.userService.findAllUsers();
            res.json(users);
        }
        catch(error){
            res.status(400).json({message: error.message});
        }
    }
}

export default UserController; 