---
sidebar_position: 3
---

# Ecommerce

## Built-in Ecommerce System

With the built-in Ecommerce system, you can easily manage your products and discounts with AbsolutChat. And your bot can then display and sell products for you automatically.

To access the Ecommerce system, click "Ecommerce" from the left sidebar on your Dashboard.

![absolutchat-builtinecom](/img/builtinecom.png)

## Setup Ecommerce

###Prodcuts

![absolutchat-ecomprods](/img/ecomprods.png)

Here is where you manage your products. When you add new products,

![absolutchat-ecomprods](/img/ecomprods2.png)

Remember to set the availability status for the product. Utilize the Organization section to sort and organize your products:

![absolutchat-ecomprods](/img/ecomprods3.png)

When you click choose Product type, Vendor, Tags and Collections, you might see nothing in the list from the very beginning.

![absolutchat-ecomprods](/img/ecomprods4.png)

Don't worry, you can easily create one by just typing in a new name, then click the name to create a new one. See the picture above. However, for creating a new collection, you will need to access "Collections", see next.


### Variants


If a product has multiple options, use "Variants".

![absolutchat-variants](/img/variants.png)

In the above screenshot, tick the checkbox first and give an option name such as size, color, weight, etc (maximum 2 options). Then in "Option Values", list all the available values of that option by typing in the field e.g. 128G and input a comma or hit the "enter" key on your keyboard. Then you will see it jump in a blue box with a delete button.
After you setup all the options, you can edit the price of each variant. **Click "Save" to create the product** and click the pencil icon to back to the editing page to add more details of the variant including photo, compared price, inventory, etc:

![absolutchat-variants](/img/variants2.png)

This is how it will look like in the shopping UI:

![absolutchat-variants](/img/variants3.png)

:::tip
TIP
In my case, I have color and size options. Since for color I have different photos, but for size, no. So I need to put color as the first option, because only the first option shows variant photos.
:::

### Collections

![absolutchat-collections](/img/collections.png)

When you create new collections, you can add products to the collection in 2 ways:

![absolutchat-collections](/img/collections2.png)

Manually add existing products to it

You need to choose the "Manual" option and save it first, then click the pencil mark to add products. When you add products, you can click the "Search" button without any keyword to get the full list of all existing products, or type in any keyword to search.

Add automatically by giving conditions

Set up the conditions before you save the creation. "all conditions" means only the product which matches all conditions listed here will be added to this collection. While "any condition" means, the product which matches any one of the conditions listed here will be added.


### Discounts

![absolutchat-discounts](/img/discounts.png)

Select the "Discounts" tag and click "Create Discount".

![absolutchat-discounts](/img/discounts1.png)

Use "Generate code" to get a random code or name one by yourself.
Feel free to customize the rest details for the discount. Once done, click "Save".

:::tip
If you get system errors, being unable to create a discount. Please leave it for now, we are working on this feature and will get this solved as soon as possible. Sorry about any inconvenience.
:::

### Shopping Carts

![absolutchat-shoppingcart](/img/shoppingcart.png)

Here is where you check users' cart information. Click on the "x items" button to view item details like this:

![absolutchat-shoppingcart](/img/shoppingcart2.png)

:::note
fter checkout, the items will be removed from carts and added to orders.
:::

### Orders

![absolutchat-orders](/img/orders.png)

All the order histories are listed under "Orders". Again, click on the "x items" button to view item details.

### Settings

:::note Important
IMPORTANT
a series of basic information like store information, shipping method and payment method have to be set before you test the checkout process. For example, if you didn't add any payment method in the settings, you might find yourself unable to open the checkout page.
:::

![absolutchat-settings](/img/settings.png)

Leave your store details.

![absolutchat-settings](/img/settings2.png)

Check all available shipping methods. If "Pick up" is checked, do make sure you fill in your "Store address" above "Shipping method".

![absolutchat-settings](/img/settings3.png)

Check all available payment method and select currency.

![absolutchat-settings](/img/settings4.png)

Finally, add prefix or suffix to your order ID if needed.
All these settings can be accessed in the "SHOP" JSON in the flow. Check "SHOP" JSON Variable.

## Use Ecommerce in Flow

You can check this "Ecommerce Template" for inspiration after you set up your ecommerce system.

### Show Products

![absolutchat-showproduct](/img/showproducts.png)

In a Send Message step, find "Ecommerce"(1), "Product"(2) and then click "Edit"(3). Buttons added at area 4 will show under each product. And don't forget to put prompt at area 5 in case no product matched.

![absolutchat-showproduct](/img/showproducts2.png)

:::caution Warning
Due to the fact that Facebook allows only 10 cards displayed at one time, you might need to apply a filter to narrow down the products.
:::

1. Choose how many products to show, from 1 to 10

