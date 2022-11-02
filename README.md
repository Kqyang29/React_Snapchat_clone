# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

DataBase
  - Firebase
  - Firebase_auth
  - Firebase_cloud_Firestore
  - Firebase Storage
  
  
Feature:
  - User can SignIn with GoogleSignIn && SignOut by Click Avatar
    - <img width="270" alt="image" src="https://user-images.githubusercontent.com/65383495/199392600-4553ff0d-3a22-473c-befa-362c33fee38c.png">
    
  - Click Button ask you get Camera Permission, after allow permission, User can start to take Picture
    - <img width="313" alt="image" src="https://user-images.githubusercontent.com/65383495/199392736-86c43037-0a52-4e98-8645-feb7fecc65c7.png">
    
  - After taking the photo, User can preview the picture and Click send
    - <img width="280" alt="image" src="https://user-images.githubusercontent.com/65383495/199392816-8f12728a-68f5-4354-a5ff-6599434c941d.png">
    
  - Picture will send it to Chat Page and User can see their user infomation (name, profilePic,Post_Time..), and it will show unread red Icon 
    - <img width="248" alt="image" src="https://user-images.githubusercontent.com/65383495/199392901-386d9e96-1771-48d4-86e9-5ddb4470e041.png">
    
  - Click the checkbox, User can preview their picture again, and it will set the 10s timer, after 10s, page will automatically pop back or user can click screen to pop back to last page
    - <img width="248" alt="image" src="https://user-images.githubusercontent.com/65383495/199393016-848b7991-9067-423e-87ee-adca0376ece9.png">

  - Store the User Info in Redux and pass those value between pages
  
Host URL: https://linkedin-clone-3dccb.web.app


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
