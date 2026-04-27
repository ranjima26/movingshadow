import connectDB from "@/lib/db";
import Product from "@/app/models/Product";
import { notFound } from "next/navigation";
import ProductOptions from "@/app/components/ProductOptions";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  await connectDB();
  const productData = await Product.findById(id).lean();

  if (!productData) {
    notFound();
  }

  // Map database data to the UI structure
  const product = {
    _id: productData._id.toString(),
    name: productData.name,
    price: productData.price,
    imageUrl: productData.imageUrl,
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Shop', href: '/shop' },
      { id: 2, name: productData.category, href: `/shop?category=${productData.category}` },
    ],
    images: [
      {
        src: productData.imageUrl,
        alt: productData.name,
      },
      {
        src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
        alt: 'Secondary shot',
      },
      {
        src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
        alt: 'Tertiary shot',
      },
      {
        src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
        alt: 'Featured shot',
      },
    ],
    colors: [
      { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
      { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
      { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
    ],
    sizes: [
      { name: 'XXS', inStock: false },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      { name: '3XL', inStock: true },
    ],
    description: productData.description,
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'This is a premium product from Moving Shadow. Designed for comfort and style.',
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <span className="font-medium text-gray-500">{product.name}</span>
            </li>
          </ol>
        </nav>

      
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <img alt={product.images[0].alt} src={product.images[0].src} className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden" />
          <img alt={product.images[1].alt} src={product.images[1].src} className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden" />
          <img alt={product.images[2].alt} src={product.images[2].src} className="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden" />
          <img alt={product.images[3].alt} src={product.images[3].src} className="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4" />
        </div>

       
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          
          <ProductOptions productData={product} />

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
          
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
