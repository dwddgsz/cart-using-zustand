const products = [
    {
        data: {
            title:'Coaching',
            description: '150h of pure coaching stuff',
            author: 'Sam Smith',
            rate:4,
            price:99,
            isBestseller:true,
            inCart:false,
            amount:0,
        },
        key: 1,
    },
    {
        data: {
            title:'Graphics',
            description: 'Using Adobe, Figma and Gimp',
            author: 'Adam Doe',
            price:59,
            rate:4,
            isBestseller:true,
            inCart:false,
            amount:0,
        },
        key: 2,
    },
    {
        data: {
            title:'Copywriting',
            description: 'You are going to become top paid copywriter after this lecture. Author has 10 years of experience as copywriter at Google',
            author: 'Sam Adams',
            rate:4.6,
            price:349,
            isBestseller:true,
            inCart:false,
            amount:0,
        },
        key: 3,
    },
    {
        data: {
            title:'Content Cretor',
            description: 'We will teach you how to be creative',
            author: 'John Adams',
            rate:4.6,
            price:49,
            isBestseller:true,
            inCart:false,
            amount:0,
        },
        key: 4,
    },
    {
        data: {
            title:'Databases',
            description: '30h of lectures + 50h of exercises',
            author: 'Smith Jones',
            rate:4.4,
            price:49,
            isBestseller:true,
            inCart:false,
            amount:0,
        },
        key: 5,
    },
    {
        data: {
            title:'Programming',
            description: '#1 on the market. Free support',
            author: 'Adam Chris',
            rate:5,
            price:149,
            isBestseller:true,
            inCart:false,
            amount:0,
        },
        key: 6,
    },
    {
        data: {
            title:'Coaching',
            description: '150h of pure coaching stuff',
            author: 'Sam Smith',
            rate:4.5,
            price:99,
            isBestseller:false,
            inCart:false,
            amount:0,
        },
        key: 7,
    },
    {
        data: {
            title:'Graphics',
            description: 'Using Adobe, Figma and Gimp',
            author: 'Adam Doe',
            rate:4.5,
            price:59,
            isBestseller:false,
            inCart:false,
            amount:0,
        },
        key: 8,
    },
    {
        data: {
            title:'Copywriting',
            description: 'You are going to become top paid copywriter after this lecture. Author has 10 years of experience as copywriter at Google',
            author: 'Sam Adams',
            rate:4.5,
            price:349,
            isBestseller:false,
            inCart:false,
            amount:0,
        },
        key: 9,
    },
    {
        data: {
            title:'Content Cretor',
            description: 'We will teach you how to be creative',
            author: 'John Adams',
            rate:4.5,
            price:49,
            isBestseller:false,
            inCart:false,
            amount:0,
        },
        key: 10,
    },
    {
        data: {
            title:'Databases',
            description: '30h of lectures + 50h of exercises',
            author: 'Smith Jones',
            rate:4.5,
            price:49,
            isBestseller:false,
            inCart:false,
            amount:0,
        },
        key: 11,
    },
    {
        data: {
            title:'Programming',
            description: '#1 on the market. Free support',
            author: 'Adam Chris',
            rate:4.5,
            price:149,
            isBestseller:false,
            inCart:false,
            amount:0,
        },
        key: 12,
    },
    {
        data: {
            title:'Coaching',
            description: '150h of pure coaching stuff',
            author: 'Sam Smith',
            rate:4.5,
            price:99,
            isBestseller:false,
            inCart:false,
            amount:0,
        },
        key: 13,
    },
    {
        data: {
            title:'Graphics',
            description: 'Using Adobe, Figma and Gimp',
            author: 'Adam Doe',
            rate:4.5,
            price:59,
            isBestseller:false,
            inCart:false,
            amount:0,
        },
        key: 14,
    },
    {
        data: {
            title:'Copywriting',
            description: 'You are going to become top paid copywriter after this lecture. Author has 10 years of experience as copywriter at Google',
            author: 'Sam Adams',
            rate:4.5,
            price:349,
            isBestseller:false,
            inCart:false,
            amount:0,
        },
        key: 15,
    },
    {
        data: {
            title:'Content Cretor',
            description: 'We will teach you how to be creative',
            author: 'John Adams',
            rate:4.5,
            price:49,
            isBestseller:false,
            inCart:false,
            amount:0,
        },
        key: 16,
    },
    {
        data: {
            title:'Databases',
            description: '30h of lectures + 50h of exercises',
            author: 'Smith Jones',
            rate:4.5,
            price:49,
            isBestseller:false,
            inCart:false,
            amount:0,
        },
        key: 17,
    },
    {
        data: {
            title:'Programming',
            description: '#1 on the market. Free support',
            author: 'Adam Chris',
            rate:4.5,
            price:149,
            isBestseller:false,
            inCart:false,
            amount:0,
        },
        key: 18,
    },
    {
        data: {
            title:'Coaching',
            description: '150h of pure coaching stuff',
            author: 'Sam Smith',
            rate:4.5,
            price:99,
            isBestseller:false,
            inCart:false,
            amount:0,
        },
        key: 19,
    },
    {
        data: {
            title:'Graphics',
            description: 'Using Adobe, Figma and Gimp',
            author: 'Adam Doe',
            rate:4.5,
            price:59,
            isBestseller:false,
            inCart:false,
            amount:0,
        },
        key: 20,
    },
    {
        data: {
            title:'Copywriting',
            description: 'You are going to become top paid copywriter after this lecture. Author has 10 years of experience as copywriter at Google',
            author: 'Sam Adams',
            rate:4.5,
            price:349,
            isBestseller:false,
            inCart:false,
            amount:0,
        },
        key: 21,
    },
    {
        data: {
            title:'Content Cretor',
            description: 'We will teach you how to be creative',
            author: 'John Adams',
            rate:4.5,
            price:49,
            isBestseller:false,
            inCart:false,
            amount:0,
        },
        key: 22,
    },
    {
        data: {
            title:'Databases',
            description: '30h of lectures + 50h of exercises',
            author: 'Smith Jones',
            rate:4.5,
            price:49,
            isBestseller:false,
            inCart:false,
            amount:0,
        },
        key: 23,
    },
    {
        data: {
            title:'Programming',
            description: '#1 on the market. Free support',
            author: 'Adam Chris',
            rate:4.5,
            price:149,
            isBestseller:false,
            inCart:false,
            amount:0,
        },
        key: 24,
    },
]

export default products;