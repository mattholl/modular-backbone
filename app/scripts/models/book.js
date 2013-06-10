'use strict';

define([
    // File paths from require.config in main.js
    'underscore',
    'backbone'
], function(_, Backbone) {

    var BookModel = Backbone.Model.extend({
        defaults : {
            author : 'some author',
            title : 'title'
        }
    });

    return BookModel;
});