export default Backbone.Model.extend({
    idAttribute: "id",
    defaults: {
        amount: 0.00,
        currency:"₴",
        image: "",
        name: "undefined",
        description: "",
        category: "default",
        priority: 3
    },
    parse:function (data) {
        this.attributes.urls = data.urls.split(";");
        delete data.urls;
        console.log(this);
        return data;
    }

});