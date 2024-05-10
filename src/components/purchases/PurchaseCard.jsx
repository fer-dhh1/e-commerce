import React from 'react';
import './styles/purchaseCard.css'

const PurchaseCard = ({prod}) => {

    console.log(prod);
  return (
    <article className='purchasescard'>
        <h3 className='purchasescard__title'>{prod.product?.title}</h3>
        <figure className='purchasescard__img'>
            <img src= {prod.product?.images[0].url} alt="product image" />
        </figure>
        <p className='purchasescard__date'>{prod.updatedAt?.slice(0, 10)}</p>
        <span className='purchasescard__quantity'>{prod.quantity}</span>
        <span className='purchasescard__price'>Total price: $ {prod.product?.price * prod.quantity}</span>
    </article>
  )
}

export default PurchaseCard;