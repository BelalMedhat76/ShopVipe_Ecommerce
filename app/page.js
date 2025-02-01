import Hero from 'components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Newsletter from 'components/Newsletter';
import Categories from './categories/page'
export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Newsletter />
    </div>
  );
}
