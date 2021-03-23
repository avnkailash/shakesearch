# ShakeSearch

Welcome to the Pulley Shakesearch Take-home Challenge! In this repository,
you'll find a simple web app that allows a user to search for a text string in
the complete works of Shakespeare.

You can see a live version of the app at
https://pulley-shakesearch.herokuapp.com/. Try searching for "Hamlet" to display
a set of results.

In it's current state, however, the app is just a rough prototype. The search is
case sensitive, the results are difficult to read, and the search is limited to
exact matches.

## Your Mission

Improve the search backend. Think about the problem from the **user's perspective**
and prioritize your changes according to what you think is most useful.

## Evaluation

We will be primarily evaluating based on how well the search works for users. A search result with a lot of features (i.e. multi-words and mis-spellings handled), but with results that are hard to read would not be a strong submission.


## Submission

1. Fork this repository and send us a link to your fork after pushing your changes.
2. Heroku hosting - The project includes a Heroku Procfile and, in its
current state, can be deployed easily on Heroku's free tier.
3. In your submission, share with us what changes you made and how you would prioritize changes if you had more time.

## My Changes

Duration : ~2.5 Hours

Heroku Instance : https://shake-search-avnk.herokuapp.com/

### Improvements made:
  1. The Search is now case-insensitive.
  2. Display the search results in a tabular form for better readability.
  3. Show the total unique matches irrespective of case for a given result.
  4. Show Loading message to ensure users have a feedback about the searching at the backend.
  5. Highlight the matched words in each result row for better readability.

### Potential improvements if given more time
  1. I am relatively weak in shakespear english style, I would review the document more and try to understand the potential nearest words that can be considered as valid matches.
  2. Implement document preprocessing and seperate the text into different works.
  3. Show the work and the matches in the UI.
  4. Implement Pagination on the UI for better UX.
