import Link from 'next/link';
import React, { useState } from 'react';

const ShopCheckout1 = () => {
  const [isActive, setIsActive] = useState(1);

  const handleClick = (key = 1) => {
    setIsActive(prev => (prev === key ? 0 : key));
  };

  return (
    <section>
      <div className="container-lg pt-90 pb-120">
        <div className="team-five__wrp">
          <div className="section-content">
            <form id="checkout-form" action="#" onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
              <div className="row mt-30">
                <div className="col-md-6">
                  <div className="billing-details">
                    <h3 className="mb-30">Billing Details</h3>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label htmlFor="fname" className="visually-hidden">First Name</label>
                        <input id="fname" type="text" name="fname" className="form-control" placeholder="First Name" />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="lname" className="visually-hidden">Last Name</label>
                        <input id="lname" type="text" name="lname" className="form-control" placeholder="Last Name" />
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label htmlFor="company-name" className="visually-hidden">Company Name</label>
                          <input id="company-name" type="text" name="company-name" className="form-control" placeholder="Company Name" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email-adress" className="visually-hidden">Email Address</label>
                          <input id="email-adress" type="email" name="email-adress" className="form-control" placeholder="Email Address" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="streetaddress" className="visually-hidden">Street Address</label>
                          <input id="streetaddress" type="text" name="streetaddress" className="form-control" placeholder="Street Address" />
                        </div>
                        <div className="mb-3">
                          <input type="text" name="address2" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                        </div>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="city" className="visually-hidden">City</label>
                        <input id="city" type="text" name="city" className="form-control" placeholder="City" />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="state" className="visually-hidden">State / Province</label>
                        <select id="state" name="state" className="form-control">
                          <option value="">Select State</option>
                          <option value="Australia">Australia</option>
                          <option value="UK">UK</option>
                          <option value="USA">USA</option>
                        </select>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="zip" className="visually-hidden">Zip / Postal Code</label>
                        <input id="zip" type="text" name="zip" className="form-control" placeholder="Zip / Postal Code" />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="countryname" className="visually-hidden">Country</label>
                        <select id="countryname" name="countryname" className="form-control">
                          <option value="">Select Country</option>
                          <option value="Australia">Australia</option>
                          <option value="UK">UK</option>
                          <option value="USA">USA</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <h3>Additional Information</h3>
                  <label htmlFor="order_notes">Order Notes <span className="optional">(optional)</span></label>
                  <textarea
                    id="order_notes"
                    name="order_notes"
                    className="form-control"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    rows={3}
                  ></textarea>
                </div>
                <div className="col-md-12 mt-30">
                  <h3>Your Order</h3>
                  <table className="table table-striped table-bordered tbl-shopping-cart">
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Product Name</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-thumbnail">
                          <Link href="/shop-product-details">
                            <img alt="product" src="assets/images/resource/products/1.jpg" />
                          </Link>
                        </td>
                        <td className="product-name"><Link href="/shop-product-details">Headphone</Link> x 2</td>
                        <td>$36.00</td>
                      </tr>
                      <tr>
                        <td className="product-thumbnail">
                          <Link href="/shop-product-details">
                            <img alt="product" src="assets/images/resource/products/2.jpg" />
                          </Link>
                        </td>
                        <td className="product-name"><Link href="/shop-product-details">Lagage</Link> x 3</td>
                        <td>$115.00</td>
                      </tr>
                      <tr>
                        <td className="product-thumbnail">
                          <Link href="/shop-product-details">
                            <img alt="product" src="assets/images/resource/products/3.jpg" />
                          </Link>
                        </td>
                        <td className="product-name"><Link href="/shop-product-details">Watch</Link> x 1</td>
                        <td>$68.00</td>
                      </tr>
                      <tr>
                        <td>Cart Subtotal</td>
                        <td>&nbsp;</td>
                        <td>$180.00</td>
                      </tr>
                      <tr>
                        <td>Shipping & Handling</td>
                        <td>&nbsp;</td>
                        <td>Free Shipping</td>
                      </tr>
                      <tr>
                        <td>Order Total</td>
                        <td>&nbsp;</td>
                        <td>$250.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-md-12 mt-60">
                  <div className="payment-method innerpage">
                    <h3 className="mb-30">Choose a Payment Method</h3>
                    <ul className="accordion-box">
                      {[1, 2, 3, 4].map((key: number) => (
                        <li key={key} className={`accordion block ${isActive === key ? 'active-block' : ''}`}>
                          <div
                            className={isActive === key ? "acc-btn active" : "acc-btn"}
                            onClick={() => handleClick(key)}
                          >
                            <div className="icon-outer"><i className="fal fa-chevron-down" /></div>
                            {key === 1 ? "Credit / Debit Card" :
                             key === 2 ? "Direct Bank Transfer" :
                             key === 3 ? "Cheque Payment" : "Other Payment"}
                          </div>

                          <div className={isActive === key ? "acc-content current" : "acc-content"}>
                            <div className="payment-info">
                              {key === 1 ? (
                                <div className="row clearfix">
                                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                                    <input type="text" className="form-control mb-3" name="card_name" placeholder="Name on the Card" required />
                                  </div>
                                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                                    <input type="text" className="form-control mb-3" name="card_number" placeholder="Card Number" required />
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-12 column">
                                    <input type="text" className="form-control mb-3" name="expiry_date" placeholder="Expiry Date" required />
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-12 column">
                                    <input type="text" className="form-control mb-3" name="security_code" placeholder="Security Code" required />
                                  </div>
                                  <div className="col-lg-6 col-md-12 col-sm-12 column">
                                    <button type="submit" className="theme-btn btn-style-two"  data-loading-text="Please wait..."><span className="btn-title">Make Payment</span></button>
                                  </div>
                                </div>
                              ) : (
                                <p className="mb-0">Make your payment directly into our account. Use your Order ID as reference.</p>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCheckout1;
