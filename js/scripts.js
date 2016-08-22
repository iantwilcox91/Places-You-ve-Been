//business logic
function Place(location, landmark, time, specialevent, note){
  this.locations = location;
  this.landmarks = landmark;
  this.timeOfYear = time;
  this.specialevents = specialevent;
  this.notes = note;
}





// user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedTime = $("input#new-time").val();
    var inputtedSpecialevent = $("input#new-specialevent").val();
    var inputtedNote = $("input#new-note").val();

    var newPlace = new Place(inputtedLocation, inputtedLandmark, inputtedTime, inputtedSpecialevent, inputtedNote);
    $("ul#locations").append("<li><span class='listlocation'>" + newPlace.locations + "</span></li>");

    $(".listlocation").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.locations);
      $(".location").text(newPlace.locations);
      $(".landmark").text(newPlace.landmarks);
      $(".time").text(newPlace.timeOfYear);
      $(".specialevent").text(newPlace.specialevents);
      $(".note").text(newPlace.notes);
    });

    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-time").val("");
    $("input#new-specialevent").val("");
    $("input#new-note").val("");
  });
});
