const games = [
    {title: 'Legend of Zelda: Breath of the Wild', released: true},
    {title: 'Call of Duty: Modern Warfare', released: true},
    {title: 'Pokemon Shield', released: true},
    {title: 'Animal Crossing', released: false},
    {title: 'Persona 5', released: true},
    {title: 'Halo PC', released: true},


  ];
  
  module.exports = {
    getAll: function() {
      return games;
    }
  };