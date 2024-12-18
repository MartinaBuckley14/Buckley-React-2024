const products = [
    {
        id: "knor3",
        image: "/img/koinor.jpeg",
        name: "Koinor 3000",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, nisi. Velit earum corrupti vero quis accusamus iusto blanditiis perferendis est a? Accusantium voluptatibus, voluptate illo eius molestiae repudiandae expedita tenetur.",
        price: 3500,
        category: "semi-sinking"
    },
    {
        id: "tei60",
        image: "/img/modelos.teitei.jpeg",
        name: "Teitei 60",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, nisi. Velit earum corrupti vero quis accusamus iusto blanditiis perferendis est a? Accusantium voluptatibus, voluptate illo eius molestiae repudiandae expedita tenetur.",
        price: 1500,
        category: "semi-sinking"
    },
    {
        id: "tei30",
        image: "/img/rufa.jpeg",
        name: "Teitei 30",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, nisi. Velit earum corrupti vero quis accusamus iusto blanditiis perferendis est a? Accusantium voluptatibus, voluptate illo eius molestiae repudiandae expedita tenetur.",
        price: 2300,
        category: "semi-sinking"
    },
    {
        id: "ruf40",
        image: "/img/rufa.jpeg",
        name: "Rufa 40",
        description: "",
        price: 3500,
        category: "semi-sinking"
    },
    {
        id: "banUL",
        image: "/img/ban.12cm.jpeg",
        name: "Bananita UL",
        description: "",
        price: 3500,
        category: "sinking"
    },
    {
        id: "ulwk65",
        image: "/img/rufa.jpeg",
        name: "Ultra walker 65",
        description: "",
        price: 3500,
        category: "sinking"
    },
    {
        id: "mjpopp",
        image: "/img/rufa.jpeg",
        name: "Mini Jack Popper",
        description: "",
        price: 3500,
        category: "semi-sinking"
    },
    {
        id: "micstk",
        image: "/img/rufa.jpeg",
        name: "Micro Stick",
        description: "",
        price: 3500,
        category: "sinking"
    },
    {
        id: "stk60",
        image: "/img/rufa.jpeg",
        name: "Stick 60",
        description: "",
        price: 3500,
        category: "sinking"
    }
];

const getProducts = () => {
    return new Promise ((resolve,reject) => {
        setTimeout (() => {
            resolve(products)
        },50)
    })
}

export {getProducts}
