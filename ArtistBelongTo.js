class Artist {
  constructor(name) {
    this._name = name;
    this._songs = [];
  }
  
  getName() {
    return this._name;
  }
  
  addSong(song) {
    if(!this._songs.includes(song)) {
      this._songs.push(song)
    } else {
      console.warn( "Song was already added" );
    }
    if(!song.getArtist()) {
      song.setArtist(this);
    }
  }
  
  getSongs() {
    return this._songs;
  }
  
  listSongs() {
    console.log(`${this.getName()}'s Songs`);
    console.log('-------------------------');
    for(let song of this._songs) {
      console.log(song.getTitle());
    }
  }
}

class Song {
  constructor(title,genre) {
    this._title = title;
    this._genre = genre;
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

let hotlineBling = new Song('Hotline Bling', 'Rap');
let fireworks = new Song('Fireworks', 'R&B');

hotlineBling.setArtist(drake);

drake.addSong(hotlineBling);
drake.addSong(fireworks);
console.log(`Artist of ${hotlineBling.getTitle()}: ${fireworks.getArtist().getName()}`);
drake.listSongs();