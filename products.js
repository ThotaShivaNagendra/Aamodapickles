// products.js
// This file centralizes all product data for Aamoda Pickles.
// Each product object includes an ID, name, image path, category, and a 'prices' object
// that maps different quantities (250gm, 500gm, 1kg) to their respective prices,
// and a 'weights' object that maps the same quantities to their weight in grams.

const products = [
    {
        id: 'mango-pickle',
        name: 'Mango Pickle',
        image: 'mango.jpg',
        category: 'veg',
        prices: {
            '250gm': 100,
            '500gm': 200,
            '1kg': 400
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'chicken-pickle',
        name: 'Chicken Pickle',
        image: 'chicken.jpeg',
        category: 'nonveg',
        prices: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'mutton-pickle',
        name: 'Mutton Pickle',
        image: 'mutton.jpg',
        category: 'nonveg',
        prices: {
            '250gm': 400,
            '500gm': 800,
            '1kg': 1600
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'prawns-pickle',
        name: 'Prawns Pickle',
        image: 'prawns.jpg',
        category: 'nonveg',
        prices: {
            '250gm': 350,
            '500gm': 700,
            '1kg': 1400
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'magayi-pickle',
        name: 'Magayi Pickle',
        image: 'magayi.jpg',
        category: 'veg',
        prices: {
            '250gm': 125,
            '500gm': 250,
            '1kg': 500
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'gongura-chicken-pickle',
        name: 'Gongura Chicken Pickle',
        image: 'gongurachicken.jpg',
        category: 'nonveg',
        prices: {
            '250gm': 300,
            '500gm': 600,
            '1kg': 1200
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'karvepaku-podi',
        name: 'Karvepaku Podi',
        image: 'karvepakupodi.jpg',
        category: 'special',
        prices: {
            '250gm': 150,
            '500gm': 300,
            '1kg': 600
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'koramenu-pickle',
        name: 'Koramenu Pickle',
        image: 'koramenu.jpg',
        category: 'nonveg',
        prices: {
            '250gm': 400,
            '500gm': 800,
            '1kg': 1600
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'lemon-pickle',
        name: 'Lemon Pickle',
        image: 'lemon.jpg',
        category: 'veg',
        prices: {
            '250gm': 100,
            '500gm': 200,
            '1kg': 400
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'tomato-pickle',
        name: 'Tomato Pickle',
        image: 'tomato.jpg',
        category: 'veg',
        prices: {
            '250gm': 100,
            '500gm': 200,
            '1kg': 400
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'redchilli-pickle',
        name: 'Redchilli Pickle',
        image: 'redchilli.jpg',
        category: 'veg',
        prices: {
            '250gm': 100,
            '500gm': 200,
            '1kg': 400
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'garlic-pickle',
        name: 'Garlic Pickle',
        image: 'garlic.jpg',
        category: 'veg',
        prices: {
            '250gm': 100,
            '500gm': 200,
            '1kg': 400
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'bittergourd-pickle',
        name: 'Bitter Gourd Pickle',
        image: 'Bittergourd.png',
        category: 'veg',
        prices: {
            '250gm': 100,
            '500gm': 200,
            '1kg': 400
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'ginger-pickle',
        name: 'Ginger Pickle',
        image: 'allam.jpg',
        category: 'veg',
        prices: {
            '250gm': 100,
            '500gm': 200,
            '1kg': 400
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'amla-pickle',
        name: 'Amla Pickle',
        image: 'amla.jpg',
        category: 'veg',
        prices: {
            '250gm': 100,
            '500gm': 200,
            '1kg': 400
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'tamarind-pickle',
        name: 'Tamarind Pickle',
        image: 'chintakaya.jpg',
        category: 'veg',
        prices: {
            '250gm': 100,
            '500gm': 200,
            '1kg': 400
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'coriander-pickle',
        name: 'Coriander Pickle',
        image: 'kothimeera.jpg',
        category: 'veg',
        prices: {
            '250gm': 100,
            '500gm': 200,
            '1kg': 400
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'drumstick-pickle',
        name: 'Drumstick Pickle',
        image: 'drumstick.jpg',
        category: 'veg',
        prices: {
            '250gm': 100,
            '500gm': 200,
            '1kg': 400
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'curry-leaf-pickle',
        name: 'Curry Leaf Pickle',
        image: 'karvepaku.jpg',
        category: 'veg',
        prices: {
            '250gm': 100,
            '500gm': 200,
            '1kg': 400
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'cauliflower-pickle',
        name: 'Cauliflower Pickle',
        image: 'cauliflower.jpeg',
        category: 'veg',
        prices: {
            '250gm': 100,
            '500gm': 200,
            '1kg': 400
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'sweet-mango-pickle',
        name: 'Sweet Mango Pickle',
        image: 'sweetmango.jpg',
        category: 'veg',
        prices: {
            '250gm': 100,
            '500gm': 200,
            '1kg': 400
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'sorrel-leaf-pickle',
        name: 'Sorrel Leaf Pickle',
        image: 'gongura.jpg',
        category: 'veg',
        prices: {
            '250gm': 100,
            '500gm': 200,
            '1kg': 400
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'boneless-chicken-pickle',
        name: 'Boneless Chicken Pickle',
        image: 'bonelesschicken.jpg',
        category: 'nonveg',
        prices: {
            '250gm': 300,
            '500gm': 600,
            '1kg': 1200
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'gongura-prawns-pickle',
        name: 'Gongura Prawns Pickle',
        image: 'gonguraprawn.jpg',
        category: 'nonveg',
        prices: {
            '250gm': 400,
            '500gm': 800,
            '1kg': 1600
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'gongura-mutton-pickle',
        name: 'Gongura Mutton Pickle',
        image: 'gonguramutton.jpg',
        category: 'nonveg',
        prices: {
            '250gm': 450,
            '500gm': 900,
            '1kg': 1800
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'karam-podi',
        name: 'Karam Podi',
        image: 'nallakaram.jpg',
        category: 'special',
        prices: {
            '250gm': 150,
            '500gm': 300,
            '1kg': 600
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'kura-karam',
        name: 'Kura Karam',
        image: 'chillypowder.jpg',
        category: 'special',
        prices: {
            '250gm': 150,
            '500gm': 300,
            '1kg': 600
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'putharekulu',
        name: 'Putharekulu',
        image: 'putharekulu.jpg',
        category: 'special',
        prices: {
            'piece': 35 // Special pricing for Putharekulu
        },
        weights: {
            'piece': 50 // Weight per piece in grams
        }
    },
    {
        id: 'gummadikaya-vadiyalu',
        name: 'Gummadikaya Vadiyalu',
        image: 'gummadivadiyalu.jpg',
        category: 'special',
        prices: {
            '250gm': 175,
            '500gm': 350,
            '1kg': 700
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
    {
        id: 'challa-mirapakayalu',
        name: 'Challa Mirapakayalu',
        image: 'mirapakayalu.jpg',
        category: 'special',
        prices: {
            '250gm': 150,
            '500gm': 300,
            '1kg': 600
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        }
    },
]