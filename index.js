// Question 1
// done
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("\n-------------Question 2------------------");
var personName = 'sanoodia asghar';
//  sanoodia asgher: 7/11/2023 
console.log("Hello ".concat(personName, ", would you like to learn some Python today?"));
console.log("\n-------------Question 3------------------");
console.log("Lowercase -- ".concat(personName.toLowerCase(), "\n"), "Uppercase -- ".concat(personName.toUpperCase(), "\n"), 
//  sanoodia asgher: 7/11/2023 
// this code spilt name string into array and then join back that array by replacing 
// first letter with uppercase
"Titlecase -- ".concat(personName.toLowerCase().split(' ').map(function (word) {
    return word.replace(word[0], word[0].toUpperCase());
}).join(' ')));
console.log("\n-------------Question 4------------------");
console.log("Winston S. Churchill once said, \"Success is not final; failure is not fatal: It is the courage to continue that counts.\"");
console.log("\n-------------Question 5------------------");
personName = 'Winston S. Churchill';
var message = "\"Success is not final; failure is not fatal: It is the courage to continue that counts.\"";
console.log("".concat(personName, " once said, ").concat(message));
console.log("\n-------------Question 6------------------");
personName = "\n\tsanoodia asghar\t\n";
console.log(personName);
console.log(personName.trim());
console.log("\n-------------Question 7------------------");
console.log(4 + 4);
console.log(16 - 8);
console.log(16 / 2);
console.log(4 * 2);
console.log("\n-------------Question 8------------------");
for (var i = 0; i < 4; i++) {
    console.log(5 + 3);
}
console.log("\n-------------Question 9------------------");
var favNum = 999;
console.log("your favorite number is ".concat(favNum));
console.log("\n-------------Question 10------------------");
console.log("comment added at line 6 and 12");
console.log("\n-------------Question 11------------------");
var names = ['fatima', 'mehreen', 'sonia'];
names.forEach(function (name) {
    console.log(name);
});
console.log("\n-------------Question 12------------------");
message = 'Hi,';
names.forEach(function (name) {
    console.log("".concat(message, " ").concat(name));
});
console.log("\n-------------Question 13------------------");
var favVehicles = ['Prius', 'Kia Sportage', 'Aqua'];
favVehicles.forEach(function (vehicle) {
    console.log("I would like to own a ".concat(vehicle, " car"));
});
console.log("\n-------------Question 14------------------");
var guestList = ['Fatima', 'Mehreen', 'Sonia'];
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You are invited for today's dinner"));
});
console.log("\n-------------Question 15------------------");
console.log("".concat(guestList[1], " not avaiable"));
guestList[1] = 'Saba';
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You are invited for today's dinner"));
});
console.log("\n-------------Question 16------------------");
console.log("I found a bigger dinner table");
guestList.unshift("Neha");
guestList.splice(guestList.length / 2, 0, "Laraib");
guestList.push('iffet');
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You are invited for today's dinner"));
});
console.log("\n-------------Question 17------------------");
console.log("I can invite only two people for dinner");
while (guestList.length > 2) {
    console.log("sorry ".concat(guestList.pop(), " I can\u2019t invite you to dinner"));
}
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You are still invited"));
});
guestList.length = 0;
console.log("empty array", guestList);
console.log("\n-------------Question 18------------------");
var favPlaces = ['Makkah', 'Madina', 'Turkey', 'Switzerland', 'Canada'];
console.log(favPlaces);
console.log("Sorted Accending", __spreadArray([], favPlaces, true).sort(function (a, b) { return a.localeCompare(b); }));
console.log("Orignal Array", favPlaces);
console.log("Sorted Decending", __spreadArray([], favPlaces, true).sort(function (a, b) { return b.localeCompare(a); }));
console.log("Orignal Array", favPlaces);
console.log("Reverse Array", favPlaces.reverse());
console.log("Reversed Back Array", favPlaces.reverse());
console.log("Alphabetical order", favPlaces.sort(function (a, b) { return a.localeCompare(b); }));
console.log("Reverse Alphabetical order", favPlaces.sort(function (a, b) { return b.localeCompare(a); }));
console.log("\n-------------Question 19------------------");
console.log("I have invited 2 people for a dinner");
console.log("\n-------------Question 20------------------");
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(days);
console.log("\n-------------Question 21------------------");
var daysObj = days.reduce(function (obj, cur) {
    var _a;
    return (__assign(__assign({}, obj), (_a = {}, _a[cur] = cur, _a)));
}, {});
console.log(daysObj);
console.log("\n-------------Question 22------------------");
var invalidIndex = days[7];
console.log(invalidIndex);
console.log("\n-------------Question 23------------------");
var car = 'subaru';
if (car === 'subaru') {
    console.log("Is car == 'subaru'? I predict True.");
    console.log(car === 'subaru');
}
//False Conitions
(0) ? console.log("tested condition (0) True") : console.log("tested condition (0) False");
(car.length < 5) ? console.log("tested condition (car.length < 5) True") : console.log("tested condition (car.length < 5) False");
(!car) ? console.log("tested condition (!car) True") : console.log("tested condition (!car) False");
(1 < 0) ? console.log("tested condition (1 < 0) True") : console.log("tested condition (1 < 0) False");
(0 / 1) ? console.log("tested condition (0/1) True") : console.log("tested condition (0/1) False");
//True Conitions
(1) ? console.log("tested condition (1) True") : console.log("tested condition (1) False");
(car.length > 5) ? console.log("tested condition (car.length > 5) True") : console.log("tested condition (car.length > 5) False");
(car) ? console.log("tested condition (car) True") : console.log("tested condition (car) False");
(0 === 0) ? console.log("tested condition (1 < 0) True") : console.log("tested condition (1 < 0) False");
(1 / 0) ? console.log("tested condition (1/0) True cuz its infinity") : console.log("tested condition (1/0) False");
console.log("\n-------------Question 24------------------");
("abc" === "abc") ? console.log("tested condition (\"abc\"===\"abc\") True cuz its infinity") : console.log("tested condition (\"abc\"===\"abc\") False");
("abc" != "abc") ? console.log("tested condition (\"abc\"!=\"abc\") True cuz its infinity") : console.log("tested condition (\"abc\"!=\"abc\") False");
("abc" != "ABC".toLowerCase()) ? console.log("tested condition (\"abc\"!=\"ABC\".toLowerCase()) True cuz its infinity") : console.log("tested condition (\"abc\"!=\"ABC\".toLowerCase()) False");
(1 === 1) ? console.log("tested condition (1 === 1) True") : console.log("tested condition (1 === 1) False");
(1 !== 1) ? console.log("tested condition (1 !== 1) True") : console.log("tested condition (1 !== 1) False");
(1 > 1) ? console.log("tested condition (1 > 1) True") : console.log("tested condition (1 > 1) False");
(0 < 1) ? console.log("tested condition (0 < 1) True") : console.log("tested condition (0 < 1) False");
(0 <= 1) ? console.log("tested condition (0 <= 1) True") : console.log("tested condition (0 <= 1) False");
(1 >= 1) ? console.log("tested condition (1 >= 1) True") : console.log("tested condition (1 >= 1) False");
(typeof (1) === 'number' && 1 > 0) ? console.log("tested condition (typeof(1) === 'number' && 1>0) True")
    : console.log("tested condition (typeof(1) === 'number' && 1>0) False");
