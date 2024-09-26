import axios from "axios";

class APIClient {
    constructor(){
        if(!APIClient.instance){
            this.client = axios.create({
              baseURL: process.env.EONET_API_URL,
              timeout: 5000,
              headers: {
                'Content-Type': 'application/json',
              }  
            });
            APIClient.instance = this;
        }
        return APIClient.instance;
    }

    getClient() {
        return this.client;
    }
}

const instance = new APIClient();
Object.freeze(instance)

export default instance.getClient()