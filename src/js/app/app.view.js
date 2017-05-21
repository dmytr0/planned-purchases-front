import Purchases from '../Purchases/Purchases.Module';

let collectionMain = new Purchases.Collection();
export default Backbone.View.extend({
    initialize() {
        this.listenTo(collectionMain, 'reset', this.render);

        collectionMain.fetch({reset: true});
       },

    render(){
        console.log("app main rendering...");

        $('#app').empty();
        let view = new Purchases.View({ collection: collectionMain });
        let html = view.render().el;
        $('#app').append(html);

        return this;
    }

});