(typeof (1) === 'number' || 0 > 1) ? console.log("tested condition (typeof(1) === 'number' || 0>1) True")
    : console.log("tested condition (typeof(1) === 'number' || 0>1) False");
(Array.isArray(['hello'])) ? console.log("tested condition ((Array.isArray(['hello'])) True")
    : console.log("tested condition ((Array.isArray(['hello'])) False");
(Array.isArray({ 0: 'hello' })) ? console.log("tested condition ((Array.isArray({0:'hello'})) True")
    : console.log("tested condition ((Array.isArray({0:'hello'})) False");
console.log("\n-------------Question 25------------------");
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("player just earned 5 points");
}
alien_color = 'red';
if (alien_color === 'green') {
    console.log("player just earned 5 points");
}
console.log("\n-------------Question 26------------------");
if (alien_color === 'green') { //red
    console.log("player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 points");
}
alien_color = 'green';
if (alien_color === 'green') { //green
    console.log("player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 points");
}
console.log("\n-------------Question 27------------------");
var showPoints = function (alien_color) {
    if (alien_color === 'green') { //green
        console.log("player earned 5 points");
    }
    else if (alien_color === 'yellow') {
        console.log("player earned 10 points");
    }
    else { //for red
        console.log("player earned 15 points");
    }
};
showPoints('green');
showPoints('red');
showPoints('yellow');
console.log("\n-------------Question 28------------------");
var stagesOfLife = function (age) {
    if (age < 2) {
        console.log("person is a baby");
    }
    else if (age >= 2 && age < 4) {
        console.log('person is a toddler');
    }
    else if (age >= 4 && age < 13) {
        console.log('person is a kid');
    }
    else if (age >= 13 && age < 20) {
        console.log('person is a teenager');
    }
    else if (age >= 20 && age < 65) {
        console.log('person is an adult');
    }
    else {
        console.log('person is an elder');
    }
};
console.log("\n-------------Question 29------------------");
var favorite_fruits = ['banana', 'mango', 'peach'];
['apple', 'banana', 'cherry', 'peach', 'guava'].forEach(function (fruit) {
    if (favorite_fruits.indexOf(fruit) !== -1) {
        console.log("You really like ".concat(fruit, "!"));
    }
});
console.log("\n-------------Question 30------------------");
var userName = ['User1', 'User2', 'User3', 'Admin', 'User4'];
userName.forEach(function (user) {
    if (user === 'Admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again"));
    }
});
console.log("\n-------------Question 31------------------");
userName = [];
if (userName.length == 0) {
    console.log('We need to find some users!');
}
console.log("\n-------------Question 32------------------");
var current_users = ['User1', 'User2', 'User3', 'Admin', 'User4'];
var new_users = ['User1', 'USER2', 'User5'];
new_users.forEach(function (userName) {
    if (current_users.indexOf(userName) !== -1) {
        console.log("".concat(userName, ", You will need to enter a new username"));
    }
    else
        console.log("".concat(userName, ", username is available."));
});
console.log("\n-------------Question 33------------------");
var ordinal_number = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'];
ordinal_number.forEach(function (number) {
    console.log(number);
});
console.log("\n-------------Question 34------------------");
var pizzaNames = ['italian', 'BBQ', 'fajita'];
pizzaNames.forEach(function (name) {
    console.log("I like ".concat(name, " pizza"));
});
console.log("I really like pizzas \n pizza is best food item for celebration");
console.log("\n-------------Question 35------------------");
var animals = ['dog', 'cat', 'goat'];
animals.forEach(function (animal) {
    console.log("".concat(animal));
});
console.log("".concat(animals[0], " and ").concat(animals[1], " would make a great pet!"));
console.log("\n-------------Question 36------------------");
var make_shirt = function (size, msg) {
    if (size.toLowerCase() === 'large' || size.toLowerCase() === 'midium') {
        console.log("This shirt size is ".concat(size, " and \"I love TypeScript\" is written on it"));
    }
    else
        console.log("This shirt size is ".concat(size, " and \"").concat(msg, "\" is written on it"));
};
make_shirt('small', 'wow');
console.log("\n-------------Question 37------------------");
make_shirt('large', 'abc');
console.log("\n-------------Question 38------------------");
var describe_city = function (city, country) {
    if (country === void 0) { country = 'XYZ'; }
    console.log("".concat(city, " is in ").concat(country));
};
describe_city('Rawalpindi');
describe_city('Istanbul', 'Turkey');
describe_city('Itally', 'Rome');
console.log("\n-------------Question 39------------------");
var city_country = function (city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
};
console.log(city_country('Rawalpindi', 'Pakistan'));
console.log(city_country('Istanbul', 'Turkey'));
console.log(city_country('Itally', 'Rome'));
console.log("\n-------------Question 40------------------");
var make_album = function (name, title, numOfTracks) {
    return (numOfTracks) ? {
        name: name,
        title: title,
        numOfTracks: numOfTracks
    } :
        {
            name: name,
            title: title
        };
};
console.log(make_album('Whitney Houston', 'the bodyguard'));
console.log(make_album('Warner Bros', 'Pruple Rain'));
console.log(make_album('Warner Bros', 'Pruple Rain', '23'));
console.log("\n-------------Question 41------------------");
var magicians = ['abc', 'xyz', 'sasf'];
var show_magicians = function (magiciansList) {
    magiciansList.forEach(function (magician) {
        console.log(magician);
    });
};
show_magicians(magicians);
console.log("\n-------------Question 42------------------");
var make_great = function () {
    magicians.forEach(function (magician, index) {
        magicians[index] = "Great to each ".concat(magician);
    });
};
make_great();
show_magicians(magicians);
console.log("\n-------------Question 43------------------");
magicians = ['abc', 'xyz', 'sasf'];
var make_great_copy = function () {
    return __spreadArray([], magicians, true).map(function (magician) { return "Great to each ".concat(magician); });
};
var magicians_copy = make_great_copy();
console.log("\n-------------Question 44------------------");
var make_sandwich = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log("Person ordered sandwich includes:".concat(args.join(',')));
};
make_sandwich('potaotos', 'onions', 'jalapeno');
make_sandwich('potaotos', 'onions', 'mayo');
make_sandwich('tomatos', 'onions', 'mayo');
console.log("\n-------------Question 44------------------");
var cars = function (manufacturer, name) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        name: name
    };
    rest.forEach(function (feature) {
        // console.log(feature)
        car = __assign(__assign({}, car), feature);
    });
    console.log(car);
};
cars('toyota', 'corolla', { color: 'red' });
