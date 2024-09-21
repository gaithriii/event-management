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
temp@gmail.com      |   Password1
temp1@gmail.com     |   Password1
temp2@gmail.com     |   Password1
temp3@gmail.com     |   Password1

4. To run MongoDB in Docker:
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  -v mongodbdata:/data/db \
  mongo:latest

  -d: Runs the container in detached mode (in the background).
  --name mongodb: Names the container "mongodb".
  -p 27017:27017: Maps port 27017 of your local machine to port 27017 in the container (MongoDB's default port).
  -v mongodbdata:/data/db: Mounts a volume to persist MongoDB data so that it is saved even after the container stops.

To check if MongoDB is running in the background: docker ps

5. To build and run backend in Docker Container
To build backend on Docker: docker build -t event-management-backend .
To run backend on Docker: docker run -d -p 3000:3000 event-management-backend