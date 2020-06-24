import hat_1 from '../../img/hats/hat-1.jpg';
import hat_2 from '../../img/hats/hat-2.jpg';
import hat_3 from '../../img/hats/hat-3.jpg';
import hat_4 from '../../img/hats/hat-4.jpg';
import hat_5 from '../../img/hats/hat-5.jpg';
import hat_6 from '../../img/hats/hat-6.jpg';
import hat_7 from '../../img/hats/hat-7.jpg';
import hat_8 from '../../img/hats/hat-8.jpg';
import hat_9 from '../../img/hats/hat-9.jpg';

import shoe_1 from '../../img/footwear/shoe-1.jpg';
import shoe_2 from '../../img/footwear/shoe-2.jpg';
import shoe_3 from '../../img/footwear/shoe-3.jpg';
import shoe_4 from '../../img/footwear/shoe-4.jpg';
import shoe_5 from '../../img/footwear/shoe-5.jpg';
import shoe_6 from '../../img/footwear/shoe-6.jpg';
import shoe_7 from '../../img/footwear/shoe-7.jpg';
import shoe_8 from '../../img/footwear/shoe-8.jpg';
import shoe_9 from '../../img/footwear/shoe-9.jpg';

import shirt_1 from '../../img/shirt/shirt-1.jpg';
import shirt_2 from '../../img/shirt/shirt-2.jpg';
import shirt_3 from '../../img/shirt/shirt-3.jpg';
import shirt_4 from '../../img/shirt/shirt-4.jpg';
import shirt_5 from '../../img/shirt/shirt-5.jpg';
import shirt_6 from '../../img/shirt/shirt-6.jpg';
import shirt_7 from '../../img/shirt/shirt-7.jpg';
import shirt_8 from '../../img/shirt/shirt-8.jpg';
import shirt_9 from '../../img/shirt/shirt-9.jpg';

import tshirt_1 from '../../img/t-shirts/t-shirt-1.jpg';
import tshirt_2 from '../../img/t-shirts/t-shirt-2.png';
import tshirt_3 from '../../img/t-shirts/t-shirt-3.jpg';
import tshirt_4 from '../../img/t-shirts/t-shirt-4.jpg';
import tshirt_5 from '../../img/t-shirts/t-shirt-5.jpg';
import tshirt_6 from '../../img/t-shirts/t-shirt-6.jpg';
import tshirt_7 from '../../img/t-shirts/t-shirt-7.jpg';
import tshirt_8 from '../../img/t-shirts/t-shirt-8.jpg';
import tshirt_9 from '../../img/t-shirts/t-shirt-9.jpg';

import suit_1 from '../../img/suits/suit-1.jpg';
import suit_2 from '../../img/suits/suit-2.jpg';
import suit_3 from '../../img/suits/suit-3.jpg';
import suit_4 from '../../img/suits/suit-4.jpg';
import suit_5 from '../../img/suits/suit-5.jpg';
import suit_6 from '../../img/suits/suit-6.jpg';
import suit_7 from '../../img/suits/suit-7.jpg';
import suit_8 from '../../img/suits/suit-8.jpg';
import suit_9 from '../../img/suits/suit-9.jpg';

// import trouser_1 from '../../img/trousers/trouser-1.jpg';
// import trouser_2 from '../../img/trousers/trouser-2.jpg';
// import trouser_3 from '../../img/trousers/trouser-3.jpg';
// import trouser_4 from '../../img/trousers/trouser-4.jpg';
// import trouser_5 from '../../img/trousers/trouser-5.jpg';
// import trouser_6 from '../../img/trousers/trouser-6.jpg';
// import trouser_7 from '../../img/trousers/trouser-7.jpg';
// import trouser_8 from '../../img/trousers/trouser-8.jpg';



