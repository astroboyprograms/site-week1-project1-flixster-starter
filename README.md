## Week 1 Assignment: Flixster

Submitted by: **Jordan Ward**

Estimated time spent: **10** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](https://astroboyprograms.github.io/site-week1-project1-flixster-starter/)

### Application Features

#### Core Features

- [x] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [x] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [x] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [x] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [x] Website accounts for basic HTML/CSS accessibility features
- [x] Website should be responsive

#### Stretch Features

- [x] Deploy website using GitHub Pages.
- [x] Allow user to view more details about a movie within a popup.
- [x] Improve the user experience through CSS & animation.
- [ ] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [x] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

`TODO://` Add the embedded URL code to your animated app walkthrough below, `ADD_EMBEDDED_CODE_HERE`. Make sure the video or gif actually renders and animates when viewing this README. (🚫 Remove this paragraph after adding walkthrough video)

`ADD_EMBEDDED_CODE_HERE`

### Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Overall, I felt that the topics discussed in our labs did a great job in preparing me to complete the majority of the assignment. Concepts like fetching data from APIs, dynamically generating HTML, handling user interactions, and basic accessibility features were all covered in our labs and were integral to completing this assignment. I was able to apply these concepts effectively when building out the movie grid, implementing the movie search functionality, and displaying movie details. 

However, there were a few features that I struggled with and ultimately felt unprepared to tackle. Specifically, these were: 

Allowing movie video trailers to be played: While we discussed media embedding in our labs, we didn't go into much detail about integrating third-party video players or handling potentially more complex API responses to fetch video content. Unfortunately I was not able to figure out how to implement this feature effectively. 

Allowing users to view more details about a movie within a popup: We touched on DOM manipulation and event handling in our labs, which were helpful, but managing complex user interfaces like popups was a bit more challenging. I found myself struggling with positioning the popup correctly, handling overflow content, and managing the user experience for opening and closing the popup.

Making the website responsive: We did go over some basics of responsive design in the labs, but implementing these principles in a real project presented some unforeseen challenges. Balancing aesthetics and functionality across different device sizes proved more complex than anticipated.



- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time to work on this project, I would definitely have implemented a few additional features and refinements:

Allow Movie Video Trailers to be Played: I feel that being able to watch movie trailers directly on the site would significantly enhance the user experience. This feature would provide users with more context and intrigue about a movie, helping them to make a more informed choice about whether to watch it. To implement this, I would have utilized additional endpoints from the movie database API to fetch trailer URLs and integrated a video player on our website.

Movie Sorting & Filtering: An important aspect of a good movie site is to allow users to discover movies according to their taste and preferences. To facilitate this, I would have added the ability to sort and filter movies. Sorting could include options like rating, release date, or title. Filtering could be based on genres, languages, etc. This would require a more dynamic construction of the API request URL to include different sorting and filtering parameters based on user choices.

Advanced Search: Lastly, I would have improved the search functionality. Currently, users can search movies by their titles. I would have extended this to include other criteria such as actor/actress names, directors, runtime, etc. This would have involved a deeper understanding of the API documentation to determine how to construct the API request for these specific searches.

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

The project demo went very well overall. I was able to present the key functionalities of the project effectively and demonstrate how users can search for movies, view detailed information, and load more movies. The code ran smoothly during the demo, and the features worked as expected, which I consider a great success.

One feature that I was particularly impressed by during the peer presentations was the implementation of a dynamic search function. In this feature, the search results adjusted and displayed as the user was typing, rather than only displaying after the user hit 'Enter'. I found this to be a very user-friendly feature as it provided instant feedback to the user, making the search process more interactive and engaging. This is something I would definitely like to try implementing in my future projects


### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

I want to give a big shout out to Roy and Emanda, who have been instrumental in the success of my project. Their help was invaluable in numerous ways, from debugging tricky pieces of code to providing me with insightful advice on how to implement certain features.
