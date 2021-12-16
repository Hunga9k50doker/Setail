import "./productItem.scss"
import {useState} from "react"
import {Slider} from "react-slick"
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
    productImg18,
    productSingle1,
    productSingle2,
    productSingle3,
    }
from '../../../assets/img'
const shopData = [
    {
        name: 'Moderm hat',
        img: productImg1,
        bonusInfo: false,
        uPrice: false,
        price: '$41',
        rating: 4,
        gallery: [productSingle1,productSingle2,productSingle3],
        introduce: 'Consectetur adipiscing elit. In leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis montes nascetur ridiculus.',
        SKU: '012',
        Categories: 'Vintage',
        Tag: ['Clothes','Summer','Vintage'],
        Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ultricies aliquam. Done ultricies nec, pellent, consectetur adipiscing elit. Ieuismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus sit am.',
        AddInfo: {
            weight:'0.6 kg',
            dismensions: '4 x 5 x 7 cm',
        }
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
const RatingStar = ({rating})=>{
    let star = ''
    for (var i = 1; i <=5; i++){
        if(i>rating)
            star += '<i class="far fa-star"></i>'
        else
            star += '<i class="fas fa-star"></i>'
    }
    return <div className="star"
        dangerouslySetInnerHTML={{__html:star}}
    />
}

const ProductItem = ({shopData}) => {
    var [isAddCart,setCart] = useState(false);


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
                <RatingStar rating={shopData.rating}/>
            </div>
        </div>
    )
}
const Gallery = ({imgList})=> {
    const settings= {
        slidesToShow:1,
        slidesToScroll: 1,
        infinite:true,
        speed:500,
    }
    return (
        <div hidden className="img__slider">
            <Slider {...settings}>
            {imgList.map((e,i)=>
                <div>
                    <img src={e} alt={`img-gallery-${i+1}`} className="img-gallery" />
                </div>)
            }
            </Slider>
        </div>
    )
}
const ProductItemDetails = ({itemData})=>{
    const [productCount,setProductCount] = useState(1)
    return (
        <div className="product-details__container">
            <div className="img__list">
                <div><img src={itemData.img} alt="img-product" /></div>
                <div className="img__list-bottom">
                    {itemData.gallery.map((e,i)=> 
                    <img src={e} alt={`img-gallery-${i+1}`} className="img__list-gallery" />)}
                </div>
            </div>
            <div className="details">
                <h1>{itemData.name}</h1>
                <p>{itemData.price}</p>
                <div>
                    <RatingStar rating={itemData.rating}/>
                    <p>(1 customer review)</p>
                </div>
                <p>{itemData.introduce}</p>
                <form>
                    <div>
                        <input
                            type="text" value={prodcutCount}
                        />
                        <div class="btn btn__ud">
                            <button>&gt;</button>
                            <button>&lt;</button>
                        </div>
                        <button 
                            className="btn btn-product"
                        >
                            ADD TO CART
                        </button>
                    </div>
                </form>

            </div>
            <Gallery imglist={[...itemData.img,...itemData.gallery]} />
        </div>

    )
}

export {shopData, ProductItem ,Gallery,ProductItemDetails}