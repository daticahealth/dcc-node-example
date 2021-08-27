## DCC NodeJS Example
### This application is a simple NodeJS API (using Express framework) that will return a message from a GET to the root path.
## Requirements

* Port: The application is coded to run on port 8081.
* Environment Vars:
    * MESSAGE: The message that the API will return on a GET to "/".  This variable is required.
* Health Check: The application has a dedicated health check endpoint at /_healthcheck that should return a 200 status.
## How to Run
* The app is started with the following command: `node app.js`.
## DCC Deployment
* This repository contains both a Dockerfile and a Procfile, so deployment can be done with either the Dockerfile or Buildpack mechanism.
  
* Setup the repository connection
![node_express_repo](https://user-images.githubusercontent.com/55393832/131186892-f4bb615c-84d3-4a27-8da2-a59573dc591e.jpg)

* Configure the build - this demonstrates a BuildPack build, to create with a Dockerfile, set the BuildType to "Dockerfile" and set the Dockerfile Name to the match the Dockerfile in the root of this repo ("Dockerfile").
![node_express_build](https://user-images.githubusercontent.com/55393832/131187055-d7aa95b0-0593-465c-938e-9f1fab60395c.jpg)

* Set the port to the port this application will run on, 8081.  Modify the scale/ram/cpu to meet your needs.
![node_express_config](https://user-images.githubusercontent.com/55393832/131187421-1d1006df-c196-4be2-9aa9-87e62e634e7d.jpg)

* Set the health check endpoint to use the designated route the application provides; the expected response is a 200.
![node_express_healthcheck](https://user-images.githubusercontent.com/55393832/131187181-ed442ff3-6d2d-4e8f-ba42-0ede9a9a3068.jpg)

* Set the listener path to listen on the root
![node_express_routing](https://user-images.githubusercontent.com/55393832/131187239-d2dcb6ef-40ee-4b9f-b0d7-aa7f30355269.jpg)

* Configure the required add-ons, we need the MESSAGE environment variable![node_express_env](https://user-images.githubusercontent.com/55393832/131187385-21b16636-b86d-4a58-9d98-4601b13326af.jpg)
![node_express_addons](https://user-images.githubusercontent.com/55393832/131187315-2fa4d435-5026-4a61-bf8d-8a5b4dec6afa.jpg)
![node_express_env](https://user-images.githubusercontent.com/55393832/131187407-e37e27f5-4915-4bc9-9841-0539ce1f0995.jpg)



