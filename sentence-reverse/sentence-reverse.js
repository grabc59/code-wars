// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
//
// reverse('Hello World') === 'World Hello'
// reverse('Hi There.') === 'There. Hi'
function reverse(string){
  console.log(string.split(' ').reverse().join(' '));
  return string.split(' ').reverse().join();
}
reverse('Hi There.');
