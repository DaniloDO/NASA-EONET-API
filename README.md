# EONET Real-Time Event API Service

This is a Node.js and Express application that serves as a real-time event API service, fetching data from NASA's Earth Observatory Natural Event Tracker (EONET) API. The application includes JWT-based authentication, MongoDB for user management, and password hashing for secure storage.

## Features
- Fetch real-time natural events from NASA's EONET API.
- Retrieve event categories for filtering events.
- JWT-based authentication for secured access.
- MongoDB integration for user management (registration and login).
- Password hashing for secure user credentials storage.
- Modular design using Repository, Service, and Controller patterns.
- Simple, easy-to-extend structure.

## Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **Mongoose**: MongoDB ODM for schema and model creation.
- **Bcrypt**: For securely hashing passwords.
- **Axios**: HTTP client for API requests.
- **JWT**: Authentication using JSON Web Tokens.
- **dotenv**: Environment variable management.
- **ES6**: Modern JavaScript syntax.

## Installation

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (or **yarn**)
- **MongoDB** (installed and running locally or a MongoDB Atlas account)

### Steps
1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/eonet-api-service.git
    ```

2. **Navigate into the project directory**:
    ```bash
    cd eonet-api-service
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Create a `.env` file** in the root directory and add the following:
    ```plaintext
    PORT=3000
    EONET_API_URL=https://eonet.sci.gsfc.nasa.gov/api/v3
    JWT_SECRET=your_jwt_secret
    MONGO_URI=your_mongo_db_connection_string
    ```

5. **Run the application**:
    ```bash
    npm start
    ```

## Authentication Features
- **User Registration**: Users can register by providing an email and password.
- **Password Hashing**: User passwords are securely hashed using bcrypt before being stored in the database.
- **User Login**: Users can log in and receive a JWT for accessing secured routes.
- **JWT Token**: Stored in a cookie to authenticate requests.

## Example Requests

### Fetch all event categories (Public):
```bash
GET /api/categories
```
### Fetch events by category (Public):
```bash
GET /api/events?category=<category_id>
```
### User Registration (Public):
```bash
POST /api/users/register
```
Payload:
```bash
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```
### User Login (Public):
```bash
POST /api/users/login
```
Payload:
```bash
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```
Response: A JWT is returned and stored in cookies.

### User Logout (Public):
```bash
POST /api/users/logout
```
## API Endpoints

- **GET /api/categories**:
  - Fetches all available categories.
  - **Response**: A JSON array of event categories.
  
- **GET /api/events**:
  - Fetches events filtered by a specific category.
  - **Query Parameter**: `category` (required)
  - **Response**: A JSON array of events.

- **POST /api/users/register**:
  - Register a new user with hashed password storage.

- **POST /api/users/login**:
  - Login a user and issue a JWT.

- **POST /api/users/logout**:
  - Logout a user.

  ## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.





