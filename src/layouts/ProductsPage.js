import React from 'react'
import SectionTitle from '../components/SectionTitle';
import CardsList from '../components/CardsList';
import products from '../database/products';

const ProductsPage = () => {
    return (
        <>
            <SectionTitle>
                Full List of Products
            </SectionTitle>
            <CardsList cards={products}/>
        </>
    )
}

export default ProductsPage;