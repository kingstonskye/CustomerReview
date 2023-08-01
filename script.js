
(function () {
    const customerImage = document.getElementById('customer-image');
    const customerName = document.getElementById('customer-name');
    const customerText = document.getElementById('customer-text');


const customers = [
    {
        name: 'Sarah',
        image: 'img/0.jpg',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi distinctio similique maxime veniam eos cumque nisi iure vel! Ad voluptas labore debitis! Eos aut nihil dolorum libero doloribus repudiandae alias?',
    },

    {
        name:'Dave',
        image: 'img/1.jpg',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },

    {
        name: 'SasukeFan69',
        image: 'img/2.jpg',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi distinctio similique maxime veniam eos cumque nisi iure vel! Ad voluptas labore debitis!',
    },

    {
        name: 'John',
        image: 'img/3.jpg',
        review:'Lorem ipsum dolortlo.',
    },

    {
        name: 'Arthur',
        image: 'img/4.jpg',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi distinctio similique.',
    }
];

let index = 0;

    function updateCustomerInfo() {
        customerImage.src = customers[index].image;
        customerName.textContent = customers[index].name;
        customerText.textContent = customers[index].review;
    }

    function showPreviousCustomer() {
        index = (index - 1 + customers.length) % customers.length;
        updateCustomerInfo();
    }

    function showNextCustomer() {
        index = (index + 1) % customers.length;
        updateCustomerInfo();
    }

    document.querySelector('.prevBtn').addEventListener('click', showPreviousCustomer);
    document.querySelector('.nextBtn').addEventListener('click', showNextCustomer);

    updateCustomerInfo();
})();




