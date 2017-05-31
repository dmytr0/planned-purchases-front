let template = require('html!./Dialog.template.html');
const addicon = require('../../imgbank/add.png');
const trashicon = require('../../imgbank/trash.png');

export default Backbone.View.extend({
    template: _.template(template),
    events: {
        'click .saveNewPP': 'save',
        'click .cancelDialog': 'cancel',
        'click .copyLink': 'copyLink',
        'click .trashLink': 'trashLink'
    },
    initialize() {
        console.log(this);
        this.listenTo(this.model, 'change', this.render);
    },
    className: 'ppdialog',

    render(){
        this.model.set({addicon: addicon, trashicon: trashicon});
        let html = this.template(this.model.toJSON());
        this.$el.html(html);
        return this;
    },

    save(){
        this.setFields();
        this.model.save();
        this.model.collection.trigger("add");
        this.remove();

    },
    cancel(){
        if(this.model.get("justCreated") === true) {
            console.log("deleted model");
            this.model.destroy();
        }
        this.remove();
    },
    setFields(){
        let mdl = this.model;
        let urls = "";
        $(".eurl").each(function (i, el) {
            urls += el.value + ";";
        });
        if(urls.length > 0){
            urls.substring(0, urls.length - 1);
        }
        let newModel = {};

        let namev = $("#ename").val();
        let amountv = $("#eamount").val();
        let currencyv = $("#ecurrency").val();
        let imagev = $("#eimage").val();
        let descriptionv = $("#edescription").val();
        let categoryv = $("#ecategory").val();
        let priorityv = $("#epriority").val();

        if(namev != undefined && namev.length > 0) {
            newModel.name = namev;
        }
        if(amountv != undefined && amountv.length > 0) {
            newModel.amount = amountv;
        }
        if(currencyv != undefined && currencyv.length > 0) {
            newModel.currency = currencyv;
        }
        if(imagev != undefined && imagev.length > 0) {
            newModel.image = imagev;
        }
        if(descriptionv != undefined && descriptionv.length > 0) {
            newModel.description = descriptionv;
        }
        if(categoryv != undefined && categoryv.length > 0) {
            newModel.category = categoryv;
        }
        if(priorityv != undefined && priorityv.length > 0) {
            newModel.priority = priorityv;
        }
        newModel.urls = urls;

        mdl.set(newModel);
    },
    copyLink(e){
        console.log("add");
        let lnk = $(e.target).closest("p");
        lnk.after('<p>' + lnk.html()+ '</p>');
    },
    trashLink(e){
        console.log("trash");
        $(e.target).closest("p").remove();
    }
});