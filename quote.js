var quotes = ['"I attribute my success to this: I never gave or took any excuse." –Florence Nightingale', '"Strive not to be a success, but rather to be of value." –Albert Einstein', '"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference."  –Robert Frost', '"I\'ve missed more than 9000 shots in my career. I\'ve lost almost 300 games. 26 times I\'ve been trusted to take the game winning shot and missed. I\'ve failed over and over and over again in my life. And that is why I succeed." –Michael Jordan', '"The most difficult thing is the decision to act, the rest is merely tenacity." –Amelia Earhart', '"Every strike brings me closer to the next home run." –Babe Ruth', '"Definiteness of purpose is the starting point of all achievement." –W. Clement Stone', '"Life isn\'t about getting and having, it\'s about giving and being." –Kevin Kruse', '"Life is what happens to you while you’re busy making other plans." –John Lennon', '"We become what we think about." –Earl Nightingale'
];

var colors = ["blue", "orange", "#ff4040", "CornflowerBlue", "DeepPink2", "DodgerBlue2", "#8ec127", "#ee4d7e" ];

function tweet(message) {
  window.open('https://twitter.com/intent/tweet?hashtags=   freecodecamp&text='   + encodeURIComponent(message));
}


var msg;
function tweetHandler() {
tweet($(msg).text());

}

$(document).ready(function () {
  $(".button").on('click', function (){
  var number = Math.floor(Math.random() *(colors.length));
     back = colors[number];
     document.body.style.backgroundColor = back
  });
  $(".button").on("click", function (){
  var ranNum = Math.floor(Math.random() *(quotes.length));
     msg = quotes[ranNum];
    $("#quote").html(msg);

  });
 $('#tweetMessage').on('click', function (){
   tweet(msg);
 });


 });
