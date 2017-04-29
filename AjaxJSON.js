// dAY 23
// Trigger Click Events with jQuery
// In this section, we'll learn how to get data from APIs. APIs - or Application Programming Interfaces - are tools that computers use to communicate with one another.
//
// We'll also learn how to update HTML with the data we get from these APIs using a technology called Ajax.
//
// First, let's review what the $(document).ready() function does. This function runs such that all of the code inside of it executes only once our page has finished loading.
//
// So Let's start by implementing a click event handler inside of our $(document).ready() function by adding this code:
//
// $("#getMessage").on("click", function(){
//
// });
// After completing this, proceed to the next challenge where we will make our "Get Message" button change the text of the element with the class message.

<script>
  $(document).ready(function() {
    // Only change code below this line.
    $("#getMessage").on("click", function(){
      $.getJSON("/json/cats.json", function(json) {
$(".message").html(JSON.stringify(json));
});
});
    // Only change code obove this line.
  });
</script>


<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>
// Change Text with Click Events
// When our click event happens, we can use jQuery to update an HTML element.

// Let's make it so that when a user clicks the "Get Message" button, we change the text of the element with the class message to say "Here is the message".
//
// We can do this by adding the following code within our click event:
//
// $(".message").html("Here is the message");
//
//
// <script>
//   $(document).ready(function() {
//     $("#getMessage").on("click", function(){
//
//       // Only change code below this line.
//      $(".message").html("Here is the message");
//       // Only change code above this line.
//     });
//   });
// </script>


<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>

// Render Images from Data Sources
// We've seen from the last two lessons that each object in our JSON array contains an imageLink key with a value that is the URL of a cat's image.
//
// When we're looping through these objects, let's use this imageLink property to display this image in an img element.
"alt='" + val.altText + "'>";


          // Only change code above this line.

          html += "</div>";

        });

        $(".message").html(html);

      });
    });
  });
</script>

<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>

// // Prefilter JSON
// If we don't want to render every cat photo we get from our Free Code Camp's Cat Photo JSON API, we can pre-filter the json before we loop through it.
//
// Let's filter out the cat whose "id" key has a value of 1.
<script>
  $(document).ready(function() {

    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {

        var html = "";

        // Only change code below this line.
        json = json.filter(function(val) {
  return (val.id !== 1);
});


        // Only change code above this line.

        json.forEach(function(val) {

          html += "<div class = 'cat'>"

          html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"

          html += "</div>"

        });

        $(".message").html(html);

      });
    });
  });
</script>

<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>

// Get Geolocation Data
// Another cool thing we can do is access our user's current location. Every browser has a built in navigator that can give us this information.
//
// The navigator will get our user's current longitude and latitude.
//
// You will see a prompt to allow or block this site from knowing your current location. The challenge can be completed either way, as long as the code is correct.
//
// By selecting allow you will see the text on the output phone change to your latitude and longitude
<script>
  // Only change code below this line.

  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  });
}

  // Only change code above this line.
</script>
<div id = "data">
  <h4>You are here:</h4>

</div>
