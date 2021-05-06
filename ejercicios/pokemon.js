window.addEventListener("load", function() {

  var lis = document.querySelectorAll("li")

  for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
      document.querySelector("p").innerHTML = this.innerHTML + ": " + this.getAttribute("url")


      fetch(this.getAttribute("url") )
      .then(function(response) {

        return response.json()
      })
      .then(function(json){
        var ataques = json.moves

        var ulataques = document.querySelector(".ataques")


        ulataques.innerHTML = ""

        for (var j = 0; j < ataques.length; j++) {
          ulataques.innerHTML += "<li>" + ataques[j].name + "</li>"
        }
      })

    });
  }
});
