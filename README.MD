### FIND MY BAND

Welcome to FindMyBand. This is a tinder-style app for matching musicians with other musicians for chat and collabration.
Essentially, when the user creates their account they specify what instruments they play, what genres they make, what instrumentalists they want to work with, including what genres those instrumentalist play.

The project only has quite basic functionality at the moment, so there is a lot of room for development, which I think could be quite fun.

The project currently has

-Basic authentication
-Account Creation ('/login') and ('/signup') routes
-Routing
-ChatList component for later development
-The profile icon currently just links to a logout page. This should eventually lead to a detailed profile page where the user will be able to set their bio, and upload images to be stored in the cloud

CLOUD FUNCTIONALITY:
-There currently is 1 component, under <Form> > <FormUserProfile> which has the ability to upload stuff to cloudinary. The component is hidden at the moment, but the logic in this Component can be used to create the user profile if modified properly.

### HOW TO RUN THE APP

SERVER:
-Make sure to have MongoDB running on your computer
-Run nodemon index.js
-This will start the server on Port 4000.
-It will also create the FindMyBand DB with MongoDB, using the default connection settings for MongoDB

CLIENT:
-run npm start in client folder
-To sign in / create account, go to http://localhost:3000/login

#

#
