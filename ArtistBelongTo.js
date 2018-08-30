class Artist {
  constructor(name) {
    this._name = name;
  }
  
  getName() {
    return this._name;
  }
}

class Song {
  constructor(title) {
    this._title = title;
  }
  
  getTitle() {
    return this._title;
  }
  
  setArtist(artist) {
    
    this._artist = artist;
  }
  
  getArtist() {
    return this._artist;
  }
}

let drake = new Artist('Drake');
console.log(drake.getName());

let hotlineBling = new Song('Hotline Bling');
hotlineBling.setArtist(drake);

console.log(hotlineBling.getArtist().getName());