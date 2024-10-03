import axios from "axios";
import dotenv from "dotenv"; 

dotenv.config();

// APIClient class responsible for managing HTTP requests to external APIs
class APIClient {
    constructor(){
      
        // Check if an instance of APIClient already exists
        if(!APIClient.instance){
            // Create an Axios client with predefined configuration (baseURL, timeout, headers)
            this.client = axios.create({
              baseURL: process.env.EONET_API_URL,
              timeout: 5000,
              headers: {
                'Content-Type': 'application/json',
              }  
            });

            // Store the instance in APIClient.instance to prevent multiple instances from being created
            APIClient.instance = this;
        }
        return APIClient.instance;
    }

    // Method to get the Axios client instance for making HTTP requests
    getClient() {
        return this.client;
    }
}

// Freeze the instance to prevent any modifications to the instance
const apiClient = new APIClient();
Object.freeze(apiClient)

export default apiClient;