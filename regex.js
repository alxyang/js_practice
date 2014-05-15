//practice regex, jquery


//create a regex literal
// var myRe = /d(b+)d/g;
//what does the g flag do?
//g - global
//i - case-insensitive
//m - multi-line
//y - sticky search matches starting at current position in target string

// var re = /\w+\s/g;
// var re_not_global = /\w+\s/;
// var str = "fee fi fo fum";
// var myArray = str.match(re);
// var myArray2 = str.match(re_not_global);

// console.log("with global: " + myArray);
// console.log("without global: " + myArray2);


/** 
exec - A RegExp method that executes a search for a match in a string. 
It returns an array of information. 
**/

// var myArray = myRe.exec("cdbbbbdbsbz");
// console.log(myArray);


// test - A RegExp method that tests for a match in a string. It returns true or false.
// match - A String method that executes a search for a match in a string. It returns an array of information or null on a mismatch.
// search  - A String method that tests for a match in a string. It returns the index of the match, or -1 if the search fails.

/** 
replace - A String method that executes a search for a match in a string, and replaces the matched substring with a replacement substring.
**/

// 1.  replace with pattern matching
// var re = /(\w+)\s(\w+)/;
// var str = "John Smith";
// var newstr = str.replace(re, "$2, $1");
// console.log(newstr);

// split - A String method that uses a regular expression or a fixed string to break a string into an array of substrings.

/**
MDN EXAMPLE 1: Changing the Order in an Input String
Note: rewrite this in jquery later
**/

// var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";

// var pattern = /\s*;\s*/;
// var nameList = names.split(pattern);

// console.log(nameList);


// pattern = /(\w+)\s+(\w+)/;
// var bySurnameList = [];


// var i;
// var len = nameList.length;
// for ( i = 0; i < len; i++){
//     bySurnameList[i] = nameList[i].replace(pattern, "$2, $1");
//     console.log(nameList[i]);
//     console.log(bySurnameList[i]);
// }

// console.log("switched: " + bySurnameList);


// // Sort by last name, then display the sorted array.
// bySurnameList.sort();

// console.log("sorted: " + bySurnameList);

/**
MDN EXAMPLE 2: Using Special characters to Verify Input
Note: rewrite this in jquery later
**/

var re = /(?:\d{3}|\(\d{3}\))([ -\/\.]?)\d{3}[ -\/\.]?\d{4}/;  

function testInfo(phoneInput){  
        var OK = re.exec(phoneInput);  
        console.log(OK);
        if (!OK){  
          console.log(phoneInput + " isn't a phone number with area code!");
        } else{
          console.log("Thanks, your phone number is " + phoneInput);  
        }
        console.log("derp");
}  

document.getElementById('checkbutton').onclick = function() {
   alert("button clicked");
   testInfo(document.getElementById('phone_number').value);
};









