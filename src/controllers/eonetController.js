// EONETController class to handle HTTP requests for the EONET API endpoints. 

class EONETController {
    constructor(eonetService){
        this.eonetService = eonetService;
    }

    // Controller method to get all categories
    async getEventsByCategory(req, res) {
        const {category} = req.query;
        if(!category){
            return res.status(400).json({message: 'category is required'});
        }

        try{
            const events = await this.eonetService.getEventsByCategory(category);
            res.send(events);
        }
        catch(error){
            console.error(`Error fetching events for category ${category}:`, error.message);
            res.status(500).json({message: `Error fetching events for category: ${category}`, error: error.message})
        }
    }

    // Controller method to get all categories
    async getCategories(req, res) {
        try{
            const categories = await this.eonetService.getAllCategories();
            res.send(categories);
        }
        catch(error){
            console.error('Error fetching categories:', error.message);
            res.status(500).json({message: 'Error fetching categories:', error: error.message});
        }
    }

}

export default EONETController;