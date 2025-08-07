# RLSS Backend API

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the backend directory with the following content:
   ```env
   MONGO_URI=mongodb://localhost:27017/rlss
   JWT_SECRET=supersecretkey
   PORT=5000
   ```
3. Start MongoDB locally (or update `MONGO_URI` for your setup).
4. Start the server:
   ```bash
   node index.js
   ```

## API Endpoints
- `POST /api/register` — Register a new user (for setup only)
- `POST /api/login` — Login and get JWT
- `GET /api/services` — List all services
- `POST /api/services` — Add a service (admin only)
- `POST /api/contact` — Submit a contact message
- `GET /api/contacts` — List contact messages (admin only) 