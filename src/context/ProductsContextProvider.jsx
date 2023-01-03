import React, { createContext, useEffect, useState } from 'react';

// firebase
import { fs } from '../firebase';
import { collection, query, onSnapshot } from "firebase/firestore";

export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    let top = [];
    let recent = [];
    let popular = [];
    let vegetables = [];
    let fruits = [];
    let meatFish = [];
    let eggs = [];
    let teaCoffe = [];
    let spices = [];
    let dryFruits = [];
    let biscuitCake = [];
    let jamJellie = [];
    let breads = [];

    useEffect(() => {
        const q = query(collection(fs, "products"));
        onSnapshot(q, (querySnapshot) => {
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push({id: doc.id, ...doc.data()});
            });
            setProducts(data);
        });
    }, []);

    for (let i = 0; i < products.length; i ++) {
        let product = products[i];

        if (product.type === 'top-product') {
            top.push(product);
        } else if (product.type === 'recent-product') {
            recent.push(product);
        } else if (product.type === 'popular-now') {
            popular.push(product);
        }

        // filter by category
        if (product.category === 'vegetables') {
            vegetables.push(product);
        } else if (product.category === 'fruits') {
            fruits.push(product);
        } else if (product.category === 'meat-fish') {
            meatFish.push(product);
        } else if (product.category === 'eggs') {
            eggs.push(product);
        } else if (product.category === 'tea-coffe') {
            teaCoffe.push(product);
        } else if (product.category === 'spices') {
            spices.push(product);
        } else if (product.category === 'dry-fruits') {
            dryFruits.push(product);
        } else if (product.category === 'biscuits-cakes') {
            biscuitCake.push(product);
        } else if (product.category === 'jams-jellies') {
            jamJellie.push(product);
        } else if (product.category === 'breads') {
            breads.push(product);
        }
    }

    return (
        <ProductsContext.Provider value={{products, top, recent, popular, vegetables, fruits, meatFish, eggs, teaCoffe, spices, dryFruits, biscuitCake, jamJellie, breads}}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;