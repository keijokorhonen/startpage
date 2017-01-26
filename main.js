var main = function () {
  updateClock();
};

function updateClock() {
  var today = new Date();
      day = today.getDate();
      dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      dayName = dayNames[today.getDay() - 1];
      monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      month = monthNames[today.getMonth()];
      time = today.getHours() + ":" + ('0' + today.getMinutes()).slice(-2);
  if (today.getHours() >= 6 && today.getHours() < 11) {
      greeting = "Good Morning";
    }
  else if (today.getHours() >= 11 && today.getHours() < 17) {
      greeting = "Good Day"
    }
  else if (today.getHours() >= 17 && today.getHours() < 21) {
      greeting = "Good Evening"
    }
  else if (today.getHours() >= 21 || today.getHours() < 2) {
      greeting = "Good Night"
    }
  else {
      greeting = "Why are you awake?"
    };
  document.getElementById('messageGreet').innerHTML = greeting + ",";
  document.getElementById('messageDay').innerHTML = "It is " + dayName;
  document.getElementById('dateandtime').innerHTML = "<span class='pink'>" + day + " " + month + "</span> "+ time;
  var t = setInterval(updateClock, 10000);
};

function searchBar() {
  
};
