import {Products} from '../collections/products.ts';
import {Categories} from '../collections/categories.ts';

export function loadProducts() {
    if (Products.find().count() === 0) {

        var products= [
            {
                'name': 'Punta de S',
                'description': 'Corte de carne de vaca',
                'quantity': 5,
                'img': '',
                'category': 4,
                'price': 120,
                'storeName': 'Soriana'
            },
            {

                'name': 'Frutilla',
                'description': '80 Fresas traidas de Buenos Aires',
                'quantity': 100,
                'img': '',
                'category': 1,
                'price': 25,
                'storeName': 'HiperMaxi'
            },
            {

                'name': 'Crossant',
                'description': 'Recien horneado',
                'quantity': '12',
                'img': '',
                'category': 2,
                'price': 16,
                'storeName': 'Walmart'
            }
            ,
            {

                'name': 'Helado de mora',
                'description': 'high in cold',
                'quantity': 6,
                'img': '',
                'category': 3,
                'price': 32,
                'storeName': 'HEB'
            },
            {

                'name': 'Bacardi',
                'description': 'Ron bueno para el corazon',
                'quantity': 54,
                'img': '',
                'category': 5,
                'price': 85,
                'storeName': 'COTSCO'
            }
            ,
            {

                'name': 'Singani',
                'description': 'Pa unas buenas caihpiriñas',
                'quantity': 32,
                'img': '',
                'category': 5,
                'price': 100,
                'storeName': 'ALDI'
            },
            {

                'name': 'Gatorade',
                'description': 'Hidratate luego de la corrida muchacho',
                'quantity': 7,
                'img': '',
                'category': 6,
                'price': 25,
                'storeName': 'Soriana'
            }
            ,
            {

                'name': '7-Up',
                'description': 'soda',
                'quantity': 12,
                'img': '',
                'category': 6,
                'price': 12,
                'storeName': 'HEB'
            },
            {

                'name': 'Banana',
                'description': 'Pa no estar macurcado dps del gym loco',
                'quantity': 40,
                'img': '',
                'category': 1,
                'price': 5.5,
                'storeName': 'Sainsburry'
            }
        ];

        for (var i = 0; i < products.length; i++) {
            Products.insert(products[i]);
        }
    }
     if (Categories.find().count() === 0) {

        var categories = [
            {
                'name': 'Fruits & Vegetables',
                'id': 1
            },
             {
                'name': 'Pantry',
                'id': 2
            },
             {
                'name': 'Frozen',
                'id': 3
            },
             {
                'name': 'Meat & Fish',
                'id': 4
            },
             {
                'name': 'Wine & Alcohol',
                'id': 5
            },
             {
                'name': 'Drinks',
                'id': 6
            }

        ];

        for (var i = 0; i < categories.length; i++) {
            Categories.insert(categories[i]);
        }
     }
};