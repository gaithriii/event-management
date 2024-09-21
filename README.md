# event-management
1. Start monogodb locally: mongod --dbpath ~/data/db
Check mongodb path: cat /usr/local/etc/mongod.conf
Edit mongoDB path: vim /usr/local/etc/mongod.conf [esc, :wq! to save changes and quit]

2. Start frontend: npm start
Pages:
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/events/create" element={<CreateEvent />} />
    <Route path="/events/:id" element={<EventDetail />} />
    <Route path="/events" element={<EventList />} />

3. Start backend: node server.js

** Note that the frontend and backend has to be running in the same port to connect. Start the frontend and by default it will run in port 3000. Start the backend server in port 300 as well to connect.

Users created so far:
User                |   Password
---------------------------------
temp@gmail.com      |   temp1

4. Testing locally
# Build the Docker containers
docker-compose build

# Start the containers
docker-compose up

Run through the logs to ensure that backend is up and runing in registered port 3000 and mongoDB is running as well.

1. Verify frontend is working:
Navigate to frontend repo and run frontend code locally with command `npm start`.
Navigate to browser and hit any of the following paths to ensure frontend is able to communicate with backend and mongoDB docker containers.

2. Verify backend APIs are working via postman:
Hit the backend APIs on Postman to see that the endpoints are working as expected and responding with appropriate responses.