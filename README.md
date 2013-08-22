Google Analytics - CoffeeScript - JavaScript
============================================

Google Analytics Script with Logging

Basic usage
-----------

Virtual Page 

~~~ js
GAT.logging = true
GAT.trackVirtualPage('/test')
> Tracking: /vpv/test
~~~

Events
------
~~~ js
GAT.trackEvent('category-name', 'event-name')
> Tracking: category-name - event-name

GAT.trackEventValue('category-name', 'event-name', 'event-value')
> Tracking: category-name - event-name - event-value
~~~

E-commerce Tracking
-------------------

~~~ js
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