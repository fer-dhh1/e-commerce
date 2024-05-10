import React, { useEffect, useRef, useState } from 'react';
import useFetch from '../hooks/useFetch';
import ProdCard from '../components/homePage/ProdCard';
import './styles/homePage.css'
import FilterPrice from '../components/homePage/FilterPrice';
import FilterCategory from '../components/homePage/FilterCategory';
const body = document.querySelector('body');

const HomePage = () => {
  
  const [productCategory, setProductCategory] = useState('');
  const [prodPrice, setProdPrice] = useState({
    from: 0,
    to: Infinity
  });
  const [prodName, setProdName] = useState('');
  const [products, getProducts] = useFetch();
  
  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products';
    getProducts(url)
  }, []);

  const textInput = useRef();
  const handleChange = () => {
    setProdName(textInput.current.value.toLowerCase().trim());
  }

  const prodFilters = (prod) => {
    const perName = prod.title.toLowerCase().includes(prodName);
    const perPrice = +prod.price <= +prodPrice.to && +prod.price >= +prodPrice.from;
    const perCategory = productCategory ? prod.categoryId === +productCategory : prod;
 
    return perName && perPrice && perCategory;
  }
  
  const handleDark = () => {
    body.classList.toggle('dark');
  }

  console.log(productCategory);
  
  return (
    <div className='homepage'>
      <div className='homepage__filters'>
        <div className='homepage__filtername'>
          <input className='input' ref={textInput} onChange={handleChange} type="text" />
          <button><ion-icon name="search-outline"></ion-icon></button>
        </div>
        <FilterPrice
          setProdPrice = {setProdPrice}
        />
        <FilterCategory
          setProductCategory = {setProductCategory}
        />
        <button className='homepage__btn' onClick={handleDark }>  <ion-icon name="contrast-outline"></ion-icon></button>
      </div>
      <div className='homepage__container'>
        {
          products?.filter(prodFilters).map((prod) => (
              <ProdCard
                key = {prod.id}
                prod = {prod}
              />
          ))
        }
      </div>
    </div>
  )
}

export default HomePage;