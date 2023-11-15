export type Listing = {
    id: number;
    name: string;
    currency: string;
    minPrice: number;
    maxPrice?: number;
    status: string[];
    featured: boolean;
    imageUrl: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    sizes: number;
    postedBy: string;
    createdAt: string;
};

export const Listings:Listing[] = [
    {
        id: 1,
        featured: true,
        currency: "KES",
        minPrice: 85_000,
        status: ["SALE"],
        name: "1995 Houston HomeStay",
        imageUrl: "https://dreamhome.themesflat.co/wp-content/uploads/2023/09/drh-6-425x338.webp",
        location: "777 Walker street, Houston, Texas",
        bedrooms: 6,
        bathrooms: 6,
        sizes: 1562,
        postedBy: "David Nguyen",
        createdAt: new Date().toDateString()
    },
    {
        id: 2,
        featured: true,
        currency: "KES",
        minPrice: 120_000,
        status: ["SALE"],
        name: "Levington Apartments",
        imageUrl: "https://dreamhome.themesflat.co/wp-content/uploads/2023/09/drh-1-2-425x338.webp",
        location: "430 Lamar Street, Houston, Texas",
        bedrooms: 3,
        bathrooms: 2,
        sizes: 1800,
        postedBy: "Micheal Cera",
        createdAt: new Date().toDateString()
    },
    {
        id: 3,
        featured: true,
        currency: "KES",
        minPrice: 249_350,
        status: ["SALE"],
        name: "Madhouse Apartments",
        imageUrl: "https://dreamhome.themesflat.co/wp-content/uploads/2023/09/drh-2-2-425x338.webp",
        location: "2612 Macarthur Boulevard, Oakland",
        bedrooms: 4,
        bathrooms: 4,
        sizes: 2500,
        postedBy: "Daniel Radcliffe",
        createdAt: new Date().toDateString()
    },
    {
        id: 4,
        featured: false,
        currency: "KES",
        minPrice: 100_350,
        status: ["RENT"],
        name: "Maxime Design Studio",
        imageUrl: "https://demo01.houzez.co/wp-content/uploads/2016/03/205-592x444.jpg",
        location: "2612 Macarthur Boulevard, Oakland",
        bedrooms: 4,
        bathrooms: 4,
        sizes: 2500,
        postedBy: "Daniel Radcliffe",
        createdAt: new Date().toDateString()
    },
    {
        id: 5,
        featured: false,
        currency: "KES",
        minPrice: 100_350,
        status: ["RENT"],
        name: "Maxime Design Studio",
        imageUrl: "https://demo01.houzez.co/wp-content/uploads/2016/02/033-592x444.jpg",
        location: "2612 Macarthur Boulevard, Oakland",
        bedrooms: 4,
        bathrooms: 4,
        sizes: 2500,
        postedBy: "Daniel Radcliffe",
        createdAt: new Date().toDateString()
    },
    {
        id: 6,
        featured: false,
        currency: "KES",
        minPrice: 100_350,
        status: ["RENT"],
        name: "Maxime Design Studio",
        imageUrl: "https://demo01.houzez.co/wp-content/uploads/2016/02/037-592x444.jpg",
        location: "2612 Macarthur Boulevard, Oakland",
        bedrooms: 4,
        bathrooms: 4,
        sizes: 2500,
        postedBy: "Daniel Radcliffe",
        createdAt: new Date().toDateString()
    },
]