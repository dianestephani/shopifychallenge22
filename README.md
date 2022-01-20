# Shopify Technical Challenge 2022

---------------------------------

## Repositories

This project is hosted in 2 separate repositories:

1. [Front End React App](https://github.com/dianestephani/shopifychallenge22) in this current repository.
1. [Back End Express Server](https://github.com/dianestephani/shopifyserver22).

---------------------------------

## Web Application

This web app was built in JavaScript, using React for the front end and Express for the back end.

The user can view all current inventory for their store on the home page. Each individual item will have the option to be edited or deleted. The user will be able to add new inventory items to the list, and the home page will update to reflect the new addition.

---------------------------------

## Tools Used

- Microsoft Visual Studio Code
- Node.js
- Express
- MongoDB
- React
- Bootstrap
- Cors
- Fetch

---------------------------------

## Development Goals

- Get items to render to a table on the home page.
- Add, edit, or delete items.
- Attach a database with MongoDB.
- Export items to a text file.

---------------------------------

## Getting Started

Clone this repository to your local machine.

```
git clone https://github.com/dianestephani/shopifychallenge22.git
```

Change into project directory, install dependencies, and start the application. 

```
cd Repo/Project
`npm i`
`npm start`
```

After running `npm start`, the app will load in your browser on `http://localhost:3000.`

Routes can be tested using [Postman](https://www.postman.com/downloads/).


---------------------------------


## Data Flow (Frontend, Backend, REST API)

The user can view all current inventory items on the homepage. The client sends a "GET" request to the server via the home route to retrieve the inventory list. To add items, the client sends a "POST" request to the server via the home route. In the project's current state, POST requests are sent via the Postman app for testing. The server receives the new request, pushes it to the array of item objects, and then logs the new list to the server side console.

---------------------------

## Planning and Notes

Notes and planning in [this Google doc](https://docs.google.com/document/d/12DohMgeECUnxudz1T8rH96Bfnlujsv_mIhT8dBnTqhc/edit?usp=sharing).

---------------------------

## Author

Diane Stephani

------------------------------
