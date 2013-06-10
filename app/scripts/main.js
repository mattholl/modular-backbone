/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone-amd/backbone',
        underscore: '../bower_components/underscore-amd/underscore',
        text : '../bower_components/requirejs-text/text'
    }
});

require([
    'underscore',
    'backbone',
    'collections/library',
    'views/libraryview'
], function (_, Backbone, Library, LibraryView) {

    var books = [
        { author : 'Foo', title : 'Bar' },
        { author : 'Beep', title : 'Boop' }
    ];

    var library = new Library(books);

    new LibraryView(library);

    window.setTimeout(function() {
        _.each(library.where({ author : 'Beep'}), function(model) {
            model.set({ title : 'Blooooooooooop' });
        });
    }, 2000);

    window.setTimeout(function() {

        library.add(
            {
                author : 'Flip',
                title : 'Flop'
            }
        );
    }, 4000);
});