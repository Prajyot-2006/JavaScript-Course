// in this file we learned about object-oriented-programming 
// we are gonna convet the 01-Intro-to-OOPs.js file's code into Object Oriented Programming or we just gonna put all the code into a single object 
export const cart = {  // object
    cartItems: undefined,
    loadFromStorage: function() {    // function inside an object = method 
        this.cartItems = JSON.parse(localStorage.getItem('cart-oop')) || [  // however we have a small issue, if we change the name of the object up here , this fn will no longer work , this keyword will give us the outer object , we are currently loading from the localstorage cart however our original cart was also loading from localstorage cart , so lets change this also(cart-oop) so that we dont affect the og cart
            {  // this keyword is a OOP keyword 
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '1'
            },
            {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId: '2'
            }
        ];
    },

    saveToStorage: function() {
        localStorage.setItem('cart-oop' , JSON.stringify(this.cartItems))  // this gives us the outer object which is = cart 
    },

    addToCart(productId){   // shortcut for addToCart: function(productId)
        let matchingItem;
        this.cartItems.forEach((cartItem) => {
            if(productId === cartItem.productId){  
                matchingItem = cartItem;
            }
        });

        if(matchingItem){  
            matchingItem.quantity++;
        }
        else{
            this.cartItems.push( {
            productId: productId,
            quantity: 1,
            deliveryOptionId: '1'
        });
        }
        this.saveToStorage();
    },

    removeFromCart(productId){
        const newCart = [];
        this.cartItems.forEach( (cartItem) => {
            if(cartItem.productId !== productId){
                newCart.push(cartItem);
            }
        });
    this.cartItems = newCart;
    this.saveToStorage();
    },

    updateDeliveryOption(productId , deliveryOptionId){
        let matchingItem;
        this.cartItems.forEach((cartItem) => {
            if(productId === cartItem.productId){  
                matchingItem = cartItem;
            }
        });
        matchingItem.deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
    }
}

cart.loadFromStorage();
// thats it ,this is the basic idea of OOP 

cart.addToCart('82bb68d7-ebc9-476a-989c-c78a40ee5cd9');  // wil add the product into cart
console.log(cart);