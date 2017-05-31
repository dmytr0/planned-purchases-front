import DialogView from '../../Dialog/Dialog.View';
let template = require('html!./purchase.tmpl.html');
const deleteicon = require('../../../imgbank/delete.svg');
const editicon = require('../../../imgbank/edit.svg');


export default Backbone.View.extend({
    template: _.template(template),
    events: {
        'click .ppName': 'moreDetails',
        'click .ppEdit': 'editpp',
        'click .ppDelete': 'deletepp',
    },
    initialize() {
        this.listenTo(this.model, 'change', this.render);
    },
    className: 'purchaseItem',

    render(){
        this.model.set({delIcon: deleteicon, edIcon:editicon})
        let html = this.template(this.model.toJSON());
        this.$el.html(html);
        return this;
    },
    moreDetails(e) {
        this.$el.find(".ppDetails").slideToggle();
    },

    editpp(e){
        $(".ppdialog").remove();
        let view = new DialogView({model: this.model});
        let html = view.render().el;
        $('#app').append(html);

    },

    deletepp(e){
        this.model.destroy();
        this.remove();
    }

});