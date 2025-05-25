// products.js
// This file centralizes all product data for Aamoda Pickles.
// Each product object includes an ID, name, image path, category, and a 'prices' object
// that maps different quantities (250gm, 500gm, 1kg) to their respective prices.

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
        }
    },
    {
        id: 'putharekulu',
        name: 'Putharekulu',
        image: 'putharekulu.jpg',
        category: 'special',
        prices: {
            'piece': 35 // Special pricing for Putharekulu
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
        }
    },
    {
        id: 'pesari-vadiyalu',
        name: 'Pesari Vadiyalu',
        image: 'pesarivadiyalu.png',
        category: 'special',
        prices: {
            '250gm': 175,
            '500gm': 350,
            '1kg': 700
        }
    },
    {
        id: 'cow-ghee',
        name: 'Cow Ghee',
        image: 'ghee.jpg',
        category: 'special',
        prices: {
            '250gm': 300,
            '500gm': 600,
            '1kg': 1200
        }
    }
];

// Function to get products by category
function getProductsByCategory(category) {
    if (category === 'all') {
        return products;
    }
    return products.filter(product => product.category === category);
}