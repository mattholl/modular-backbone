'use strict';

define([
    'underscore',
    'backbone',
    'models/book'
], function(_, Backbone, Book) {

    var Library = Backbone.Collection.extend({
        model : Book,

        initialize : function() {
            this.on('add', function() {
                alert('New book addded');
            }, this);
        }
    });
    return Library;
});