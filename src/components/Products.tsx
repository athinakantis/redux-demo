import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect } from 'react';
import { fetchProducts } from '../store/productsSlice';
import { useAppDispatch } from '../hooks/hooks';
import ProductCard from './ProductCard';
import './Products.css';
import Cart from './Cart';

function Products() {
    const products = useSelector((state: RootState) => state.products);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <>
            <div className='product-list'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Cart />
        </>
    );
}

export default Products;
