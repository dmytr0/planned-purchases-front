let template = require('html!./purchase.tmpl.html');

export default Backbone.View.extend({
    template: _.template(template),
    events: {
        'click .ppName': 'moreDetails'
    },
    initialize() {
        this.listenTo(this.model, 'change', this.render);
    },

    className: 'purchaseItem',

    render(){
        let html = this.template(this.model.toJSON());
        this.$el.html(html);
        return this;
    },
    moreDetails(e) {
        console.log("More details");
        console.log(this.$el);
        this.$el.find(".ppDetails").slideToggle();
    }
});