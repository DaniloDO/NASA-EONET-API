// EONETRepository class responsible of fetching data from NASA’s EONET API (events and categories)
class EONETRepository{
    constructor(apiClient){
        this.apiClient = apiClient.getClient();
    }
    
    // Fetch events by category from the EONET API
    async getEventsByCategory(category){
        try{
            const response = await this.apiClient.get(`/events?category=${category}`);
            return response.data.events;
        }
        catch(error){
            console.error('Error in EONETRepository fetching events', error.message);
            throw error;
        }
    }

    // Fetch all event categories from the EONET API
    async getAllCategories(){
        try{
            const response = await this.apiClient.get('/categories');
            return response.data.categories;
        }
        catch(error){
            console.error('Error in EONETRepository fetching categories:', error.message);
            throw error;
        }
    }

}

export default EONETRepository; 