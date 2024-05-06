document.getElementById("fetch-user").addEventListener("click", () => {
  fetch("https://randomuser.me/api/") // Question 1: Why does this fetch call fail? 
  //The fetch call fails because there is a typo in the url.
  //This makes the API endpoint unavailable. The url leads to a page that displays 'Not Found'.
  .then((res) => res.json())
    .then((data) => {
      displayUser(data.results[0]); // Question 2: Why is data.results undefined? 
      //Data.results is undefined because the response from the fetch request 
      //needs to be converted to JSON format before it will display the user's data.
    })
    .catch((error) => console.error("Fetch error:", error));
});

function displayUser(user) {
  const userInfoDiv = document.getElementById('user-info');
  // Question 3: Why isn't the user's name displaying correctly?
  // Because the user.name is not defined. 
  //User is an object that should contain a name or email property then it can be accessed.
  userInfoDiv.innerHTML = `Name: ${user.name.first} ${user.name.last}<br>
                           Email: ${user.email}`;
}

// Question 4: Why does this API call fail?
//The API call is failing because it's unreachable. 
//This is just a placeholder example url that leads to an unreachable site.
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .catch((error) => {
    console.error("Failed to process data:", error);
  });

// Fetches news articles and displays them on the page
function fetchNews() {
  fetch("https://jsonplaceholder.typicode.com/posts") // Simulated news API
    .then((response) => response.json())
    .then((articles) => {
      const container = document.getElementById("news-container");
      // Question 5: Why do the article titles not appear on the screen?
      //The article title should be accessed with the 'title' property instead of the 'name' property.
      articles.forEach((article) => {
        const p = document.createElement("p");
        p.textContent = article.title;
        container.appendChild(p);
      });
    })
    .catch((error) => console.log("Error fetching news:", error));
}

fetchNews();