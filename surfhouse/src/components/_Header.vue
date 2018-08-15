<template>
    <section>
        <header>
            <h1>
                This is the header test
            </h1>
            <img src="../assets/SurfhouseLogo.png">
            <div id="cart">
                <div class="cartlink">
                    <ul>
                        <li>
                            <a href="#">
                                log in
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                wish list(0)
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="cartcontent">
                    <svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
                        <use href="#carticon" x="0" width="20px" heigth="20px" />
                    </svg>
                    <p class="totalcart">
                        €. 1234.56
                    </p>
                    <p class="itemcount">
                        99 items
                    </p>
                    <ul>
                        <li>
                            <a href="#">
                                view cart
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                checkout
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="cartsearch">
                    <form action="oist">
                        <input type="text" name="search" placeholder="search">
                        <input type="submit" value="O">
                    </form>
                </div>
            </div>
        </header>
    </section>
</template>
