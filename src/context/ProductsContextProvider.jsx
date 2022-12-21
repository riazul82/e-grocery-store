import React, { createContext, useEffect, useRef, useState } from 'react';
import { collection, getDocs } from "firebase/firestore"; 
import { fs } from "../firebase";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState(null);
    const [top, setTop] = useState(null);
    const [recent, setRecent] = useState(null);
    const [popular, setPopular] = useState(null);
    const [vegetables, setVegetables] = useState(null);
    const [fruits, setFruits] = useState(null);
    const [meatFish, setMeatFish] = useState(null);
    const [eggs, setEggs] = useState(null);
    const [teaCoffe, setTeaCoffe] = useState(null);
    const [spices, setSpices] = useState(null);
    const [dryFruits, setDryFruits] = useState(null);
    const [biscuitCake, setBiscuitCake] = useState(null);
    const [jamJellie, setJamJellie] = useState(null);
    const [breads, setBreads] = useState(null);

    const productsRef = useRef([]);

    const topRef = useRef([]);
    const recentRef = useRef([]);
    const popularRef = useRef([]);

    const vegetablesRef = useRef([]);
    const fruitsRef = useRef([]);
    const meatFishRef = useRef([]);
    const eggsRef = useRef([]);
    const teaCoffeRef = useRef([]);
    const spicesRef = useRef([]);
    const dryFruitsRef = useRef([]);
    const biscuitCakeRef = useRef([]);
    const jamJellieRef = useRef([]);
    const breadsRef = useRef([]);

    const getProductsData = async () => {
        try {
            const querySnapshot = await getDocs(collection(fs, "products"));
            querySnapshot.forEach((doc) => {
                let product = doc.data();

                productsRef.current.push({...product, id: doc.id});

                // filter by types
                if (product.type === 'top-product') {
                    topRef.current.push({...product, id: doc.id});
                } else if (product.type === 'recent-product') {
                    recentRef.current.push({...product, id: doc.id});
                } else if (product.type === 'popular-now') {
                    popularRef.current.push({...product, id: doc.id});
                }

                // filter by category
                if (product.category === 'vegetables') {
                    vegetablesRef.current.push({...product, id: doc.id});
                } else if (product.category === 'fruits') {
                    fruitsRef.current.push({...product, id: doc.id});
                } else if (product.category === 'meat-fish') {
                    meatFishRef.current.push({...product, id: doc.id});
                } else if (product.category === 'eggs') {
                    eggsRef.current.push({...product, id: doc.id});
                } else if (product.category === 'tea-coffe') {
                    teaCoffeRef.current.push({...product, id: doc.id});
                } else if (product.category === 'spices') {
                    spicesRef.current.push({...product, id: doc.id});
                } else if (product.category === 'dry-fruits') {
                    dryFruitsRef.current.push({...product, id: doc.id});
                } else if (product.category === 'biscuits-cakes') {
                    biscuitCakeRef.current.push({...product, id: doc.id});
                } else if (product.category === 'jams-jellies') {
                    jamJellieRef.current.push({...product, id: doc.id});
                } else if (product.category === 'breads') {
                    breadsRef.current.push({...product, id: doc.id});
                }
            });

            setProducts(productsRef.current);
            setTop(topRef.current); 
            setRecent(recentRef.current); 
            setPopular(popularRef.current); 
            setVegetables(vegetablesRef.current);
            setFruits(fruitsRef.current);
            setMeatFish(meatFishRef.current);
            setEggs(eggsRef.current);
            setTeaCoffe(teaCoffeRef.current);
            setSpices(spicesRef.current);
            setDryFruits(dryFruitsRef.current);
            setBiscuitCake(biscuitCakeRef.current);
            setJamJellie(jamJellieRef.current);
            setBreads(breadsRef.current);

            productsRef.current = [];
            topRef.current = [];
            recentRef.current = [];
            popularRef.current = [];
            vegetablesRef.current = [];
            fruitsRef.current = [];
            meatFishRef.current = [];
            eggsRef.current = [];
            teaCoffeRef.current = [];
            spicesRef.current = [];
            dryFruitsRef.current = [];
            biscuitCakeRef.current = [];
            jamJellieRef.current = [];
            breadsRef.current = [];

        } catch (err) {
            console.log(err.message);
        }
    };
    
    useEffect(() => {
        getProductsData();
    }, []);

    return (
        <ProductsContext.Provider value={{products, top, recent, popular, vegetables, fruits, meatFish, eggs, teaCoffe, spices, dryFruits, biscuitCake, jamJellie, breads}}>
            { children }
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;