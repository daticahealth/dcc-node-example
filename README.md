## DCC NodeJS Example
---
### This application is a simple NodeJS API (using Express framework) that will return a message from a GET to the root path.
---
## Requirements

* Port: The application is coded to run on port 8081.
* Environment Vars:
    * MESSAGE: The message that the API will return on a GET to "/".  This variable is required.
* Health Check: The application has a dedicated health check endpoint at /_healthcheck that should return a 200 status.
---
## How to Run
* The app is started with the following command: `node app.js`.
---
## DCC Deployment
* This repository contains both a Dockerfile and a Procfile, so deployment can be done with either the Dockerfile or Buildpack mechanism.