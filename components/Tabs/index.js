// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        response.data.topics.forEach((topic) => {
           tabCreator(topic);
        })  
    })

    .catch(error => {
        console.log('Error: ', error);
    });

    const tabContainer = document.querySelector('.topics');
    function tabCreator(tabName){
       const tabDiv = document.createElement('div');
       tabDiv.textContent = tabName;
        tabDiv.classList.add('tab');
        tabContainer.appendChild(tabDiv);
        return tabDiv;
    }
        
