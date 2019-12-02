function getName() {
  //   var year = parseInt(documentgetElementById("year").value);
  //   var month = parseInt(documentgetElementById("Month").value);
  //   var day = parseInt(documentgetElementById("date").value);
  //   var yourDay = parseInt((5 * year) / 4 + (26 * (month + 1)) / 10 + day) % 7;

  var year = document.forms["form_reg"]["year"].value;
  var month = document.forms["form_reg"]["month"].value;
  var day = document.forms["form_reg"]["day"].value;
  alert(day);

  var userGender = document.querySelector('input[name="sex"]:checked').value;

  alert(year);
  alert(month);
  alert(day);

  var maleNames = [
    "Kwasi",
    "KWado",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
  ];

  var femaleNames = [
    "Akosua",
    "Adowoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
  ];

  var daysOfTheWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];

  if (day <= 0 || day > 31) alert("Sorry!Enter a valid day");
  else if (month < 0 || month > 12) alert("Sorry!Enter a valid month");
  else if (year < 1950 || year > 2035) alert("Sorry!Enter a valid year");

  if (userGender === "Female") {
    if (yourDay == 0) {
      alert("You were born on: " + daysOfTheWeek[0]);
      alert("Your name is: " + femaleNames[0]);
    }
    if (yourDay == 1) {
      alert("You were born on: " + daysOfTheWeek[0]);
      alert("Your name is: " + femaleNames[0]);
    }

    if (yourDay == 2) {
      alert("You were born on: " + daysOfTheWeek[0]);
      alert("Your name is: " + femaleNames[0]);
    }

    if (yourDay == 3) {
      alert("You were born on: " + daysOfTheWeek[0]);
      alert("Your name is: " + femaleNames[0]);
    }

    if (yourDay == 4) {
      alert("You were born on: " + daysOfTheWeek[0]);
      alert("Your name is: " + femaleNames[0]);
    }

    if (yourDay == 5) {
      alert("You were born on: " + daysOfTheWeek[0]);
      alert("Your name is: " + femaleNames[0]);
    }
    if (yourDay == 6) {
      alert("You were born on: " + daysOfTheWeek[0]);
      alert("Your name is: " + femaleNames[0]);
    }
  } else {
    if (yourDay == 0) {
      alert("You were born on: " + daysOfTheWeek[0]);
      alert("Your name is: " + maleNames[0]);
    }
    if (yourDay == 1) {
      alert("You were born on: " + daysOfTheWeek[0]);
      alert("Your name is: " + maleNames[0]);
    }

    if (yourDay == 2) {
      alert("You were born on: " + daysOfTheWeek[0]);
      alert("Your name is: " + femaleNames[0]);
    }

    if (yourDay == 3) {
      alert("You were born on: " + daysOfTheWeek[0]);
      alert("Your name is: " + femaleNames[0]);
    }

    if (yourDay == 4) {
      alert("You were born on: " + daysOfTheWeek[0]);
      alert("Your name is: " + femaleNames[0]);
    }

    if (yourDay == 5) {
      alert("You were born on: " + daysOfTheWeek[0]);
      alert("Your name is: " + femaleNames[0]);
    }
    if (yourDay == 6) {
      alert("You were born on: " + daysOfTheWeek[0]);
      alert("Your name is: " + femaleNames[0]);
    }
  }
}
