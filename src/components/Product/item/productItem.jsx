import "./productItem.scss"
import {useState} from "react"
import {  
    productImg1,
    productImg2,
    productImg3,
    productImg4,
    productImg5,
    productImg6,
    productImg7,
    productImg8,
    productImg9,
    productImg10,
    productImg11,
    productImg12,
    productImg13,
    productImg14,
    productImg15,
    productImg16,
    productImg17,
    productImg18}
from '../../../assets/img'



const shopData = [
    {
        name: 'Moderm hat',
        img: productImg1,
        bonusInfo: false,
        uPrice: false,
        price: '$41',
        rating: 4,
    },
    {
        name: 'Skis',
        img: productImg2,
        bonusInfo: false,
        uPrice: false,
        price: '$760',
        rating: 5,
    },
    {
        name: 'Camera',
        img: productImg3,
        bonusInfo: 'sold',
        uPrice: false,
        price: '$420',
        rating: 5,
    },
    {
        name: 'Backpack',
        img: productImg4,
        bonusInfo: false,
        uPrice: false,
        price: '$190',
        rating: 5,
    },
    {
        name: 'Towel',
        img: productImg5,
        bonusInfo: 'sale',
        uPrice: '$45',
        price: '$30',
        rating: 3,
    },
    {
        name: 'Compass',
        img: productImg6,
        bonusInfo: false,
        uPrice: false,
        price: '$190',
        rating: 5,
    },
    {
        name: 'Thermos',
        img: productImg7,
        bonusInfo: false,
        uPrice: false,
        price: '$100',
        rating: 4,
    },
    {
        name: 'Sunglasses',
        img: productImg8,
        bonusInfo: 'sale',
        uPrice: '$140',
        price: '$120',
        rating: 4,
    },
    {
        name: 'Summer Hat',
        img: productImg9,
        bonusInfo: false,
        uPrice: false,
        price: '$96',
        rating: 3,
    },
    {
        name: 'Star',
        img: productImg10,
        bonusInfo: false,
        uPrice: false,
        price: '$109',
        rating: 5,
    },
    {
        name: 'Star',
        img: productImg11,
        bonusInfo: 'sale',
        uPrice: '$58',
        price: '$39',
        rating: 4,
    },
    {
        name: 'Rope',
        img: productImg12,
        bonusInfo: false,
        uPrice: false,
        price: '$70',
        rating: 5,
    },
    {
        name: 'Lamp',
        img: productImg13,
        bonusInfo: false,
        uPrice: false,
        price: '$29',
        rating: 3,
    },
    {
        name: 'Skateboard',
        img: productImg14,
        bonusInfo: 'sale',
        uPrice: '$327',
        price: '$300',
        rating: 4,
    },
    {
        name: 'Bag',
        img: productImg15,
        bonusInfo: false,
        uPrice: false,
        price: '$98',
        rating: 5,
    },
    {
        name: 'Tent',
        img: productImg16,
        bonusInfo: false,
        uPrice: false,
        price: '$560',
        rating: 4,
    },
    {
        name: 'Power Bank',
        img: productImg17,
        bonusInfo: 'sale',
        uPrice: '$205',
        price: '$193',
        rating: 3,
    },
    {
        name: 'Umbrella',
        img: productImg18,
        bonusInfo: false,
        uPrice: false,
        price: '$186',
        rating: 5,
    },
]

const ProductItem = ({shopData}) => {
    var [isAddCart,setCart] = useState(false);

    function RatingStar(){
        let star = ''
        for (var i = 1; i <=5; i++){
            if(i>shopData.rating)
                star += '<i class="far fa-star"></i>'
            else
                star += '<i class="fas fa-star"></i>'
        }
        return <div className="star"
            dangerouslySetInnerHTML={{__html:star}}
        />
    }
    const Button = function() {
        if(isAddCart)
            return <button 
                className="btn btn-product"
                onClick={function(){window.location.href = ''}}> 
                VIEW CART 
            </button>
        else
            return <button 
                className="btn btn-product"
                onClick={function(){setCart(() => true);}}> 
                ADD TO CART
            </button>
    }
    return (
        <div className="product-item">
            <div className='img-container'>
                {/* img */}
                <a href="#">
                    <img src={shopData.img} alt={shopData.name} />
                </a>
                {/* hover button */}
                <div className="overlay">
                    {Button()}
                </div>
                {shopData.bonusInfo && <div className="info__top-right">
                    <p>{shopData.bonusInfo}</p>                    
                </div>}
            </div>
            <a className="product-name" href="">
                {shopData.name}
            </a>
            <div className="info">
                <div>
                    {shopData.uPrice&&<p className="line-through">{shopData.uPrice}</p>}
                    <p>{shopData.price}
                    </p>
                </div>
                {RatingStar()}
            </div>
        </div>
    )
}
export {shopData, ProductItem}