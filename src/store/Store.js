import create from 'zustand';
import products from '../database/products';
import {persist} from 'zustand/middleware';

const useStore = create(
    persist(
        set=>({
            products,
            addToCart: (id)=> set(state=>({...state,products:[...state.products.map(product=>{
                if(product.id === id) {
                    return {...product,amount:1,inCart:true}
                } else {
                    return product;
                }
            })]})),
            increase: (id,oldAmount)=> set(state=>({...state,products:[...state.products.map(product=>{
                if(product.id === id) {
                    return {...product,amount:oldAmount+1}
                } else {
                    return product;
                }
            })]})),
            decrease: (id,oldAmount)=> set(state=>({...state,products:[...state.products.map(product=>{
                if(product.id === id) {
                    let newAmount = oldAmount-1;
                    if (newAmount === 0) {
                        return {...product,amount:newAmount,inCart:false}
                    }
                    else return {...product,amount:newAmount}
                } else {
                    return product;
                }
            })]})),
            remove: (id)=> set(state=>({...state,products:[...state.products.map(product=>{
                if(product.id === id) {
                    return {...product,amount:0,inCart:false}
                } else {
                    return product;
                }
            })]})),
            reset: ()=> set(state=>({...state,products: [...state.products.map(product=>{
                return {...product,inCart:false,amount:0}
            })]}))
        }),
        {
            name:'products',
        }
    )
)



export default useStore;

