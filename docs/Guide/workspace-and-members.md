---
sidebar_position: 3
---

# Workspace and Memebers

As mentioned previously, workspace is to be seen as a team, while members/users are the people working in the team.

:::note
A workspace can have many members, and a member can join many workspaces in different roles.
:::

## Workspace Limitation
Generally, a workspace is designed for one business and it organizes all the resources for the business, such as payment accounts, email sender profiles, products information, etc.
Each workspace has it's own **billing** and limitation on **members**, **bot users** and **bots** amount (fees applied for flexible add-ons).

1 workspace can connect to:

* only 1 **omni** bot (8 channels)

* only 1 **Facebook** account

* only 1 **Google** account for **Google My Business**

* only 1 **Google** account for **Google Sheet**

* only 1 **Google** account for **Gmail**

* only 1 **Google** account for **Dialogflow**

* only 1 **Intercom** account

* only 1 **Stripe** account

* only 1 **PayPal** account

* only 1 **Cloudinary** account

* only 1 **Calendly** account

* only 1 **MongoDB Cloud** account

* only 1 **Twilio** account

* only 1 **SignalWire** account

* only 1 **Message** Media account

* only 1 **SendGrid** account

* only 1 **MailChimp** account

* up to 10 **SMTP** profiles (SMTP email sender)

Moreover, 1 workspace can download each mini-app only once. For example, you download a WooCommerce mini-app and connect your workspace to a WooCommerce account, you are unable to download it again for connecting another WooCommerce account. Unless the app developer design it to be connecting more than 1 account.

:::note Important
You are allowed to connect your workspace to only 1 Facebook/Google(for Google My Business) account but you can create bots for more than 1 Facebook Page / Google Business.
:::

## Connect to Multiple Facebook Pages / Google Businesses
![facebook/whatsapp-business](/img/fbwhatsappbusiness.png)

You can connect to any Facebook Page / Google My Business and create bots for them as long as you are the owner / admin of those pages / businesses.

When you connect to your Facebook account, make sure you select all the pages that require management, and there you go. For example, you wanted to build bots for your clients, simply have your clients invite your Facebook account to be an admin of their Facebook pages.
Same for Google My Business, have your clients invite your Google account to be an admin of their businesses, and then you can build Google bots for them.

### Should I use different workspace for different business?
It's of your choice

## Workspace Settings
### Workspace Profile (Timezone)
![absolutchat-workspace](/img/workspace.png)

To edit the profile of your workspace, click workspace setting and then click on profile in the above screenshot. You can change your logo, workspace name and timezone.

:::tip
The timezone setting of a workspace will affect how your bot process time value. For example, the system value "BOT_CURRENT_TIME" is different when you have different timezone settings. Moreover, system value "NOW" and "TODAY" is based on bot users' timezones, if they don't have a timezone in profile, workspace timezone is used.
:::

## Workspace Management
![absolutchat-workspacemanagement](/img/workspacemanagement.png)

In the upper left corner of your Dashboard, click a workspace name to switch to the workspace. By clicking your Workspace Name and then click View All Workspaces, you will jump to the workspace management page:

![absolutchat-workspacemanagement](/img/workspace2.png)

Here you can see all the workspaces you've joined. As marked in the screenshot, you can:

1. Create new workspaces (the creator of a workspace becomes the owner)

2. Switch to that workspace.

3. If you are not the owner of the workspace, click the yellow arrow to leave the workspace.

4. If you are the owner of the workspace, you will see a red x instead. Click it to delete the workspace.


## API Keys
You can access the "API Keys" page from the top right side in the above screenshot.

![absolutchat-apikeys](/img/apikeys.png)

Select a workspace and a flow to create an API key to access the flow from API calls. [Try our APIs](https://www.absolutchat.app/api) here (opens new window). AbsolutChat is also integrable with many third-party automation services, such as Zapier, etc.

## User Settings (Timezone)

![user-timezone](/img/usertimezone.png)

In the upper right corner, click your username and "Your Settings". Moreover, you can find support links here. For example, try "Quick Tour" to get familiar with your Dashboard!

![user-timezone](/img/usertimezone.png)

:::tip
The timezone setting of AbsolutChat user will affect the time shown in the web portal such as the time shown in the conversation in your Live Chat, Error Logs, etc.
:::

In profile, you can update your photo, username, email address, timezone and time format.

## Members and Roles

![absolutchat-members-and-roles](/img/membersandroles.png)

Each "AbsolutChat account" is to be seen as a person/user. Members are all the people that have limited or full access to the workspace. There are 3 types of roles, **Owner, Admin and Member**.

The first user who creates the workspace becomes the only owner of the workspace.

**Member has very limited access to the account.**

A member can -

* View and edit all flows

* View analytics

**Admin has limited access to the account.**
An admin can -

* Have all features with Member

* Manage channel connections (add numbers, agents, connect pages, etc)

* Manage all integrations

* Manage the ecommerce system

* Manage templates

**Owner has full access to the workspace**
Owner can-

* Have all features with Admin

* Manage workspace profile

* Manage members in the workspace (invite, delete, edit role)

### Invite, Delete & Edit Role of Member

![invite-edit-role](/img/inviteedit.png)

(Owner Only) Follow steps  in the above screenshot to send out an invitation to a new member with email address and role setting.

If the new member is already an AbsolutChat user, he/she can accept the invitation in the AbsolutChat notification center (the bell icon in the upper right corner.)

### Edit Role of Members
(Owner Only) You can assign a role at the time you invite new members, or edit it later on the member page. Click on the gear icon to change the role of a member.