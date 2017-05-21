import Purchase from './Purchase/Purchase.Module';

export default Backbone.Collection.extend({
    url: 'http://localhost:2505/purchases',
    model: Purchase.Model,

    parse: function (data) {
        return data.content;
    }

});