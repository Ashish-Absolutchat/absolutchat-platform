// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to AbsolutChat',
  tagline: 'Believe it or not Chatbots are cool!',
  url: 'https://Absolutchat-Technology-Pvt-Ltd.github.io',
  baseUrl: '/absolutchat-platform/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/absolutchatfavicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Absolutchat-Technology-Pvt-Ltd', // Usually your GitHub org/user name.
  projectName: 'absolutchat-platform', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Help Center',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logoblack.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Guide/introduction-registration',
            position: 'left',
            label: 'Guide',
          },
          // {to: '/docs/Channels/omnichannel', label: 'Channels', position: 'left'},
          {type: 'dropdown',
          position: 'left',
          label: 'Channels',
          items: [
            {
              type: 'doc',
              label: 'Omni Channel',
              docId: 'Channels/omnichannel'
            },
            {to: '/docs/Channels/whatsappchannel', label: 'WhatsApp Channel'},
            {to: '/docs/Channels/whatsappcloud', label: 'WhatsApp Cloud API Channel'},
            {to: '/docs/Channels/facebookchannel', label: 'Facebook Channel'},
            {to: '/docs/Channels/instagramchannel', label: 'Instagram Channel'},
            {to: '/docs/Channels/telegramchannel', label: 'Telegram Channel'},
            {to: '/docs/Channels/gmgchannel', label: 'Google My Business Channel'},
            {to: '/docs/Channels/slackchannel', label: 'Slack Channel'},
          ],
      },
          {to: '/docs/Dashboard/setup-createbots', label: 'Dashboard', position: 'left'},
          {to: '/docs/Flowbuilder/flowbuilder-overview', label: 'Flow Builder', position: 'left'},
          {to: '/docs/Dashboard/integrations', label: 'Integration', position: 'left'},
          {to: '/docs/Dashboard/ecommerce', label: 'Ecommerce', position: 'left'},
          {to: '/docs/Flowbuilder/for-developers', label: 'For Developers', position: 'left'},
          {to: '/docs/FAQ/faq-intro', label: 'FAQ', position: 'left'},
          {
            href: 'https://absolutchat.com/',
            label: 'AbsolutChat',
            position: 'right',
          },
        ],
      },

      algolia: {
        apiKey: '06d2f82e70798580e634d5d0ec750b08',
        indexName: 'AbsolutChatDocs',
        appId: 'P73H06FFVM',
        contextualSearch: true,
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guide',
                to: '/docs/Guide/introduction-registration',
              },
              {
                label: 'Dashboard',
                to: '/docs/Dashboard/setup-createbots',
              },
              {
                label: 'Flow Builder',
                to: '/docs/Flowbuilder/flowbuilder-overview',
              },
              {
                label: 'Integration',
                to: '/docs/Dashboard/integrations',
              },
              {
                label: 'FAQ',
                to: '/docs/FAQ/faq-intro',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/absolutchat',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/AbsolutChat/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/absolutchat/',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCx_iWDx_7j1fT03SOxNlOng',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'AbsolutChat',
                href: 'https://absolutchat.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AbsolutChat.com,  Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
