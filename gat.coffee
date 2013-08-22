class GAT
  @logging = false

  @log = (message) ->
    console.log(message) if @logging is true

  @trackVirtualPage = (url) ->
    @log("Tracking: /vpv#{url}")
    window._gaq.push(['_trackPageview', "/vpv#{url}"])

  @trackEvent = (category, label) ->
    @log("Tracking: #{category} - #{label}")
    window._gaq.push(['_trackEvent', category, label])

  @trackEventValue = (category, label, value) ->
    @log("Tracking: #{category} - #{label} - #{value}")
    window._gaq.push(['_trackEvent', category, label, value])

  @startTrans = (cartId, total) ->
    @log("Tracking: START TRANS - #{cartId} - #{total}")
    window._gaq.push(['_addTrans',"#{cartId}",'Taste Central' ,"#{total}"])

  @addTransItem = (item) ->
    @log("Tracking: TRANS - ITEM - #{item['product_id']}")
    window._gaq.push [
      '_addItem',
      item['order_id']                  # Order ID
      item['product_id']                # SKU code
      item['product_name']              # Product Name
      item['category']                  # Category
      item['unit_price']                # Unit Price
      item['quantity']                  # Quantity
    ]

  @endTrans = ->
    @log("Tracking: END TRANS")
    window._gaq.push(['_trackTrans'])

window.GAT = GAT