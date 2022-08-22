---
sidebar_position: 3
title: Whatsapp Cloud API Channel
---

## WhatsApp Cloud API

Facebook announced WhatsApp cloud API on 20th May, and it’s available to any business of any size, big and small.

![absolutchat-providers](/img/cloudapi1.png)

This documentation will teach you how to set up WhatsApp cloud API with AbsolutChat. You will be able to build your WhatsApp chatbot with a free testing number offered by Facebook, and also switch to the live production when your bot is ready to go live!

:::note:
For now, due to certain limitations of WhatsApp cloud API, every business needs to create its own Facebook App in order to use WhatsApp cloud API. Once Facebook allows platforms like AbsolutChat to create a WhatsApp business account, we will improve the process to use WhatsApp cloud API.
:::

### Set up Facebook App

First, you need to register as a meta developer (opens new window), and then enable two-factor authentication (opens new window)
for your account.

And then you can click the “create a new app” from the top right of your dashboard, and then select “Business” as the app type:

![absolutchat-providers](/img/cloudapi2.png)

Then put the display name, and add the app contact email, if you want to connect this app to any of your business accounts, you can click the drop-down to connect them.

![absolutchat-providers](/img/cloudapi3.png)

After you create your own app, and then you scroll down to WhatsApp, and then click “Set up” in the WhatsApp product.

![absolutchat-providers](/img/cloudapi4.png)

And then you will be redirected to the screenshot below:

![absolutchat-providers](/img/cloudapi5.png)

Now, you can click the “Get started” under WhatsApp, and then you will redirect to the screenshot below:

![absolutchat-providers](/img/cloudapi6.png)

Select the business account that owns the phone number you want to use for WhatsApp automation. If you don’t have a business account, Facebook will automatically create one for you.
Then you need to click the “configuration” to set up your own webhook.

![absolutchat-providers](/img/cloudapi7.png)

### Get your Webhook from AbsolutChat

Now, you need to go back to AbsolutChat, and then select the WhatsApp cloud, click “Connect WhatsApp Cloud”

![absolutchat-providers](/img/cloudapi8.png)

After you click the button, it will pop up the window for you to authorize your Facebook account, and then select the business account you want to connect to.

You can connect one business account under one workspace. Multiple numbers can be connected to the same business account.

After you select your business account, you will be redirected back to AbsolutChat. And then after you click the “list businesses with WhatsApp phone numbers”

It will list all the WhatsApp numbers in this business account. You can click the “Select” button to the next step.

Then you will see your unique Webhook URL and token to use in the next step.

Now you can go back to the app in your Facebook developer account, and then click “Edit” in the configuration as per the screenshot below:

![absolutchat-providers](/img/cloudapi9.png)

In the pop-up window, paste your webhook URL and token from AbsolutChat.

![absolutchat-providers](/img/cloudapi10.png)

And then click “verify & save”.

After you add the webhook URL, now you need to click the “manage” under the Webhook field.

![absolutchat-providers](/img/cloudapi11.png)

You need to subscribe to the “messages” as per the screenshot below:

![absolutchat-providers](/img/cloudapi13.png)

Now, you can go to AbsolutChat, and sync numbers & pick a number to create your WhatsApp chatbot.

Please note, that every app will be offered a test number for free from Facebook. You can easily start testing with this test number.

### Start with test numbers

The test number allows you to have an unlimited free conversation with a set of verified phone numbers. You need first to verify your phone numbers. You can do so by clicking the “add the phone number” below:

![absolutchat-providers](/img/cloudapi14.png)

And then you need to verify this phone number by receiving an SMS from Facebook.

![absolutchat-providers](/img/cloudapi15.png)

After your phone number is verified, you can send a text message, and preview the chatbot you built with this test number.

### Build WhatsApp bot with testing WhatsApp number

In AbsolutChat, if you synced numbers, you will see the screenshot below, and select the test number offered from Facebook, you can start building your first WhatsApp chatbot.

![absolutchat-providers](/img/cloudapi16.png)

And then confirm the selection.

![absolutchat-providers](/img/cloudapi17.png)

And then you can create the bot to test the connection.

![absolutchat-providers](/img/cloudapi18.png)

And you can create a simple flow like the below to test the send message & also question block.

![absolutchat-providers](/img/cloudapi19.png)

After you build this simple flow, click “Preview” and then select “Open in WhatsApp”, and test if the bot is responding or not.

![absolutchat-providers](/img/cloudapi20.png)

And then you can follow the instructions, and you will see that WhatsApp is working properly.

You can build your automation with the test number, and after all the tests, if you are ready to push the bot to a real WhatsApp number, you can follow the instructions below.

If you don’t receive messages, it’s possible that you haven’t added your phone number to a verified phone number in the app.

For test phone numbers, you can send unlimited messages, but it’s only for verified phone numbers you added.
