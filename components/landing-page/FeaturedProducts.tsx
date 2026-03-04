
import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import ProductCard from "@/components/products/product-card";
// import { getFeaturedProducts } from "@/lib/products/product-select";
import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-card";

export default async function FeaturedProducts() {
    const featuredProducts = [
        {
            id: 1,
            name: "ParityKit",
            description: "A toolkit for creating parity products ",
            tags: ["SaaS", "Pruductivity", "tools"],
            votes: 612,
            isFeatured: true,
        },
        {
            id: 2,
            name: "Modern full stack NEXT Js course",
            description: "Learn to build production ready full stack apps ",
            tags: ["Course", "Pricing", "NEXT.Js"],
            votes: 124,
            isFeatured: false,
        },
    ]
    // const featuredProducts = await getFeaturedProducts();
    return (
        <section className="py-20 bg-muted/20">
            <div className="wrapper">
                <div className="flex items-center justify-between mb-8">
                    <SectionHeader
                        title="Featured Today"
                        icon={StarIcon}
                        description="Top picks from our community this week"
                    />
                    <Button variant="outline" asChild className="hidden sm:flex">
                        <Link href="/explore">
                            View All <ArrowUpRightIcon className="size-4" />
                        </Link>
                    </Button>
                </div>
                <div className="grid-wrapper">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}