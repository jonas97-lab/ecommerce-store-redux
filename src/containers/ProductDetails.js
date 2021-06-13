import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
	removeSelectedProducts,
	fetchProduct,
} from '../redux/actions/productActions'

function ProductDetails() {
	const { productId } = useParams()
	const dispatch = useDispatch()
	const product = useSelector((state) => state.product)

	useEffect(() => {
		if (productId && productId !== '') dispatch(fetchProduct(productId))
		return () => {
			dispatch(removeSelectedProducts())
		}
	}, [productId])

	return (
		<div className='ui grid container'>
			{Object.keys(product).length === 0 ? (
				<div>Loading ... </div>
			) : (
				<div className='ui placeholder segment'>
					<div className='ui two column stackable center aligned grid'>
						<div className='ui vertical divider'>AND</div>
						<div className='middle aligned row'>
							<div className='column lp'>
								<img
									className='ui fluid image'
									src={product.image}
									alt={product.title}
								/>
							</div>
							<div className='column rp'>
								<h1>{product.title}</h1>
								<h2 className='ui teal tag label'>$ {product.price}</h2>
								<h3 className='ui brown block header'>{product.category}</h3>
								<p>{product.description}</p>
								<div className='ui vertical animated button' tabIndex='0'>
									<div className='hidden content'>
										<i className='shop icon'></i>
									</div>
									<div className='visible content'>Add to Cart</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default ProductDetails
