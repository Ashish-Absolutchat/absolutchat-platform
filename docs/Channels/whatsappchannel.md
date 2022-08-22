---
sidebar_position: 2
title: Whatsapp Channel
---

## WhatsApp, SMS & Voice Bot
### Pick Providers

As follow are the providers we currently work with. Different providers support different bots. Choose your provider according to your needs. Create an account with them and pick your number.

![absolutchat-providers](/img/providers.png)

![absolutchat-providers](/img/providers2.png)

AbsolutChat has put links for you to jump to their official websites. You can either access them in the according channel (see screenshot above) or on the "Integration" page (see screenshot below).

![absolutchat-providers](/img/providers3.png)

Follow the steps in the above screenshots to connect to the provider and add numbers.

### Sign Up & Get Numbers

Take Twilio as an example. On their website, sign up, login in, then you will get to your Dashboard:

![absolutchat-providers](/img/providers4.png)

Click "Get a Trial Number".

![absolutchat-providers](/img/providers6.png)

In the pop-up window, the number is shown on the upper left side, click "Choose this Number" or "Search for a different number". Then you have your own number!

### Connect to Provider

![absolutchat-providers](/img/providers7.png)

In your provider Dashboard, click the little button on the right side to copy your "ACCOUNT SID" and "AUTH TOKEN" value back to AbsolutChat:

![absolutchat-providers](/img/providers8.png)

1. put your copied values in corresponding fields.
2. click "Save".
3. click "Add Phone Number" if you are building an SMS or Voice bot, otherwise, "Add WhatsApp Number".

* More information click -> [Twilio Docs(opens new window)](https://www.twilio.com/docs)
* More information click -> [360Dialog Docs(opens new window)](https://docs.360dialog.com/)

### WABA prerequisites

Before a business can access the WhatsApp Business API, each client has to go through an approval procedure.

1. To start using the WhatsApp Business API, you will need the following:

2. A Facebook Business ID (with a verified Business if possible)

3. A valid phone number with the ability to receive phone calls or SMS

4. A referral link (supplied by your Software Partner or 360dialog)

5. A callback server (typically provided by your Software Partner)

**The approval procedure includes the following steps:**

## 1. Facebook Business ID

You need to have a Facebook Business ID before you can proceed to the WhatsApp approval process. To find your Business ID, log into the Facebook Business Manager of the business and navigate to Business Settings. The Business Manager ID is displayed under the business name.

If you don’t have a verified Facebook Business account, you need to create a Facebook Business Manager. To create a Business Manager:

1. Go to [business.facebook.com/overview](https://business.facebook.com/overview).

2.  Click Create Account.

3.  Enter a name for your business, your name and work email address and click Next.

4.  Enter your business details and click Submit.

More information about the [creation of the Facebook Business Manager you can find here](https://www.facebook.com/business/help/1710077379203657).

## 2. Message oon Behalf request

After the Facebook Business Manager ID is provided, you will receive a Message on Behalf request. You need to accept it, so 360dialog can send messages on your behalf with your Facebook Business Manager ID.

Please navigate in your Facebook Business Manager Account to Requests > Received to accept the request.

**Only the admin** of the FBM account can see this request and accepted it .

## 3. WhatsApp approval procedure / Verify your Business Client account

Start the process of verifying your business in Facebook Business Manager. This procedure helps to protect users from false information.
Attention: Once you’ve completed the official form with the legal business details, you won’t be able to change them.

* Go to Security Center and click Start Verification. If you haven’t logged in to your Business account, the button will be grayed out.

* Enter your business details, click Next and select your business from the list.

* Select a phone number and confirm details.

* After you received the verification code, click the Submit button.

It can take some time for Facebook to check all the details and approve your Business Verification.

## 4. Phone number, Display Name & Review Process

After the verification is successful, you will be able to add your phone number and the Display Name for your WhatsApp business profile.

During the WhatsApp approval procedure, the WhatsApp team reviews the client’s request according to the WhatsApp Business Policy. You can check the status in the Facebook Business Manager account.

For more information, please read the official WhatsApp API FAQ.

* More information click -> SignalWire Docs(opens new window)
* More information click -> Message Media Docs(opens new window)​

**Add Numbers**
Click "Add Number" in area 3 in the above picture after connecting your provider with AbsolutChat.

![absolutchat-phoneno](/img/phonenodisplay.png)

Click "Find Number", the system will search all the numbers that are under your provider account. Click "Add" to add one of the numbers.

Thereafter, you are able to see all your connected numbers under the "Phone Numbers" page in "Integration".

![absolutchat-phoneno](/img/phonenodisplay2.png)

Add new numbers from the drop-down list as below: ("Buy Number" is disabled at the moment)

![absolutchat-phoneno](/img/phonenodisplay3.png)

:::tip
If you would like to disconnect the WhatsApp / Voice / SMS flow with your number, or create a new flow for that number, copy the number and click "Release Number". Then your flow will be disconnected but stay safe in your "All Bots". Add the number again to create a new flow with it.
:::

After adding phone numbers:

![absolutchat-phoneno](/img/phonenodisplay4.png)

1. use the plus button to create new a flow.
2. button 2 is for "Open Flow" of this phone number.
