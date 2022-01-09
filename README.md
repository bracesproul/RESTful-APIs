# RESTful-APIs
# Credits
Code taken from Academind's YouTube series on "Building a RESTful API with Node.js"
Link to the video playlist: https://www.youtube.com/playlist?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q
Link to Academind's YouTube channel: https://www.youtube.com/c/Academind

# Overview
A collection of directories starting from the most basic RESTful API, leading up to a functioning API that can read and write to a MongoDB database.

# Log of directories and updates
1-base-RESTful-API
Video: https://www.youtube.com/watch?v=blQ60skPzl0&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=3
This directory is the most basic RESTful API with one route.

2-RESTful-API-with-more-routes
Video: https://www.youtube.com/watch?v=FV1Ugv1Temg&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=4
This directory adds more routes and the ability to use more HTTP verbs.

3-RESTful-api-error-handling
Video: https://www.youtube.com/watch?v=UVAMha41dwo&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=5
This directory implements error handling and logging changes and events using Morgan (https://www.npmjs.com/package/morgan)

4-parsing-body-added-CORS-handling
Video: https://www.youtube.com/watch?v=zoSJ3bNGPp0&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=6
- Adds a body parser using the NPM package body-parser
- Sends response with POST data when creating a new product/order
- Added CORS support

5-adding-MongoDB-and-Mongoose
Video: https://www.youtube.com/watch?v=WDrU305J1yw&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=6
- Added Mongoose npm package
- Added a .gitignore file
- Added dovenv npm package
  Why do we need dovenv?
    I) The dotenv package allows us to store environment variables in a .env file.
    II) This .env file is hidden from the user and is only used by the application, we also must add it to a .gitignore file as to not accidentally push sensitive information to the repository.
    III) After adding our environment variables, we can use dotenv to load them into our process.env object. 
    IV) This allows us to use environment variables in our code.
    V) I've added a fake .env file to the repository to show how this works.
- Added Mongoose models
- Added models folder in './api/models' for Mongoose models