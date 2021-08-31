import { createServer, Model, RestSerializer } from "miragejs";

export default function setupMockServer() {
    createServer({
        serializers: {
            application: RestSerializer
        },

        models: {
            user: Model
        },

        routes() {
            this.namespace = "api";
            this.timing = 3000;
            this.resource("users");
        },

        seeds(server) {
            server.create("user", {
                id: 1, name: "Men's Vega Running Shoes", img: "https://m.media-amazon.com/images/I/71iXen7CNrL._AC_UL480_FMwebp_QL65_.jpg", price: 600, mrp: 1000, description: ['Closure: Lace-Up', 'Shoe Width: Medium',
                    'Material: Mesh',
                    'Lifestyle: Sports',
                    'Product Type: Running Shoes',
                    'Warranty Type: Manufacturer',
                    'Product warranty against manufacturing defects: 90 days',
                    'Care Instructions: Allow your pair of shoes to air and de-odorize at regular basis; Use Shoe bags to prevent any stains or mildew; Dust any dry dirt from the surface using a clean cloth; Do not use Polish or Shiner']
            });
            server.create("user", {
                id: 2, name: "Reebok Men's Advanced Trainer shoe", img: 'https://m.media-amazon.com/images/I/71XAwuGa9BL._UX575_.jpg', mrp: 6000, price: 3500, description: ['Sole: Ethylene Vinyl Acetate',
                    'Closure: Lace-Up',
                    'Shoe Width: Medium',
                    'These are sports shoes with lace up closure',
                    'Has rubber outersole material']
            });
            server.create("user", {
                id: 3, name: "Puma Men's Nitro Running Shoe", img: 'https://m.media-amazon.com/images/I/81dVruPYn3S._UX575_.jpg', mrp: 9820, price: 7000, description: ['Sole: Rubber',
                    'Closure: Lace-Up',
                    'Shoe Width: Medium',
                    'Style Name:-Velocity Nitro Mens Running Shoes',
                    'Upper Material:-Textile',
                    'Lower Material:-Rubber',
                    'Care Instructions: Wipe with a clean dry cloth',
                    'Warranty Period: 90 Days Manufacturers Warranty']
            });
            server.create("user", {
                id: 4, name: "Puma Unisex-Adult Yuri Idp Running Shoe", img: 'https://m.media-amazon.com/images/I/81C4-6WRF6L._UX575_.jpg', mrp: 2000, price: 1540, description: ['Sole: Rubber',
                    'Closure: Lace-Up',
                    'Shoe Width: Medium',
                    'Style Name:-Yuri IDP',
                    'Upper Material:-Mesh',
                    'Lower Material:-Rubber',
                    'Care Instructions: Wipe with a clean dry cloth',
                    'Warranty Period: 90 Days Manufacturers Period']
            });
            server.create("user", {
                id: 5, name: "Nike Men's Downshifter 11 Running Shoe", img: 'https://m.media-amazon.com/images/I/81HOL5l1leS._UX575_.jpg', mrp: 4000, price: 2800, description: ['Closure: Lace-Up',
                    'Shoe Width: Medium',
                    'Mesh upper for perfect breathability']
            });
            server.create("user", {
                id: 6, name: "Nivia PLUNK Jogging Shoe", img: 'https://m.media-amazon.com/images/I/61cJHsUw2EL._UY575_.jpg', mrp: 1000, price: 950, description: ['Sole: EVA',
                    'Closure: Lace Up',
                    'Push your workout further with the comfort and breathability of these running Shoes',
                    'Ultra lightweight design provides actual feelings of being barefooted for a more comfortable and natural walk',
                    'Mesh structure offers incredible breathability and quick drying properties',
                    'Rubber & eva outsole provides excellent traction and stability for various surfaces and terrains',
                    'In - box Contents: 1 Pair of shoes']
            });
            server.create("user", {
                id: 7, name: "Bacca Bucci Marvel Men Fashion Sneakers", img: 'https://m.media-amazon.com/images/I/71jgR+mHB+S._UY575_.jpg', mrp: 3000, price: 1300, description: ['Sole: Phylon-Rubber & Light weight EVA',
                    'Closure: Lace-Up',
                    'Shoe Width: Medium,The fashion style will give you an attractive look.',
                    'AIR CUSHION OUTSOLE Visible Air unit in the heel absorb impact. Air cushion sole makes for extra comfort and cushioning with every step.',
                    'COMFORTABLE SOFT INSOLES The insole of this shoe are highly elastic, breathable memory sponge that provides stable lateral movement and skid resistance'
                ]
            });
            server.create("user", {
                id: 8, name: "Centrino Men Formal Shoes", img: 'https://m.media-amazon.com/images/I/71x2B+qVzQL._UY575_.jpg', mrp: 800, price: 450, description: ['Closure: Lace-Up',
                    'Shoe Width: Medium',
                    'Outer Material: Synthetic',
                    'Product Type: Mens Formal Shoes',
                    'Shoe Width: Medium',
                    'Closure Type: Lace- Up',
                    'Toe Style: Closed Toe',
                ]
            });
            server.create("user", {
                id: 9, name: "Men's Wonder-13 Sports Running Shoes", img: 'https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL320_.jpg', mrp: 2000, price: 450, description: ['Sole: Ethylene Vinyl Acetate',
                    'Closure: Lace-Up',
                    'Shoe Width: Medium',
                    'Durable and long lasting material',
                    'Very light weight and comfortable to wear',
                    'Easy to maintain'
                ]
            });
            server.create("user", {
                id: 10, name: "Kraasa Leather Long Boots for Men", img: 'https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL320_.jpg', mrp: 8745, price: 5555, description: ['Sole: Polyvinyl Chloride',
                    'Closure: Lace-Up',
                    'Shoe Width: Medium',
                    'Material : you will love this stylish jungle boots. It features a synthetic leather upper, style for easy fit, PVC sole, soft lining, cushiony memory foam insole for comfort and support, and a non-marking outsole. Manmade materials',
                    'Feature : extremely lightweight material , it is nice for everyday use, or wedding . This unique design and stylish shoes is to maximize your fashion'
                ]
            });
        }
    });
}
