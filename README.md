# Project Overview
This project uses Node.js and npm to build a web application. Follow the instructions below to set up the environment, install dependencies, and run the project.

## Requirements
- Node.js (LTS version recommended)
- npm (comes bundled with Node.js)

## Steps
1. **Clone the project**  
Clone the repository to your local machine using git:
```
git clone https://github.com/RadBia/NotesAppFrontend.git
```
2. **Install dependencies**  
Navigate to the project's root directory and run the following command to install the necessary dependencies:
```
npm install
```  
This command will read the `package.json` file and install the required packages listed under the `dependencies` and `devDependencies` sections.

3. **Run the project**  
After installing the dependencies, run the following command to start the project:
```
npm start
```

This command will execute the start script defined in the package.json file. Once the server is running, you can access the application in your web browser at http://localhost:3000.

4. **Change a user's role**   
After creating the user, change the `privilage` field from `user` to `admin` in the `testdb.user` table. It will add a list of users to the user panel.    

![admin](https://user-images.githubusercontent.com/85350630/227769990-0d238b86-64ef-4271-a24c-785b9ab8f5ad.jpg)
