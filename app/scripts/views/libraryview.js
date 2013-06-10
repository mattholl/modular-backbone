'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'views/bookview'
], function($, _, Backbone, BookView) {

    var LibraryView = Backbone.View.extend({

        // Attach this view to an already existing element in the DOM
        el : $('#library-container'),
        events : {},
        initialize : function(collection) {
            this.collection = collection;
            this.render();
            this.collection.on('add', function(model) {
                this.renderBook(model);
            }, this);
        },
        render : function() {
            this.$el.html('');
            this.collection.each(function(book) {
                this.renderBook(book);
            }, this);
        },
        renderBook : function(book) {
            var bookView = new BookView( { model : book });
            this.$el.append(bookView.render().el);
        }
    });
    return LibraryView;
});