2. select a sorting condition according to the user's choice

3. set a filter with as many conditions as required.

### Add to Cart

![absolutchat-addtocart](/img/addtocart.png)

Select "Add to cart" when the button is pressed. It is good to prompt what was added as well. Get information of the added product from the "SHOP" JSON variable.

### Show Cart


![absolutchat-showcart](/img/showcart.png)

Find "Shopping Cart" under "Ecommerce", click "Edit". Again, any button put at area 4 will display with every product.

![absolutchat-showcart](/img/showcart2.png)

The edit page of "showing cart" is similar to the "showing product"'s. But it's a bit trickier. Because a cart has to show every product for reviewing before checkout.

:::tip
TIP
If a customer picks more than 10 products but below 20, try using "Newest" to show the first 10 and "Oldest" to show the rest. It's rare, but what if it's more than 20? Maybe try listing products by price range or first letter. Alternatively, you can also customize some Send Message steps to show the cart rather than using the "showing cart" function. Access cart information in ["SHOP" JSON variable](https://docs.uchat.com.au/ecommerce/ecommerce-action.html#cart-information) and "$.cart.num" of "SHOP" for items number in the cart.
:::

### Remove from cart

Select "Remove from cart" when the button is pressed. You might want to use a **Goto** step to go to the cart again to refresh, since there are quantities shown with products that differ from showing a static menu.

### Empty Cart

![absolutchat-emptycart](/img/emptycart.png)

Select "Empty Cart" when the quick reply is pressed. Why not button? Because it can be redundant to have more than one empty cart following all products. Besides, "Empty Cart" is in the Action step, not a button action. So you will need to select an Action step as the next step to the quick reply.

### Checkout

:::tip
to simulate the checkout process, you will have to set up your payment Integration as well.  We will update how to setup payment gateway
:::

We've just talked about it's redundant to have an "Empty Cart" button with every product, but why put multiple "Checkout"? This is because, actions in the Action step is processed at the backend while "Checkout" requires the frontend to open a website, the checkout page. So you can only call "Checkout" at a button.

If you don't want to put "Checkout" under each product, try adding one more text-type information after showing the cart:

![absolutchat-checkout](/img/checkout.png)

When users checkout, a list of products will show with quantity and price first, following by an area to leave users' contact details:

![absolutchat-checkout](/img/checkout.png)

Keep scrolling down you will see delivery options, coupon code and a summary of the order.

![absolutchat-checkout](/img/checkout.png)

Finally, by selecting a payment option and clicking "Pay $xx.xx", the page will be directed to Payment gateway. If you are under a text mode, you will see Authorize payment.

Click "AUTHORIZE TEST PAYMENT" or "FAIL TEST PAYMENT" to test what will it look like when the payment succeeds or fails.

![absolutchat-checkout](/img/checkout4.png)

An order confirmation will be sent when payment succeed. Click on the confirmation to view the order detail.

![absolutchat-checkout](/img/checkout5.png)

### Buy Only One Product

![absolutchat-onlyone](/img/onlyoneproduct.png)

"Buy" is actually a feature having nothing to do with the built-in ecommerce system. After setting up your payment Integration, users can purchase one product (can be from your payment account) with one click on the "Buy" button with no ecommerce system setting at all.
The feature is suitable for ticket product without options or paying subscription fees, etc.

### How to use System JSON Variable

There are several system field storing information about the ecommerce system. Usually, the system will tell you where to find according to data like this:

![absolutchat-systemjson](/img/systemjson.png)

You can access them wherever you see `"</>"`

![absolutchat-systemjson](/img/systemjson.png)


### System JSON - "SHOP"

"SHOP" stores all information about your ecommerce settings.

![absolutchat-jsonshop](/img/jsonshop.png)

### System JSON - "ORDER"

"ORDER" stores the user's last order. You only get an order after checkout.

![absolutchat-jsonorder](/img/jsonorder.png)

### System JSON - "CART"

"CART" stores the user's shopping cart.

![absolutchat-jsoncart](/img/jsoncart.png)

### System JSON - "SELECT"

When you choose "Select" when a button pressed, the selected item is stored in "SELECT".
SELECT.product:

![absolutchat-jsonselect](/img/jsonselect.png)

SELECT.sku:

![absolutchat-jsonselect](/img/jsonselect2.png)

:::note In Progress
This page is in progress
:::

### Single Buy Button

You can also sell products that are pre-set in your Stripe account with a single "Buy" button (only buy one item at a time, no add to cart).

![absolutchat-singlebuy](/img/singlebuy.png)

:::note IN Progress
The documentation about how to use the single "Buy" button is still in progress. Should you have any query, please feel free to contact us via the AbsolutChat Support: [support@absolutchat.com](mailto:support@absolutchat.com)
:::