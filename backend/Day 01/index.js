const http = require('http');
const url = require("url")

//http://localhost:5000/asdsadsdsadasdd

//http://localhost:5000---Domain
//path

const products = [
    {
        id: 1,
        title: "Men's Casual T-Shirt",
        description: "Soft cotton casual t-shirt for daily wear",
        price: 599,
        discount: 10,
        category: "men",
        brand: "Roadster",
        rating: 4.3,
        stock: 25,
        image: "https://via.placeholder.com/300x400?text=T-Shirt"
    },
    {
        id: 2,
        title: "Women's Kurti",
        description: "Elegant ethnic kurti with modern design",
        price: 1299,
        discount: 15,
        category: "women",
        brand: "Biba",
        rating: 4.5,
        stock: 18,
        image: "https://via.placeholder.com/300x400?text=Kurti"
    },
    {
        id: 3,
        title: "Wireless Bluetooth Headphones",
        description: "Noise cancelling over-ear headphones",
        price: 2999,
        discount: 20,
        category: "electronics",
        brand: "Boat",
        rating: 4.6,
        stock: 40,
        image: "https://via.placeholder.com/300x400?text=Headphones"
    },
    {
        id: 4,
        title: "Running Shoes",
        description: "Lightweight running shoes for everyday workouts",
        price: 2499,
        discount: 12,
        category: "footwear",
        brand: "Nike",
        rating: 4.4,
        stock: 30,
        image: "https://via.placeholder.com/300x400?text=Shoes"
    },
    {
        id: 5,
        title: "Smart Watch",
        description: "Fitness smart watch with heart rate monitor",
        price: 3999,
        discount: 25,
        category: "electronics",
        brand: "Noise",
        rating: 4.2,
        stock: 22,
        image: "https://via.placeholder.com/300x400?text=Smart+Watch"
    },
    {
        id: 6,
        title: "Laptop Backpack",
        description: "Water-resistant backpack with laptop compartment",
        price: 1499,
        discount: 18,
        category: "accessories",
        brand: "American Tourister",
        rating: 4.5,
        stock: 35,
        image: "https://via.placeholder.com/300x400?text=Backpack"
    }
];

const users = [
    {
        id: 1,
        name: "Virendra Singh",
        email: "virendra@gmail.com",
        phone: "9876543210",
        role: "admin",
        isVerified: true,
        status: "active",
        createdAt: "2024-01-15",
        avatar: "https://via.placeholder.com/150?text=VS"
    },
    {
        id: 2,
        name: "Amit Sharma",
        email: "amit@gmail.com",
        phone: "9123456789",
        role: "user",
        isVerified: true,
        status: "active",
        createdAt: "2024-02-10",
        avatar: "https://via.placeholder.com/150?text=AS"
    },
    {
        id: 3,
        name: "Pooja Verma",
        email: "pooja@gmail.com",
        phone: "9988776655",
        role: "user",
        isVerified: false,
        status: "inactive",
        createdAt: "2024-03-05",
        avatar: "https://via.placeholder.com/150?text=PV"
    },
    {
        id: 4,
        name: "Rahul Mehta",
        email: "rahul@gmail.com",
        phone: "9012345678",
        role: "seller",
        isVerified: true,
        status: "active",
        createdAt: "2024-04-01",
        avatar: "https://via.placeholder.com/150?text=RM"
    },
    {
        id: 5,
        name: "Sneha Patel",
        email: "sneha@gmail.com",
        phone: "9090909090",
        role: "user",
        isVerified: true,
        status: "blocked",
        createdAt: "2024-04-18",
        avatar: "https://via.placeholder.com/150?text=SP"
    }
];

const server = http.createServer(
    (req, res) => {
        const urlParser = url.parse(req.url, true)
        if (urlParser.pathname == "/products") {
            res.end(JSON.stringify(products))

        } else if (urlParser.pathname == "/users") {
            res.end(JSON.stringify(users))
        } else {
            res.end("Mere Pass kuch bhi nhi hai")
        }
    }
)



server.listen(
    "5000",
    () => {
        console.log("Server is running Port Number 5000")
    }
)