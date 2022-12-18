import React, {useState} from 'react';
import { BsEye } from 'react-icons/bs';

const AddProductForm = () => {
    const [previeToggle, setPreviewToggle] = useState(false);

    const [product, setProduct] = useState({
        name: '',
        price: '',
        category: '',
        type: '',
        weight: '',
        unit: 'kg',
        imgUrl: ''
    });

    const handleChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
    }

    const handleClick = () => {
        setPreviewToggle(!previeToggle);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="addProductForm">
                <input type="text" name="name" onChange={handleChange} placeholder="Product name" required />
                <input type="number" name="price" onChange={handleChange} placeholder="Product price" required />
                
                <div className="productInputBox">
                    <label htmlFor="category">Product Category</label>
                    <select name="category" id="category" value={product.category} onChange={handleChange} required>
                        <option value="">Select Category</option>
                        <option value="vegetables">Vegetables</option>
                        <option value="fruits">Fruits</option>
                        <option value="meat-fish">Meat & Fish</option>
                        <option value="eggs">Eggs</option>
                        <option value="tea-coffe">Tea & Coffe</option>
                        <option value="spices">Spices</option>
                        <option value="dry-fruits">Dry Fruits</option>
                        <option value="biscuits-cakes">Biscuits & Cakes</option>
                        <option value="jams-jellies">Jams & Jellies</option>
                        <option value="breads">Breads</option>
                    </select>
                </div>

                <div className="productInputBox">
                    <label htmlFor="type">Product Type</label>
                    <select name="type" id="type" onChange={handleChange}>
                        <option value="">Select Type</option>
                        <option value="top-product">Top Product</option>
                        <option value="recent-product">Recent Product</option>
                        <option value="popular-now">Popular now</option>
                    </select>
                </div>

                <div className="productWeightInput">
                    <input type="number" name="weight" onChange={handleChange} placeholder="Product weight/quantity" required />
                    <select name="unit" id="unit" value={product.unit} onChange={handleChange} required>
                        <option value="gram">gram</option>
                        <option value="kg">kg</option>
                        <option value="pcs">pcs</option>
                        <option value="liter">liter</option>
                    </select>
                </div>

                <div className="imagePreviewBox">
                    <p>Image preview</p>
                </div>
                
                <input type="file" />

                <button type="submit">Add Product</button>
            </form>

            <div className="formPreviewBtn" onClick={handleClick}>
                <BsEye className='previewIcon'/>
                <p>Preview</p>
            </div>

            <div className={`formPreviewBox ${previeToggle ? 'active' : null}`}>
                <div className="formPreviewText">
                    <p>Product name*:</p>
                    <p>{product.name === '' ? '--:--' : product.name}</p>
                </div>
                <div className="formPreviewText">
                    <p>Product price*:</p>
                    <p>{product.price === '' ? '--:--' : `${product.price} Tk`}</p>
                </div>
                <div className="formPreviewText">
                    <p>Product category*:</p>
                    <p>{product.category === '' ? '--:--' : product.category}</p>
                </div>
                <div className="formPreviewText">
                    <p>Product Type:</p>
                    <p>{product.type === '' ? '--:--' : product.type}</p>
                </div>
                <div className="formPreviewText">
                    <p>Product weight*:</p>
                    <p>{product.weight === '' ? '--:--' : product.weight}</p>
                </div>
                <div className="formPreviewText">
                    <p>Product unit*:</p>
                    <p>{product.unit === '' ? '--:--' : product.unit}</p>
                </div>
            </div>
        </>
        
    );
}

export default AddProductForm;