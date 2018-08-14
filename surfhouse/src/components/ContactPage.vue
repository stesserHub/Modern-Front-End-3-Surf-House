<template>
    <section>
        <h1>
            contact us
        </h1>
        <p>
            If you have questions about your order or need any general information our customer service team will be happy to assist you    
        </p>
        <form action="post">
            <label for="name">
                full name*
            </label>
            <br>
            <input type="text" name="name" v-validate="'required'">
            <span>
                {{ errors.first('name') }}
            </span>
            <br>
            <label for="customeremail">
                email*
            </label>
            <br>
            <input type="email" name="email" v-validate="'required|email'">
            <span>
                {{ errors.first('email') }}
            </span>
            <br>
            <label for="company">
                company
            </label>
            <br>
            <input type="text" name="company">
            <br>
            <label for="subject">
                subject*
            </label>
            <br>
            <input type="text" name="subject" v-validate="'required'">
            <span>
                {{ errors.first('subject') }}
            </span>
            <br>            
            <label for="message">
                message
            </label>
            <br>
            <textarea  rows="10" cols="30" name="message"/>
            <br>
            <input type="submit" name="message">
        </form>
    </section>
</template>
