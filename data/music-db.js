const music = [
    {artist: 'Virtual Riot', track: 'GOAT', length: '3:14'},
    {artist: 'GriZ', track: 'Griztronics', length: '3:18'},
    {artist: 'Purple Disco Machine', track: 'Body Funk', length: '4:17'},
    {artist: 'Skrillex', track: 'Bangarang', length: '3:35'},
    {artist: 'Post Malone', track: 'Wow.', length: '2:30'},
    {artist: 'Joji', track: 'Dancing In The Dark', length: '3:29'},
  ];
  
  module.exports = {
    getAll: function() {
      return music;
    }
  };