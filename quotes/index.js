var count = 0;

function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
        h = h - 12;
        ampm = " PM";
    } else if (h == 12){
        h = 12;
        ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  
  if(h==0) {
    h=12;
  }
    
    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function genQuote() {
  var num = count % quotes.length;
  count = count + 1;
  document.getElementById('quote').innerHTML = quotes[num];
  // var tweetQuote = quotes[randNum].split(' ').join('%20');
  // tweetQuote = tweetQuote.split('<br>').join('');
  // tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
  // $('.twitter-share-button').attr('href', tweetQuote);
}

//quote array
var quotes = ["\“古人之观于天地、山川、草木、虫鱼、鸟兽，往往有得，以其求思之深而无不在也。夫夷以近，则游者众；险以远，则至者少。而世之奇伟、瑰怪，非常之观，常在于险远，而人之所罕至焉，故非有志者不能至也。有志矣，不随以止也，然力不足者，亦不能至也。有志与力，而又不随以怠，至于幽暗昏惑而无物以相之，亦不能至也。然力足以至焉，于人为可讥，而在己为有悔；尽吾志也而不能至者，可以无悔矣\”<br><br> —— 王安石 《游褒禅山记》", "\"Dude, suckin' at something is the first step at being sorta good at something.\"<br>-  Jake <small><em>(Adventure Time)</em></small>", "\"Either I will find a way, or I will make one.\"<br> - Philip Sidney", "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"<br>- Thomas A. Edison", "\"You are never too old to set another goal or to dream a new dream.\"<br>- C.S Lewis", "\"If you can dream it, you can do it.\"<br>- Walt Disney", "\"Never give up, for that is just the place and time that the tide will turn.\"<br>- Harriet Beecher Stowe", "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"<br>- Muhammad Ali", "\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"<br>- Bruce Lee",];

//date
function startDate() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
}

function startDateTime() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  var ampm = "";
  m = checkTime(m);

  if (h > 12) {
      h = h - 12;
      ampm = " PM";
  } else if (h == 12){
      h = 12;
      ampm = " AM";
  } else if (h < 12){
      ampm = " AM";
  } else {
      ampm = "PM";
  };
  
  if(h==0) {
    h=12;
  }
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear() + " " + h+":"+m+ampm;;
  var t = setTimeout(function(){startTime()},500);
}