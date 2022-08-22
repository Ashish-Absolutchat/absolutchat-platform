---
sidebar_position: 2
---

# For Developers

## Dynamic Content

### Response format

Response format for sending dynamic messages:

``` 
{   "version": "v1",
"content": {
"messages": [
{
"type": "text",
"text": "simple text"
},
{
...Another messages
}     ],
"actions": [  //optional
{
"action": "add_tag",
"tag_name": "example tag"
},
{
...Another actions
}
],
"quick_replies": [ //optional
{         "type": "node",
"caption": "Quick reply text",
"target": "My Content"
},
{         ...Another quick replies
            }
         ]
     }
  }

```

**Dynamic block API current version `v1` Dynamic block has a limit to have not more than 10 messages in `messages` block, 11 quick replies and 5 actions. The `"buttons"`, `"actions"`, `"quick_replies"` properties are optional.**

## Messages format

### Sending text

Use this response for sending text messages. `url`, `node` and `call` buttons can be used with text message. The `"buttons"`, `"actions"`, `"quick_replies"` properties are optional.

```
{
  "version": "v1",
    "content": {
        "messages": [
      {
      "type": "text",
        "text": "simple text with button",
        "buttons": [
          {
          "type": "url",
            "caption": "External link",
            "url": "https://www.absolutchat.com"
          }
        ]
      }
    ],
    "actions": [],
    "quick_replies": []
  }
}
```
### Sending image

This response is used to send image files. Messenger supports JPG, PNG and GIF images. You can use `url`, `call` and `node` buttons.

The `"buttons"`, `"actions"`, `"quick_replies"` properties are optional.

```
{
  "version": "v1",
  "content": {
    "messages": [
    {
        "type": "image",
        "url": "https://example.comxxxxxxzzzzzzzzz.png",
        "buttons": []
      }
      ],
    "actions": [],
    "quick_replies": []
  }
}
```
### Sending video file

This response is used to send video files. Messenger supports videos, which are up to `25MB` in size. You can use` url`, `call` and `node` buttons.

The `"buttons"`, `"actions"`, `"quick_replies"` properties are optional.

```
{
"version": "v1",
  "content": {
    "messages": [
      {
        "type": "video",
        "url": "https://example.com/xxxxxxzzzzzzzzz.mpg",
        "buttons": []
      }
      ],
    "actions": [],
    "quick_replies": []
  }
}
```
### Sending audio file

This response is used to send audio files. Messenger supports audio, which are up to `25MB` in size. You can use` url`, `call` and `node` buttons.

The `"buttons"`, `"actions"`, `"quick_replies"` properties are optional.

```
{
"version": "v1",
  "content": {
    "messages": [
      {
        "type": "audio",
        "url": "https://example.com/xxxxxxzzzzzzzzz.mp3",
        "buttons": []
        }
    ],
    "actions": [],
    "quick_replies": []
  }
}
```

### Sending files

This response is used to send any other files, which are no larger than `25 MB`.

The `"actions"`, `"quick_replies"` properties are optional.

```
{
"version": "v1",
  "content": {
    "messages": [
      {
        "type": "file",
        "url": "https://example.com/xxxxxxzzzzzzzzz.pdf"
      }
    ],
    "actions": [],
    "quick_replies": []
  }
}
```

### Sending gallery cards

This response is used to send a horizontal scrollable gallery. You can use `url`, `call` and `node` buttons.

The `"action_ur"`, `"buttons"`, `"actions"`, `"quick_replies"` properties are optional.

```
{
"version": "v1",
  "content": {
    "messages": [
      {
        "type": "cards",
        "elements": [
          {
            "title": "Card title",
            "subtitle": "card text",
            "image_url": "https://example.com/xxxxxxzzzzzzzzz.png",
            "action_url": "https://uchat.com.au",
            "buttons": []
          }
          ],
        "image_aspect_ratio": "horizontal"
      }
    ],
    "actions": [],
    "quick_replies": []
  }
}
```

`action_url` - URLs starting with HTTP may not open in some browsers. We strongly suggest to use HTTPS protocol for your URLs.\` image_aspect_ratio` - The aspect ratio used to render cards. You can use `horizontal` or square (default `horizontal`).

