var people = (function () {
    var people = ['Rus', 'Jo'];

    // cache DOM
    var $el = $("#peopleModule");
    var $form = $el.find('#addPerson');
    var $input = $form.find('input[type=text]');
    var $ul = $el.find('ul');
    var template = $el.find('#people-template').html();

    // bind events
    $form.on('submit', addPerson);
    $ul.on('click', 'i.del', deletePerson);

    _render();

    function _render() {
        $ul.html(Mustache.render(template, {people: people}));
        events.emit('peopleChanged', people);
    }

    function addPerson(who) {
        var name;
        if (typeof who === 'string') {
            name = who;
        } else {
            who.preventDefault();
            name = $input.val();
        }
        people.push(name);
        $input.val('');
        _render();
    }

    function deletePerson(which) {
        var i;
        if (typeof which === 'number') {
            i = which;
        } else {
            var $remove = $(which.target).closest('li');
            i = $ul.find('li').index($remove);
        }
        people.splice(i, 1);
        _render();
    }

    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    }
})();