csi
===

Compuer Science algorithms and more

Algorithms can be analyzed and classified by their efficiency in how they handle data sets.
For example an algorithm which has to go over every element in an set is said to be "linear"; e.g. If there are 200 elements there are 200 steps, if 2 million elements then 2 million steps.

However an algorithm which uses the "divide and conquer" approach which splits the set again and again and again until complete is said to be "logarithmic"; e.g. if there are 16 elements then you can split it in 4 steps (16, 8, 4, 2), iterative halving. Doubling the elements will only require one more step so its far far more efficient than linear for larger sets.

Big O 
=====
Big O notation is a notation (symbol with meaning) used to represent the worst case behavior of an algorithm 
Some algorithms by chance may find an element in the first or first few checks but that is not what Big O records, since the worst possible performance of an algorithm is what Big O represents.

Examples (from best to worst)
-----------------------------
O(1)         - always executes in the same time regardless of the input e.g. check if number is even or odd
O(log n)     - logarithmic, number steps is proportional to the logarithm of the length of the list being searched, doubling size of set has little effect since after 1st iteration the data set is halved
O(n/2)       - twosies,  all elements two at a time
O(n)         - linear, all elements one at a time, so performance will increase 1 to 1 as data set increases
O(n squared) - quadratic
O(n!)        - factorial (the result of multipling all positive integers less than or equal to n). Factorial gets very big very fast e.g. if n is 6 then 6! = 720 (6*5*4*3*2*1). It is about the worst possible performance.   

Omega
=====
Omega notation is used to represent the best case behavior of an algorithm (Big O is worst case). 
e.g. A linear search algorithm which has to go over a random list of numbers has an Omega of 1 since you may find the item you're looking for in the first check.


Bubble Sort
===========
Start at start of list, look at two at a time (1&2, 2&3, 3&4 ..) and swap each pair if one is bigger than the other. Stop when no more swaps happen when pass though the list. Since largest element is pushed to the end then can skip that next time.

Performance
-----------
O(n squared)  - i.e. n*n, if n is 10 then 10*10 = 100...zucks, very slow
Omega(n)      - list is already sorted and only 1 pass required


Selection Sort
==============


Performance
-----------
O(n squared)      
Omega(n squared)  



Links
=====
http://en.wikipedia.org/wiki/Big_O_notation
http://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/


sratch
function factorial(num) {
    if (num === 0) {
       return 1;
    } else {
       return n * factorial(n - 1);
    }
}
