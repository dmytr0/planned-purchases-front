import Purchases from '../Purchases/Purchases.Module';
import DialogView from '../Dialog/Dialog.View';
import PurchaseModel from '../Purchases/Purchase/Purchase.Model';

let collectionMain = new Purchases.Collection();
export default Backbone.View.extend({
    initialize() {
        this.listenTo(collectionMain, 'reset add remove', this.render);
        collectionMain.fetch({reset: true});
       },
    render(){
        let $app = $('#app');
        $app.empty();
        $app.append("<div class='butback'><button id='addpp'>Plan a new purchase</button></div>");
        $("#addpp").click(this.addNew);
        let view = new Purchases.View({ collection: collectionMain });
        let html = view.render().el;
        $app.append(html);
        return this;
    },

    addNew(){
        if($(".ppdialog").length === 0) {
            let view = new DialogView({model: collectionMain.create().set({justCreated: true})});
            let html = view.render().el;
            $('#app').append(html);
        }
    }
});

