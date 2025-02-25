// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'conda.org',
  tagline: 'Package and environment management for any language and platform',
  url: 'https://conda.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'conda-incubator', // Usually your GitHub org/user name.
  projectName: 'conda-dot-org', // Usually your repo name.

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
          sidebarPath: require.resolve('./src/sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/conda-incubator/conda-dot-org/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/conda-incubator/conda-dot-org/tree/main',
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
        title: '',
        logo: {
          alt: 'The conda logo',
          src: 'img/conda_logo.png',
        },
        items: [
          {
            // type=doc entries need a docId that corresponds to
            // a filename under docs/, without extension
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/community',
            position: 'left',
            label: 'Community',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/conda',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discourse Forum',
                href: 'https://conda.discourse.group/',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/conda%20or%20miniconda%20or%20conda-forge?sort=Newest&edited=true',
              },
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/conda/shared_invite/zt-1ik6vglro-AdmjqKxjTbD7D0eRBfMr6A',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/condaproject',
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
                label: 'GitHub',
                href: 'https://github.com/conda-incubator/conda-dot-org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Conda Community. <br /> Built with Docusaurus. This site is powered by <a href="https://www.netlify.com/" target="_blank" title="Powered by Netlify">Netlify</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
