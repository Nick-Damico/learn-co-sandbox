class Anagram {
  constructor(word) {
    this._word = word
  }

  getWord() {
    return this._word
  }

  setWord(word) {
    this._word = word
  }

  match(match_arr) {
    let split_word = this.getWord().split('')
    let matched_arr = [];

    match_arr.forEach((word) => {
      debugger;
      if(word.split('').sort().join('') == split_word.sort().join('')) {
        matched_arr.push(word);
      }
    });
    console.log(matched_arr);
  }
}

let word1 = new Anagram('ab');

word1.match(['abc', 'ba']);
