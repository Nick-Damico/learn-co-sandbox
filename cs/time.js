// console.log('banana'.includes('a'))

function stringIncludes(word, letter) {
  let matches = false;
  for(let i = 0; i < word.length; i++) {
    if(word[i] == letter) {
      matches = true;
    }
  }
  return matches;
}

console.log(stringIncludes('banana', 'a'));