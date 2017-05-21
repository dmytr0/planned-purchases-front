import Purchase from './Purchase/Purchase.Module';

export default Backbone.View.extend({
    className: 'ppList',

    render: function() {
        this.$el.empty();
        this.collection.each(this.addOne, this);
        return this;
    },
    addOne: function(purchase) {
        var purchase = new Purchase.View ({ model: purchase });
        let html = purchase.render().el;
        this.$el.append( html );
    }
});