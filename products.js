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
        },
        description: 'Tangy and spicy mango pickle, a classic Indian condiment that adds a burst of flavor to any meal.',
        ingredients: ['Raw Mangoes', 'Salt', 'Mustard Oil', 'Chilli Powder', 'Turmeric Powder', 'Fenugreek Seeds', 'Mustard Seeds', 'Asafoetida']
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
        },
        description: 'A flavorful and spicy non-vegetarian pickle made with tender chicken pieces and a blend of aromatic spices.',
        ingredients: ['Chicken Pieces', 'Ginger-Garlic Paste', 'Chilli Powder', 'Turmeric Powder', 'Coriander Powder', 'Cumin Powder', 'Garam Masala', 'Lemon Juice', 'Salt', 'Edible Oil']
    },
    {
        id: 'mutton-pickle',
        name: 'Mutton Pickle',
        image: 'mutton.jpg',
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
        },
        description: 'Rich and savory non-vegetarian pickle prepared with succulent mutton pieces and a unique mix of traditional spices.',
        ingredients: ['Mutton Pieces', 'Ginger-Garlic Paste', 'Chilli Powder', 'Turmeric Powder', 'Coriander Powder', 'Cumin Powder', 'Garam Masala', 'Vinegar', 'Salt', 'Edible Oil']
    },
    {
        id: 'Boneless-mutton-pickle',
        name: 'Boneless Mutton Pickle',
        image: 'mutton.jpg',
        category: 'nonveg',
        prices: {
            '250gm': 550,
            '500gm': 1100,
            '1kg': 2200
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        },
        description: 'Rich and savory non-vegetarian pickle prepared with Boneless mutton pieces and a unique mix of traditional spices.',
        ingredients: ['Boneless Mutton Pieces', 'Ginger-Garlic Paste', 'Chilli Powder', 'Turmeric Powder', 'Coriander Powder', 'Cumin Powder', 'Garam Masala', 'Vinegar', 'Salt', 'Edible Oil']
    },
    {
        id: 'prawns-pickle',
        name: 'Prawns Pickle',
        image: 'prawns.jpg',
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
        },
        description: 'Delicious and tangy non-vegetarian pickle made with fresh prawns and a medley of zesty spices.',
        ingredients: ['Prawns', 'Ginger-Garlic Paste', 'Chilli Powder', 'Turmeric Powder', 'Coriander Powder', 'Cumin Powder', 'Fenugreek Seeds', 'Mustard Seeds', 'Curry Leaves', 'Salt', 'Edible Oil']
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
        },
        description: 'A traditional Andhra-style pickle made with raw mangoes, mustard powder, and a blend of spices, offering a unique tangy and slightly bitter taste.',
        ingredients: ['Raw Mangoes', 'Mustard Powder', 'Chilli Powder', 'Fenugreek Powder', 'Turmeric Powder', 'Salt', 'Mustard Oil', 'Asafoetida']
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
        },
        description: 'A spicy and tangy non-vegetarian pickle combining the unique sourness of Gongura leaves with tender chicken pieces and aromatic spices.',
        ingredients: ['Chicken Pieces', 'Gongura Leaves', 'Ginger-Garlic Paste', 'Chilli Powder', 'Turmeric Powder', 'Coriander Powder', 'Cumin Powder', 'Garam Masala', 'Salt', 'Edible Oil']
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
        },
        description: 'A flavorful and aromatic powder made from curry leaves, lentils, and spices, perfect as a side with rice, idli, or dosa.',
        ingredients: ['Curry Leaves', 'Bengal Gram (Chana Dal)', 'Black Gram (Urad Dal)', 'Dry Red Chillies', 'Tamarind', 'Asafoetida', 'Salt', 'Edible Oil']
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
        },
        description: 'A unique and flavorful non-vegetarian pickle made with Koramenu (Snakehead fish) and a special blend of spices, offering a distinct taste.',
        ingredients: ['Koramenu (Snakehead Fish)', 'Ginger-Garlic Paste', 'Chilli Powder', 'Turmeric Powder', 'Coriander Powder', 'Cumin Powder', 'Fenugreek Seeds', 'Mustard Seeds', 'Curry Leaves', 'Salt', 'Edible Oil']
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
        },
        description: 'Tangy and zesty lemon pickle, a popular vegetarian condiment that enhances the flavor of any meal.',
        ingredients: ['Lemons', 'Salt', 'Chilli Powder', 'Turmeric Powder', 'Fenugreek Seeds', 'Mustard Seeds', 'Asafoetida', 'Edible Oil']
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
        },
        description: 'A savory and slightly tangy vegetarian pickle made with ripe tomatoes and a blend of aromatic spices.',
        ingredients: ['Tomatoes', 'Salt', 'Chilli Powder', 'Turmeric Powder', 'Mustard Seeds', 'Fenugreek Seeds', 'Cumin Seeds', 'Ginger-Garlic Paste', 'Curry Leaves', 'Edible Oil']
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
        },
        description: 'A fiery and flavorful vegetarian pickle made with red chillies and a blend of pungent spices.',
        ingredients: ['Red Chillies', 'Salt', 'Mustard Seeds', 'Fenugreek Seeds', 'Turmeric Powder', 'Asafoetida', 'Lemon Juice', 'Edible Oil']
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
        },
        description: 'A pungent and savory vegetarian pickle made with garlic cloves and a mix of traditional spices.',
        ingredients: ['Garlic Cloves', 'Salt', 'Chilli Powder', 'Turmeric Powder', 'Mustard Seeds', 'Fenugreek Seeds', 'Cumin Seeds', 'Ginger-Garlic Paste', 'Curry Leaves', 'Edible Oil']
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
        },
        description: 'A unique vegetarian pickle with the distinct bitter taste of bitter gourd balanced with spices and tanginess.',
        ingredients: ['Bitter Gourd', 'Salt', 'Chilli Powder', 'Turmeric Powder', 'Mustard Seeds', 'Fenugreek Seeds', 'Cumin Seeds', 'Tamarind Pulp', 'Jaggery', 'Edible Oil']
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
        },
        description: 'A zesty and spicy vegetarian pickle made with fresh ginger and a blend of traditional Indian spices.',
        ingredients: ['Ginger', 'Salt', 'Chilli Powder', 'Turmeric Powder', 'Mustard Seeds', 'Fenugreek Seeds', 'Asafoetida', 'Lemon Juice', 'Edible Oil']
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
        },
        description: 'A tangy and slightly sour vegetarian pickle made with Indian gooseberries (Amla) and a mix of aromatic spices.',
        ingredients: ['Amla (Indian Gooseberries)', 'Salt', 'Chilli Powder', 'Turmeric Powder', 'Mustard Seeds', 'Fenugreek Seeds', 'Asafoetida', 'Edible Oil']
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
        },
        description: 'A tangy and flavorful vegetarian pickle made with tamarind pulp and a blend of traditional Indian spices.',
        ingredients: ['Tamarind Pulp', 'Salt', 'Chilli Powder', 'Turmeric Powder', 'Mustard Seeds', 'Fenugreek Seeds', 'Cumin Seeds', 'Jaggery', 'Edible Oil']
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
        },
        description: 'A fresh and aromatic vegetarian pickle made with coriander leaves and a blend of mild spices.',
        ingredients: ['Coriander Leaves', 'Green Chillies', 'Ginger', 'Lemon Juice', 'Salt', 'Mustard Seeds', 'Fenugreek Seeds', 'Edible Oil']
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
        },
        description: 'A savory and slightly tangy vegetarian pickle made with drumsticks and a mix of traditional spices.',
        ingredients: ['Drumsticks', 'Salt', 'Chilli Powder', 'Turmeric Powder', 'Mustard Seeds', 'Fenugreek Seeds', 'Tamarind Pulp', 'Edible Oil']
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
        },
        description: 'An aromatic and flavorful vegetarian pickle made with fresh curry leaves and a blend of simple spices.',
        ingredients: ['Curry Leaves', 'Green Chillies', 'Ginger', 'Garlic', 'Lemon Juice', 'Salt', 'Mustard Seeds', 'Edible Oil']
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
        },
        description: 'A crunchy and tangy vegetarian pickle made with fresh cauliflower florets and a blend of aromatic spices.',
        ingredients: ['Cauliflower', 'Ginger-Garlic Paste', 'Chilli Powder', 'Turmeric Powder', 'Mustard Seeds', 'Fenugreek Seeds', 'Cumin Seeds', 'Vinegar', 'Salt', 'Edible Oil']
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
        },
        description: 'A delightful vegetarian pickle with the sweetness of ripe mangoes balanced with a hint of spice and tang.',
        ingredients: ['Ripe Mangoes', 'Sugar', 'Salt', 'Chilli Powder', 'Fenugreek Seeds', 'Mustard Seeds', 'Turmeric Powder', 'Asafoetida', 'Edible Oil']
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
        },
        description: 'A tangy and slightly sour vegetarian pickle made with sorrel leaves (Gongura) and a blend of traditional spices.',
        ingredients: ['Sorrel Leaves (Gongura)', 'Salt', 'Chilli Powder', 'Turmeric Powder', 'Mustard Seeds', 'Fenugreek Seeds', 'Garlic', 'Edible Oil']
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
        },
        description: 'A spicy and savory non-vegetarian pickle made with tender, boneless chicken pieces and a rich blend of aromatic spices.',
        ingredients: ['Boneless Chicken Pieces', 'Ginger-Garlic Paste', 'Chilli Powder', 'Turmeric Powder', 'Coriander Powder', 'Cumin Powder', 'Garam Masala', 'Curry Leaves', 'Salt', 'Edible Oil']
    },
    {
        id: 'gongura-prawns-pickle',
        name: 'Gongura Prawns Pickle',
        image: 'gonguraprawn.jpg',
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
        },
        description: 'A tangy and spicy non-vegetarian pickle combining the unique sourness of Gongura leaves with succulent prawns and aromatic spices.',
        ingredients: ['Prawns', 'Gongura Leaves', 'Ginger-Garlic Paste', 'Chilli Powder', 'Turmeric Powder', 'Coriander Powder', 'Cumin Powder', 'Fenugreek Seeds', 'Mustard Seeds', 'Salt', 'Edible Oil']
    },
    {
        id: 'gongura-mutton-pickle',
        name: 'Gongura Mutton Pickle',
        image: 'gonguramutton.jpg',
        category: 'nonveg',
        prices: {
            '250gm': 500,
            '500gm': 1000,
            '1kg': 2000
        },
        weights: {
            '250gm': 250,
            '500gm': 500,
            '1kg': 1000
        },
        description: 'A rich and flavorful non-vegetarian pickle blending the tanginess of Gongura leaves with tender mutton pieces and a robust mix of spices.',
        ingredients: ['Mutton Pieces', 'Gongura Leaves', 'Ginger-Garlic Paste', 'Chilli Powder', 'Turmeric Powder', 'Coriander Powder', 'Cumin Powder', 'Garam Masala', 'Salt', 'Edible Oil']
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
        },
        description: 'A spicy and versatile powder made from roasted lentils and red chillies, perfect as a condiment with rice, idli, or dosa.',
        ingredients: ['Bengal Gram (Chana Dal)', 'Black Gram (Urad Dal)', 'Dry Red Chillies', 'Cumin Seeds', 'Coriander Seeds', 'Garlic', 'Salt', 'Edible Oil']
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
        },
        description: 'A coarse and flavorful chilli powder blend, traditionally used to add spice and flavor to various dishes.',
        ingredients: ['Dry Red Chillies', 'Coriander Seeds', 'Cumin Seeds', 'Mustard Seeds', 'Fenugreek Seeds', 'Garlic', 'Salt', 'Turmeric Powder']
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
        },
        description: 'A unique and delicate Andhra sweet made from rice flour sheets filled with jaggery, sugar, and nuts.',
        ingredients: ['Rice Flour', 'Jaggery', 'Sugar', 'Ghee', 'Cashews', 'Almonds', 'Cardamom Powder']
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
        },
        description: 'Sun-dried lentil fritters made with pumpkin, offering a unique flavor and crispy texture, used as a side dish or in curries.',
        ingredients: ['Pumpkin (Gummadikaya)', 'Bengal Gram (Chana Dal)', 'Black Gram (Urad Dal)', 'Green Chillies', 'Ginger', 'Asafoetida', 'Salt', 'Turmeric Powder']
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
        },
        description: 'Sun-dried chillies soaked in buttermilk and salt, offering a unique tangy and spicy flavor, often fried and served as a side.',
        ingredients: ['Green Chillies', 'Buttermilk', 'Salt', 'Turmeric Powder', 'Asafoetida']
    },
    {
    id: 'Pesari Vadiyalu',
    name: 'Pesari Vadiyalu',
    image: 'pesarivadiyalu.png',
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
    },
    description: 'Crispy and flavorful sun-dried fritters made from ground moong dal (split yellow lentils) and a blend of aromatic spices. These vadiyalu are a traditional Andhra delicacy, perfect for frying or adding to curries and stews for an extra crunch and taste.',
    ingredients: ['Moong Dal (Split Yellow Lentils)', 'Rice Flour', 'Cumin Seeds', 'Asafoetida', 'Ginger', 'Green Chillies', 'Salt', 'Cooking Oil']
    },
    {
    id: 'Cow Ghee',
    name: 'Pure Desi Cow Ghee',
    image: 'ghee.jpg',
    category: 'special',
    prices: {
        '250gm': 300,
        '500gm': 600,
        '1kg': 1200
    },
    weights: {
        '250gm': 250,
        '500gm': 500,
        '1kg': 1000
    },
    description: 'Authentic and aromatic Desi Cow Ghee, traditionally churned from pure cow’s milk. Rich in flavor and essential nutrients, our ghee adds a distinct taste and wholesome goodness to your cooking. It is prepared using time-honored methods, ensuring its purity and quality.',
    ingredients: ['Pure Cow\'s Milk']
    },
];