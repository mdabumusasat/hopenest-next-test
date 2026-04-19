import Link from 'next/link';
import React from 'react';

const NavLinks = () => {
    return (
        <ul className="navigation">
            <li className="dropdown current">
            <Link href="/">Home</Link>
            <ul>
                <li><Link href="/">Charity</Link></li>
                <li><Link href="/index-2">Animal wildlife</Link></li>
            </ul>
            </li>
            <li><Link href="/page-about">About</Link></li>
            <li className="dropdown">
            <Link href="#">Pages</Link>
            <ul>
                <li className="dropdown"><Link href="#">Team</Link>
                <ul>
                    <li><Link href="/page-team">Team List</Link></li>
                    <li><Link href="/page-team-details">Team Details</Link></li>
                </ul>
                </li>
                <li className="dropdown"><Link href="#">Shop</Link>
                <ul>
                    <li><Link href="/shop-products">Products</Link></li>
                    <li><Link href="/shop-products-sidebar">Products with Sidebar</Link></li>
                    <li><Link href="/shop-product-details">Product Details</Link></li>
                    <li><Link href="/shop-cart">Cart</Link></li>
                    <li><Link href="/shop-checkout">Checkout</Link></li>
                </ul>
                </li>
                <li><Link href="/page-testimonial">Testimonials</Link></li>
                <li><Link href="/page-faq">Faq</Link></li>
                <li><Link href="/page-404">Error 404</Link></li>
            </ul>
            </li>
            <li className="dropdown"><Link href="#">Donation</Link>
            <ul>
                <li><Link href="/page-causes">Donation Page</Link></li>
                <li><Link href="/page-causes-details">Donation Details</Link></li>
            </ul>
            </li>
            <li className="dropdown"><Link href="#">Events</Link>
            <ul>
                <li><Link href="/page-events">Event Page</Link></li>
                <li><Link href="/page-event-details">Event Details</Link></li>
            </ul>
            </li>
            <li className="dropdown">
            <Link href="#">News</Link>
            <ul>
                <li><Link href="/news-grid">News Grid</Link></li>
                <li><Link href="/news-details">News Details</Link></li>
            </ul>
            </li>
            <li><Link href="/page-contact">Contact</Link></li>
        </ul>
    );
};

export default NavLinks;