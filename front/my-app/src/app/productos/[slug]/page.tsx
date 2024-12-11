const Product = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return <h1>Product {slug}</h1>;
};

export default Product;
