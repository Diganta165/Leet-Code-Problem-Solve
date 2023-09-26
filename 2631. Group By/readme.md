Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.

The provided callback fn will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

Please solve it without lodash's _.groupBy function.

 

Example 1:

Input: 
array = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
], 
fn = function (item) { 
  return item.id; 
}
Output: 
{ 
  "1": [{"id": "1"}, {"id": "1"}],   
  "2": [{"id": "2"}] 
}
Explanation:
Output is from array.groupBy(fn).
The selector function gets the "id" out of each item in the array.
There are two objects with an "id" of 1. Both of those objects are put in the first array.
There is one object with an "id" of 2. That object is put in the second array.
Example 2:

Input: 
array = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9]
]
fn = function (list) { 
  return String(list[0]); 
}
Output: 
{ 
  "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] 
}
Explanation:
The array can be of any type. In this case, the selector function defines the key as being the first element in the array. 
All the arrays have 1 as their first element so they are grouped together.
{
  "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
}
Example 3:

Input: 
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
fn = function (n) { 
  return String(n > 5);
}
Output:
{
  "true": [6, 7, 8, 9, 10],
  "false": [1, 2, 3, 4, 5]
}
Explanation:
The selector function splits the array by whether each number is greater than 5.
 

Constraints:

0 <= array.length <= 105
fn returns a string



### Explanation:
Approach:
We define groupBy method by extending the Array prototype to add a groupBy method. This allows any array to call this method.

To group the elements, we need to iterate over each item in the array. One way to achieve this is by using the reduce function. The reduce function allows us to iterate over the array while accumulating a result.

In order to group the elements, we need a way to identify which elements belong to the same group. This is where the provided function fn comes into play. The function takes an element as input and returns a value that will serve as the grouping key.

While iterating over each element, we need to check if a group already exists for the current key. If not, we create an empty array to hold the elements for that group. Then, we push the current element into the corresponding group array.

After all elements have been processed, we return the object that contains the grouped elements. Each key in the object represents a group, and the associated value is an array containing the elements belonging to that group.

Code Explanation:
Array.prototype.groupBy = function(fn): This line adds a new method called groupBy to the Array prototype. This means that any array object in JavaScript can now call this method.

The groupBy function takes a single argument fn, which represents the function to be used for grouping the array elements.

this.reduce((grouped, item) => { ... }): The reduce function is used to iterate over each element in the array and accumulate a final result. The initial value for the accumulator is an empty object {}.

Inside the reduce function, we have an arrow function with two parameters: grouped and item. grouped represents the object that stores the grouped elements, and item represents the current element being processed.

const key = fn(item);: This line calls the provided function fn with the current element item as an argument to determine the grouping key. The returned value is stored in the key variable.

if (!grouped[key]) { grouped[key] = []; }: This code block checks if the key already exists as a property in the grouped object. If not, it creates a new property with the key name and assigns an empty array [] as its value.

grouped[key].push(item);: This line adds the current item to the array corresponding to its key in the grouped object. This effectively groups the elements based on their key values.

Finally, return grouped; is used to return the updated grouped object after all the elements have been processed.