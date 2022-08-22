---
sidebar_position: 1
---

import ReactPlayer from 'react-player'

# FlowBuilder Overview

This section will give you an overall idea about how to use the AbsolutChat flow builder. You can open a flow and try side by side when you learn it.

:::note IMPORTANT
Please make sure you go through every detail on this page before you start building bots.
:::

## Flow, Sub Flow and Step

![absolutchat-flowsubflow](/img/flowsubflow.png)

### Flow Type

![absolutchat-flowsubflow](/img/flowtype.png)


### Sub Flow Type

|Subflow|Usage|
|---|---|
|![absolutchat-flowsubflow](/img/subflowfb.png)|general sub flow, varies in flow type|
|![absolutchat-flowsubflow](/img/subflowwf.png)|call / trigger background tasks|
|![absolutchat-flowsubflow](/img/subflowff.png)|process repetitive tasks|

### Step Type

|Step|Usage|
|---|---|
|![absolutchat-flowsubflow](/img/step1.png)|display information|
|![absolutchat-flowsubflow](/img/step2.png)|ask question and wait for user input|
|![absolutchat-flowsubflow](/img/step3.png)|process data and tasks via integrations, APIs, notifications...|
|![absolutchat-flowsubflow](/img/step4.png)|go different steps depend on conditions|
|![absolutchat-flowsubflow](/img/step5.png)|go different steps depend on probability|
|![absolutchat-flowsubflow](/img/step6.png)|send full email instead of short email notification|
|![absolutchat-flowsubflow](/img/step7.png)|jump to a step or sub flow rather than using a line connector|
|![absolutchat-flowsubflow](/img/step8.png)|define output for the function flow|

:::note
The differences among different types of flow are **Flow Setup, Send Message Step** and **Question Step**. Each channel has its own limitation of message types. For example, you can display a product gallery in Facebook Messenger while the SMS channel doesn't support that.
:::

## Publish Version & Draft Version

In AbsolutChat, each flow has a Publish Version and a Draft Version.
* Publish Version

 your bot talk to clients using the publish version.
* Draft Version

 any editing of steps will be saved automatically to the draft version. You can edit your  flow without influencing the bot and test the draft version before you "Publish".

### From Publish Version to Draft Version, 1 way:

![absolutchat-pd-version](/img/pdversion1.png)

* click "Edit Flow" on the upper left/right corner of the flow to enter the draft version

:::note
You must enter Draft Version before you edit a flow.
:::

### From Draft Version to Publish Version, 3 ways:

* click "Publish" to save your draft to a new Publish Version

* discard changes and revert to the newest Publish Version

* keep draft and switch to Publish Version (by doing this, you can have a look at your publish version and when you click edit and come back, your draft is still here)

![absolutchat-pd-version](/img/pdversion2.png)


:::caution NOTE
Don't worry if you accidentally quit during your editing, the system will keep all your modifications in Draft Version. So when you come back, simply enter Draft Version again and you can see your modifications remain intact.
:::

## Navigation Bar, Sidebar & Flow Builder

:::tip
You might want to create a flow first, then open the flow side by side when you read the following instruction (Facebook flow used as an example).
:::

After entering a flow, this is what you will see:

![absolutchat-pd-version](/img/pdversion3.png)


### Navigation Bar

On the top, there is a navigation bar. From left to right there are:

|Part|Usage|
|---|---|
|"AbsolutChat"|current workspace, click to go back to AbsolutChat Dashboard|
|"Retail Order management"|flow type and flow name, click to go back to "All Bots"|
|"Main Flow"|current sub flow|
"Build a bot..."||
"Anki"|current user, click for user settings, support and logout|

### Sidebar

On the left-hand side, there is a sidebar. From top to bottom, there are:

|Section|Usage|
|---|---|
|Flow Builder|Flow Builder|
|Flows|click to view all your sub flows|
|Analytics|bot data analysis|
|Live Chat|inbox for all the conversations, make a human reply here|
|Bot Users|where you manage your users|
|Automation|manage keywords, sequences, triggers and comments|
|Contents|manage custom fields, tags, OTN, personas, user menus and customer feedback|
|Tools|manage error logs, draft version tester, bot admins, widgets, multiple language and shortcuts, Facebook Ads, inbound webhooks|
|Broadcasts|send/manage broadcasts|
|Settings|(owner/admin only) manage bot users limit Facebook greeting text, chat widget customization, icebreakers and authorized websites|

### Flow Builder

![absolutchat-flowbuilder](/img/flowbuilder.png)

Apart from those in the picture, there are a couple of more tips for using the flow builder:

![absolutchat-flowbuilder](/img/flowbuilder2.png)

![absolutchat-flowbuilder](/img/flowbuilder3.png)

![absolutchat-flowbuilder](/img/flowbuilder4.png)

### Change Themes

Before you start, you can pick your favorite theme by clicking "Change Theme":

![absolutchat-changethemes](/img/changethemes1.png)

![absolutchat-changethemes](/img/changethemes2.png)

### Hide Mini-map or Tooltips

![absolutchat-hideminiapps](/img/hideminiapps1.png)

Mini-map is useful when you need to move your workspace in some situations. For example, when you click and drag inside a canvas, you are moving the canvas as a whole instead of everything in the builder:

![absolutchat-hideminiapps](/img/hideminiapps2.png)

You can hide the mini-map by clicking the "Hide Flow Overview" option.

## Basic Operations to Build Flows

### Edit Step:

Click on a step to edit it, "Edit Panel" will show next to the sidebar.

![absolutchat-basicoperations](/img/basicoperations.png)

Click step name to edit it. You can choose the next step at the bottom of the edit panel or drag connectors from the circle to the tile of another step.

### Connect Steps:

![absolutchat-basicoperations](/img/basicoperations2.png)

Create a new step or choose an existing one to be the next step. For dragging connectors, see below:

![absolutchat-basicoperations](/img/basicoperations3.png)

![absolutchat-basicoperations](/img/basicoperations4.png)

:::tip
When you choose an existing next step, a line will be connected from the current step to the next. Too many lines can be messy, get a Goto step to help you organize! In a Goto step, you can nominate the next step without creating a line connector.
:::

### Select Multiple Steps (Move to Canvas/Sub Flow)

<ReactPlayer playing controls url='https://www.youtube.com/watch?v=jJFzy9-1a98' />

Alternatively, ctrl + click them one by one:

<ReactPlayer playing controls url='https://www.youtube.com/watch?v=Hpr8Ijz-qw4' />


The selected step has a green border. After selecting multiple steps, click "Create New Canvas" to organize these steps in a canvas box, or move them to an existing sub flow. To delete multiple steps, hit the "delete" button on your keyboard after choosing several steps:

:::tip
The green start point is the entrance of a sub flow. It can't be moved to other sub flows or deleted even you include it in a group of steps.
:::

That's all about it for Flow Builder Overview!! 🎉 Try building your first flow now. 😎


### Field (Variable)

:::tip
Before the detailed introduction of each step, let's take a look at what is **field(variable)** in AbsolutChat. It might take you a moment but this is essential to know more about the system
:::

Field, aka variable, is a container to hold a value.

|Classification|Description|
|---|---|
|*system* field and *custom* field|system field is created by the system with pre-defined variable name and type, while custom field is defined by yourself|
|*bot* field and *user* fiel|bot field is shared in the whole bot, while each user has his/her own set of user fields|
|*text* field, *number* field, *boolean* field,* date* field, *datetime* field and *JSON* field|"see variable type"|

