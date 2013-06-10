'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/book.html'
], function($, _, Backbone, bookTemplate) {

    var BookView = Backbone.View.extend({
        tagName : 'li',
        className : 'book',

        template : _.template( bookTemplate ),
        events : {},
        initialize : function() {

            // Changes made to the model will be directly reflected in the view
            this.listenTo(this.model, 'change', this.render);
        },

        render : function() {

            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        }

    });

    return BookView;
});