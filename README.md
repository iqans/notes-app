## Notes App
This is a simple notes system containing multiple microservices and built using node.js. The app contains frontend app, backend APIs and a worker. 

### Application Details:
- User can register and login
- User can create, view, update and delete notes
- User can see details of a note
- User can share note with another user
- User can add notes to group and see notes in group
- User can add notes to favourites
- User can set reminder on a note

#### Using docker-compose
- Build and start
```docker-compose up --build ```
- Stop
```docker-compose down ```

#### Individual service documentations
- [User Profile Service](./userProfileService/README.md)
- [Notes Service](./notesService/README.md)
- [Notifications Service](./notificationService/README.md)

#### API Specs
- [User Profile Service](http://localhost:3000/api/v1/users/api-specs/)
- [Notes Service](http://localhost:3000/api/v1/notes/api-specs/)
- [Notifications Service](http://localhost:3000/api/v1/notifications/api-specs/)

#### Architecture
![Architecture diagram](./na_architecture.jpg "notes-app-architecture")