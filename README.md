# Book Search Engine Starter Code
  
## Description:
This application is built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API. This application takes a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo server. 

## User Story
```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Table of Contents:
- [Overview](#Overview)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage Instructions](#usage-instructions) 
- [Usage Screenshots](#screenshots)
- [Credits](#credits)  

# Overview

## Acceptance Criteria
```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```

## Installation
Git clone Repository: [Mern-Book-Search-Engine](https://https://github.com/RyanSKang/MERN-Book-Search-Engine.com/RyanSKang/NoSQL-API)  
Following Installation Needed:   
    -@apollo/client [^3.7.17](https://www.npmjs.com/package/@apollo/client)  
    -@apollo/react-hooks [^4.0.0](https://www.npmjs.com/package/@apollo/react-hooks)  
    -@testing-library/jest-dom [^4.2.4](https://www.npmjs.com/package/@testing-library/jest-dom)    
    -@testing-library/react [^9.3.2](https://www.npmjs.com/package/@testing-library/react)  
    -@testing-library/user-event [^7.1.2](https://www.npmjs.com/package/@testing-library/user-event)  
    -bootstrap [^5.2.3](https://www.npmjs.com/package/bootstrap)  
    -graphql [^16.7.1](https://www.npmjs.com/package/graphql)  
    -jwt-decode [^2.2.0](https://www.npmjs.com/package/jwt-decode)  
    -react [^16.13.1](https://www.npmjs.com/package/react)  
    -react-bootstrap [^2.7.0](https://www.npmjs.com/package/react-bootstrap)  
    -react-dom [^16.13.1](https://www.npmjs.com/package/react-dom)  
    -react-router-dom [^5.1.2](https://www.npmjs.com/package/react-router-dom)  
    -react-scripts [^5.0.10](https://www.npmjs.com/package/react-scripts)  
    -@apollo/server [^4.9.1](https://www.npmjs.com/package/@apollo/server)  
    -bcrypt [^5.0.0](https://www.npmjs.com/package/bcrypt)  
    -express [^4.17.](https://www.npmjs.com/package/express)  
    -graphql [^16.7.](https://www.npmjs.com/package/graphql)  
    -jsonwebtoken [^9.0.0](https://www.npmjs.com/package/jsonwebtoken)  
    -mongoose [^7.0.2](https://www.npmjs.com/package/mongoose)      
    -concurrently [^5.1.0](https://www.npmjs.com/package/concurrently)      
    -apollo-boost [^0.4.9](https://www.npmjs.com/package/apollo-boost)  
   

## Usage Instructions
1. Using a source code editor, open the cloned repository
2. Open integrated terminal in the root folder and execute an "npm i"  
3. On integrated terminal execute "npm start" and then an "npm run develop"  
4. Server should start (Including the Homepage)  
5. Access deployed application via Heroku:  
    -<a href="https://mern-book-search-engine-ryans-bf5f87e59dcd.herokuapp.com/">Heroku Deployed Application</a>
  

## Screenshots
### Figure 1. Home Page
 ![Screenshot 2023-08-06 at 6 04 20 PM](https://github.com/RyanSKang/MERN-Book-Search-Engine/assets/124969918/1d18b667-b6fb-4d34-9d1d-4a15bd60a9d0)  
### Figure 2. Log in
![Screenshot 2023-08-06 at 6 04 43 PM](https://github.com/RyanSKang/MERN-Book-Search-Engine/assets/124969918/326e4848-b4a7-4a62-9b8f-b3807b298251)  
### Figure 3. Sign Up
![Screenshot 2023-08-06 at 6 05 10 PM](https://github.com/RyanSKang/MERN-Book-Search-Engine/assets/124969918/f283451f-8064-4819-b467-a496287a3904)  
### Figure 4. Searched Books
![Screenshot 2023-08-06 at 6 05 39 PM](https://github.com/RyanSKang/MERN-Book-Search-Engine/assets/124969918/877d1b9e-91ac-4520-b705-110dbf479e18)  
### Figure 5. Books Saved
![Screenshot 2023-08-06 at 6 06 18 PM](https://github.com/RyanSKang/MERN-Book-Search-Engine/assets/124969918/f4a21a18-51f0-4982-9ef6-46afd7852fba)  
### Figure 6. View Saved Books
![Screenshot 2023-08-06 at 6 06 30 PM](https://github.com/RyanSKang/MERN-Book-Search-Engine/assets/124969918/ad5ec6f0-8344-4cc8-99a8-80e145a26a13)  



## Credits
-DU-Virt-FSF-PT-02-2023-U-LOLC | MERN 28-Stu_Mini-Project  
-AskBCS learning assistant  
-DU Dashboard Module 21 "Getting Started" Guidelines  
