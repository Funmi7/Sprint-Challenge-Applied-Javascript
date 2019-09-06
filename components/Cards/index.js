// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')

    .then( response => {
        response.data.articles.javascript.forEach((element) => {
            cardsContainer.appendChild(cardCreator(element))
        })    
    })

    .then(response => {
        response.data.articles.bootstrap.forEach((element) => {
            cardsContainer.appendChild(cardCreator(element))
        })    
    })

    .then(response => {
        response.data.articles.technology.forEach((element) => {
            cardsContainer.appendChild(cardCreator(element))
        })    
    })

    .then(response => {
        response.data.articles.jquery.forEach((element) => {
            cardsContainer.appendChild(cardCreator(element))
        })    
    })

    .then(response => {
        response.data.bootstrap.node.forEach((element) => {
            cardsContainer.appendChild(cardCreator(element))
        })    
    })
    .catch(error => {
        console.log('Error: ', error)
    });
    

    function cardCreator({headline, authorPhoto, authorName}) {
        cardDiv = document.createElement('div');
        cardHeadline = document.createElement('div');
        authorDiv = document.createElement('div');
        imageDiv = document.createElement('div');
        image = document.createElement('img');
        authorsName = document.createElement('span');
        
        cardHeadline.textContent = headline;
        image.setAttribute('src', authorPhoto);
        authorsName.textContent = authorName;

        cardDiv.classList.add('card');
        cardHeadline.classList.add('headline');
        authorDiv.classList.add('author');
        imageDiv.classList.add('img-container');
        cardHeadline.classList.add('headline');

        cardDiv.appendChild(cardHeadline);
        cardDiv.appendChild(authorDiv);
        authorDiv.appendChild(imageDiv);
        imageDiv.appendChild(image);
        authorDiv.appendChild(authorsName);

        return cardDiv;
    }


    const cardsContainer = document.querySelector('.cards-container');

    