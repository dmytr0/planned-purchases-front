export default Backbone.Model.extend({
    idAttribute: "id",
    defaults: {
        amount: 0.00,
        currency:"₴",
        image: "",
        name: "undefined",
        description: "",
        category: "default",
        url: "urls",
        priority: 3
    }

});