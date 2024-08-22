# Team Lightyear

Project Proposal Google Doc: https://docs.google.com/document/d/1Hk4mSy_guucAX-L2oRSvuAVv4eY3AXH89tQAasyalg4/edit?usp=sharing

## To run the Java/Spring API
Create a database schema in MySQL/Docker named wellcoffee
Use the following user information to allow access to the database:
* DB username: admin
* DB password: password

## To run the React App
* Add a file in the React root folder (Well-Coffee-UI) called ".env"
* In this file, add a line starting with "REACT_APP_AMAZON_API_KEY="
* Subscribe to the free API at https://rapidapi.com/letscrape-6bRBa3QguO5/api/real-time-amazon-data to get an API key.
* After subscribing, you should select an endpoint from the left hand menu and copy the information in the field: X-RapidAPI-Key and paste it after the equals sign in the .env file.

* Run "npm i" to install dependencies
* Run "npm run dev" to start app

* Open http://localhost:5173/home in your browser
