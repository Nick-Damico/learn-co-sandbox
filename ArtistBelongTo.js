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
  
  addSongByName(name,genre) {
    let new_song = new Song(name,genre);
    if(!this.getSongs().includes(new_song)) {
      this.addSong(new_song);
    } else {
      console.warn("Sorry Song was already added.");
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
  
  artistName() {
    return this._artist._name
  }
  
}

let drake = new Artist('Drake');

let hotlineBling = new Song('Hotline Bling', 'Rap');
// let fireworks = new Song('Fireworks', 'R&B');

hotlineBling.setArtist(drake);

drake.addSongByName('Fireworks', 'R&B');
drake.addSong(hotlineBling);
console.log(hotlineBling.artistName());
drake.listSongs();