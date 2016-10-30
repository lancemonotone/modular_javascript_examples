/*
var people = [];
var template = $('#people-template').html();

$('#peopleModule').find('button').on('click', function () {
    people.push($('#peopleModule').find('input'.val()));
    $('#peopleModule').find('input'.val(''));

    var data = {
        people: people
    }
    $('#peopleModule').find('ul').html(Mustache.render(template, data));
});

$('#peopleModule').find('ul').delegate('i.del', 'click', function (e) {
    var $remove = $(e.target).closest('li');
    var i = $('#peopleModule').find('ul').find('li').index($remove);

    $remove.remove();

    people.splice(i, 1);
});
*/


"use strict";
(function () {
    var people = {
        people: ["Rus", "Jo"],
        init: function () {
            this.cacheDom();
            this.bindEvents();
            this.render();
        },
        cacheDom: function () {
            this.$el = $("#peopleModule");
            this.$form = this.$el.find('#addPerson');
            this.$ul = this.$el.find('ul');
            this.template = this.$el.find('#people-template').html();
        },
        bindEvents: function () {
            this.$form.on('submit', this.addPerson.bind(this));
            this.$ul.on('click', 'i.del', this.deletePerson.bind(this));
        },
        render: function () {
            var data = {
                people: this.people
            };
            this.$ul.html(Mustache.render(this.template, data));
        },
        addPerson: function (e) {
            e.preventDefault();
            var $input = $(e.target).find('input[type=text]');
            this.people.push($input.val());
            this.render();
            $input.val('');
        },
        deletePerson: function (e) {
            var $remove = $(e.target).closest('li');
            var i = this.$ul.find('li').index($remove);

            this.people.splice(i, 1);
            this.render();
        }
    };
    people.init();
})();

