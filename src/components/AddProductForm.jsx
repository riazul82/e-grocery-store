import React, { useEffect, useState } from 'react';
import { MdUpload } from 'react-icons/md';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { fs, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProductForm = () => {
    const [previewToggle, setPreviewToggle] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);
    const [previewImg, setPreviewImg] = useState(null);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [active, setActive] = useState({
        name: false,
        price: false,
        discount: false,
        category: false,
        type: false,
        weight: false,
        unit: false,
        img: false
    });

    const [product, setProduct] = useState({
        name: '',
        price: '',
        discount: '',
        category: '',
        type: 'regular',
        weight: '',
        unit: 'kg',
        imgUrl: ''
    });

    useEffect(() => {
        if (selectedImg === null || selectedImg === undefined) {
            return;
        }

        const objUrl = URL.createObjectURL(selectedImg);
        setPreviewImg(objUrl);

        // free memory when component is unmounted
        return (() => URL.revokeObjectURL(objUrl));
    }, [selectedImg]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    // upload data to firestore
    const addDataToFireStore = async (product) => {
        try {
            await addDoc(collection(fs, "products"), product);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedImg === null) {
            toast.error('Please select an image!');
            return;
        }

        setBtnDisabled(true);

        const storageRef = ref(storage, `images/${product.category}/${selectedImg.name}`);
        const uploadTask = uploadBytesResumable(storageRef, selectedImg);

        // upload image to storage
        uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        console.log('Upload in progress');
                }
            },  (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        console.log('Unauthorized user');
                        break;
                    case 'storage/canceled':
                        console.log('Upload canceled');
                        break;
                
                    case 'storage/unknown':
                        console.log('Unknown error!');
                        break;

                    default:
                        console.log(`Couldn't upload image!`);
                }

                setProduct({ name: '', price: '', discount: '', category: '', type: 'regular', weight: '', unit: 'kg', imgUrl: '' });
                setBtnDisabled(false);
                setSelectedImg(null);
                setPreviewImg(null);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    product.imgUrl = downloadURL;
                    addDataToFireStore(product);
                    setProduct({ name: '', price: '', discount: '', category: '', type: 'regular', weight: '', unit: 'kg', imgUrl: '' });
                    setBtnDisabled(false);
                    setSelectedImg(null);
                    setPreviewImg(null);
                });
            }
        );

        toast.promise(uploadTask, {
            pending: 'Uploading...',
            success: 'Product uploaded!',
            error: 'An error occured!'
        });
    }

    const handleClick = () => {
        setPreviewToggle(!previewToggle);
    }

    const handleFocus = (inputType) => {
        const myObj = {
            name: false,
            price: false,
            discount: false,
            category: false,
            type: false,
            weight: false,
            unit: false,
            img: false
        };

        for(let key in myObj) {
            myObj[key] = false;

            if (inputType === key) {
                myObj[key] = true;
            }
        }

        setActive(myObj);

    }

    const handleImageInput = (e) => {
        // fix select file cancelation problem
        if (e.target.files[0] !== undefined) {
            setSelectedImg(e.target.files[0]);
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <form onSubmit={handleSubmit} className="addProductForm">
                <input type="text" name="name" value={product.name} onFocus={() => handleFocus('name')} onChange={handleChange} placeholder="Product name" required />
                <input type="number" name="price" min='0' value={product.price} onFocus={() => handleFocus('price')} onChange={handleChange} placeholder="Product price" required />
                <input type="number" name="discount" min='0' value={product.discount} onFocus={() => handleFocus('discount')} onChange={handleChange} placeholder="Product discount" required />

                <div className="productInputBox">
                    <label htmlFor="category">Product Category</label>
                    <select name="category" id="category" value={product.category} onFocus={() => handleFocus('category')} onChange={handleChange} required>
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
                    <select name="type" id="type" value={product.type} onFocus={() => handleFocus('type')} onChange={handleChange} required>
                        <option value="regular">Regular</option>
                        <option value="top-product">Top Product</option>
                        <option value="recent-product">Recent Product</option>
                        <option value="popular-now">Popular now</option>
                    </select>
                </div>

                <div className="productWeightInput">
                    <input type="number" name="weight" value={product.weight} onFocus={() => handleFocus('weight')} onChange={handleChange} min="1" placeholder="Product weight/quantity" required />
                    <select name="unit" id="unit" value={product.unit} onFocus={() => handleFocus('weight')} onChange={handleChange} required>
                        <option value="gram">gram</option>
                        <option value="kg">kg</option>
                        <option value="pcs">pcs</option>
                        <option value="liter">liter</option>
                        <option value="liter">ml</option>
                    </select>
                </div>

                <div className="imagePreviewBox">
                    {previewImg === null ? <p>Image preview</p> :
                        <img src={previewImg} alt="preview" />}
                </div>

                <div className="uploadProductImageInputField">
                    <div className="imageUploadInputLabel">
                        <label htmlFor="productImgInput">
                            <MdUpload className="uploadIcon" />
                            <span>Upload an image</span>
                        </label>
                    </div>
                    <input type="file" id="productImgInput" onFocus={() => handleFocus('img')} onChange={handleImageInput} required />
                </div>

                <button type="submit" disabled={btnDisabled}>Add Product</button>
            </form>

            <div className="formPreviewBtn" onClick={handleClick}>
                {previewToggle ? <BsEye className="previewIcon" /> :
                    <BsEyeSlash className="previewIcon" />}
                <p>Preview</p>
            </div>

            <div className={`formPreviewBox ${previewToggle ? 'active' : null}`}>
                <div className="formPreviewText">
                    <div>
                        <p>Product name<span className={`star ${active.name ? 'active' : null}`}>*</span></p>
                        <span className={`required ${active.name ? 'active' : null}`}>[required]</span>
                    </div>
                    <p>{product.name === '' ? '--:--' : product.name}</p>
                </div>
                <div className="formPreviewText">
                    <div>
                        <p>Product price<span className={`star ${active.price ? 'active' : null}`}>*</span></p>
                        <span className={`required ${active.price ? 'active' : null}`}>[required]</span>
                    </div>
                    <p>{product.price === '' ? '--:--' : `${product.price} Tk`}</p>
                </div>
                <div className="formPreviewText">
                    <div className="previewDiscount">
                        <p>Product discount<span className={`star ${active.discount ? 'active' : null}`}>*</span></p>
                        <span className={`required ${active.discount ? 'active' : null}`}>[required]</span>
                    </div>
                    <p>{product.discount === '' ? '0%' : `${product.discount}%`}</p>
                </div>
                <div className="formPreviewText">
                    <div className="previewCategory">
                        <p>Product category<span className={`star ${active.category ? 'active' : null}`}>*</span></p>
                        <span className={`required ${active.category ? 'active' : null}`}>[required]</span>
                    </div>
                    <p>{product.category === '' ? '--:--' : product.category}</p>
                </div>
                <div className="formPreviewText">
                    <div className="previewType">
                        <p>Product type<span className={`star ${active.type ? 'active' : null}`}>*</span></p>
                    </div>
                    <p>{product.type}</p>
                </div>
                <div className="formPreviewText">
                    <div className="previewWeight">
                        <p>Product weight<span className={`star ${active.weight ? 'active' : null}`}>*</span></p>
                        <span className={`required ${active.weight ? 'active' : null}`}>[required]</span>
                    </div>
                    <p>{product.weight === '' ? '0 kg' : `${product.weight} ${product.unit}`}</p>
                </div>
                <div className="formPreviewText">
                    <div className="previewImage">
                        <p>Image name<span className={`star ${active.img ? 'active' : null}`}>*</span></p>
                        <span className={`required ${active.img ? 'active' : null}`}>[required]</span>
                    </div>
                    <p>{selectedImg === null ? '--:--' : selectedImg.name}</p>
                </div>
                <div className="formPreviewText">
                    <div className="previewImage">
                        <p>Image type<span className={`star ${active.img ? 'active' : null}`}>*</span></p>
                        <span className={`required ${active.img ? 'active' : null}`}>[required]</span>
                    </div>
                    <p>{selectedImg === null ? '--:--' : selectedImg.type}</p>
                </div>
                <div className="formPreviewText">
                    <div className="previewImage">
                        <p>Image size<span className={`star ${active.img ? 'active' : null}`}>*</span></p>
                        <span className={`required ${active.img ? 'active' : null}`}>[required]</span>
                    </div>
                    <p>{selectedImg === null ? '--:--' : `${(selectedImg.size / 1000).toFixed(2)}KB`}</p>
                </div>
            </div>
        </>
    );
}

export default AddProductForm;