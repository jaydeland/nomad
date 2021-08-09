export default [
  { text: 'Overview', url: '/', type: 'inbound' },
  {
    text: 'Use Cases',
    submenu: [
      {
        text: 'Edge Compute',
        url: '/use-cases/edge-compute',
      },
      {
        text: 'Simple Container Orchestration',
        url: '/use-cases/simple-container-orchestration',
      },
      {
        text: 'Non-Containerized Application Orchestration',
        url: '/use-cases/non-containerized-application-orchestration',
      },
    ],
  },
  {
    text: 'Enterprise',
    url: 'https://www.hashicorp.com/products/nomad/',
    type: 'outbound',
  },
  'divider',
  {
    text: 'Tutorials',
    url: 'https://learn.hashicorp.com/nomad',
    type: 'outbound',
  },
  {
    text: 'Docs',
    url: '/docs',
    type: 'inbound',
  },
  {
    text: 'API',
    url: '/api-docs',
    type: 'inbound',
  },
  {
    text: 'Community',
    url: '/community',
    type: 'inbound',
  },
]
