const searchBox = document.getElementById("searchBox");
const apiUrl = "https://api.tvmaze.com/search/shows?q=";

searchBox.onchange = function () {
  console.log(apiUrl + this.value);
  document.getElementById("results").innerHTML = "";
  const request = fetch(apiUrl + this.value)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((result) => {
        if (result.show.image == null) {
          return;
        }
        console.log(result.show.image.medium);
        const element = document.createElement("img");
        element.src = result.show.image.medium;
        document.getElementById("results").appendChild(element);
      });
    });
};
