var wallData = {
    title: "Digital Pinnwall",
    theme: {
        bodyBackground: "#F1F1F1",
        containerBackground: "#FFF",
        containerFontColor: "#000",
        mainMenuBackground: "#8B1414",
        mainMenuFontColor: "#FFF",
        menuItemHoverBackground: "#9B1414",
        menuItemHoverFontColor: "#FFF"
    },
    shortcuts: [
        {
            title: "Shortcut 1",
            link: "http://example.com"
        },
        {
            title: "Shortcut 2",
            link: "http://example.com"
        },
        {
            title: "Shortcut 3",
            link: "http://example.com"
        },
        {
            title: "Shortcut 4",
            link: "http://example.com"
        },
    ],
    menuitems: [
        {
            title: "Schnellstart",
            open: true,
            menuitems: [
                {
                    title: "33% Shortcutlist 1",
                    open: true,
                    size: "33%",
                    text: '<ul><li><a href="">Link 1</a></li>' +
                        '<li><a href="">Link 2</a></li>' +
                        '<li><a href="">Link 3</a></li>' +
                        '<li><a href="">Link 4</a></li>' +
                        '</ul>'
                },
                {
                    title: "33% Shortcutlist 2",
                    open: true,
                    size: "33%",
                    text: '<ul><li><a href="">Link 1</a></li>' +
                        '<li><a href="">Link 2</a></li>' +
                        '<li><a href="">Link 3</a></li>' +
                        '<li><a href="">Link 4</a></li>' +
                        '</ul>'
                },
                {
                    title: "33% Shortcutlist 3",
                    open: true,
                    size: "33%",
                    text: '<ul><li><a href="">Link 1</a></li>' +
                        '<li><a href="">Link 2</a></li>' +
                        '<li><a href="">Link 3</a></li>' +
                        '<li><a href="">Link 4</a></li>' +
                        '</ul>'
                },

            ]
        },
        {
            title: "Category 1",
            closeParent: true,
            menuitems: [
                {
                    title: "Phonelist",
                    menuitems: [
                        {
                            title: "Fritzle und Erna",
                            text: "<ul><li>Private: 012348348</li><li>Mobile: 012348348</li></ul>"
                        },
                        {
                            title: "Max",
                            text: "<ul><li>Private: 012348348</li><li>Mobile: 012348348</li></ul>"
                        },
                    ]
                },
                {
                    size: "50%",
                    title: "Half",
                    menuitems: [
                        {
                            title: "Some text describing the content",
                            text: "<ul><li>Blabla</li><li>Blubblubb</li></ul>",
                            link: "http://google.com"
                        },
                        {
                            title: "Some text describing the other content",
                            text: "<ul><li>Blabla</li><li>Blubblubb</li></ul>"
                        },
                        {
                            title: "Some text",
                            text: "The content",
                            link: "http://google.com"
                        }
                    ]
                },
                {
                    title: "Another Half",
                    size: "50%",
                    menuitems: [
                        {
                            title: "A link to a file",
                            text: "Bla3 <b>FETT</b>",
                            link: "http://google.com",
                            files: [
                                "test.txt"
                            ],
                        },
                        {
                            title: "Menu Item with a picture ",
                            text: "Here we have an example showing an image for the item",
                            image: "testbild2.jpg"
                        },
                        {
                            title: "...",
                            text: "Nothing...",
                        }
                    ]
                },
                {
                    size: "50%",
                    title: "Clear Float example",
                    clearFloat: true,
                    menuitems: [
                        {
                            title: "Item 1",
                            text: "<ul><li>Blabla</li><li>Blubblubb</li></ul>",
                            link: "http://google.com"
                        },
                        {
                            title: "Item 2",
                            text: "<ul><li>Blabla</li><li>Blubblubb</li></ul>"
                        },
                        {
                            title: "Item 3",
                            text: "Item 3 description",
                            link: "http://google.com"
                        }
                    ]
                }
            ]
        },
        {
            title: "Yet another menu item",
            closeParent: true,
            menuitems: [
                {
                    title: "Menüpunkt1",
                    text: "Bla <b>FETT</b>",
                    link: "http://google.com"
                },
                {
                    title: "Menüpunkt2",
                    link: "http://google.com",
                    image: "testbild.jpg"
                },
                {
                    title: "Menüpunkt3",
                    menuitems: [
                        {
                            title: "Link1",
                            text: "Bla <b>FETT</b>",
                            link: "http://google.com"
                        },
                        {
                            title: "Link2",
                            text: "Bla2 <b>FETT</b>",
                            link: "http://google.com"
                        }
                    ]
                }
            ]
        },
    ]
}