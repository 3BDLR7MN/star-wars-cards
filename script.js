require([
  "dojo/dom",
  "dojo/on",
  "dojo/request/xhr",
  "dijit/Dialog",
  "dojo/domReady!",
], function (dom, on, xhr, dialog) {
  var charbtn = dom.byId("charbtn");
  var planetbtn = dom.byId("planetbtn");

  // func for when characters buttons is clicked
  on(charbtn, "click", function () {
    var num;

    // this loop is to avoid getting #17 since it's not in the api!
    while (true) {
      num = Math.floor(Math.random() * 83) + 1;
      if (num !== 17) break;
    }

    // this block of code will fetch api data and handle it as a json obj
    xhr(`https://swapi.dev/api/people/${num}/`, {
      handleAs: "json",
    }).then(
      function (obj) {
        // do something with the obj
        // displaying the json data on a dialog
        var dataDialog = new dialog({
          title: `${obj.name} &ensp; #${num}`,
          style: "width: 200px",
          content: `<div>
                      <p>height: ${obj.height}</p>
                      <p>mass: ${obj.mass}</p>
                      <p>hair color: ${obj.hair_color}</p>
                      <p>skin color: ${obj.skin_color}</p>
                      <p>eye color: ${obj.eye_color}</p>
                      <p>birth year: ${obj.birth_year}</p>
                      <p>gender: ${obj.gender}</p>
                    </div>`,
        });

        dataDialog.show();
      },
      function (err) {
        // Handle the error condition
        header.innerHTML = "ERR";
      }
    );
  });

  // func for when planets buttons is clicked
  on(planetbtn, "click", function () {
    // no loop is needed here because there was no problem with all api numbers!
    var num = Math.floor(Math.random() * 60) + 1;

    // this block of code will fetch api data and handle it as a json obj
    xhr(`https://swapi.dev/api/planets/${num}/`, {
      handleAs: "json",
    }).then(
      function (obj) {
        // do something with the obj
        // displaying the json data on a dialog
        var dataDialog = new dialog({
          title: `${obj.name} &ensp; #${num}`,
          style: "width: 200px",
          content: `<div>
                      <p>hours per day: ${obj.rotation_period}</p>
                      <p>days per year: ${obj.orbital_period}</p>
                      <p>diameter: ${obj.diameter}</p>
                      <p>climate: ${obj.climate}</p>
                      <p>terrain: ${obj.terrain}</p>
                      <p>gravity: ${obj.gravity}</p>
                      <p>population: ${obj.population}</p>
                    </div>`,
        });

        dataDialog.show();
      },
      function (err) {
        // Handle the error condition
        header.innerHTML = "ERR";
      }
    );
  });
});
