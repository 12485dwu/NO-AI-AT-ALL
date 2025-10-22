# Contact Management API

A RESTful API built with Express.js and Supabase for managing contacts. This API provides full CRUD (Create, Read, Update, Delete) operations for contact management.

## 🚀 Features

- **Full CRUD Operations**: Create, read, update, and delete contacts
- **Supabase Integration**: Real-time database with PostgreSQL
- **RESTful API Design**: Clean and intuitive endpoints
- **Error Handling**: Comprehensive error management
- **Async/Await Support**: Modern JavaScript patterns
- **Input Validation**: Request body validation

## 📋 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/contacts` | Get all contacts |
| POST | `/api/contacts` | Create a new contact |
| GET | `/api/contacts/:id` | Get a specific contact |
| PUT | `/api/contacts/:id` | Update a specific contact |
| DELETE | `/api/contacts/:id` | Delete a specific contact |

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: Supabase (PostgreSQL)
- **Runtime**: Node.js
- **Package Manager**: npm

## 📦 Dependencies

### Production Dependencies
- `express` - Web framework for Node.js
- `@supabase/supabase-js` - Supabase client library
- `express-async-handler` - Async error handling
- `dotenv` - Environment variable management

### Development Dependencies
- `nodemon` - Development server with auto-restart

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account and project

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd express_project/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Database Setup**
   Create a `contacts` table in your Supabase project:
   ```sql
   CREATE TABLE contacts (
       id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
       name text NOT NULL,
       email text NOT NULL UNIQUE,
       phone text NOT NULL,
       created_at timestamptz DEFAULT now(),
       updated_at timestamptz DEFAULT now()
   );
   ```

5. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## 📊 Database Schema

### Contacts Table

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | `uuid` | PRIMARY KEY | Unique identifier |
| `name` | `text` | NOT NULL | Contact's full name |
| `email` | `text` | NOT NULL, UNIQUE | Contact's email address |
| `phone` | `text` | NOT NULL | Contact's phone number |
| `created_at` | `timestamptz` | DEFAULT now() | Creation timestamp |
| `updated_at` | `timestamptz` | DEFAULT now() | Last update timestamp |

## 🔧 API Usage Examples

### Get All Contacts
```bash
curl http://localhost:5000/api/contacts
```

### Create a New Contact
```bash
curl -X POST http://localhost:5000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890"
  }'
```

### Get a Specific Contact
```bash
curl http://localhost:5000/api/contacts/{contact-id}
```

### Update a Contact
```bash
curl -X PUT http://localhost:5000/api/contacts/{contact-id} \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "phone": "+0987654321"
  }'
```

### Delete a Contact
```bash
curl -X DELETE http://localhost:5000/api/contacts/{contact-id}
```

## 📝 Request/Response Examples

### Create Contact Request
```json
POST /api/contacts
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890"
}
```

### Create Contact Response
```json
{
  "data": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  },
  "message": "Create a new contact"
}
```

### Error Response
```json
{
  "title": "Validation Failed",
  "message": "All fields are mandatory!",
  "stackTrace": "..."
}
```

## 🏗️ Project Structure

```
backend/
├── controllers/
│   └── contactContorllers.js    # Contact CRUD operations
├── middleware/
│   └── errorHandler.js          # Global error handling
├── routes/
│   └── contactRoutes.js         # API route definitions
├── constants.js                 # HTTP status constants
├── supabase-clients.js         # Supabase client configuration
├── server.js                   # Express server setup
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🔍 Error Handling

The API includes comprehensive error handling for:

- **400 Bad Request**: Invalid input data
- **404 Not Found**: Contact not found
- **500 Internal Server Error**: Server-side errors

## 🧪 Testing

### Using Postman
1. Import the API endpoints into Postman
2. Set the base URL to `http://localhost:5000`
3. Test all CRUD operations

### Using curl
All endpoints can be tested using curl commands (see examples above).

## 🚀 Deployment

### Environment Variables
Make sure to set the following environment variables in production:

```env
PORT=5000
SUPABASE_URL=your_production_supabase_url
SUPABASE_ANON_KEY=your_production_supabase_key
```

### Production Considerations
- Use environment variables for sensitive data
- Enable CORS if needed for frontend integration
- Set up proper logging
- Consider rate limiting for production use

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Dan Wu** - Contact Management API

## 🆘 Support

If you encounter any issues or have questions, please create an issue in the repository or contact the author.

---

**Happy Coding! 🚀**

