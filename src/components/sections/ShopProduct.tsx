import dynamic from 'next/dynamic';
const PortfolioFilter1 = dynamic(() => import("../elements/PortfolioFilter1"), { ssr: false });

export default function ShopProduct() {
  return (
    <section className="featured-products">
      <div className="auto-container">
        <div className="mixitup-gallery">
          <PortfolioFilter1 />
        </div>
      </div>
    </section>
  );
}
