const conversionRate = 23000; // Example conversion rate

const petsData = [
    { id: 'MO231', name: 'Pomeranian White', gene: 'male', age: '0.2 months', price: (6900000 / conversionRate).toFixed(2) + ' USD', image: '/1.png', color: 'white', breed: 'small' },
    { id: 'MO232', name: 'Golden Retriever', gene: 'female', age: '1 year', price: (12500000 / conversionRate).toFixed(2) + ' USD', image: '/2.png', color: 'golden', breed: 'large' },
    { id: 'MO233', name: 'Bulldog', gene: 'male', age: '0.5 years', price: (9000000 / conversionRate).toFixed(2) + ' USD', image: '/3.png', color: 'brindle', breed: 'medium' },
    { id: 'MO234', name: 'Beagle', gene: 'female', age: '2 years', price: (8500000 / conversionRate).toFixed(2) + ' USD', image: '/4.png', color: 'red', breed: 'medium' },
    { id: 'MO235', name: 'Chihuahua', gene: 'male', age: '0.3 months', price: (5000000 / conversionRate).toFixed(2) + ' USD', image: '/5.png', color: 'tan', breed: 'small' },
    { id: 'MO236', name: 'Dachshund', gene: 'female', age: '0.8 years', price: (7000000 / conversionRate).toFixed(2) + ' USD', image: '/6.png', color: 'black', breed: 'small' },
    { id: 'MO237', name: 'Siberian Husky', gene: 'male', age: '1.5 years', price: (15000000 / conversionRate).toFixed(2) + ' USD', image: '/7.png', color: 'black & white', breed: 'large' },
    { id: 'MO238', name: 'Yorkshire Terrier', gene: 'female', age: '0.4 months', price: (6000000 / conversionRate).toFixed(2) + ' USD', image: '/8.png', color: 'tan', breed: 'small' },
    { id: 'MO239', name: 'Cocker Spaniel', gene: 'male', age: '3 years', price: (10000000 / conversionRate).toFixed(2) + ' USD', image: '/1.png', color: 'silver', breed: 'medium' },
    { id: 'MO240', name: 'Boxer', gene: 'female', age: '0.9 years', price: (11000000 / conversionRate).toFixed(2) + ' USD', image: '/2.png', color: 'brindle', breed: 'large' },
    { id: 'MO241', name: 'Rottweiler', gene: 'male', age: '2.5 years', price: (14000000 / conversionRate).toFixed(2) + ' USD', image: '/3.png', color: 'black', breed: 'large' },
    { id: 'MO242', name: 'Poodle', gene: 'female', age: '0.7 years', price: (12000000 / conversionRate).toFixed(2) + ' USD', image: '/4.png', color: 'apricot', breed: 'medium' },
    { id: 'MO243', name: 'Shih Tzu', gene: 'male', age: '1 year', price: (7500000 / conversionRate).toFixed(2) + ' USD', image: '/5.png', color: 'black & white', breed: 'small' },
    { id: 'MO244', name: 'Great Dane', gene: 'female', age: '3 years', price: (15500000 / conversionRate).toFixed(2) + ' USD', image: '/6.png', color: 'tan', breed: 'large' },
    { id: 'MO245', name: 'French Bulldog', gene: 'male', age: '0.6 years', price: (13000000 / conversionRate).toFixed(2) + ' USD', image: '/7.png', color: 'brindle', breed: 'medium' },
    { id: 'MO246', name: 'Italian Greyhound', gene: 'female', age: '2.1 years', price: (9800000 / conversionRate).toFixed(2) + ' USD', image: '/8.png', color: 'silver', breed: 'medium' },
    { id: 'MO247', name: 'Pekingese', gene: 'male', age: '0.5 years', price: (6200000 / conversionRate).toFixed(2) + ' USD', image: '/1.png', color: 'black', breed: 'small' },
    { id: 'MO248', name: 'Mastiff', gene: 'female', age: '4 years', price: (18000000 / conversionRate).toFixed(2) + ' USD', image: '/2.png', color: 'tan', breed: 'large' },
    { id: 'MO249', name: 'Bichon Frise', gene: 'male', age: '1.2 years', price: (7800000 / conversionRate).toFixed(2) + ' USD', image: '/3.png', color: 'white', breed: 'small' },
    { id: 'MO250', name: 'Cavalier King Charles Spaniel', gene: 'female', age: '0.9 years', price: (10500000 / conversionRate).toFixed(2) + ' USD', image: '/4.png', color: 'apricot', breed: 'medium' },
    { id: 'MO251', name: 'Newfoundland', gene: 'male', age: '2.5 years', price: (16000000 / conversionRate).toFixed(2) + ' USD', image: '/5.png', color: 'black', breed: 'large' },
    { id: 'MO252', name: 'Collie', gene: 'female', age: '1.5 years', price: (9200000 / conversionRate).toFixed(2) + ' USD', image: '/6.png', color: 'tan', breed: 'large' },
    { id: 'MO253', name: 'Dalmatian', gene: 'male', age: '3.5 years', price: (11500000 / conversionRate).toFixed(2) + ' USD', image: '/7.png', color: 'black & white', breed: 'large' },
    { id: 'MO254', name: 'Chow Chow', gene: 'female', age: '0.4 years', price: (8300000 / conversionRate).toFixed(2) + ' USD', image: '/8.png', color: 'red', breed: 'medium' },
    { id: 'MO255', name: 'Basset Hound', gene: 'male', age: '1 year', price: (7200000 / conversionRate).toFixed(2) + ' USD', image: '/1.png', color: 'tan', breed: 'medium' },
    { id: 'MO256', name: 'Bloodhound', gene: 'female', age: '2 years', price: (9500000 / conversionRate).toFixed(2) + ' USD', image: '/2.png', color: 'brindle', breed: 'large' },
    { id: 'MO257', name: 'Border Collie', gene: 'male', age: '0.3 years', price: (10800000 / conversionRate).toFixed(2) + ' USD', image: '/3.png', color: 'black', breed: 'medium' },
    { id: 'MO258', name: 'Havanese', gene: 'female', age: '1.1 years', price: (8000000 / conversionRate).toFixed(2) + ' USD', image: '/4.png', color: 'apricot', breed: 'small' },
    { id: 'MO259', name: 'Irish Setter', gene: 'male', age: '3 years', price: (11000000 / conversionRate).toFixed(2) + ' USD', image: '/5.png', color: 'red', breed: 'large' },
    { id: 'MO260', name: 'Akita', gene: 'female', age: '0.8 years', price: (14500000 / conversionRate).toFixed(2) + ' USD', image: '/6.png', color: 'tan', breed: 'large' },
    { id: 'MO261', name: 'Pomeranian White (Duplicate 1)', gene: 'male', age: '0.2 months', price: (6900000 / conversionRate).toFixed(2) + ' USD', image: '/1.png', color: 'white', breed: 'small' },
    { id: 'MO262', name: 'Golden Retriever (Duplicate 1)', gene: 'female', age: '1 year', price: (12500000 / conversionRate).toFixed(2) + ' USD', image: '/2.png', color: 'golden', breed: 'large' },
    { id: 'MO263', name: 'Bulldog (Duplicate 1)', gene: 'male', age: '0.5 years', price: (9000000 / conversionRate).toFixed(2) + ' USD', image: '/3.png', color: 'brindle', breed: 'medium' },
    { id: 'MO264', name: 'Beagle (Duplicate 1)', gene: 'female', age: '2 years', price: (8500000 / conversionRate).toFixed(2) + ' USD', image: '/4.png', color: 'red', breed: 'medium' },
    { id: 'MO265', name: 'Chihuahua (Duplicate 1)', gene: 'male', age: '0.3 months', price: (5000000 / conversionRate).toFixed(2) + ' USD', image: '/5.png', color: 'tan', breed: 'small' }
];


export default petsData;


