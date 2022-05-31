# Travel-Advisor

Travel Advisor is an attempt to bring the concept and features to life of the robust and popular web streamings applications like Netflix and Spotify.

This project was built as a part of the Microsoft Engage Program 2022 where mentees had to take up one of the three challenges/tracks, namely Face Recognition, Data Analysis and Algorithms.

I choose the 3rd challenge of researching and thinking about the algorithms that may be used in a web streaming service such as netflix and spotify to recommend different places to visit.

![image](https://user-images.githubusercontent.com/99320422/171132046-aaeb92b8-3861-42c2-ac47-cb094f42d932.png)


*Motivation:* 


While travelling from home to hostel and hostel to home, everytime I look through the window, I wondered what could be the speciality the place and the beautiful architecture of the city. And then a small idea came into existance, why not develop a something that recommends you placees according to your locatiion.


*Solved Problem:*


Aim of this web app is to make your next vacation, the best experience and help you to discover new and amazing places that are around you. And plan next trip taking into consideration all the parameters.


*Learnings:*


Through the Microsoft Engage Mentorship Program 2022 under the able guidance of my mentor - Rohit Kumar Shaw sir I was able to go from a person who just knew how to make static web pages to a person who can learn build and deploy full flegded web applications while my exams are going on.This was my first time experience with Material UI, React Js, APIs namely Google Maps 
API, Trip Advisor and Open Weather Map API.

*Watch Demo* : <a href="https://drive.google.com/file/d/1EAI27ZcaMjp5SzO0LmTaMltzI3EoDyID/view?usp=sharing">Video Demo</a>


## Screenshot of the WebApp
![image](https://user-images.githubusercontent.com/99320422/171132925-4e367fbb-3b50-47d7-89e6-93c900540907.png)
![image](https://user-images.githubusercontent.com/99320422/171133093-1c046d0d-86ef-479a-920b-282e4b7eb101.png)


## Table Of Contents
[Features](#features)

[Installation / Getting Started](#installation)

[Tech Stack](#tech-stack)

[Algorithms](#recommender-system-&-algorithms)

[Challenges](#challenges-faced)

[Future Scope](#future-scope)

[Bug Log](#bug-log)

[Demo](#demo)

[Resources](#resources)

[Support & Contact](#support-&-contact)


## Features

- Responsive Design for Desktops, Ipads, Tablets and Phone
- Visualization of no of places available through map
- Home Page Recommendations On the Basis of Users Location without User Login
- Sort Places on the basis of Restaurants, Hotels and Attraction
- Sort Places on the basis of Ratings
- Overview of the Recommmended Place in the card of the Place
- Accurate recommendations for over 50 countries
- Buttons that take you to official Website of the place
- Buttons that take you to Website of the Trip Advisor where you can see detailed overview of    the place
- Change the Recommended Place with the changes in the Map that includes Zoom in, Zoom Out and Change in Location
- Search Bar for recommendation on the basis of places we choose 
- Live suggestions on the Search Bar
- Visualizationn of weather of the places in the map


## Installation

To use this Project Follow the steps below:-

1. Clone the Repo

```bash

    git clone https://github.com/salonigupta001/Travel-Advisor
```

2. install NPM Packages

```bash
  
   npm install i
```


3. Do the required for activating .env files


4. Start Client

```bash
   
   npm start
```


## Tech Stack

In spite of all the smart devices that exist today in the world, one thing that is common is - web and internet browsers. I selected my application to be a web application so that a large number of users are able to use it with ease and connect together

*Client:* HTML, Material-Ui, React Js 

*Server:* Google Maps API, Rapid API( Trip Advisor API, Open Weather Map API) 


## Recommendation System & Algorithms

The term Recommendation system is described as any
organization that provides personalized suggestions as a
result and it effects the user in the individualized way to
favorable items from the large number of opinions.

Recommendation systems are usually classified
into siix categories: 


*Content-Based Recommendation:* one tries
to recommend items similar to those a given user has liked in
the past


*Collaborative Recommendation:* one
identifies users whose tastes are similar to those of the given user and recommends items they have liked


*Demographic Recommendation:* recommends items based on demographic information of the users. It does not require users ratings or knowledge of the item and thus can overcome cold start problem.


*Hybrid Recommendation:* combination of the content and collaborative filtering method


*Knowledge-Based Recommendation:* based on explicit knowledge about the item assortment, user preferences, and recommendation criteria (i.e., which item should be recommended in which context).


*Context-Aware Recommendation:* If the target user’s contextual information is available, we can make the RSs ubiquitous. Various attributes like time, location, companion, mood, etc.,



### Role Of Sorting Algorithms 

Recommendation systems are designed in such a way
that they sort through massive amounts of data so as to help
users in finding their preferred items.

The end product of a recommendation algorithm is a top-list of items recommended
for the user which in turn is ordered by an evaluated score
representing the preference of that item for the user.
The interest of a user in an item is assumed to be dependent on
the value of the item being recommended, i.e., highest the
value, more interested the user will be.



#### Most Efficient Sorting Algorithm To Use

The most Efficient Sorting Algorithm for using shall be 
- QuickSort
- MergeSort

Where to Use these Algorithms will depend on the type of problem we are trying to solve

QuickSort

It is preferable to use Quicksort in the following scenarios:-

- When we want to sort the elements in a systematic order
- Mark and compare different elements against a single common elements called the pivot
- Data Set size is small
- There is a constraint of space which can be alloted

MergeSort

It is preferable to use MergeSort in the following scenarios:-
- When the way the elements are getting sorted does not matter
- Data Set is very large and generalized
- There is no Constraint of space under which the algorithm needs to work

#### As the dataset for my recommendaton system was available and integrated throught. Therefore, for my scenario, I would Use Mergesort in my recommendation system


### Role of Search Algorithms

Recommendation systems generally look for overlap or co-occurrence to make a recommendation.

In practise, a recommendation engine computes a co-occurrence matrix from a history matrix of events and actions
After the recommendation system has computed the co-occurrence matrix we have to apply statistics to filter out the sufficiently anomalous signals to be interesting as a recommendation.

Most importantly, a good user experience in search and recommendations are almost indistinguishable. Basically, search results are recommendations if we can formulate recommendations as search queries.



## Challenges Faced

"An error doesn't become a mistake until you refuse to correct it"

During the development process I faced the following challenges:-

-Understanding the work flow of the code and tech stack to be used so that I don't have to work on backend.However, thanks to online communities, stackoverflow, my mentor (Rohit Kumar Shaw) and friends I was able to find resources which helped me in creating this web application.

-Preparing a feature list. In the beginning I wanted to build an app like no other and incorporate many features. But in the interest of time, I had to narrow down the features to the basic functionalities that are required in the web application.

-Managing Development of my Project as my End semester were going on. It was a challenge to jumble myself and my time between my exam preparation and application development, but due to the guidance of my mentor and discussing strategies with my friends I was able to deliver both of them in time.

-Solving errors. It was my first time with the tech stacks I choose. Thus, all the errors were new to me. At the end, I was able to solve all the errors. 


## Future Scope

-Adding more information the places for more efficient planning of the trip.

-Adding wishlist feature and list of places done exploring.

-Forming community Section where like-minded people and share their reviews and planout next trip with a group those have same level of energy.

-Adding hybrid recommendation system in the homepage.


## Bug Log

-Sometimes Google Maps API shows error and doesn't work. 

-Budget of the places is set to default.


# Demo

[Video Demo](https://drive.google.com/file/d/1EAI27ZcaMjp5SzO0LmTaMltzI3EoDyID/view?usp=sharing)


## Resources

https://reactjs.org/docs/getting-started.html

https://mui.com/material-ui/getting-started/installation/

https://www.hindawi.com/journals/cin/2016/1291358/

https://link.springer.com/chapter/10.1007/978-0-387-85820-3_7?noAccess=true

https://arxiv.org/abs/2007.15409#:~:text=A%20context%2Daware%20recommender%20system,the%20accuracy%20of%20the%20recommendations.

https://www.ijert.org/tourism-recommendation-system-a-systematic-review

https://dl.acm.org/doi/10.1145/2525314.2525339

https://docs.rapidapi.com/



## Support and Contact

Email: saloniofficial.09@gmail.com