### User Field

User field belongs to users. For example, each user has their own name and email address. So "name" and "email" are user fields.

### Bot Field

Bot field belongs to the bot. For example, a restaurant bot holds an address and contact number of the restaurant. So "restaurant_address" and "restaurant_contact" should be created as bot fields. Because you don't want to manage different addresses or contacts of your restaurant for every user.

### System Field

System field is created by the system with pre-defined variable name and variable type. There are system bot field and system user field:

Check the table below for how to edit system field:

|Field Name|Field Type|Variable Type|Description|How to edit|
|---|---|---|---|---|
|User Ns|user field|text|user identification in UChat|non-editable|
|User Id*|user field|text|user identification from the channel|non-editable|
|First Name|user field|text|profile info|in Question Step/Action Step|
|Last Name|user field|text|profile info|in Question Step/Action Step|
|User Name|user field|text|profile info|in Action Step|
|Gender|user field|text|profile info|in Action Step|
|Email|user field|text|profile info|in Question Step/Action Step|
|Phone|user field|text|profile info|in Question Step/Action Step|
|Profile Image|user field|text|profile info|in Question Stepp|
|Locale|user field|text|profile info|non-editable|
|Timezone|user field|text|profile info|non-editablep|
|Language|user field|text|profile info|in Action Step|
|Subscribed|user field|datetime|subscribed time|non-editable|
|Last Text Input|user field|text|user's last input|edited by system|
|Last Interaction|user field|datetime|last action time|edited by system|
|Last Button Title|user field|text|last button pressed|edited by system|
|Flow Ns|bot field|text|flow(bot) identification in AbsolutChat|non-editable|
|Sub Flow Ns|bot field|text|sub flow identification in AbsolutChat|non-editable|
|Page Name|bot field|text|connected Facebook page name|non-editable|
|Page Id|bot field|text|connected Facebook page id|connected Facebook page id|non-editable|
|Page User Name|user field|text|user name in the Facebook page|non-editable|
|Last FB Comment|user field|text|user's last comment text in the Facebook page|edit by system|
|Last FB Comment Post Id|user field|text|post id of where user put the last comment|edit by system|
|Last FB Comment total tagged users|user field|number|tagged users amount in last comment|edit by system|
|Last FB Comment total new tagged users|user field|number|tagged but haven't subscribed(to bot) users amount|edit by system|
|Last FB Comment is existing users|user field|number|before this comment, is he/she an existing user? yes=1,no=0|edit by system|
|Live Chat Url|user field|text|(for agent) visit to talk to user in live chat|edit by system|
|**NOW**|user field|datetime|current time in user's timezone*|edited by system|
|**TODAY**|user field|date|current date in user's timezone*|edited by system|
|**BOT_CURRENT_TIME**|bot field|datetime|current datetime in workspace's timezone|edited by system|
|**ITEM**|user field|array (JSON)|each item in a JSON|in "For Each" message|
|**SELECT**|user field|array (JSON)|selected item|in "Select" new step|
|**SHOP**|bot field|array (JSON)|store information|in Ecommerce Integration|
|**CART**|user field|array (JSON)|user shopping cart|in Action Step|
|**ORDER**|user field|array (JSON)|user's last order|edited by system|
|**User**|user field|array (JSON)|user's profile|edited by system according to other profile values|
|**DialogFlow**|user field|array (JSON)|DialogFlow response|edited by DialogFlow agent|

### User Id in Different Channels:

|Channel|Meaning|Example Value|
|---|---|---|
|Facebook|Unique Id in your Facebook page|3055090314593234|
|Telegram|Unique Id in your Telegram bot|1173717756|
|Slack|Unique Id in your Slack workspace|U017MKNENH|
|WeChat|Unique Id in your WeChat account|oNzS3wpEjnA3tXmOcNxpqtAnBwWg|
|WhatsApp|User's phone number|61412345678|
|SMS|User's phone number|+15203456789|
|Voice|User's phone number|+15203456789|
|Google|Conversation Id from Google|8095938e-90cf-4347-ab94-9224308672b0|

:::caution
The unique id from the channel is only unique in your Facebook page, Telegram bot, Slack workspace or WeChat account, not the unique id in the whole Facebook, Slack, etc.
:::

### Variable Type

There are 6 types of variable in AbsolutChat:

|Type|Storage|Example|Operations Supported|
|---|---|---|---|
|Text|letters, words, sentences...|Hi, AbsolutChat.|cutting, change case, encode, decode...|
|Number|numbers|123.45|+ - x ÷, mod, power, log, root, round...|
|Boolean|"either ""1"" or ""0"", for true or false"|1|assign|
|Date|date|2021-03-30|format, add months/weeks/days|
DateTime|date and time|2021-03-30 16:52:00|format, add months/weeks/days/hours/minutes|
JSON (array)|a series of variables|"{""name"":""Jack"", ""age"":""20""}"|load, get, update, remove, count, sum, average, sort, shuffle, reverse...|

#### Boolean Value

:::note 
when you assign "false", "0", "no", null, blank value to a boolean variable, those will all go to "false", and the rest are "true".
:::

### Create Custom Field

Wow, now you are a master 👨‍🎓 of field! Let's try it out! 😎😎
You can create variables in 2 ways:

|Place|Type Supported|
|---|---|
|in Contents section|user field & bot field|
|anywhere you need to map result to variable, e.g. Question step, Integration, etc|user field only|

#### Create Custom Field in Contents Section

![absolutchat-createcustomfield](/img/createcustomfield.png)

1. go "Contents" from the left sidebar

2. select User Fields or Bot Fields

3. use folder to organize your fields if needed

![absolutchat-createcustomfield](/img/createcustomfield2.png)


Click the blue "+ New User/Bot Field" button on the right side to create a field. "Field Name" is a must. You can use any character to separate words like underline or space. We suggest you keep the field name as concise as possible, to avoid any possible display issue.
After that, pick a variable type. Add default value or description if needed. (default value is for bot fields only)
Folders can be used to organize variables. Trust me, you will need it when your flow goes big. 🧐

### Create Custom Field in Question and Action Step

To create new fields in for example, the question step:

![absolutchat-createcustomfield](/img/createcustomfield3.png)

Type in a new variable name in the "Enter Field Name" box and click it in the drop-down list. Select correspond variable type and here you go.

![absolutchat-createcustomfield](/img/createcustomfield4.png)

Another example, create in an integration:

![absolutchat-createcustomfield](/img/createcustomfield5.png)

## Steps

### Send Message Step

After creating your first flow, open it, click "Edit Flow", have your bot side by side and here we go! 😆
Let's take Facebook as an example. Other flows share similar processes where the main difference is message type.

![absolutchat-sendmsgstep](/img/sendmsgstep.png)

A few simple steps to send out your first message:

1. click the green start point

2. in the edit panel, "Select Next Step"

3. choose "Send Message" step

4. click the "Send Message" step

5. click text type message

6. enter your message

7. "Publish"

![absolutchat-sendmsgstep](/img/sendmsgstep2.png)

That's it! Let's test!

![absolutchat-sendmsgstep](/img/sendmsgstep3.png)

Click "Preview" from the navigation bar and "Open the flow in Messenger". Click "Get Started" if it's the fist time you talk to the bot.

![absolutchat-sendmsgstep](/img/sendmsgstep4.png)

Congrats! Your bot is working now. 🤖🤖

