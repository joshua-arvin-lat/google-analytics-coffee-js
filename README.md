Google Analytics - CoffeeScript - JavaScript
============================================

Google Analytics Script with Logging

Basic usage
-----------

Virtual Page 

~~~ coffee
GAT.logging = true
GAT.trackVirtualPage('/test')
> Tracking: /vpv/test
~~~

Events
------
~~~ coffee
GAT.trackEvent('category-name', 'event-name')
> Tracking: category-name - event-name

GAT.trackEventValue('category-name', 'event-name', 'event-value')
> Tracking: category-name - event-name - event-value
~~~

E-commerce Tracking
-------------------

~~~ coffee
# 12345 is the cart ID
# 67890 is the total
GAT.startTrans('12345', '67890')
> Tracking: START TRANS - 12345 - 67890

item = 
  order_id: '123'
  product_id: '456'
  unit_price: '78'
  category: 'cname'
  quantity: 1
  product_name: 'pname'

GAT.addTransItem(item)
> Tracking: TRANS - ITEM - 456

GAT.endTrans()
> Tracking: END TRANS
~~~

Installation
------------

~~~ html
<script type='text/javascript' src='js/gat.js'></script>
~~~

Acknowledgements
----------------

© 2013, Joshua Arvin Lat. Released under the [MIT License](LICENSE).