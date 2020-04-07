module.exports = {
    title: 'Entando',
    description: 'Getting Started Guide',
    themeConfig: {
        repo: 'es-entando/es-entando.github.io',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'entando.com', link: 'http://www.entando.com' }
        ],
        serviceWorker: {
            updatePopup: true
        },
        sidebar: [
            ['/', 'Introduction'],
            ['/getting-started/', 'Getting Started'],
            ['/install-entando/', 'Install Entando'],
            ['/build-your-first-app/', 'Build Your First App']
        ]
    }
}