export default Backbone.Model.extend({
    idAttribute: "id",
    urlRoot:"http://localhost:2505/purchase/",

    defaults: {
        amount: 0.00,
        currency:"₴",
        image: "http://volzlo.com/images/prod/empty.png",
        name: "undefined",
        description: "No description",
        category: "default",
        priority: 3,
        urls: "" ,
        urlsarr: [""]
    },
    parse:function (data) {
        if(data.urls != null) {
            data.urlsarr = _.compact(data.urls.split(";"));
        }
        return data;
    }

});