const SHOP_DATA = {
    hats: {
      id: 1,
      title: 'Hats',
      routeName: 'hats',
      color_1: '#ff4d4d',
      color_2: '#ffc4c4',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: hat_1,
          price: 25
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: hat_2,
          price: 18
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: hat_3,
          price: 35
        },
        {
          id: 4,
          name: 'Grey Brim',
          imageUrl: hat_4,
          price: 25
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: hat_5,
          price: 18
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: hat_6,
          price: 14
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: hat_7,
          price: 18
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: hat_8,
          price: 14
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: hat_9,
          price: 16
        }
      ]
    },
    footwear: {
      id: 2,
      title: 'Footwear',
      routeName: 'footwear',
      color_1: '#18dcff',
      color_2: '#c2f6ff',
      items: [
        {
          id: 10,
          name: 'Adidas NMD',
          imageUrl: shoe_1,
          price: 220
        },
        {
          id: 11,
          name: 'Adidas Yeezy',
          imageUrl: shoe_2,
          price: 280
        },
        {
          id: 12,
          name: 'Black Converse',
          imageUrl: shoe_3,
          price: 110
        },
        {
          id: 13,
          name: 'Nike White AirForce',
          imageUrl: shoe_4,
          price: 160
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          imageUrl: shoe_5,
          price: 160
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imageUrl: shoe_6,
          price: 160
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imageUrl: shoe_7,
          price: 190
        },
        {
          id: 17,
          name: 'Timberlands',
          imageUrl: shoe_8,
          price: 200
        },
        {
            id: 18,
            name: 'Black Converse',
            imageUrl: shoe_9,
            price: 110
        }
      ]
    },
    shirts: {
      id: 3,
      title: 'Shirts',
      routeName: 'shirts',
      color_1: '#32ff7e',
      color_2: '#cbffde',
      items: [
        {
          id: 19,
          name: 'Black Jean Shearling',
          imageUrl: shirt_1,
          price: 125
        },
        {
          id: 20,
          name: 'Blue Jean Jacket',
          imageUrl: shirt_2,
          price: 90
        },
        {
          id: 21,
          name: 'Grey Jean Jacket',
          imageUrl: shirt_3,
          price: 90
        },
        {
          id: 22,
          name: 'Brown Shearling',
          imageUrl: shirt_4,
          price: 165
        },
        {
          id: 23,
          name: 'Tan Trench',
          imageUrl: shirt_5,
          price: 185
        },
        {
            id: 24,
            name: 'Tan Trench',
            imageUrl: shirt_6,
            price: 185
        },
        {
            id: 25,
            name: 'Tan Trench',
            imageUrl: shirt_7,
            price: 185
        },
        {
            id: 26,
            name: 'Tan Trench',
            imageUrl: shirt_8,
            price: 185
        },
        {
            id: 27,
            name: 'Tan Trench',
            imageUrl: shirt_9,
            price: 185
        }
      ]
    },
    t_shirts: {
      id: 4,
      title: 'T-Shirts',
      routeName: 't-shirts',
      color_1: '#c56cf0',
      color_2: '#e9c8f9',
      items: [
        {
          id: 28,
          name: 'Blue Tanktop',
          imageUrl: tshirt_1,
          price: 25
        },
        {
          id: 29,
          name: 'Floral Blouse',
          imageUrl: tshirt_2,
          price: 20
        },
        {
          id: 30,
          name: 'Floral Dress',
          imageUrl: tshirt_3,
          price: 80
        },
        {
          id: 31,
          name: 'Red Dots Dress',
          imageUrl: tshirt_4,
          price: 80
        },
        {
          id: 32,
          name: 'Striped Sweater',
          imageUrl: tshirt_5,
          price: 45
        },
        {
          id: 33,
          name: 'Yellow Track Suit',
          imageUrl: tshirt_6,
          price: 135
        },
        {
          id: 34,
          name: 'White Blouse',
          imageUrl: tshirt_7,
          price: 20
        },
        {
            id: 35,
            name: 'White Blouse',
            imageUrl: tshirt_8,
            price: 20
        },
        {
            id: 36,
            name: 'White Blouse',
            imageUrl: tshirt_9,
            price: 20
        }
      ]
    },
    suits: {
      id: 5,
      title: 'Suits',
      routeName: 'suits',
      color_1: '#ffaf40',
      color_2: '#ffe1b7',
      items: [
        {
          id: 37,
          name: 'Camo Down Vest',
          imageUrl: suit_1,
          price: 325
        },
        {
          id: 38,
          name: 'Floral T-shirt',
          imageUrl: suit_2,
          price: 20
        },
        {
          id: 39,
          name: 'Black & White Longsleeve',
          imageUrl: suit_3,
          price: 25
        },
        {
          id: 40,
          name: 'Pink T-shirt',
          imageUrl: suit_4,
          price: 25
        },
        {
          id: 41,
          name: 'Jean Long Sleeve',
          imageUrl: suit_5,
          price: 40
        },
        {
          id: 42,
          name: 'Burgundy T-shirt',
          imageUrl: suit_6,
          price: 25
        },
        {
            id: 43,
            name: 'Burgundy T-shirt',
            imageUrl: suit_7,
            price: 25
        },
        {
            id: 44,
            name: 'Burgundy T-shirt',
            imageUrl: suit_8,
            price: 25
        },
        {
            id: 45,
            name: 'Burgundy T-shirt',
            imageUrl: suit_9,
            price: 25
        }
      ]
    }
}


  export default SHOP_DATA;
  