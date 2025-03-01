const flavors = [
    {
        name: "Strawberry Love",
        description: "O sorvete de morango é uma sobremesa cremosa e refrescante, feita com morangos frescos e leite. Seu sabor doce e suave combina perfeitamente com a textura aveludada, proporcionando uma experiência deliciosa e reconfortante. Ideal para dias quentes ou como uma opção doce a qualquer hora do dia.",
        image: "imagens/IMG_1652.png",
        frutas: "imagens/frutasmorango.png",
        background: "#f04e8a",
        smallFlavors: [1, 2]
    },
    {
        name: "Chocolate Dream",
        description: "Um clássico irresistível, cremoso e rico em sabor, feito com o melhor cacau para encantar qualquer paladar. Perfeito para quem não resiste a uma sobremesa intensa e marcante.",
        image: "imagens/chocolate.png",
        frutas: "imagens/chocolate explosion - Valrhona.png",
        background: "#6f4e37",
        smallFlavors: [2, 3]
    },
    {name: "Peach Paradise",
        description: "Deliciosamente suave e refrescante, este sorvete combina a doçura natural do pêssego com uma textura cremosa, criando uma experiência frutada e leve, perfeita para os dias mais quentes.",
        image: "imagens/pessego.png",
        frutas: "imagens/frutapessego.png",
        background: "#ff4e50",
        smallFlavors: [3, 4]
    },
    {
        name: "Blueberry Bliss",
        description: "Refrescante e delicado, combina a cremosidade do sorvete com o sabor doce e levemente ácido da blueberry. Ideal para quem ama sabores frutados e sofisticados.",
        image: "imagens/blueberry.png",
        frutas: "imagens/frutablue.png",
        background: "#4a90e2",
        smallFlavors: [4, 0]
    },
    {
        name: "Vanilla Delight",
        description: "Suave e aconchegante, com aquele toque clássico e aroma envolvente da verdadeira baunilha. Uma opção perfeita para acompanhar sobremesas ou saborear sozinho.",
        image: "imagens/IMG_1653.png",
        frutas: "imagens/VANILLA.png",
        background: "#cab568",
        smallFlavors: [0, 1]
    },
];

// configurações iniciais
let currentMain = 0;

function updateScreen() {
    // atualiza o principal
    const main = flavors[currentMain];
    document.getElementById('title').textContent = main.name;
    document.getElementById('description').textContent = main.description;
    document.getElementById('mainIceCream').src = main.image;
    document.getElementById('frutas').src = main.frutas;
    document.body.style.backgroundColor = main.background;

    // atualiza os dois sorvetes pequenos fixos
    const small1 = flavors[main.smallFlavors[0]];
    const small2 = flavors[main.smallFlavors[1]]; 

    document.getElementById('smallIce1').src = small1.image;
    document.getElementById('smallIce1').setAttribute("onclick", `selectFlavor(${main.smallFlavors[0]})`);

    document.getElementById('smallIce2').src = small2.image;
    document.getElementById('smallIce2').setAttribute("onclick", `selectFlavor(${main.smallFlavors[1]})`);
}

function selectFlavor(index) {
    currentMain = index;
    updateScreen();
}

// inicializa a tela
updateScreen();