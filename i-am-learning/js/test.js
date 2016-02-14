//window.onload = function () {
//    var btn = document.getElementById("btn");
//    btn.onclick = function () {
//        alert("clicked!");
//    }
//};
//
//// ==============
//
//// создание объекта
//var dog = {
//    name: "Elvis",
//    weight: 27,
//    breed: "Red Irish Setter",
//    loves: ["walks", "humans", "chewing toys"]
//};
//
//// создание конструктора
//function Dog (name, breed, weight) {
//    this.name = name;
//    this.breed = breed;
//    this.weight = weight;
//    this.bark = function () {
//        if (this.weight > 25) {
//            alert(this.name + " says Woof!");
//        } else {
//            alert(this.name + " says Yup!");
//        }
//    };
//}
//
//// создание объекта с помощью конструктора
//var Elvis = new Dog("Elvis", "Red Irish Setter", 35);
//
//// вызов метода объекта
//Elvis.bark();

//// изменение значений свойств объекта
//dog.weight = 35;
//dog.loves.push("chewing bones");
//
//alert(dog.name); // точечная нотация
//alert(dog["weight"]); // скобочная нотация
//alert(dog.breed);
//alert(dog.loves);
//
//var likes = dog.loves;
//var likesString = dog.name + " likes";
//
//for (i = 0; i < likes.length; i++) {
//    likesString += " " + likes[i];
//}
//alert(likesString);
//
//function bark(dog) {
//    if (dog.weight > 25) {
//        alert("WOOF!");
//    } else {
//        alert("yip");
//    }
//}
//bark(dog);
//
//dog.age = 6;
//delete dog.age;
//
//alert(dog.age);

// ==============

function getTimeFromString(timeString) {
    var theTime = new Date();
    var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
    theTime.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
    theTime.setMinutes(parseInt(time[2]) || 0);
    return theTime.getTime();
}

//var movie1 = {
//    title: "Plan 9 from Outer Space",
//    genre: "Cult Classic",
//    rating: 2,
//    showtimes: ["3:00pm", "7:00pm", "11:00pm"],
//    getNextShowing: function () {
//        var now = new Date().getTime();
//
//        for (var i = 0; i < this.showtimes.length; i++) {
//            var showtime = getTimeFromString(this.showtimes[i]);
//            if ((showtime - now) > 0) {
//                return "Next showing of " + this.title + " is " + this.showtimes[i];
//            }
//        }
//        return null;
//    }
//};
//
//var movie2 = {
//    title: "Forbidden  Planet",
//    genre: "Classic Sci-fi",
//    rating: 5,
//    showtimes: ["5:00pm", "9:00pm"],
//    getNextShowing: function () {
//        var now = new Date().getTime();
//
//        for (var i = 0; i < this.showtimes.length; i++) {
//            var showtime = getTimeFromString(this.showtimes[i]);
//            if ((showtime - now) > 0) {
//                return "Next showing of " + this.title + " is " + this.showtimes[i];
//            }
//        }
//        return null;
//    }
//};
//
//var banzaiMovie = {
//    title: "Buckaroo Banzai",
//    genre: "Cult classic",
//    rating: 5,
//    showtimes: ["1:00pm", "5:00pm", "12:00pm"],
//    getNextShowing: function () {
//        var now = new Date().getTime();
//
//        for (var i = 0; i < this.showtimes.length; i++) {
//            var showtime = getTimeFromString(this.showtimes[i]);
//            if ((showtime - now) > 0) {
//                return "Next showing of " + this.title + " is " + this.showtimes[i];
//            }
//        }
//        return null;
//    }
//};

//var nextShowing = movie1.getNextShowing();
//alert(nextShowing);
//nextShowing = movie2.getNextShowing();
//alert(nextShowing);
//nextShowing = banzaiMovie.getNextShowing();
//alert(nextShowing);

function Movie(title, genre, rating, showtimes) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.showtimes = showtimes;
    this.getNextShowing = function () {
        var now = new Date().getTime();

        for (var i = 0; i < this.showtimes.length; i++) {
            var showtime = getTimeFromString(this.showtimes[i]);
            if ((showtime - now) > 0) {
                return "Next showing of " + this.title + " is " + this.showtimes[i];
            }
        }
    };
}

var plan9Movie = new Movie("Plan 9 from Outer Space",
    "Cult Classic",
    2,
    ["3:00pm", "7:00pm", "11:00pm"]);

var forbiddenPlanetMovie = new Movie("Forbidden Planet",
    "Classic Sci-fi",
    5,
    ["5:00pm", "9:00pm"]);

var banzaiMovie = new Movie("Buckaroo Banzai",
    "Cult classic",
    5,
    ["1:00pm", "5:00pm", "12:00pm"]);

alert(plan9Movie.getNextShowing());
alert(forbiddenPlanetMovie.getNextShowing());
alert(banzaiMovie.getNextShowing());