"use client"
import { useState } from "react";
import Modal_Form from "../dashboard/form"
import "../../globals.css"
import Link from "next/link";
export default function Layout({ children }) {


    return (
        <html lang="en">
            <body className="w">
                <div className="container2">
                    <header className="header">
                        <img src="/images/logo.png" alt="Logo" />
                        <div className="header-icons">
                            <Link href={'/'}>
                                Home
                            </Link>
                        </div>
                    </header>
                    <div className="leftsideBar">
                        <center>
                            <img src="/images/logo.png" alt="Logo" className="logo" />
                        </center>
                        <nav>
                            <Link href="/admin/dashboard/menu/">
                                <div className="item active">
                                    <img src="/images/1564512_burger_catalogue_list_menu_icon.png" alt="Menu" />
                                    <span>Menu</span>
                                </div>
                            </Link>
                            <div className="item">
                                <img src="/images/8956824_shopping_bag_order_commerce_business_icon.png" alt="Orders" />
                                <span>Orders</span>
                            </div>
                            <div className="item">
                                <img src="/images/9026152_users_icon (1).png" alt="Users" />
                                <span>Users</span>
                            </div>
                            <Link href="/admin/dashboard/categories/">
                                <div className="item">
                                    <img src="/images/9111072_circle_menu_icon.png" alt="Users" />
                                    <span>Categories</span>
                                </div>
                            </Link>
                        </nav>
                        <div className="image-burger">
                            <img src="/images/49742_hamburger_fast food_burger_junk food_food_icon.png" alt="Burger" />
                        </div>
                    </div>
                    {children}


                </div>
            </body>
        </html>
    );
}
