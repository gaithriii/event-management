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
