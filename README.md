# Blackboard Insurance Interview Project
By Sheri Kwong

Hi. :-) This was overall a very fun project to work on.

As a note, I started off the project with Full Stack Academy's boilerplate. I used this boilerplate because the backend database, Express, and React-Redux setup are pretty much all complete. The first commit belongs to them. The only changes in commit #a440417 that I made are the following files:
- (+) client/store/superheroes.js
- (+) server/api/superheroes.js

### Loading the Superheroes API
I realized the Superhero API didn't have a GET for all their listed Superheroes. I ended up looping calls to their API per each character and adding it into my own database so that I would be able to create my own API endpoints. (I had played around with recursively calling the API to start multiple threads, rather than one incrementing slowly. However, due to time constraints, I didn't quite finish and reverting my changes).

### Creating my own DB
My final product has two defined tables: one for simplified biographies of each character and another for their respective power stats that is associated with the prior table via a foreign key.

### Display Characters by Alignment
In order to display characters, I created an endpoint via my local API, querying my database based on a specified alignment. On the front-end, I created a Redux thunk to make an Axios call. Afterwards, I retrieved the response from Superheroes reducer. I looped over each result to display them in Bootstrap columns.

### Filtering
Under each alignment's results, there is a search bar that allows you to filter out character results by name via a string.

Note: It was working perfectly at one point, however, after adding the feature to view each character's stats, it stopped working. :-) That's something that needs to be worked on.

### Choosing a Character
When a character is selected from the results grid, an API call is made querying the power stats table for an entry that's ID matches the foreign key from the respective character's profile. Some Redux logic is added to display those stats.

## Front-end
### Tech used
- React-Redux
- Bootstrap

## Back-end
### Tech used
- Sequalize
- Axios
- Postgres
- Express

