# Travel-Advisor

Travel Advisor is an attempt to bring the concept and features to life of the robust and popular web streamings applications like Netflix and Spotify.

This project was built as a part of the Microsoft Engage Program 2022 where mentees had to take up one of the three challenges/tracks, namely Face Recognition, Data Analysis and Algorithms.

This project was made in an attempt to take on the 3rd challenge of researching and thinking about the algorithms that may be used in a web streaming service such as netflix and spotify to recommend different places to visit.

*Motivation:* 

While travelling from home to hostel and hostel to home, everytime I look through the window, I wondered what could be the speciality the place and the beautiful architecture of the city. And then a small idea came into existance, why not develop a something that recommends you placees according to your locatiion.

*Solved Problem:*

Aim of this web app is to make your next vacation, the best experience and help you to discover new and amazing places that are around you. figure out the fastest and most efficient ways of getting around the city using public transport

*Learnings:*

Through the Microsoft Engage Mentorship Program 2022 under the able guidance of my mentor - Rohit Kumar Shaw sir I was able to go from a person who just knew how to make static web pages to a person who can learn build and deploy full flegded web applications while my exams are going on.

*Watch Demo* : <a href="https://drive.google.com/file/d/1EAI27ZcaMjp5SzO0LmTaMltzI3EoDyID/view?usp=sharing">Video Demo</a>




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

  git clone https://github.com/salonigupta001/Travel-Advisor

2. install NPM Packages
  
   npm install i


3. Do the required for activating .env files

4. Start Client
   
   npm start
  

## Tech Stack

In spite of all the smart devices that exist today in the world, one thing that is common is - web and internet browsers. I selected my application to be a web application so that a large number of users are able to use it with ease and connect together

*HTML* 
*Material-Ui* 
*React Js* 
*Google Maps API* 
*Trip Advisor API*
*Open Weather Map API* 


## Recommender System & Algorithms

The term Recommender system is described as any
organization that provides personalized suggestions as a
result and it effects the user in the individualized way to
favorable items from the large number of opinions.

Recommender systems are usually classified
into two broad categories: Content based and Collaborative
Filtering

*Content-Based Recommendation:* one tries
to recommend items similar to those a given user has liked in
the past

*Collaborative Recommendation:* one
identifies users whose tastes are similar to those of the given user and recommends items they have liked

### Role Of Sorting Algorithms 

Recommender systems are designed in such a way
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

#### As the dataset for my recommendaton system was not already available and I had to create my own database from scratch. My database was, as a result, small and very specific in terms of the data it stored. Therefore, for my scenario, I would Use Quicksort in my recommendation system

### Role of Search Algorithms

Recommendation systems generally look for overlap or co-occurrence to make a recommendation.

In practise, a recommendation engine computes a co-occurrence matrix from a history matrix of events and actions
After the recommendation system has computed the co-occurrence matrix we have to apply statistics to filter out the sufficiently anomalous signals to be interesting as a recommendation.

Most importantly, a good user experience in search and recommendations are almost indistinguishable. Basically, search results are recommendations if we can formulate recommendations as search queries

#### It’s an ideal solution as many websites like Anuviti and businesses already operate search engines in their backends and we can leverage existing infrastructure to build our recommendation system

## Challenges Faced

"Errors are a stepping stones to develop good applications"

During the development process I faced the following challenges:-






## Future Scope

## Bug Log

# Demo

[Video Demo](https://drive.google.com/file/d/1EAI27ZcaMjp5SzO0LmTaMltzI3EoDyID/view?usp=sharing)




## Resources




## Support and Contact

Email: saloniofficial.09@gmail.com
