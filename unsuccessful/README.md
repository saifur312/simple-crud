# simple-crud

Simple crud application

# Reason for unsuccess

- fail to communicate between js files

## Understanding the Issue

- Me correctly adding users to the users array in signup.js when the submit button is clicked.
- However, when I access the users array in users.html, its length is still 0.
- This is because the users array in signup.js is a different instance than the one in users.html. They don't automatically share the same data.

## This things working correctly but since we want to access the users from different file so page reload works when the different files open So the values from are resetting to empty.
