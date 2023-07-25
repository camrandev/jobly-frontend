# Jobly
Jobly is an indeed like application

You can view the backend [here](https://github.com/camrandev/jobly-backend)

View the deployed site [here](https://general-honey.surge.sh/), deployed with Render and Surge

Login: testuser | Password: password

## Tech Stack
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## Features
Here is an overview of some of the key features

- Users are able to log in and log out. Authentication is handled with JWTs and a custom hook to store tokens in local storage for persistent across sessions
- This project consumes a previously existing RESTful API
- The back end of this project has 100% test coverage

## Local setup instructions
Fork and clone the [backend](https://github.com/camrandev/jobly-backend)
```
cd [path_to_your_cloned_backend]
npm install
npm start
```
the backend will now be running locally on port 3001

Fork and clone this repo

```
cd [path_to_your_cloned_frontend]
npm install
npm start
```
the frontend will now be running locally on port 3000


## Tests
- The front end is currently untested, as I am planning on making some major revisions. The back end has 100% test coverage

## To-Dos
- implement a feature allowing users to apply for jobs
- implement a feature allowing a user to upload their resume and CV
- Add a "Guest Access" feature for the demo
- Revise styling to improve user experience
- Refactor to use typescript
- Write tests to cover rendering + mission-critical features

## Acknowledgements
The front-end of Jobly was built during my time at Rithm School, as part of a 3-day sprint. My partner on the front end was [Russel Jones](https://github.com/dar-mok).


