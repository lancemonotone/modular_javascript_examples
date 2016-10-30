var Human = {
    create: function (values) {
        var instance = Object.create(this);
        Object.keys(values).forEach(function (key) {
            instance[key] = values[key];
        });
        return instance;
    },
    species: 'human',
    saySpecies: function () {
        console.log('I am a ' + this.species);
    },
    sayName: function () {
        console.log('My name is ' + this.name);
    }
};

var Musician = Human.create({
    species: 'Musician',
    playInstrument: function () {
        console.log('Plays ' + this.instrument);
    }
});

var rus = Musician.create({
    name: 'Rus',
    instrument: 'studio'
});

