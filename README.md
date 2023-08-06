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
    -Concurrently [v5.1.0](https://www.npmjs.com/package/concurrently/v/5.1.0)  
    -Bootstrap [^5.2.3](https://www.npmjs.com/package/bootstrap/v/5.2.3)  
    -Jwt-decode [^2.2.0](https://www.npmjs.com/package/jwt-decode/v/2.2.0)  
    -React [^16.13.1](https://www.npmjs.com/package/react/v/16.13.1)  
    -React-bootstrap [^2.7.0]()  
    -React-dom [^16.13.1]()  
    -React-router-dom [v5.1.2]()  
    -React-scripts [^5.0.1]()  
    -Bcrypt [^5.0.0]()  
    -Express [^4.17.1]()  
    -Graphql [v15.5.0]()  
    -Jsonwebtoken [^9.0.0]()  
    -Mongoose [^7.0.2]()  
   

## Usage Instructions
1. Using a source code editor, open the cloned repository
2. Open integrated terminal in the root folder and execute an "npm i"  
3. On integrated terminal execute "npm start" and then an "npm run develop"  
4. Server should start (Including the Homepage)  
5. Access deployed application via Heroku:  
    -<a href="">Heroku Deployed Application</a>
  

## Screenshots
### Figure 1. Home Page
 

### Figure 2. Books Saved


### Figure 3. View Saved Books




## Credits
-DU-Virt-FSF-PT-02-2023-U-LOLC | MERN 28-Stu_Mini-Project  
-AskBCS learning assistant  
-DU Dashboard Module 21 "Getting Started" Guidelines  
