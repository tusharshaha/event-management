## Backend API's
### GET
* **User** &rarr; /user/confirm_email?token= &rarr; "confirm email by token".
* **Event** &rarr; /events &rarr; "get list of events".
* **Event Form** &rarr; /eventForm &rarr; "get all event form".
* **Event Form** &rarr; /eventForm/:id &rarr; "get event form by id".

### POST
* **User** &rarr; /user/signup &rarr; "create new user".
* **User** &rarr; /user/login &rarr; "login user".
* **Event** &rarr; /events/request &rarr; "create new event".
* **Event Form** &rarr; /eventForm &rarr; "create new event form".

### PATCH
* **User** &rarr; /user/update/ &rarr; "update user profile".
* **User** &rarr; /user/control/:email &rarr; "control a user (status, role)".

### DELETE