csi
===

Whats in here?
-------------
* Compuer Science algorithms and more
* All written as node modules and tested using Mocha test framework 
* Sort algorithms
* Search algorithms
* Data Structures
* String functions: compress, uncompress, reverse, parseUrlParams. Soon: splice
* Programming problems
* A programming kata space


Algorithms can be analyzed and classified by their efficiency in how they handle data sets.
For example an algorithm which has to go over every element in an set is said to be "linear"; e.g. If there are 200 elements there are 200 steps, if 2 million elements then 2 million steps.

However an algorithm which uses the "divide and conquer" approach which splits the set again and again and again until complete is said to be "logarithmic"; e.g. if there are 16 elements then you can split it in 4 steps (16, 8, 4, 2). Its Iterative halving. Doubling the elements will only require one more step so its far far more efficient than linear for larger sets.

Big O 
=====
Big O notation is a notation (symbol with meaning) used to represent the worst case behavior of an algorithm 
Some algorithms may by chance sometimes find an element in the first or first few checks but that is not what Big O records, Big O represents the worst possible performance (there is another notation for best case performance, see later).

Examples (from best to worst)
-----------------------------
* O(1)         - always executes in the same time regardless of the input e.g. check if number is even or odd
* O(log n)     - logarithmic, number steps is proportional to the logarithm of the length of the list being searched, doubling size of set has little effect since after 1st iteration the data set is halved
* O(n/2)       - twosies,  all elements two at a time
* O(n)         - linear, all elements one at a time, so performance will increase 1 to 1 as data set increases
* O(n squared) - quadratic
* O(n!)        - factorial (the result of multipling all positive integers less than or equal to n). Factorial gets very big very fast e.g. if n is 6 then 6! = 720 (6*5*4*3*2*1). It is about the worst possible performance.   

Omega
=====
Omega notation is used to represent the best case behavior of an algorithm. 
e.g. A linear search algorithm which has to go over a random list of numbers has an Omega of 1 since you may find the item you're looking for in the first check.


Bubble Sort
===========
Start at start of list, look at two at a time (1&2, 2&3, 3&4 ..) and swap each pair if one is bigger than the other. Stop when no more swaps happen when pass though the list. Since largest element is pushed to the end then can skip that next time.

Performance
-----------
* O(n squared)  - i.e. n*n, if n is 10 then 10*10 = 100...zucks, very slow
* Omega(n)      - list is already sorted and only 1 pass required


Selection Sort
==============


Performance
-----------
* O(n squared)      
* Omega(n squared)  



Links
=====
* http://en.wikipedia.org/wiki/Big_O_notation
* http://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/





scratch
function factorial(num) {
    if (num === 0) {
       return 1;
    } else {
       return n * factorial(n - 1);
    }
}



Puzzles
=======

Phone Numbers
-------------
Given a list of phone numbers, determine if it is 
consistent. In a consistent phone list no number 
is a prefix of another. For example:

    o) Bob 91 12 54 26
    o) Alice 97 625 992
    o) Emergency 911

In this case, it is not possible to call Bob because 
the phone exchange would direct your call to the 
emergency line as soon as you dialled the first three 
digits of Bob's phone number. So this list would not 
be consistent.


Spell Numbers
-------------
Spell out a number. For example

      99 --> ninety nine
     300 --> three hundred
     310 --> three hundred and ten
    1501 --> one thousand, five hundred and one
   12609 --> twelve thousand, six hundred and nine
  512607 --> five hundred and twelve thousand,
             six hundred and seven
43112603 --> forty-three million, one hundred and
             twelve thousand,
             six hundred and three

[Source http://rosettacode.org]


List Class
-------------
Develop a recently-used-list class to hold strings 
uniquely in Last-In-First-Out order.

o) A recently-used-list is initially empty.

o) The most recently added item is first, the least
   recently added item is last.

o) Items can be looked up by index, which counts from zero.

o) Items in the list are unique, so duplicate insertions
   are moved rather than added.

Optional extras

o) Null insertions (empty strings) are not allowed.

o) A bounded capacity can be specified, so there is an upper
   limit to the number of items contained, with the least
   recently added items dropped on overflow.



String strip
------------
Given a string, strip all occurences of consecutively 
occuring backslash and newline characters. For example, 
assuming that:
*"\\" represents '\' and 
*"\n" represents '\n'

  "ab\\\ncd\\\nef" --> "abcdef" (two stripped out)

  "abc\\\ndef"     --> "abcdef" (one stripped out)

  "abc\n\\def"     --> unchanged (wrong order)

  "abc\\def"       --> unchanged (no \n)

  "abc\ndef"       --> unchanged (no \)

  "abcdef"         --> unchanged


Others
------
* http://99-bottles-of-beer.net/
* http://rigaux.org/language-study/various/is-a-cow-an-animal/
* funny: http://uncyclopedia.wikia.com/wiki/You_have_two_cows/18#HTML_.28Microsoft.29
