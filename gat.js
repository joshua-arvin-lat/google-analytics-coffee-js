var GAT;

GAT = (function() {

  function GAT() {}

  GAT.logging = false;

  GAT.log = function(message) {
    if (this.logging === true) {
      return console.log(message);
    }
  };

  GAT.trackVirtualPage = function(url) {
    this.log("Tracking: /vpv" + url);
    return window._gaq.push(['_trackPageview', "/vpv" + url]);
  };

  GAT.trackEvent = function(category, label) {
    this.log("Tracking: " + category + " - " + label);
    return window._gaq.push(['_trackEvent', category, label]);
  };

  GAT.trackEventValue = function(category, label, value) {
    this.log("Tracking: " + category + " - " + label + " - " + value);
    return window._gaq.push(['_trackEvent', category, label, value]);
  };

  GAT.startTrans = function(cartId, total) {
    this.log("Tracking: START TRANS - " + cartId + " - " + total);
    return window._gaq.push(['_addTrans', "" + cartId, 'Taste Central', "" + total]);
  };

  GAT.addTransItem = function(item) {
    this.log("Tracking: TRANS - ITEM - " + item['product_id']);
    return window._gaq.push(['_addItem', item['order_id'], item['product_id'], item['product_name'], item['category'], item['unit_price'], item['quantity']]);
  };

  GAT.endTrans = function() {
    this.log("Tracking: END TRANS");
    return window._gaq.push(['_trackTrans']);
  };

  return GAT;

})();

window.GAT = GAT;