## Buttons

You can use buttons with each types: `call`, `url`, `node`.

```
{
"version": "v1",
  "content": {
    "messages": [
      {
        "type": "text",
        "text": "simple text",
        "buttons": [
          {
            "type": "url",
            "caption": "External link",
            "url": "https://uchat.com.au",
          },
          {
            ...Another buttons
          }
        ]
      },
      {
        ...Another messages
      }
    ],
    "actions": [  //optional
      {
        "action": "add_tag",
        "tag_name": "example tag"
      },
      {
        ...Another actions
      }
    ],
    "quick_replies": [ //optional
      {
        "type": "node",
        "caption": "Quick reply text",
        "target": "My Content"
      },
      {
        ...Another quick replies
      }
    ]
  }
}
```

### Call button

```
{
"version": "v1",
  "content": {
    "messages": [
      {
        "type": "text",
        "text": "simple text with button",
        "buttons": [
          {
            "type": "call",
            "caption": "Call me",
            "phone": "+1 (555) 555-55-55"
          }
        ]
      }
      ],
    "actions": [],
    "quick_replies": []
  }
}
```

### Url button

There are 3 options of `webview_size`:

`full `- (100%),

`medium `- (75%),

`compact `- (50%)

The `"webview_size"` property is optional.

```
{
"version": "v1",
  "content": {
    "messages": [
      {
        "type": "text",
        "text": "simple text with button",
        "buttons": [
          {
          "type": "url",
            "caption": "External link",
            "url": "https://absolutchat.com",
            "webview_size": "full"
          }
        ]
      }
    ],
    "actions": [],
    "quick_replies": []
  }
}
```

### Go to node button

```
{
"version": "v1",
  "content": {
    "messages": [
      {
        "type": "text",
        "text": "simple text with button",
        "buttons": [
          {
            "type": "node",
            "caption": "Show",
            "target": "My Content"
          }
        ]
      }
    ],
    "actions": [],
    "quick_replies": []
  }
}
```

`target` key should be linked to a node existing within executed flow. Node name can be found in its header, you need to use unique name for node connected with link. If there are multiple nodes with similar names inside of the same flow, transition behaviour would not meet expectations. Go to node buttons are not supported in Public API.

### Dynamic block callback button

The `"headers"`, `"payload"` properties are optional.

```
{
"version": "v1",
  "content": {
    "messages": [
      {
        "type": "text",
        "text": "simple text with button",
        "buttons": [
          {
            "type": "dynamic_block_callback",
            "caption": "Dynamic content",
            "url": "https://your-service.com/dynamic",
            "method": "post",
            "headers": {
              "x-header": "value"
            },
            "payload": {
              "key": "value"
            }
          }
        ]
      }
    ],
    "actions": [],
    "quick_replies": []
  }
}
```

`dynamic_block_callback` works the same way as dynamic block in a content node, it will send a request to the server upon click, server reply will be sent to user. External server URL must be mentioned with HTTPS protocol.

## Actions format

`actions` property of server response is optional.

### Action add tag

Use this response to add a tag to a subscriber. Tag with the same name must exist in your bot:

```
{
"version": "v1",
  "content": {
    "messages": [
      {
        "type": "text",
        "text": "simple text with button",
        "buttons": [
          {
            "type": "url",
            "caption": "External link",
            "url": "https://uchat.com.au"
          }
        ]
      }
    ],
    "actions": [
      {
        "action": "add_tag",
        "tag_name": "your tag",
      }
    ],
    "quick_replies": []
  }
}
```
Tag name sent using `tag_name` parameter should match one of existing tags within AbsolutChat bot

### Action remove tag

Use this response to remove a tag from a subscriber. Tag with the same name must exist in your bot:

```

"version": "v1",
  "content": {
    "messages": [
      {
        "type": "text",
        "text": "simple text with button",
        "buttons": [
          {
            "type": "url",
            "caption": "External link",
            "url": "https://absolutchat.com"
          }
          ]
      }
    ],
    "actions": [
      {
        "action": "remove_tag",
        "tag_name": "your tag",
      }
    ],
    "quick_replies": []
  }
}
```
### Action set subscriber’s field value

