# Ippopay

## Problem-1 Requirements
Write the code in Javascript. Provide comments as needed.Write unit tests.
**********************
1. A password is considered strong if the below conditionsare all met:
● It has at least 6 characters and at most 20 characters.
● It contains at least one lowercase letter, at least oneuppercase letter, and at least one digit.
● It does not contain three repeating characters in a row
(i.e., &quot;Baaabb0&quot; is weak, but &quot;Baaba0&quot; is strong).Given a string password, return the minimum number of steps required to make password strong. if password is already strong, return 0.
In one step, you can:
● Insert one character to password,
● Delete one character from password, or
● Replace one character of password with another
character.

## Output Screen

![alt text](https://github.com/Gowthami0301/Ippopay/blob/master/Output/6.png)

## Problem-2 Requirements
You are given an integer array nums of 2 * n integers.You need to partition nums into two arrays of length n to minimize the absolute difference of the sums of the arrays. To partition nums, put each element of nums into
one of the two arrays. Return the minimum possible absolute difference.

## Output Screen

![alt text](https://github.com/Gowthami0301/Ippopay/blob/master/Output/7.png)


## Full Stack Application For Problem-1 Requirements
Write a simple front end using React to take input and print results in the following page. Save the results
in a database preferably MongoDB. Please use good styling guidelines. You can just pick one program from the Problem 1

# Password Strength Checker

This project is a simple front-end application built with React and Ant Design that allows users to check the strength of their passwords. It enforces specific criteria for a strong password and provides feedback on the password strength.

## Features

- Password length validation: Checks if the password has at least 6 characters and at most 20 characters.
- Character type validation: Requires at least one lowercase letter, one uppercase letter, and one digit in the password.
- Repeating character validation: Ensures that the password does not contain three repeating characters in a row.
- Real-time password strength indication: Displays the strength of the password as the user types.

The application should now be running at `http://localhost:3000`.

## Technologies Used

- React: JavaScript library for building user interfaces.
- Ant Design: A popular UI library for React applications.
- Axios: A promise-based HTTP client for making API requests.

## Testing

The project uses Jest and React Testing Library for unit testing. To run the tests, use the following command:

## Backend Integration

The project includes a sample integration with a Node.js backend for saving passwords to a MongoDB database. The backend code is located in the `server` directory. To run the backend server, navigate to the `server` directory and run:


## Output Screen

![alt text](https://github.com/Gowthami0301/Ippopay/blob/master/Output/1.png)

## Basic Empty Validation Screen

![alt text](https://github.com/Gowthami0301/Ippopay/blob/master/Output/2.png)

## Strong Password Validation  Screen

![alt text](https://github.com/Gowthami0301/Ippopay/blob/master/Output/3.png)

## Password Saved Success Message From DB Screen

![alt text](https://github.com/Gowthami0301/Ippopay/blob/master/Output/4.png)

## Password Saved Error Message From DB Screen

![alt text](https://github.com/Gowthami0301/Ippopay/blob/master/Output/5.png)
