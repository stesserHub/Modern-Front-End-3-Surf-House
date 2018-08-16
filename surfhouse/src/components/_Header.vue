<template>
    <section>
        <header>
            <a href="/">
                <img id="logo" src="../../static/SurfhouseLogo.png"/>
            </a>
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
                    <div class="svgsizing">
                        <svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
                            <use href="#carticon" x="0" />
                        </svg>
                    </div>

                    <div class="cartdata">
                        <p class="carttotal">
                            €. 1234.56
                        </p>
                        <p class="cartcount">
                            99 items
                        </p>
                    </div>
                    
                    <br>

                    <ul>
                        <li>
                            <a href="#">
                                view cart &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                        <input type="text" name="search" placeholder="     search">
                        <input type="submit" value="O">
                    </form>
                </div>
            </div>
        </header>
    </section>
</template>