Use this response to set subscriber’s field value. Custom field with the same name must exist in your bot

```
{
"version": "v1",
  "content": {
    "messages": [
      {
      "type": "text",
        "text": "simple text with button",
        "buttons": [
          {
            "type": "url",
            "caption": "External link",
            "url": "https://Absolutchat.com"
          }
        ]
      }
    ],
    "actions": [
      {
        "action": "set_field_value",
        "field_name": "your field name",
        "value": "some value"
      }
    ],
    "quick_replies": []
  }
}
```

Filed name sent using `field_name` should match with name of one of custom fields existing within AbsolutChat bot You need to control data type recorded in custom fields, data type should match type of custom field

Use the following value formats:

* For `Number` field type value should be numeric like `2` or `3.14` not bounded by double quotation marks;

* For `Text` field type value should be transferred as text `"some text"`;

* For `Date` field type value should be transferred as text with date formatted like `YYYY-MM-DD`, i.e. `"2018-03-25"`;

* For `Date Time` field type value should be transferred as text with date formatted in ISO8601 UTC, i.e `"2018-03-25T13:25:00.000Z"`


### Action unset subscriber’s field value

Use this response to unset (clear) subscriber’s field value. Custom field with the same name must exist in your bot

```
{
"version": "v1",
  "content": {
    "messages": [
      {
        "type": "text",
        "text": "simple text with button",
        "buttons": [
          {
            "type": "url",
            "caption": "External link",
            "url": "https://absolutchat.com"
          }
        ]
      }
    ],
    "actions": [
      {
        "action": "unset_field_value",
        "field_name": "your field name"
      }
    ],
    "quick_replies": []
  }
}
```

## Quick replies

`quick_replies` property of server response is optional. Quick replies cannot be used in dynamic block of a content node if there are other blocks exist afterwards. Quick reply description format is the same for buttons, it supports `content`,` node`, `dynamic_block_callback types`.

## Go to node quick reply

```
{
"version": "v1",
  "content": {
    "messages": [
      {
        "type": "text",
        "text": "simple text with button",
        "buttons": [
          {
            "type": "url",
            "caption": "External link",
            "url": "https://absolutchat.com"
          }
        ]
      }
    ],
    "actions": [],
    "quick_replies": [
      {
        "type": "node",
        "caption": "Show",
        "target": "My Content"
      }
    ]
  }
}
```

target key should be linked to a node existing within executed flow. Node name can be found in its header, you need to use unique name for node connected with link. If there are multiple nodes with similar names inside of the same flow, transition behaviour would not meet expectations. Go to node quick replies are not supported in Public API.

### Dynamic block callback quick reply

The `"headers"`, `"payload"` properties are optional.

```
{
"version": "v1",
  "content": {
    "messages": [
      {
        "type": "text",
        "text": "simple text with button",
        "buttons": [
          {
            "type": "url",
            "caption": "External link",
          "url": "https://absolutchat.com"
          }
        ]
      }
    ],
    "actions": [],
    "quick_replies": [
      {
        "type": "dynamic_block_callback",
        "caption": "Dynamic content",
        "url": "https://your-service.com/dynamic",
        "method": "post",
        "headers": {
          "x-header": "value"
        },
        "payload": {
          "key": "value"
        }
      }
    ]
  }
}
```

## Goto

`goto` property of server response is optional.

### Goto Step / Sub Flow

Use this response to goto a step or sub flow:

```
{
"version": "v1",
    "content": {
        "goto": "SOMETHING"
    }
}
```

You can goto:

|Goto|SOMETHING =|e.g.|
|---|---|---|
|A step|step name (unique)|Welcome|
|A step|node_ns|f244n7831|
|A sub flow|sub_flow_ns|f244s1032|

### Get sub_flow_ns

![absolutchat-getsubflow](/img/getsubflow.png)

### Get node_ns

![absolutchat-getnode](/img/getnode.png)

Select a step, click "Copy Ref Url for this step", paste somewhere, then you will see the node_ns of this step:

## Variables

In dynamic block request body, you can use `Full Subscriber Data` variable, that contains all subscriber’s information:

