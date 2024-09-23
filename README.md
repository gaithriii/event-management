# event-management
1. Clone repository
git clone https://github.com/gaithriii/event-management

2. Install dependencies
npm install

3. Start backend locally
node server.js

4. Test APIs locally via Postman
http://localhost:3000/<endpoint>

Available Endpoints:
Create User / Signup: POST /api/auth/signup
Login: POST /api/auth/login
Create Event: POST /api/events/
View All Events: GET /api/events/
View a specific event: GET /api/events/<event_id>
Edit Event: PUT /api/events/<event_id>
Delete Event: DELETE /api/events/<event_id>

