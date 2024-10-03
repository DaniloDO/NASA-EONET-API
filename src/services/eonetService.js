//EONETService class to interact with the EONET API, fetching event categories and events.
class EONETService{
    constructor(eonetRepository){
        this.eonetRepository = eonetRepository;
    }

    // Fetch events by a specific category ID from the EONET API
    async getEventsByCategory(category){
        try{
            let events = await this.eonetRepository.getEventsByCategory(category);
            return events;
        }
        catch(error){
            console.error('Error in EONETService fetching events:', error.message);
            throw error;
        }
    }

    // Fetch all available event categories from the EONET API
    async getAllCategories(){
        try{
            let categories = await this.eonetRepository.getAllCategories();
            return categories;
        }
        catch(error){
            console.error('Error in EONETService fetching categories:', error.message);
            throw error;
        }
    }
}

export default EONETService; 