```
{
"id": 13245647xxxxxxxxx,
    "user_ns": "f3245647xxxxxxxxx",
    "page_id": 234564657xxxxxxxx,
    "status": "active",
    "first_name": "Subscriber",
    "last_name": "Lastname",
    "name": "Subscriber Lastname",
    "gender": "male",
    "image": "https://xxxxxxxxx.com/xxxxxx.jpg",
    "locale": "en_US",
    "language": "English",
    "timezone": "UTC-07",
    "last_input_text": "Last subscriber's input text",
    "subscribed": "2018-07-02T00:00:00+00:00",
    "last_interaction": "2018-07-02T00:00:00+00:00",
    "last_seen": "2018-07-02T00:00:00+00:00",
    "custom_fields": {
        "customField": 0.75,
        "customDate": "2018-05-31",
        "customBool": true,
        ...
    }

}
```

## API

Checkout API details in [Swagger API Documentation](https://www.absolutchat.app/api)

AbsolutChat API is used to retrieve data from the flow you build. Here are some examples that you could do with AbsolutChat API.

* Pull the flow you have built from AbsolutChat.

* Create, delete or obtain data including flow tag, flow field.

* Dealing with the data about the subscribers, involving getting the subscribers' information, editing their tag or field as well as the subflow sent to the subscribers.

* Configure all the data used in e-commerce such as carts or products

If you need to deal with the data below, next sections will introduce the steps to use the AbsolutChat API.

## Authorize

Since the protection of the data is important to the API, it needs to use several attributes to authorize your identity. Therefore, the first step you must do is to enter the authorized information. You need to click the **Authorize** button, as the following figure shown.

![absolutchat-authorize](/img/authorize.png)

Then, there are three attributes that you need to fill in the textbox.

![absolutchat-authorize](/img/authorize2.png)

Here are the ways to find these attributes in the following section.

### Generate API Key (http,Bearer)

Step 1 After you login the account in AbsolutChat, in the top right corner, it will show your account name and avatar. Click it and choose Your **Settings** in the dropdown list.

![absolutchat-generateapi](/img/generateapi1.png)

Step 2 Go to the **API Keys Section** by clicking the button in the User Setting. Enter the key name you would like to set and click the **Create button**.

![absolutchat-generateapi](/img/generateapi2.png)

Step 3 Then you will get key in a pop-up window.

![absolutchat-generateapi](/img/generateapi3.png)

:::warning
Here is your new API Key. This is the only time the key will ever be displayed, so be sure not to lose it! You may revoke the key at any time from your API settings.
:::

Close the window, you will get the basic information about the key **except the value of the key**.

### Get the Curl and Request URL

Curl is used in API requests. In AbsolutChat API documentation, you need some operation before getting the curl in the AbsolutChat API documentation.

Here, we use **Get Flow Tag** as an example.

![absolutchat-getcurl](/img/getcurl1.png)

Step 1. Click the expand operation of category, the **Flow Tag** in this case. Then find the action and the feature, **Get /flow/tags**. Click the row and a page will drop down shown as following.

![absolutchat-getcurl](/img/getcurl2.png)

Step 2. This logo means **authorize**. If you have done this before, this step is not required. Or, you just do the same as it was mentioned before in the Authorize section.

Step 3. Click Try it out. Then you will see that the** Parameters or Request body part** could be inputted and the Execute **Button** is shown at the bottom of this part.

![absolutchat-getcurl](/img/getcurl3.png)

Step 4. Enter the parameters or request body required and click the Execute** Button.** Finally, you will get the Curl and **Request URL**.

![absolutchat-getcurl](/img/getcurl4.png)

:::tip
Click the **Clear button** if you need to reset the parameters.
:::

### Responses

This part display the JSON result you will get from the AbsolutChat API. Normally, if the code is 200, it means that you get the response successfully. If the code is 400, it means that there is an error in your response.

![absolutchat-responses](/img/responses.png)

### Example Value / Schema

![absolutchat-exampleschema](/img/exampleschema1.png)

Apart from example value, you can click on "Schema" to view more details like which value is mandatory.

![absolutchat-exampleschema](/img/exampleschema2.png)

## Mini-Apps

:::info
In Progress
:::