import React, { useEffect, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import './styles/filterCategory.css';

const FilterCategory = ({setProductCategory}) => {

    const [categories, getCategories] = useFetch();

    useEffect(() => {
      const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories';
      getCategories(url);
    }, []);

    const selectOption = useRef();

    const handleChange = () => {
        setProductCategory(selectOption.current.value);
    }
    
  return (
    <select className='category' ref={selectOption} onChange={handleChange}>
        <option className='filtercategory' value="">Categories</option>
        {
            categories?.map(category => (
                <option key = {category.id} value = {category.id}>
                    {category.name}</option>
            ))
        }
    </select>
  )
}

export default FilterCategory;