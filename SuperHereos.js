var superHeroes = [['Batman', 'Bruce Wayne'],
                    ['Spiderman', 'Peter Parker'],
                    [ 'The Flash', 'Barry Allen']];

var secretIdentitiy = superHeroes.map(function(revealArray){
        return revealArray.join(' is ')
});

console.log(secretIdentitiy.join('\n'))