import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Juda',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Taovala Putu',
      slug: 'taovala putu',
      category: 'taovala',
      image: '/images/IMG3.jpg', //679px X 829px
      price: '120',
      countInStock: 0,
      rating: 3,
      numReviews: 13,
      description: 'high quality taovala',
    },

    {
      //_id: '2',
      name: 'Kahoa',
      slug: 'kahoa',
      category: 'Kahoa',
      image: '/images/IMG1.jpg',
      price: '120',
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
      description: 'high quality Kahoa',
    },

    {
      //_id: '3',
      name: 'Lokeha',
      slug: 'lokeha',
      category: 'taovala',
      image: '/images/IMG2.jpg',
      price: '120',
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
      description: 'high quality Lokeha',
    },

    {
      //_id: '4',
      name: 'Pule Taha',
      slug: 'pule taha',
      category: 'Pule Taha Dresses',
      image: '/images/IMG4.jpg',
      price: '120',
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
      description: 'high quality puletaha',
    },
  ],
};

export default data;
