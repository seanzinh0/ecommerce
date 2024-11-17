# ecommerce
Welcome to my E-Commerce Project

I created Audacieux Atelier to sell a collection of high-end luxury fashion goods.
The home page has a hero banner with a call to action that takes you to the products page.
In the header the logo takes you back home and the contact us takes you to the contact page.
As for the footer the links are blank but the customer service tab also takes you to the contact page as well.
The design was made to keep a minimalist and simple design.
The home page displays what the website is about and where it is found.
When you go to the product page everything there is a description about the brands that are carried.
Below will be a gallery of models wearing some of the brands.
As for the products themselves they are loaded in using a JS function called updateUI that takes the json data turns it into an array, loops through it
destructures the items and uses a template literal to add them into the html.
I also implemented a sort using the select dropdown so when a certain option is chosen it sorts using the JS array method
sort() and compares values to sort accordingly and calls the updateUI function with the new sorted array.
As for the contact page it was very simple there is a stock photo of a Japandi style interior design and a form that takes in
first name, last name, email, reason, and a message. The form was validated using JS and does not allow a default submission,
on submit it checks that no values are empty and uses regex for the email. If an input is empty the placeholder text will become red.
At the bottom of the contact page is also some additional information that a customer can use.

The site is fully responsive and I used 390px, 810px, and 1400px breakpoints. These were the ones standard when I imported my
figma to framer to see how I wanted to design responsiveness.

I hope that you have enjoyed looking through my site, it was fun designing and producing it!

Linked below is the AWS Amplify hosted link:
https://main.d1t1vk2sz3cac1.amplifyapp.com/