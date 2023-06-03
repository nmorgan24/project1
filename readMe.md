# Project 1
By Nyijia Morgan

### Project Description

Introducing an innovative project that brings Yugioh cards to life with a simple search. users can enter the name of any Yugioh card in the search bar, and in an instant, a vibrant image of the Yugioh card with its attributes will appears, Immerse yourself in the world of Yugioh cards and discover new visual wonders with every search.



### API Description 

- With a simple search bar, this API instantly fetches and displays a  high-quality picture of any Yugioh card you enter, allowing you to dive into the captivating visuals of your favorite cards at the click of a button.

- Here is a example of me testing the API below.
```js 

//Reqesting data
$.ajax("https://db.ygoprodeck.com/api/v7/cardinfo.php?name=")
// geting the data
.then((data) => {
    console.log(data)
})

```

### Mackup

![Mockup Image](./img/Screenshot%202023-06-02%20162955.png)



### Details about Difficlties

Fetching something from an API was the most difficult because it involves dealing with authentication, setting up the right endpoints, and handling errors properly. It's like solving a puzzle where you need to understand the API's instructions and make sense of the data you receive.


### Languages Used

| Languages |
|-----------|
| HTML |
| CSS |
| JAVASCRIPT |
| JQUERY |




### Daily Schedule

| Day | Task |
|-----|------|
| 1 | Setup Basic Project |
| 2 | Make API call | 
| 3 | Render data to the page |
| 4 | Add user interactivity (form) |
| 5 | Styling |
| 6 | Add more styling(Fixed a few bugs) | 
| 7 | Present Project |


### Biggest Take Away

The biggest takeaway from building a website that runs an API is the ability to leverage and interact with external services or data sources, expanding the functionality and possibilities of your website. It enables seamless integration and communication between your website and other applications, opening doors to enhanced features, data retrieval, and streamlined workflows.


### Project

[Click here](https://project1-evdj.onrender.com/) to view my project.
