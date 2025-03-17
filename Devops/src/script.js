document.getElementById("getFact").addEventListener("click", async () => {
    const factElement = document.getElementById("fact");
    try {
      factElement.innerText = "Loading...";
      
      const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
      const data = await response.json();
      
      factElement.innerText = data.text;
    } catch (error) {
      factElement.innerText = "Oops! Something went wrong. Please try again later.";
      console.error("Error fetching the fact:", error);
    }
  });