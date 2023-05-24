const KEY = "g1hGiJNjIX9ns+4AET6M2w==3j8qM4tzOraG7aUQ";
const n = "golden retriever"
const request = "https://api.api-ninjas.com/v1/dogs?name=" + n;

fetch(request, {
  method: 'GET',
  headers: {
    'X-Api-Key': "g1hGiJNjIX9ns+4AET6M2w==3j8qM4tzOraG7aUQ",
  },
})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });

  var url = 'https://bootcamp-apiproxy.herokuapp.com/token/72b8b6de-0089-4257-a4b4-02d655ad67f6';

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      console.log("testing");
    });