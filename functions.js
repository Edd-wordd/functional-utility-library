// Your functions go here!
//Use the some Method to Check that Any Elements in an Array Meet a Criteria
function useSomeMethod(arr) {
   var newArr = arr.some(function (value) {
      return value > -1;
   });
   return newArr;
}

// Use the every Method to Check that Every Element in an Array Meets a Criteria
function useEveryMethod(arr) {
   var newArr = arr.every(function (value) {
      return value > -1;
   });
   return newArr;
}

//Apply Functional Programming to Convert Strings to URL Slugs
function urlSlug(title) {
   return (
      title
         // split string into an array
         .split(/\W/)
         // filter through array remove differnet characters
         .filter((arr) => {
            return arr !== "";
         })
         // join all the words together with a dash
         .join("-")
         // make suer they are all lowercase letters
         .toLowerCase()
   );
}
//Combine an Array into a String Using the join Method
function mendArr(str) {
   return str.split(/\W/).join(" ");
}
//Split a String into an Array Using the split Method

function splitStr(str) {
   var newStr = str.split(/\W/);
   return newStr;
}

//sort an array alphabetically using the sort method
// function sorted(arr) {
//    return arr.sort(function (a, b) {
//       return a - b;
//    });
// }
function sorted(arr) {
   var newArr = arr.sort(function (a, b) {
      return a - b;
   });
   return newArr;
}

console.log(sorted);

// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
const squareList = (arr) => {
   const positiveIntegers = arr.filter((num) => {
      return num >= 0 && Number.isInteger(num);
   });
   const squaredIntegers = positiveIntegers.map((num) => {
      return num ** 2;
   });
   return squaredIntegers;
};

// Use the reduce Method to Analyze Data
var objlist = [
   {
      Title: "Inception",
      Year: "2010",
      Rated: "PG-13",
      Released: "16 Jul 2010",
      Runtime: "148 min",
      Genre: "Action, Adventure, Crime",
      Director: "Christopher Nolan",
   },
   {
      Title: "Interstellar",
      Year: "2014",
      Rated: "PG-13",
      Released: "07 Nov 2014",
      Runtime: "169 min",
      Genre: "Adventure, Drama, Sci-Fi",
      Director: "Christopher Nolan",
   },
   {
      Title: "The Dark Knight",
      Year: "2008",
      Rated: "PG-13",
      Released: "18 Jul 2008",
      Runtime: "152 min",
      Genre: "Action, Adventure, Crime",
      Director: "Christopher Nolan",
      Writer:
         "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
   },
   {
      Title: "Batman Begins",
      Year: "2005",
      Rated: "PG-13",
      Released: "15 Jun 2005",
      Runtime: "140 min",
      Genre: "Action, Adventure",
      Director: "Christopher Nolan",
      Writer:
         "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
   },
   {
      Title: "Avatar",
      Year: "2009",
      Rated: "PG-13",
      Released: "18 Dec 2009",
      Runtime: "162 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "James Cameron",
      Writer: "James Cameron",
   },
];

function reduceMethod(objlist, name) {
   var averageRating =
      objlist
         // i have to filter through the watch list ot get the films by director
         .filter((film) => film.Director === name)
         // i have to map through the ratings and convert the strings into numbers
         .map((film) => Number(film.imdbRating))
         //i have to use reduce to add the ratings
         .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
      //then i have to divide them by how many films he had
      objlist.filter((film) => film.Director === name).length;

   return averageRating;
}

// Add Elements to the End of an Array Using concat Instead of push
var concatInsteadOfPush = function (orignal, addOn) {
   return orignal.concat(addOn);
};
//Combine Two Arrays Using the concat Method
var mend = function (arr1, arr2) {
   return arr1.concat(arr2);
};

//Remove Elements from an Array Using slice Instead of splice
var removeWithSliceMethod = function (ind1, ind2) {
   var arrr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
   var arrr2 = arrr.slice(ind1, ind2);
   console.log(arrr2);
};

// Return Part of an Array Using the slice Method

var sliceMethod = function (index1, index2) {
   var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   return arr.slice(index1, index2);
};
