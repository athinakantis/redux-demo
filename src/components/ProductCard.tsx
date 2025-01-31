import { Product } from '../types/product.types';
import {addToCart} from '../store/cartSlice';
import { useAppDispatch } from '../hooks/hooks';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { title, price, description, category, image } = product;
    
    const dispatch = useAppDispatch()
    
    return (
        <div className='product-card'>
            <p>{title}</p>
            <img src={image} alt={title} />
            <p>€{price}</p>
            <p>{category}</p>
            <button onClick={() => dispatch(addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
            }))} type='button'>Add to cart</button>
        </div>
    );
};

export default ProductCard;
