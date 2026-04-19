import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

const ShopDetails: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(1);
    const handleOnClick = (index: number) => {
        setActiveIndex(index);
    };
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [quantities, setQuantities] = useState<{
        item1: number;
        item2: number;
        item3: number;
    }>({
        item1: 1,
        item2: 1,
        item3: 1,
    });

    const handleQuantityChange = (item: keyof typeof quantities, change: number) => {
        setQuantities((prevQuantities) => {
        const newQuantity = prevQuantities[item] + change;
        return {
            ...prevQuantities,
            [item]: newQuantity > 0 ? newQuantity : 1,
        };
        });
    };

    return (
        <>
        
        <section className="product-details pt-120">
            <div className="container pb-70">
                <div className="row">
                    <div className="col-lg-6 col-xl-6">
                        <div className="bxslider">
                            <div className="slider-content">
                                <Swiper
                                    spaceBetween={10}
                                    pagination={{clickable:true}}
                                    thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                                    modules={[FreeMode, Navigation,Autoplay, Thumbs]}
                                    loop= {true}
                                    autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                    }}
                                    className="slider-pager">
                                    <SwiperSlide>
                                        <div className="image-box"><img src="assets/images/resource/products/product-details.jpg" alt="Image"/></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image-box"><img src="assets/images/resource/products/product-details2.jpg" alt="Image"/></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image-box"><img src="assets/images/resource/products/product-details3.jpg" alt="Image"/></div>
                                    </SwiperSlide>
                                </Swiper>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={10}
                                    slidesPerView={5}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="slider-pager">
                                    <SwiperSlide className="product-thumb">
                                        <figure className="image-box"><img src="assets/images/resource/products/product-details.jpg" alt="Image"/></figure>
                                    </SwiperSlide>
                                    <SwiperSlide className="product-thumb">
                                        <figure className="image-box"><img src="assets/images/resource/products/product-details2.jpg" alt="Image"/></figure>
                                    </SwiperSlide>
                                    <SwiperSlide className="product-thumb">
                                        <figure className="image-box"><img src="assets/images/resource/products/product-details3.jpg" alt="Image"/></figure>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 product-info">
                        <div className="product-details__top">
                            <h3 className="product-details__title">Backpack <span>$76.00</span></h3>
                        </div>
                        <div className="product-details__reveiw">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <span>2 Customer Reviews</span>
                        </div>
                        <div className="product-details__content">
                            <p className="product-details__content-text1">Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo venenatis ligula commodo leez sed blandit convallis dignissim onec vel pellentesque neque.</p>
                            <p className="product-details__content-text2"><strong>REF.</strong> 4231/406 <br /> Available in store</p>
                        </div>
                        <div className="product-details__quantity">
                            <h3 className="product-details__quantity-title">Choose quantity</h3>
                            <div className="quantity-box">
                                <button type="button" className="sub" onClick={() => handleQuantityChange('item1', -1)}>
                                    <i className="fa fa-minus" />
                                </button>
                                <input type="number" id="1" value={quantities.item1} readOnly />
                                <button type="button" className="add" onClick={() => handleQuantityChange('item1', 1)}>
                                    <i className="fa fa-plus" />
                                </button>
                            </div>
                        </div>
                        <div className="product-details__buttons">
                            <div className="product-details__buttons-1">
                                <Link href="/shop-cart" className="theme-btn btn-style-one">Add to Cart</Link>
                            </div>
                            <div className="product-details__buttons-2">
                                <Link href="/shop-product-details" className="theme-btn btn-style-two">Add to Wishlist</Link>
                            </div>
                        </div>
                        <div className="product-details__social">
                            <div className="title">
                            <h3 className="mb-0">Share with friends</h3>
                            </div>
                            <ul className="social-icon-one product-share">
                            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-pinterest"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="product-description">
            <div className="container pt-0 pb-90">
                <div className="product-discription">
                    <div className="tabs-box">
                        <div className="tab-btn-box text-center">
                            <ul className="tab-btns tab-buttons clearfix">
                                <li className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)} data-tab="#tab1">Description</li>
                                <li className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)} data-tab="#tab2">Reviews</li>
                            </ul>
                        </div>
                        <div className="tabs-content">
                            <div className={activeIndex === 1 ? "tab active-tab" : "tab"} id="tab1">
                                <div className="text">
                                    <h3 className="product-description__title">Description</h3>
                                    <p className="product-description__text1">Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                                    phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have
                                    alteration in some injected or words which don't look even slightly believable. If you are going to
                                    use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden in the
                                    middle of text.
                                    </p>
                                    <div className="product-description__list">
                                        <ul className="list-unstyled">
                                            <li><p><span className="fa fa-arrow-right" /> Nam at elit nec neque suscipit gravida.</p></li>
                                            <li><p><span className="fa fa-arrow-right" /> Aenean egestas orci eu maximus tincidunt.</p></li>
                                            <li><p><span className="fa fa-arrow-right" /> Curabitur vel turpis id tellus cursus laoreet.</p></li>
                                        </ul>
                                    </div>
                                    <p className="product-description__tex2">All the Lorem Ipsum generators on the Internet tend to repeat
                                    predefined chunks as necessary, making this the first true generator on the Internet. It uses a
                                    dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
                                    generate Lorem Ipsum which looks reasonable. 
                                    </p>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="tab2">
                                <div className="customer-comment">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 comment-column">
                                            <div className="single-comment-box">
                                                <div className="inner-box">
                                                    <figure className="comment-thumb"><img src="assets/images/resource/testi-thumb1-1.png" alt="Image" /></figure>
                                                    <div className="inner">
                                                        <ul className="rating clearfix">
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                        </ul>
                                                        <h5>Jon D. William, <span>10 Jan, 2025 . 4:00 pm</span></h5>
                                                        <p>Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 comment-column">
                                            <div className="single-comment-box">
                                                <div className="inner-box">
                                                    <figure className="comment-thumb"><img src="assets/images/resource/testi-thumb1-2.png" alt="Image" /></figure>
                                                    <div className="inner">
                                                        <ul className="rating clearfix">
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                        </ul>
                                                        <h5>Aleesha Brown, <span>12 Feb, 2025 . 8:00 pm</span></h5>
                                                        <p>Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-box">
                                    <h3>Add Your Comments</h3>
                                    <form id="contact_form" name="contact_form" action="#" method="post">
                                        <div className="mb-3">
                                            <textarea name="form_message" className="form-control required" rows={7} placeholder="Enter Message"></textarea>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <input name="form_name" className="form-control" type="text" placeholder="Enter Name"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 column">
                                            <div className="review-box clearfix">
                                                <p>Your Review</p>
                                                <ul className="rating clearfix">
                                                    <li><i className="far fa-star"></i></li>
                                                    <li><i className="far fa-star"></i></li>
                                                    <li><i className="far fa-star"></i></li>
                                                    <li><i className="far fa-star"></i></li>
                                                    <li><i className="far fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 column">
                                            <div className="form-group clearfix">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox" htmlFor="save-info">
                                                        <input
                                                        type="checkbox"
                                                        className="material-control-input"
                                                        id="save-info"
                                                        name="saveInfo"
                                                        />
                                                        <span className="material-control-indicator"></span>
                                                        <span className="description">
                                                        Save my name, email, and website in this browser for the next time I comment.
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <input name="form_botcheck" className="form-control" type="hidden" value=""/>
                                            <button type="submit" className="theme-btn btn-style-two" data-loading-text="Please wait..."><span className="btn-title">Submit Comment</span></button>
                                        </div>
                                    </form>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="related-product">
            <div className="container pt-0 pb-90">
                <h3>Related Products</h3>
                <div className="row clearfix">
                    <div className="product-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="image"><Link href="/shop-product-details"><img className="w-100" src="assets/images/resource/products/1.jpg" alt="Product"/></Link></div>
                                <div className="icon-box">
                                    <Link href="/shop-product-details" className="ui-btn"><i className="fa fa-heart" /></Link>
                                    <Link href="/shop-cart" className="ui-btn"><i className="fa fa-shopping-cart" /></Link>
                                </div>
                            </div>
                            <div className="content">
                                <h4><Link href="/shop-product-details">Headphone</Link></h4>
                                <span className="price">$32.00</span>
                                <span className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="product-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="image"><Link href="/shop-product-details"><img className="w-100" src="assets/images/resource/products/2.jpg" alt="Product"/></Link></div>
                                <div className="icon-box">
                                    <Link href="/shop-product-details" className="ui-btn"><i className="fa fa-heart" /></Link>
                                    <Link href="/shop-cart" className="ui-btn"><i className="fa fa-shopping-cart" /></Link>
                                </div>
                            </div>
                            <div className="content">
                                <h4><Link href="/shop-product-details">Lagage</Link></h4>
                                <span className="price">$32.00</span>
                                <span className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" /> 
                                    <i className="fa fa-star" /> 
                                    <i className="fa fa-star" /> 
                                    <i className="fa fa-star" /> 
                                </span> 
                            </div>
                        </div>
                    </div>
                    <div className="product-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="image"><Link href="/shop-product-details"><img className="w-100" src="assets/images/resource/products/3.jpg" alt="Product"/></Link></div>
                                <div className="icon-box">
                                    <Link href="/shop-product-details" className="ui-btn"><i className="fa fa-heart" /></Link>
                                    <Link href="/shop-cart" className="ui-btn"><i className="fa fa-shopping-cart" /></Link>
                                </div>
                            </div>
                            <div className="content">
                                <h4><Link href="/shop-product-details">Watch</Link></h4>
                                <span className="price">$32.00</span>
                                <span className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="product-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="image"><Link href="/shop-product-details"><img className="w-100" src="assets/images/resource/products/4.jpg" alt="Product"/></Link></div>
                                <div className="icon-box">
                                    <Link href="/shop-product-details" className="ui-btn"><i className="fa fa-heart" /></Link>
                                    <Link href="/shop-cart" className="ui-btn"><i className="fa fa-shopping-cart" /></Link>
                                </div>
                            </div>
                            <div className="content">
                                <h4><Link href="/shop-product-details">SD Card</Link></h4>
                                <span className="price">$32.00</span>
                                <span className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
};

export default ShopDetails;			