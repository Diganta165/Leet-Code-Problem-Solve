Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.



<!-- Solution Explanation -->
Inside function, we need two variable, one is sum and other is carry. Sum variable will be return as output.
Assign empty string to Sum variable.
Assign zero to Carry variable.
To add numbers we need to run loop, will use while loop it run till a or b and carry is not empty. After every iteration, we will remove last element from input a and b.
Inside while loop, need to add last digits of a and b, and store it in variable add.
If add is greater than 1 then 0 is added to the sum, and reassign Carry with 1.
In else case we just need to add value of Carry, and reassign Carry with zero
Need to remove last digit from inputs a and b, if not remove while loop will run infinate times.