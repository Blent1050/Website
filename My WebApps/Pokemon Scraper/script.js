

$.getJSON('http://anyorigin.com/go?url=https%3A//pokemondb.net/pokedex/national&callback=?', function(data){
  $('#output').html(data.contents);
  var challenges = $(data).find('tbody tr'.length);
  console.log(challenges);
});
