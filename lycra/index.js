let bigImg = document.querySelector('.big-img img');
function showImg(pic){
    bigImg.src = pic;
}

    function addToCart() {
        const productName = document.querySelector('.pname').textContent;
        const productPrice = document.querySelector('.price').textContent;
        const quantity = document.querySelector('input[type="number"]').value;
        
        alert(`Added ${quantity} of ${productName} to cart for ${productPrice}.`);
        // Here, you would typically update the cart in a real application.
    }

    document.querySelector('.cart-btn').addEventListener('click', addToCart);

