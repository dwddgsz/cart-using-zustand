import React from 'react'
import SectionTitle from '../components/SectionTitle';
import CardsList from '../components/CardsList';
import useStore from '../store/Store';

const ProductsPage = () => {

    const products = useStore(state=>state.products)

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