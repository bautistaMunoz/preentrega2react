const products = [
  {
    id: "cervezak1",
    name: "Cerveza kolsch",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias commodi numquam hic doloribus, molestias corrupti, aliquid, ab ratione sed dignissimos possimus maxime placeat. Voluptas maiores maxime nihil aperiam quibusdam. Nam!",
    price: 1500,
    stock: 7,
    image: "/img/images.jPG",
    category: "rubia"
  },
  {
    id: "cervezak2",
    name: "Cerveza logt",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias commodi numquam hic doloribus, molestias corrupti, aliquid, ab ratione sed dignissimos possimus maxime placeat. Voluptas maiores maxime nihil aperiam quibusdam. Nam!",
    price: 1500,
    stock: 10,
    image: "/img/images.jPG",
    category: "rubia"
  },
  {
    id: "cervezah1",
    name: "Cerveza honeytur",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias commodi numquam hic doloribus, molestias corrupti, aliquid, ab ratione sed dignissimos possimus maxime placeat. Voluptas maiores maxime nihil aperiam quibusdam. Nam!",
    price: 1700,
    stock: 4,
    image: "/img/imagesRubia.jpg",
    category: "honey"
  },
  {
    id: "cervezah2",
    name: "Cerveza honeyior",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias commodi numquam hic doloribus, molestias corrupti, aliquid, ab ratione sed dignissimos possimus maxime placeat. Voluptas maiores maxime nihil aperiam quibusdam. Nam!",
    price: 1700,
    stock: 3,
    image: "/img/imagesRubia.jpg",
    category: "honey"
  },
  {
    id: "cervezai1",
    name: "Cerveza ipa stout",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias commodi numquam hic doloribus, molestias corrupti, aliquid, ab ratione sed dignissimos possimus maxime placeat. Voluptas maiores maxime nihil aperiam quibusdam. Nam!",
    price: 1900,
    stock: 2,
    image: "/img/imagesIpa.jpg",
    category: "ipa"
  },
  {
    id: "cervezai2",
    name: "Cerveza ipa touy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias commodi numquam hic doloribus, molestias corrupti, aliquid, ab ratione sed dignissimos possimus maxime placeat. Voluptas maiores maxime nihil aperiam quibusdam. Nam!",
    price: 1900,
    stock: 12,
    image: "/img/imagesIpa.jpg",
    category: "ipa"
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};