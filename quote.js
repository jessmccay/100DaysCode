$(document).ready(function () {
var quotes = ["'I attribute my success to this: I never gave or took any excuse.' –Florence Nightingale", "'Strive not to be a success, but rather to be of value.' –Albert Einstein", "'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.'  –Robert Frost", "'I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.' –Michael Jordan", "'The most difficult thing is the decision to act, the rest is merely tenacity.' –Amelia Earhart", "'Every strike brings me closer to the next home run.'' –Babe Ruth", "'Definiteness of purpose is the starting point of all achievement.' –W. Clement Stone", "'Life isn't about getting and having, it's about giving and being.'' –Kevin Kruse", "'Life is what happens to you while you’re busy making other plans.' –John Lennon", "'We become what we think about.' –Earl Nightingale"
];
  $(".button").on("click", function (){
  var ranNum = Math.floor(Math.random() * 10);
  console.log(ranNum);
    if(ranNum === 10) {$("#quote").append (quotes[0]);
                      }
    else if(ranNum === 1) {$("#quote").append (quotes[1]);
    }
   else if(ranNum === 2) {$("#quote").append (quotes[2]);
}
else if(ranNum === 3) {$("#quote").append (quotes[3]);
}                          else if(ranNum === 4) {$("#quote").append (quotes[4]);
                                                 }                             else if(ranNum === 5) {$("#quote").append (quotes[5]);
                                                                                                     }                                                         else if(ranNum === 6) {$("#quote").append (quotes[6]);
 }                                                           else if(ranNum === 7) {$("#quote").append (quotes[7]);
                                                                                   }
 else if(ranNum === 8) {$("#quote").append (quotes[8]);
                       }
else if(ranNum === 9) {$("#quote").append (quotes[9]);
    }

    });
});                                                                    
