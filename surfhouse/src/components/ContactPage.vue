<template>
    <section>
        <div class="contact">
            <h1 id="title">
                contact us
            </h1>
            <p>
                If you have questions about your order or need any general information our customer service team will be happy to assist you    
            </p>
            <form action="post">
                <label for="name">
                    full name*
                </label>
                <span>
                    {{ errors.first('name') }}
                </span>
                <input type="text" name="name" v-validate="'required'" placeholder="e.g. robert smith">
                
                <label for="customeremail">
                    email*
                </label>
                <span>
                    {{ errors.first('email') }}
                </span>
                <input type="email" name="email" v-validate="'required|email'" placeholder="e.g. name@nome.com">

                <label for="company">
                    company
                </label>
                <input type="text" name="company" placeholder="e.g. your company (optional)">
                <label for="subject">
                    subject*
                </label>
                <span>
                    {{ errors.first('subject') }}
                </span>
                <input type="text" name="subject" v-validate="'required'" placeholder="e.g. info">
        
                <label for="message">
                    message
                </label>
                <textarea  rows="10" cols="30" name="message"/>
                <input type="submit" name="message">
            </form>
        </div>
    </section>
</template>
