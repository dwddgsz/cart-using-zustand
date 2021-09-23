import create from 'zustand';
import products from '../database/products';

const useStore = create(set=>({
    products,
    addToCart: (id)=> set(state=>({...state,products:[...state.products.map(product=>{
        if(product.id === id) {
            return {...product,amount:1,inCart:true}
        } else {
            return product;
        }
    })]})),
}))



export default useStore;

