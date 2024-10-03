# EONET Real-Time Event API Service

This is a **Node.js** and **Express** application that serves as a real-time event API service, fetching data from NASA's [Earth Observatory Natural Event Tracker (EONET)](https://eonet.sci.gsfc.nasa.gov/) API.

## Features

- Fetch real-time natural events from NASA's EONET API.
- Retrieve event categories for filtering events.
- Modular design using **Repository**, **Service**, and **Controller** patterns.
- Simple, easy-to-extend structure.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **Axios**: HTTP client for API requests.
- **dotenv**: Environment variable management.
- **ES6**: Modern JavaScript syntax.

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm (or yarn)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/eonet-api-service.git
    ```

2. Navigate into the project directory:
    ```bash
    cd eonet-api-service
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add the following:
    ```bash
    PORT=3000
    EONET_API_URL=https://eonet.sci.gsfc.nasa.gov/api/v3
    ```

5. Run the application:
    ```bash
    npm start
    ```

### Example Requests

- Fetch all event categories:
    ```
    GET /routes/categories
    ```

- Fetch events by category:
    ```
    GET /routes/events?category=<category_id>
    ```

### Using Postman

- **Get All Categories**: Send a `GET` request to `/routes/categories`.
- **Get Events by Category**: Send a `GET` request to `/routes/events` with a query parameter `category`.

## API Endpoints

- **GET /routes/categories**:
  - Fetches all available categories.
  - **Response**: A JSON array of event categories.
  
- **GET /routes/events**:
  - Fetches events filtered by a specific category.
  - **Query Parameter**: `category` (required)
  - **Response**: A JSON array of events.

  ## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.