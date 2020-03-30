const tvShows = [
    {title: 'The Office', stream: 'Netflix'},
    {title: 'Hunters', stream: 'Prime Video'},
    {title: 'The Boys', stream: 'Prime Video'},
    {title: 'Sex Education', stream: 'Netflix'},
    {title: 'CastleVania', stream: 'Netflix'},
    {title: 'Game of Thrones', stream: 'HBO'},


  ];
  
  module.exports = {
    getAll: function() {
      return tvShows;
    }
  };