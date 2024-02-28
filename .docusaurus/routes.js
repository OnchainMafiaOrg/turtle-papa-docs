import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'bc7'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'ecb'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '85f'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9d1'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '026'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '4cb'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '216'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '4b9'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'ade'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '1ac'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '833'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '9a9'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b88'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '4a7'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '6bd'),
            routes: [
              {
                path: '/docs/$TUPA Token',
                component: ComponentCreator('/docs/$TUPA Token', 'e9a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/Growth Strategy',
                component: ComponentCreator('/docs/Growth Strategy', '804'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/How to buy $TUPA',
                component: ComponentCreator('/docs/How to buy $TUPA', 'e73'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/Introduction',
                component: ComponentCreator('/docs/Introduction', '564'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/Key Features',
                component: ComponentCreator('/docs/Key Features', '78e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/Roadmap',
                component: ComponentCreator('/docs/Roadmap', '9dd'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '0ea'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
