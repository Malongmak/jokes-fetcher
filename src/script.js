// Function to fetch and display jokes
async function fetchJoke() {
    const jokeContainer = document.getElementById("joke-container");
    const url = "https://v2.jokeapi.dev/joke/Any"; // Public Joke API endpoint
  
    try {
      // Add loading message with smooth animation
      jokeContainer.textContent = "Fetching a joke...";
      jokeContainer.classList.add("fade-in");
  
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error("Failed to fetch the joke.");
      }
  
      const jokeData = await response.json();
  
      // Determine joke type and display it
      if (jokeData.type === "single") {
        jokeContainer.innerHTML = `<p>${jokeData.joke}</p>`;
      } else if (jokeData.type === "twopart") {
        jokeContainer.innerHTML = `
          <p class="font-bold">${jokeData.setup}</p>
          <p>${jokeData.delivery}</p>
        `;
      } else {
        jokeContainer.textContent = "Couldn't fetch a joke. Try again!";
      }
  
      // Reapply fade-in effect
      jokeContainer.classList.remove("fade-in");
      void jokeContainer.offsetWidth; // Trigger reflow to restart animation
      jokeContainer.classList.add("fade-in");
    } catch (error) {
      jokeContainer.textContent = `Error: ${error.message}`;
    }
  }
  
  // Attach event listener to the button
  document.getElementById("fetch-joke-btn").addEventListener("click", fetchJoke);
  