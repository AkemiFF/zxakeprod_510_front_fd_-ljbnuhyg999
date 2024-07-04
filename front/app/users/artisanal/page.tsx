/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kix5qxUely1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Undo2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ArtisanalListe() {
  const router = useRouter();
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Cozy Blanket",
      price: 29.99,
      description: "Warm and Soft for Chilly Nights",
      image: "/placeholder.svg",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Autumn Mug",
      price: 12.99,
      description: "Enjoy Your Hot Beverages in Style",
      image: "/placeholder.svg",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Fall Fragrance Candle",
      price: 16.99,
      description: "Fill Your Space with a Cozy Scent",
      image: "/placeholder.svg",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Autumn Leaves Wall Art",
      price: 39.99,
      description: "Decorate Your Space with Nature's Beauty",
      image: "/placeholder.svg",
      rating: 4.1,
    },
    {
      id: 5,
      name: "Fall Harvest Wreath",
      price: 49.99,
      description: "Welcome the Season with a Beautiful Wreath",
      image: "/placeholder.svg",
      rating: 4.6,
    },
    {
      id: 6,
      name: "Spiced Apple Cider Syrup",
      price: 12.99,
      description: "Enhance Your Drinks with Delicious Syrup",
      image: "/placeholder.svg",
      rating: 4.3,
    },
    {
      id: 7,
      name: "Fall Foliage Table Runner",
      price: 19.99,
      description: "Decorate Your Table with Autumn Leaves",
      image: "/placeholder.svg",
      rating: 4.7,
    },
    {
      id: 8,
      name: "Fall Fashion Hat",
      price: 24.99,
      description: "Complete Your Autumn Outfit with a Stylish Hat",
      image: "/placeholder.svg",
      rating: 4.4,
    },
  ]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [ratingRange, setRatingRange] = useState([0, 5]);
  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        product.rating >= ratingRange[0] &&
        product.rating <= ratingRange[1]
    );
    setFilteredProducts(filtered);
  }, [priceRange, ratingRange, products]);
  const handlePriceRangeChange = (values) => {
    setPriceRange(values);
  };
  const handleRatingRangeChange = (values) => {
    setRatingRange(values);
  };
  return (
    <section className="w-full py-12">
      <Undo2
        className="cursor-pointer mb-5 text-white"
        onClick={() => router.back()}
      />
      <div className="container grid gap-6 px-4 md:gap-8 md:px-6">
        <header className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold tracking-tight">
              Featured Products
            </h1>
            <p className="text-muted-foreground">
              Discover our latest collection of stylish and practical items.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Input
              type="search"
              placeholder="Search products..."
              className="flex-1 px-4 py-2 bg-white rounded-md dark:bg-gray-950"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <FilterIcon className="w-5 h-5" />
                  <span>Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <div className="text-sm font-medium">Price</div>
                    <Slider
                      min={0}
                      max={100}
                      step={1}
                      value={[priceRange]}
                      onValueChange={handlePriceRangeChange}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                  <div className="grid gap-1">
                    <div className="text-sm font-medium">Rating</div>
                    <Slider
                      min={0}
                      max={5}
                      step={0.1}
                      value={[ratingRange]}
                      onValueChange={handleRatingRangeChange}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{ratingRange[0]}</span>
                      <span>{ratingRange[1]}</span>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" className="flex items-center gap-2">
              <ShoppingCartIcon className="w-5 h-5" />
              <span>Cart</span>
            </Button>
          </div>
        </header>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="grid gap-4 overflow-hidden border rounded-lg"
            >
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img
                src="/placeholder.svg"
                alt={product.name}
                width={400}
                height={400}
                className="object-cover w-full aspect-square"
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(Math.floor(product.rating))].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-primary" />
                  ))}
                  {product.rating % 1 !== 0 && (
                    <StarIcon className="w-5 h-5 fill-primary" />
                  )}
                  {[...Array(5 - Math.ceil(product.rating))].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-5 h-5 fill-muted stroke-muted-foreground"
                    />
                  ))}
                  <span className="text-sm text-muted-foreground">
                    ({product.rating.toFixed(1)})
                  </span>
                </div>
                <p className="text-base font-semibold">
                  ${product.price.toFixed(2)}
                </p>
                <Button variant="outline" className="w-full mt-4">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
