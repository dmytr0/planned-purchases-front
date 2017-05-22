import Purchases from '../Purchases/Purchases.Module';

let collectionMain = new Purchases.Collection();
export default Backbone.View.extend({
    initialize() {
        this.listenTo(collectionMain, 'reset', this.render);
        collectionMain.fetch({reset: true});
       },
    render(){
        let $app = $('#app');
        $app.empty();
        $app.append("<button id='addpp'>Plan a new purchase</button>");
        let view = new Purchases.View({ collection: collectionMain });
        let html = view.render().el;
        $app.append(html);
        return this;
    }
});