Let me show you some more details about Send Message step. These are the message type in common for all/some of the Channels. Check by type below:

### Send Text / Variable

![absolutchat-sendtext](/img/sendtext.png)

AbsolutChat has integrated with Grammarly to help you get your expression perfect.

![absolutchat-sendtext](/img/sendtext2.png)

### Insert Custom Field Value and Emoji

Wherever you see `"</>"`, you can insert emojis or variable values to the text.

<ReactPlayer playing controls url='https://youtu.be/2iO54LMgzrI' />

Or simply type "{{" to call the field list:

### Send Image / Audio / Video / File

There are 4 ways in total:

![absolutchat-sendmedia](/img/sendmedia.png)

* upload from your computer (size limited)

|Media Type|Maximum Upload Size|
|---|---|
|video|10MB|
|audio|5MB|
|file|5MB|
|others(e.g. image)|2MB|

from an URL link (**RECOMMENDED**)

:::note .
You can search pictures online and copy their direct URL links. But this direct link might change. Alternatively, you can upload photos to your server or other third-party photo storages like [imgur.com](http://imgur.com/), then get your direct URL links from that. **Direct URL** link means the link is pointing to a specific photo, not a website, ending with .jpg or .png, etc. Take the link in the above picture for an example.
:::

* search from GIFs gallery

AbsolutChat provides you with a GIFs gallery, you can search what you need here.

* from Library

Library is the place you can see all the photos, GIFs, audios and videos you have uploaded before. So that you don't need to re-upload the same media, just find them in your library.
 
### Send Card

![absolutchat-sendcard](/img/sendcard.png)

Card is used to display a serious of information nicely like product information. There are 4 factors in a card, picture, title, subtitle and button.

:::tip
Please note that to show a card, you must have a title and at least one other factor, picture, subtitle or button.
:::

### Send "For Each"

This message type is also showing cards but in a more automatic way. With "For Each", you don't need to type in each card yourself. It automatically displays all items in a JSON variable. Check Action Step - JSON Operation if you have no idea about what is JSON variable.
This message type is also showing cards but in a more automatic way. With "For Each", you don't need to type in each card yourself. It automatically displays all items in a JSON variable. Check Action Step - JSON Operation if you have no idea about what is JSON variable.

![absolutchat-sendforeacg](/img/sendforeach.png)

1. choose a JSON variable first

2. click `"</>"` or type "{{" in the text box

3.  "ITEM" to get a sample item from the JSON variable

Value in the JSON variable:

![absolutchat-sendforeacg](/img/sendforeach2.png)

Value in "ITEM":

![absolutchat-sendforeacg](/img/sendforeach3.png)

The "Sample data" is to quickly fill in the "JSON Path" field. For example, as shown in the picture, click the "price" row, and "$.price" appears in the "JSON Path" itself. This means that, we are displaying the price of each item here. If there is no sample data prompted, you can fill in the path yourself by typing "$.", which refers to each item in the JSON variable, followed by the key of a value.

#### Value Format

Moreover, for numbers like percentage and price, for date value and time value, AbsolutChat has different formats listed for you. For example, in the above picture, the price value is "5" and after choosing a "F03" format, the bot will display it as "$5". While the value in the variable is still the number "5" so that you are able to use it in math calculation or condition comparison without malfunction

#### Hidden Keys

Great! Now you see how to use the "For Each". Apart from the keys in the JSON variable, there are 3 hidden key you might need:

![absolutchat-sendforeacg](/img/sendforeach4.png)

|Key Name|Description|
|---|---|
|INDEX|index of the item started from 1|
|KEY|key name of the item|
|VALUE|value of the item = the item itself|

**INDEX Example**

When you have a JSON with a list of JSONs in it, use INDEX for checking the sequence number of an item. Let's add an index number before the item name:

![absolutchat-sendforeacg](/img/sendforeach5.png)

**Testing Result**

![absolutchat-sendforeacg](/img/sendforeach6.png)

**KEY/VALUE Example**

When you have a JSON as shown in the following picture instead of a JSON holding a list of JSONs,

![absolutchat-sendforeacg](/img/sendforeach7.png)

These are what you will get by using the three keys:

![absolutchat-sendforeacg](/img/sendforeach8.png)

![absolutchat-sendforeacg](/img/sendforeach9.png)

Testing result:

![absolutchat-sendforeacg](/img/sendcard10.png)

## Send SELECT after "For Each"

When you add a button to your "For Each", the button is going to show with every card. Usually, you might want to put a "Buy" or "Select" button here in the case that you are listing some products or options.

How does the the bot know that which card did the user select?

![absolutchat-sendselect](/img/sendselect.png)

When you select next step for the button, choose "Select":

![absolutchat-sendselect](/img/sendselect2.png)

Then select a next step as you usually do, like a Send Message Step to show the selected item or Action Step to deal with the data. You can then access the selected item in "SELECT":

![absolutchat-sendselect](/img/sendselect3.png)

For example, let's add a Send Message step, find the system field "SELECT":

![absolutchat-sendselect](/img/sendselect4.png)

1. click the row "item" to get the path "$.item" or type in the path directly

2. in the JSON path, add key name if needed. In this case, let's show the name of the selected item. So add ".name" after the path.

![absolutchat-sendselect](/img/sendselect5.png)

![absolutchat-sendselect](/img/sendselect6.png)

You will see this when you test it:

![absolutchat-sendselect](/img/sendselect7.png)

## Send Dynamic Content

Dynamic Content helps you send out an API request, to your server or a third-party server, in order to get a response to display. The server can reply differently each time. In this way, your bot is able to display dynamic content to your users.
This feature is practical when your bot logic is complex and rely heavily on other servers. For example, you have your own AI algorithm to analyze users' questions and calculate corresponding response on your server, in this case, you can send the question in the API request. And the server can generate a response based on the question. Finally, the server send the response back to AbsolutChat to display to your users.

A response message can contain several messages, buttons and quick replies with actions. You can even apply simple actions like add tag directly in the response JSON.

1. Check Action Step - External Request for how to send an API request,

2. and Response Format for message formatting guidance

## Send Location

![absolutchat-sendlocation](/img/sendlocation.png)

To send a location, search it on a map, then right-click it to copy its latitude and longitude values:

![absolutchat-sendlocation](/img/sendlocation2.png)

Enter your location name, paste the data and add a label if needed. A label gives additional information like floor or room number.

![absolutchat-sendlocation](/img/sendlocation3.png)

## Send Ecommerce Product

Check [Ecommerce](https://absolutchat.slite.com/app/docs/CsUe5ax5qgjuBy) for how to setup and use built-in ecommerce system.

## Facebook - Send Message

Facebook allows the bot to send texts with 3 buttons and 10 quick replies at most.

### Send Text with Button & Quick Reply

![absolutchat-fbsendmsg](/img/fbsendmsg.png)

The difference between button and quick reply on Facebook Messenger:

|Type|Usage|
|---|---|
|button|once sent, always in the conversation to be pressed|
|quick reply|similar to button, but disappear when used|

Try to add some buttons, quick replies and test it. You will see their differences.

## Telegram - Send Message
 
Telegram flow is our newly added flow type. It is similar to Facebook flow except for some exclusive features with Facebook. Please check Facebook flow for guidance for now. Text tutorial about Telegram flow will be updated shortly.

## WhatsApp - Send Message

Message types with WhatsApp:

![absolutchat-wasendmsg](/img/wasendmsg.png)

Button in WhatsApp is a bit different from that in Facebook. A button in Facebook can be pressed for multiple times while in WhatsApp, only once.

## SMS - Send Message

SMS bot can send only text and image.

![absolutchat-smssendmsg](/img/smssendmsg.png)

## Voice - Send Message

### Send Text / Audio

![absolutchat-voicesendmsg](/img/voicesendmsg.png)

You can have the bot read out the text with a specified language or record your own audio and upload it.


:::note
For voice bot, you can set a default language at the Green Start Point or set it separately for each send message/question step.
:::

AbsolutChat has built a Mini-App called "VoiceMaker" using a third party API which provides you with a better quality of text-to-voice conversion! Download the Mini-App in integration section. The documentation about "VoiceMaker" is in progress.

## Google My Business - Send Message

Message types with Google my business flow:

![absolutchat-gmbsendmsg](/img/gmbsendmsg.png)

All types are covered above, please check message type in common for all/some of the channels. Find location type in "Rich Media".

## Question Step

![absolutchat-questep](/img/questep.png)

### Set Quick Answers

Quick answers are convenient for users to click rather than typing. When you set quick answer:

![absolutchat-questep](/img/questep2.png)

"Answer Text" is shown to users while "Answer Value" is saved to the variable.

:::tip
You can set quick answers across all channels. However, some channels display the quick answers as buttons for pressing like Facebook, while some don't such as SMS. For the latter case, you can still set quick answers but at the same time, you will need to prompt that how to trigger the quick answers.
:::

### How to give prompt and set quick answers?

In th question box, for example, put "reply 1 for service A, reply 2 for service B", etc. Then in the quick answer, set "Answer Text" to be "1", "2", etc for matching, and "Answer Value" to be "service A", "service B", etc to save user's option.

|Channel|How to Provide Quick Answers|
|---|---|
|Facebook|quick answers will be displayed as buttons|
|Telegram|quick answers will be displayed as buttons|
|WhatsApp|quick answers will show in ""Select Option"""|
|SMS|give prompt|
|Voice|give prompt and use Speech question or DTMF question to ask for keypad/voice input|
|Google|quick answers will be displayed as buttons|

### How does the matching work in quick answers?

![absolutchat-questep](/img/questep3.png)

Once the user's input contains one of the "Answer Text", the quick answer is matched (non case-sensitive). Plus, the order of those quick answers matters because the bot will check in order. Once a quick answer matched, it will stop the matching.

![absolutchat-questep](/img/questep4.png)

### Skip Button

Add skip button if the question is ok to skip. Also, the label of the skip button is editable.

![absolutchat-questep](/img/questep5.png)

"No Match" is a very practical feature because different answer types have different specified patterns. Email address, for example, has to be "xxx@xx.xx". You can put something like "Wrong email, please try again" as your retry message and jump to another step if no match on several times.

However, a "xxx@xx.xx" format just filters out wrong email but fake email. To check whether an email is real or not, try **Mini-App** for using a third-party verification tool.

### No Input

Similarly, "No Input" helps you redirect the flow when user input expires. By default, a question expires in 1 hour. Make it shorter if needed.

![absolutchat-questep](/img/questep6.png)

### Ask for Image / Audio / Video / File / Record

![absolutchat-questep](/img/questep7.png)

:::note
you will need text variables to save the URL links of these 5 types of answers
:::

When the user uploads a document, an URL link pointing to the document is saved in the variable rather than the document itself. Because media document can be very large. Later, if you want to send that document in send message step, you will need to choose "Send Media From URL" and type in the variable there.

![absolutchat-questep](/img/questep8.png)

### Ask for Choice

This is a question type listing limited quick answers and user have to choose only from these quick answers. For example, when choosing property type, list only house, townhouse and apartment as quick answers. Therefore, if the user doesn't click one of these three, a retry message appears.

### Ask for Date / Datetime

:::note
Note that Except from Facebook Messenger and Google My Business, the rest channel doesn't have a date picker when user makes Date/Datetime input. So you have to prompt users "Please input the Date / Datetime as exactly the format: YYYY-MM-DD / YYYY-MM-DD hh:mm:ss". Any other format won't be recognized successfully.
:::

### Ask for Phone

The basic validation for Phone number Question is:

* only these 11 characters are allowed: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, +.

* "+" sign is only allowed in the front of the phone

* more than 6 characters

### Question Step in Voice Bot

![absolutchat-questep](/img/questep9.png)

:::tip
You can always put a URL link pointing to your mp3 file in the text box (started with "https://" and ended with ".mp3" or ".mav") of a Send Message Step or Question Step. In that way, the bot will play the audio file instead of transferring the text to audio.
:::

:::tip
You can put the link directly in the text box or store the link in a text variable. You can also combine audio URL with text when you use it. But remember that don't let the URL and text connect to each other, because the system cannot recognize it as an audio URL link. See screenshot below.
:::

![absolutchat-questep](/img/questep10.png)

## Voice Bot - Ask for Speech

Speech is usually used to get short answers. When the bot asks for speech input, it will listen to what the user says and convert the speech to text with a confidence score. The score is between 0 and 1. The closer to 1, the more confident the speech analysis was.

:::tip
You might want to add a Condition step to discard any conversion with low confidence. For example, when the confidence score is less than 0.7, ask for re-input.
:::

Use "Advanced Settings" to help improve the conversion:

![absolutchat-questep](/img/questep11.png)

Select correspond speech model and language. "Numbers and Commands" speech mode can help improve the recognition rate when the answer is a string of numbers, etc. **Please note that, Twilio charges for using this mode**. More importantly, provide the bot with some hints, keywords that might appear in speech (separated by commas and no space).

## Voice Bot - Ask for DTMF (Keypad)

DTMF refers to keypad input, including number 0 to 9, * and #. Usually, it is used to make a main menu for your voice bot, just like what you might hear before "Hi, press 1 for xxx, press 2 for xxx, ..."

![absolutchat-questep](/img/questep12.png)

:::tip
"Number of Digits" means how many digits to expect. For example, a credit card number needs 14 or 16 digits while a postcode needs 4 or 6 digits.
:::

## Voice Bot - Ask for Record

![absolutchat-questep](/img/questep13.png)

Again, same as asking for picture, audio, video or file, you will need a text variable to save the URL link of the record file. Check advanced settings for more details such as "Stop Key" and "Max Record Duration".

You will be able to access the record file through the URL link or manually from the "Recordings" section shown as below:

![absolutchat-questep](/img/questep14.png)

Here you can see all your "Record Question" and "Transfer" recordings with a "Play" button to play the audio.

## Voice Bot - Ask for Transfer

The transfer feature is more like an Action rather than a Question. Since actions in the Action step are shared across all the channels, we put transfers in Question steps.

![absolutchat-questep](/img/questep15.png)

:::tip
The transfer number should be in E164 format. e.g. +61412345678
:::

You can record the conversation after transferring for training purposes, etc. Similarly, check the recording from the "Recordings" section from the left sidebar.

#### Hang up Calls

One thing to mention, if your clients need to come back to the bot after the transferred conversation. There are 2 ways to do so:

1. the transferred party hang up first

2. your clients press the star key (need to enable the option in advanced settings)

In either way, don't forget to mention it to your clients before the transfer.

#### Add Extension to Phone Number

Add extension to a phone number by using a hash key. e.g. +61412345678#wwww1234. Each "w" will wait for half a second.

Let say I have a voice bot for the number +61412345678, and I put a DTMF question after the Start point of the main flow. The extension "1234" will be considered as the input for this DTMF question. In this way, you are routing the calls automatically.

#### Transfer to Multiple Numbers

You can put multiple numbers in the "Transfer To Phone Number" field, separated by ONLY commas. e.g. +61412345678,+61412345679#wwww1234,+61412345670

The bot will call these 3 numbers simultaneously, the first person who answers the call get this transfer, the rest call stops ringing. Your phone number provider will only charge you for one call because only one number is transferred successfully.

### Voice Bot - Ask for Payment

The payment feature is more like an Action rather than a Question.

![absolutchat-questep](/img/questep16.png)

![absolutchat-questep](/img/questep17.png)


#### PCI Mode (Twilio)

For Twilio users, you will need to enable the PCI mode in your Twilio account to capture a payment either in test or live mode.

Search "Voice Settings" from your account,

![absolutchat-questep](/img/questep18.png)

click the "Enable" button:

![absolutchat-questep](/img/questep19.png)

#### Edit Prompts

All prompts are already set in English. Feel free to change it if needed like changing to another language. There are 4 pieces of information to gather for a card.

1. credit card number

2. expiration date

3. CVV

4. ostcode (if needed, enable the option in advanced settings).

Each information has 3 speeches to set, asking, timeout and invalid:

![absolutchat-questep](/img/questep20.png)

#### Payment Connector

:::info
In progress
:::

## Action Step - Variable Operation

AbsolutChat provides you with various built-in operations for variable modification.

There are 6 types of variable in AbsolutChat:

|Type	Storage	Example	Operation|
|---|---|---|---|
|Text|letters, words, sentences...|Hi, AbsolutChat.|cutting, change case, encode, decode...|
|Number|number|123.45|+ - x ÷, mod, power, log, root, round...|
|Boolean|"either ""yes"" or ""no"""|yes|assign|
|Date|date|2021-03-30|format, add months/weeks/days|
|DateTime|date and time|2021-03-30 16:52:00|format, add months/weeks/days/hours/minutes|
|JSON|a series of variables|"{""name"":""jack"", ""age"":""10""}"|load, get, update, remove, count, sum, average, sort, shuffle, reverse...|

![absolutchat-actionstep](/img/actionstep.png)

Click "Flow Actions" in the Action step and here are the "Set Variable Value" and "Clear Variable Value"

### input value

"input value" operation is used to assign value to a variable. This operation works for any variable type.

:::info
"input value" for text variable can be used to connect several text variables.
:::

See the below picture for where to put original value and operated value.

![absolutchat-actionstep](/img/actionstep2.png)

## Set Text Variable


### trim text

|Description|e.g. Before|e.g. After|
|---|---|---|
|remove spaces before or after the text|""" abc """|"""abc"""|

![absolutchat-actionstep](/img/actionstep3.png)

### sub string

|Description|e.g. Before|e.g. After|
|---|---|---|
|get part of the text|"""Hi, AbsolutChat!"""|"""AbsolutChat"""|

![absolutchat-actionstep](/img/actionstep4.png)

:::note
Index starts from 0. Every character counts including space and punctuation.
:::

### replace string / replace string case sensitive

|Description|e.g. Before|e.g. After|
|---|---|---|
|replace part of the text|"""Hi, AbsolutChat!"""|"""Hello, AbsolutChat!"""|

![absolutchat-actionstep](/img/actionstep5.png)

:::note
In case sensitive situation, you have to put exactly "Hi" rather than "hi", "HI" or "hI".
:::

![absolutchat-actionstep](/img/actionstep6.png)

### to lower / upper case

|Type|e.g. Before|e.g. After|
|---|---|---|
|to lower case|"""Hi, AbsolutChat!"""|"""hi, absolurchat!"""|
|to upper case|"""Hi, AbsolutChat!"""|"""HI, ABSOLUTCHAT!"""|

![absolutchat-actionstep](/img/actionstep7.png)

### generate random text

|Description|e.g. Before|e.g. After|
|---|---|---|
|as the name|"""code: XXXX-####-xxxx"""|"""code: UBWT-3657-lkzb"""|

![absolutchat-actionstep](/img/actionstep7.png)

This feature is useful when you need to generate one-time verification code or reference code.

### to URL friendly slug

|Description|e.g. Before|e.g. After|
|---|---|---|
|replace spaces with hyphens and remove the rest signs|"""it's a good day"""|"""its-a-good-day"""|

![absolutchat-actionstep](/img/actionstep8.png)

### get text before/after ...

Description: get part of the text.

|Type|e.g. Before|e.g. After|
|---|---|---|
|get text before another text|name: AbsolutChat, city: Melbourne|name|
|get text before last occur of another text|name: AbsolutChat, city: Gurgaon|name: AbsolutChat, city|
|get text after another text|name: AbsolutChat, city: Gurgaon|AbsolutChat, city: Gurgaon|
|get text after last occur of another text|name: AbsolutChat, city: Gurgaon|Gurgaon|

![absolutchat-actionstep](/img/actionstep9.png)

## Set Number Variable

### get text length

|Description|e.g. Before|e.g. After|
|---|---|---|
|as the name|500.59|6|

![absolutchat-actionstep](/img/actionstep10.png)

### generate random number

|Description|e.g. Before|e.g. After|
|---|---|---|
|as the name|n/a|56|

![absolutchat-actionstep](/img/actionstep11.png)

### add / subtract / multiply / divide / modulus / power / natural logarithm / square root

|Description|e.g. Before|e.g. After|
|---|---|---|
|as the name|7|8|

![absolutchat-actionstep](/img/actionstep12.png)

:::tip
in "natural logarithm", when you are calculating log2(8) = ? put 8 as "Value" and 2 as "Number".
:::

### round

|Description|e.g. Before|e.g. After|
|---|---|---|
|as the name|7.8693|7.87|

![absolutchat-actionstep](/img/actionstep13.png)

### floor / ceil

Description: get approximate integer.


|Type|e.g. Before|e.g. After|
|---|---|---|
|floor|6.55|6|
|ceil|6.55|7|

![absolutchat-actionstep](/img/actionstep14.png)

## Set DateTime Variable

### from formatted text

|Description|e.g. Before|e.g. After|
|---|---|---|
|get DataTime value from formatted tex|	00:00:00 30th Aug, 2020|2020 08-30 00:00:00|

![absolutchat-actionstep](/img/actionstep15.png)

## add minutes / hours / days / weeks / months

|Description|e.g. Before|e.g. After|
|as the name|2021-01-01 00:00:00|2021-01-01 00:01:00|

![absolutchat-actionstep](/img/actionstep16.png)

## Action Step - JSON Operation

JSON is also a type of variable. It is used to store and manage a series of variables including normal varialbe and JSON variable.

For example, this is a JSON storing a customer's detail:

![absolutchat-actionstep](/img/actionstep17.png)

Check this tutorial video (opens new window)about how to write JSON variable.

![absolutchat-actionstep](/img/actionstep18.png)

The "JSON Operation" is sitting in the "Flow Actions" list of the Action step.

:::tip
Various examples have been already embedded in the operation. Select an operation and use the "Examples" button to explore it!
:::

![absolutchat-actionstep](/img/actionstep19.png)

## Action Step - External Request

With external request, you can call APIs from third-parties or your own server to request data, submit forms and etc.

![absolutchat-actionstep](/img/actionstep20.png)

In an Action step, choose "External Request" and click "Add your request" then you will see this:

![absolutchat-actionstep](/img/actionstep21.png)

1. choose your request type such as GET, POST, etc

2. paste your request URL

3. adjust "Headers" or "Body" section if needed. e.g. setup API key

4. click "Test", then area 5 will show in the "Response" section with a response code.

5. 200 means success and your data show in blue.

6. choose which part of the data you need by clicking the circle

7. after clicking area 6, JSON path for the picked data automatically show here. $ means the whole JSON.

8. choose which custom field to store the data. The type of custom field should match the type of data. Click "Add".

9. finally, the mapping show at area 9. Add as many mapping as needed and click "Save".

## Action Step - Send Notification

This action allows your bot to send notification through various channels, including

* Email

* Slack

* SMS

* Phone Call

![absolutchat-actionstep](/img/actionstep22.png)

It's all in the "Notification" of your Action step.

## Email Notification

To send an email notification, you will need to setup your email integration first. Check **how to setup email** integration?

![absolutchat-actionstep](/img/actionstep23.png)

Unlike "Send Email" step, email notification only supports text message type. Check "Send Email" step in "Email Integration" page if you need more message types like images, buttons, files, etc.

Put the sender's address at "Email Profile" and the receiver's address at "To Email".

## Slack Notification

Similarly, to send a slack notification, you will need to setup your slack integration first. Check **how to setup slack** integration?

![absolutchat-actionstep](/img/actionstep24.png)

In the pop-up window,

1. choose a Webhook

2. choose a default channel or name another one

3. pick a message type, add as many as needed

4. for example, "Section" type, put your message at area 4 and add photo or field value if needed

5. use the "Test" button to send the message for test and adjust accordingly

6. once finished, click "Save"

## SMS Notification

Setup a sender number before you make a SMS notification. Check how to add phone number?

![absolutchat-actionstep](/img/actionstep25.png)

You can use the "generate random text" operation with text variable to get a random security code and send out for verification purpose shown in the pictures.

![absolutchat-actionstep](/img/actionstep26.png)

Choose a sender and receiver, put message and here you go!

## Phone Call

Same as SMS notification, a phone number is needed to make a phone call. Check how to add phone number?

Moreover, you must make a voice flow connected to this phone number otherwise your voice bot don't know what to say.

![absolutchat-actionstep](/img/actionstep27.png)

:::tip
"Ref payload" is for more sophisticated features like transfering data from the current flow to the voice flow. It is still under testing, will be updated shortly.
:::

## Action Step - Smart Delay

Select action step, then select Advanced action & click on smart delay.

## Action Step - JavaScript Function

:::info
In Progress,for more informaiton contact us at [support@absolutchat.com](mailto:support@absolutchat.com)
:::

## Condition Step

![absolutchat-conditionstep](/img/conditionstep.png)

With Condition step, you can go to different steps/sub flows depends on conditions.

In your Condition step, click on "+ Add Condition Group" to set at least one condition group. "Otherwise" group is always there.

You can make as many condition groups as you need. The matching start from the top to the bottom, once a group matched, the system goes to a named step. When it fails to match all condition group, the "Otherwise" group will take over it. So it's always a good practice to name a step in the "Otherwise" group even it is very unlikely to be used.

![absolutchat-conditionstep](/img/conditionstep2.png)

Another important thing to know is the difference between "All conditions" and "Any conditions". It is sitting at the upper right corner of each condition group.

You can list more than 1 condition in a condition group. When you do, it matters whether you choose "All" or "Any".

"All Condition" means to get this group matched, you will need to have all the conditions matched in the group.

![absolutchat-conditionstep](/img/conditionstep3.png)

However, to get a group with "Any Condition" matched, you only need to have one of the conditions matched.

![absolutchat-conditionstep](/img/conditionstep3.png)

### Tag & Sequence Condition

![absolutchat-conditionstep](/img/conditionstep4.png)

For tag and sequence condition, you can choose "in" or "not in" from the "Operator". Choosing multiple tags/sequences is allowed.

### Text Variable Condition

![absolutchat-conditionstep](/img/conditionstep5.png)

These are all the operators for text condition.
For **"has any value"** and **"is empty"** of all variable types, when you clear a variable, the variable becomes empty. Thus, "has any value" is false and "is empty" is true for this variable.

### Number Variable Condition

![absolutchat-conditionstep](/img/conditionstep6.png)

These are all the operators for number condition.

### DateTime Variable Condition

![absolutchat-conditionstep](/img/conditionstep7.png)

![absolutchat-conditionstep](/img/conditionstep8.png)

These are all the operators for DateTime condition.

Note that you will need to put "value" always as the correct format "yyyy-MM-dd HH:mm:ss" no matter which displayed format you choose for that variable.

### JSON Variable Condition

![absolutchat-conditionstep](/img/conditionstep9.png)

These are all the operators for JSON condition.

:::note
The very last 3 operators, "has item matched with ...", require the JSON to be a list of variables, not a list of JSON. In other words, if your JSON is storing a list of normal variables, these 3 operators work. They won't work for a JSON storing a list of JSON.
:::

## Split Step

With Split step, you can go to different steps/flows depends on probability.

Split step can be used to build many interesting functions, like

* changing speeches rather than same responses all the time

* testing your new functions with just a small group of clients to get feedback

* or making a fun lottery!

![absolutchat-splitstep](/img/splitstep.png)

In your Split step,

1. click "+ New Variation", add more than 2 variations
2. change variation title if needed
3. adjust weights as you want
    * directly put percentage numbers like 30 and 70 then you will get 30% and 70%
    * alternatively, put weights like 1 and 2 and let the system calculates the percentages 33% and 67% for you
4. select next steps for each variation
5. save the picked variation for later use if needed

### Usage Examples

![absolutchat-splitstep](/img/splitstep2.png)

Testing new Functions & Get Feedback:

![absolutchat-splitstep](/img/splitstep3.png)

Fun Lottery:

![absolutchat-splitstep](/img/splitstep4.png)

## Goto Step

"Goto Step" helps you jump to another step in the current subflow or jump to the start point of another subflow.

![absolutchat-gotostep](/img/gotostep.png)

Create new subflow directly, or choose an existing one. You can only jump to a step in the current subflow.

![absolutchat-gotostep](/img/gotostep2.png)

Before:

![absolutchat-gotostep](/img/gotostep3.png)

After:

![absolutchat-gotostep](/img/gotostep4.png)

## Canvas

Canvas helps with step organization.

We've learned that to move the workspace, click and drag the workspace. For selecting multiple steps, it's a bit similar. Click but hold a second, then drag a pink rectangle to cover the steps you would like to select:

![absolutchat-canvas](/img/canvas.png)

Alternatively, ctrl + click them one by one:

![absolutchat-canvas](/img/canvas2.png)

:::tip
If the edit panel didn't show, ctrl + click one of the green steps twice to de-select it and re-select it again. The panel should show.
:::

After selecting multiple steps, click "Create New Canvas" to organize these steps in a canvas box.

![absolutchat-canvas](/img/canvas3.png)

Click the title of the canvas to edit canvas's title or add a description. Minimize the canvas by clicking the "-" button on the left side of the canvas title.

:::note
You will need to select at least 2 steps to create a canvas or move them to other sub flows. So if you have only 1 step to move or put in a canvas, try adding a temporary step to help and discard it after that.
:::

Finally, to add and remove steps from an existing canvas, simply select a step or multiple steps, then drag them into or out of the canvas:

![absolutchat-canvas](/img/canvas4.png)

When you move steps into the canvas, the background color of the canvas changes, release steps when it turns grey from white.

## Sub Flow

Same as "Canvas", "Sub Flow" can also help with step organization. "Canvas" organizes steps in a sub flow while "Sub Flow" organizes steps in the whole flow.

### Switch among Sub Flows

At the top navigation bar, click the current sub flow name:

![absolutchat-subflow](/img/subflow.png)

Click on a sub flow like area 2 to switch to that sub flow.

### Create Sub Flow

![absolutchat-subflow](/img/subflow2.png)

Click "+ New Sub Flow", choose a flow type and give a name.

![absolutchat-subflow](/img/subflow3.png)

Or click the dot for more operations.

Use "Folder" to organize your sub flows if needed.

### Move Steps to Sub Flow

We've learned that to move the workspace, click and drag the workspace. For selecting multiple steps, it's a bit similar. Click but hold a second, then drag a pink rectangle to cover the steps you would like to select:

![absolutchat-subflow](/img/subflow4.png)

Alternatively, ctrl + click them one by one:

![absolutchat-subflow](/img/subflow5.png)

:::tip
If the edit panel didn't show, ctrl + click one of the green steps twice to de-select it and re-select it again. The panel should show.
:::

After selecting multiple steps, "Select sub flow", then click "Move to sub flow"

:::note
You will need to select at least 2 steps to create a canvas or move them to other sub flows. So if you have only 1 step to move or put in a canvas, try adding a temporary step to help and discard it after that.
:::

![absolutchat-subflow](/img/subflow6.png)

:::warning
If you find yourself unable to click "Move to sub flow" after choosing a sub flow, you might include the green start point in your selection. Because the green start point of any sub flow can't be moved to other sub flows. You can solve this issue by de-selecting the green start point.
:::

### Use Sub Flow

After creating sub flows, you can then

* have Goto steps jumping to them.

* send them via "Keyword"

* send them via "Sequence"

* send them via "Broadcast"

* send them via a link: "Facebook Widget"

### Workflow & Function Flow

:::info
In Progress
:::

## Live Chat

:::info
In Progress
:::

### Bot User

#### Users

:::info
In Progress
:::

### Automation

#### Keywords

With "Keyword", your users can easily jump to sub flows by typing in keywords rather than being lost in menus or buttons.

![absolutchat-subflow](/img/subflow7.png)

1. go "Automation" from the sidebar

2. click "Keywords"

3. for "default reply", see explaination below

4. click "+ New Keyword"

5. choose a condition from "is", "contains" or "starts with"

6. put one or more than one keyword, separated by only commas, no space allowed

7. choose a sub flow to send

### Default Reply

"Default Reply" is sent when the bot doesn't know what to reply. When the active button is off or no sub flow was chosen for "Default Reply", the main flow will be sent.

:::note
So when you build and test flows, you can reply anything to quickly re-start the conversation.
:::

You can also adjust the frequency to send "Default Reply". Its default value is set to fire "Every Time".

## Advanced Default Reply

* Want to have a smarter bot?

* Want to reply a sentence rather than a sub flow?

* Want your bot to understand more human languages rather than just keywords?

Try Google Dialogflow Integration! Check how to setup Dialogflow

## Sequences

Use sequences to automatically send follow up / delay messages to customers. You can send multiple messages with different delays.

### Create Sequence

![absolutchat-sequences](/img/sequences.png)

Follow steps 1 to 3 and you will see this:

![absolutchat-sequences](/img/sequences2.png)

5 steps to create a sequence:

1. give a sequence name
2. click "Add Message"
3. edit the settings (see **Message Settings** below)
4. choose the sub flow to send
5. repeat steps 2-4 to add more messages then click "Save"

## Message Settings

This is how does the setting window look like:

![absolutchat-sequences](/img/sequences3.png)

### 1. The countdown to send the message
* Messages are sent by order.

* For the first message, the countdown begins when users subscribed to the sequence.

* For other messages, the countdown begins when the previous message is sent.

### 2. Send anytime or between a time range
* For "send anytime", the message will be sent immediately at the end of the countdown.

* For "send between", if the countdown ends outside the time range, the message will be kept until the next available time.

* Remember to check the timezone issue below.

e.g. You don't want to bother users at night so you set a message to send between 9 am and 6 pm. If there is a message that should be sent at 8 pm, the system will hold the message until 9 am tomorrow.

This can affect the next message because the countdown of the next message begins when the previous one is sent.

### 3. Send on which days of the week

* Similarly, if you don't want to bother users at weekend, deselect Saturday and Sunday. See the example in the "send between" above.

* Remember to check the timezone issue below.

### 4. Choose corresponding content type (IMPORTANT)

* See "Content Type" introduction below.

* If you are not sure about which type you should use, keep it default. Although the message might not be sent due to the 24 hours rule, the system will at least help you avoid being banned by Facebook.

### 5. Pick a notification type

**About Timezone**

If a channel has a timezone in the user's profile like Facebook, when the system check "send between time range" and "send on Monday to Sunday" settings, it's based on users' timezone first. If the user doesn't have a timezone or the channel doesn't support timezone in user profiles, then it's based on the timezone of the workspace.

## Content Type

Any message sent over 24 hours after a subscriber’s last interaction must have a content type that matches its purpose (in accordance with [Facebook Policy- Message Tags(opens new window)](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags/)

Messages with type “Other” or without a content type will NOT be delivered to subscribers who interacted with you via Messenger more than 24 hours ago.

:::warning Note
Sending messages that do not match the assigned content type may result in your page being suspended or banned by Facebook.
:::

### Default / Other

Can contain promotions and it will only send to users who interacted with your bot in the last 24 hours.Can contain promotions and it will only send to users who interacted with your bot in the last 24 hours.

### Confirmed Event Update

Send the user reminders or updates for an event they have registered for (e.g., RSVP'ed, purchased tickets). This tag may be used for upcoming events and events in progress.

### Post Purchased Update

Notify the user of an update on a recent purchase such as confirmation of transactions(invoice, receipt) and notifications of shipment status(product in-transit, shipped, delivered, delayed).

### Account Update

Notify the user of a non-recurring change to their application or account.

## Send Multiple Messages

![absolutchat-sequences](/img/sequences4.png)

When you send more than 1 message in your sequence, note that all the messages are sent in order.

In the above screenshot, for example, the "Booked" sub flow will be sent "Immediately" once the user subscribes to this "Appointment Follow Up" sequence. Because the first message begins the count down once the user subscribes.

The next message begins the count down once the previous is sent. Thus, the "Appointment Follow Up" sub flow will be sent 1 day after the "Booked" sub flow is sent.

## Send Sub Flow

Make some sub flows to send specifically for your sequences. Please note that each Send Message step has its own "Message Tag". The tag is set to "Other" by default.

Let's say, now it is over 24 hours since the user last interacted with your bot. You choose a non-default content type for a message in your sequence. This setting automatically changes the message tag of the first Send Message step in the sub flow you send.

Later, if the user responds, you are then able to send messages normally with the "default" content type. So, usually, you won't need to change any message tag in your sub flow.

### Subscribe / Unsubscribe Sequence

![absolutchat-sequences](/img/sequences5.png)

Go "Flow Actions", and you can find the 2 sequence operations.

There are a couple of examples to use sequence, such as

* "Event Follow Up" - send confirm message immediately once user registers and follow-up message as reminder or helper

* "Get Feedback" - ask for feedback like 2 hours after the user talked to your bot

* "Send Coupon" - send coupons when user put something in the cart but doesn't make an order for a long time.

## Triggers

:::info
he document is in Progress, for guidance. Should you have any query, please feel free to contact us via the AbsolutChat at [Support@absolutchat.com](mailto:support@absolutchat.com)
:::

## Contents

### Custom Fields

:::info
The document is still in progress, Please check "Question Step" for guidance. Should you have any query, please feel free to contact us via [Support@absolutchat.com](mailto:support@absolutchat.com)
:::

## Tags

Tag a user by user's type, situation, status, etc for better management.

### Create Tag

In your workspace, go "Tags" from the left sidebar.

![absolutchat-tags](/img/tags.png)

Here is where you manage your tags.

:::tip
You can also create tag by just typing in a new tag name and click it wherever you add tag.
:::

![absolutchat-tags](/img/tags2.png)

### Add / Remove Tag

In the Action step, click "Flow Actions", then you can see "Add Tag" and "Remove Tag" options.

### Use Tag in Condition Step

Use condition step to help you Guide users with different tags to different steps.

![absolutchat-tags](/img/tags3.png)

### Use Tag in Live Chat

You can also manually add / remove / check tag for each user in "Live Chat" from the left sidebar.

![absolutchat-tags](/img/tags4.png)

## OTN - One Time Notification (Facebook)

:::info
he document is in Progress, for guidance. Should you have any query, please feel free to contact us via the AbsolutChat at [Support@absolutchat.com](mailto:support@absolutchat.com)
:::

## Personas

:::info
he document is in Progress, for guidance. Should you have any query, please feel free to contact us via the AbsolutChat at [Support@absolutchat.com](mailto:support@absolutchat.com)
:::

## User Menus

![absolutchat-usermenus](/img/usermenu.png)

For Facebook bots, you can have a persistent menu with 3 buttons at most. To setup:

1. go "Tools" from the left sidebar

2. click "Persistent Menus"

3. "Edit Menu"

4. "+ Add Menu"

5. give menu title

6. select a menu type, "Goto sub flow", "Open website" or "Open checkout page"

7. choose a sub flow or name a website address

![absolutchat-usermenus](/img/usermenu2.png)

:::info
The document is still in progress....
:::

## Customer Feedback (Facebook)

:::info
The document is still in progress....
:::

## Tools

### Error Logs

:::info
The document is in Progress, for guidance. Should you have any query, please feel free to contact us via the AbsolutChat at [Support@absolutchat.com](mailto:support@absolutchat.com)
:::

## Testers

:::info
The document is in Progress, for guidance. Should you have any query, please feel free to contact us via the AbsolutChat at [Support@absolutchat.com](mailto:support@absolutchat.com)
:::

## Admins

:::info
The document is in Progress, for guidance. Should you have any query, please feel free to contact us via the AbsolutChat at [Support@absolutchat.com](mailto:support@absolutchat.com)
:::

## Widgets

![absolutchat-widgets](/img/widgets.png)

For Facebook bots, you can set some widgets to quickly start talking to the bot. To setup:

1. go "Tools" from the left sidebar

2. click "Widgets"

3. "+ New Widget"

### Messenger Ref URL Widget

![absolutchat-widgets](/img/widgets2.png)

1. put a widget name

2. choose a sub flow the link goes to

(leave 3 and 4 blank if no reference is needed)

3. put a parameter name

4. assign a custom user field

What does the Ref parameter do?

For instance, you make a messenger ref URL to your main flow, so that by visiting this URL, your users can start talking to your bot.

However, you would like to gather more information from the link, like where did your users get the link? In this case, you can put "source" in area 3 and a variable to store the source at area 4 in the above picture.

Later, add a source name in your link according to where do you put it. This is how you get extra information from the link.

After filling in all the information, click "Save" and click the pencil to edit this widget, you will see a unique URL generated for this widget:

![absolutchat-widgets](/img/widgets3.png)

### QR Code Widget

URL links are convenient to click via electronic way while QR codes are more suitable for on-site use. By scanning a QR code, your users can start talking to your bot.

![absolutchat-widgets](/img/widgets4.png)

To setup:

1. give a widget name
2. select a sub flow
3. upload your logo image
4. adjust image size if needed
5. adjust color if needed
6. adjust dot scale if needed
7. click "Generate" to get an image on the right. Repeat step 4, 5 and 6 to get a final image
8. download your QR code, print it and put it in your store, restaurant, office, etc

### Customer Chat Widget

![absolutchat-widgets](/img/widgets5.png)

This widget is to be embedded on your website, so that your website can have a bot serving users:

To setup:

1. give a widget name

2. select a sub flow

3. adjust theme color if needed

4. adjust greeting message which will be shown above the "Continue as xx" button (see in the previous picture).

5. select a display type

6. adjust the delay if the second or the third display type is selected

7. for payload, see explanation in Messenger Ref URL above.

Click "Save" after finishing all the settings, again, click the pencil to edit this widget and you will see this button:

![absolutchat-widgets](/img/widgets6.png)

Click it.

![absolutchat-widgets](/img/widgets7.png)

Add the websites that you want to put this bot at. Then install the snippet by copying and pasting the code.
Perfect! 😎 You got a bot on your website now.

## Multiple Languages

:::info
The document is in Progress, for guidance. Should you have any query, please feel free to contact us via the AbsolutChat at [Support@absolutchat.com](mailto:support@absolutchat.com)
:::

## Shortcuts

:::info
The document is in Progress, for guidance. Should you have any query, please feel free to contact us via the AbsolutChat at [Support@absolutchat.com](mailto:support@absolutchat.com)
:::

## Facebook Ads

:::info
The document is in Progress, for guidance. Should you have any query, please feel free to contact us via the AbsolutChat at [Support@absolutchat.com](mailto:support@absolutchat.com)
:::

## Inbound Webhooks

:::info
The document is in Progress, for guidance. Should you have any query, please feel free to contact us via the AbsolutChat at [Support@absolutchat.com](mailto:support@absolutchat.com)
:::

## Broadcasts

Use this feature to broadcast messages to your users! Just a few settings needed.

![absolutchat-broadcast](/img/broadcast.png)

Go "Broadcasts" from the left sidebar, then click "+ New Broadcast".

![absolutchat-broadcast](/img/broadcast2.png)

To setup:

1. give a broadcast title (for yourself, not users)

2. select a sub flow

3. add conditions to filter who will receive this broadcast message

![absolutchat-broadcast](/img/broadcast3.png)

:::note
to send to all users, try this condition "If User Id has any value".
:::

![absolutchat-broadcast](/img/broadcast4.png)

Filling in the rest settings like message type and time to send then click "Save". (Which message type should I choose?)

If you choose "Now" for the schedule, the message will be sent once you click "Save". If not, you can cancel the broadcast anytime before it sent.

![absolutchat-broadcast](/img/broadcast5.png)

Here is also where you check broadcast history and data.

## Setting

Greeting text will be shown before users' interaction.

To setup:

![absolutchat-settings](/img/settingflow.png)

Click "Settings" from the left sidebar, put your greeting text and click "Save". That's it!

:::note
Only the owner of this account can see the "Settings" option.
:::