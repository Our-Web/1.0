document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");

    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        } else {
            cart.forEach(item => {
                const div = document.createElement("div");
                div.innerHTML = `<p>${item.name} - ₱${item.price}</p>`;
                cartItemsContainer.appendChild(div);
            });
        }
        
        document.getElementById("buy-now").addEventListener("click", function () {
            window.location.href = "checkout.html";
        });
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const name = this.getAttribute("data-name");
            const price = this.getAttribute("data-price");

            cart.push({ name, price });
            localStorage.setItem("cart", JSON.stringify(cart));

            window.location.href = "cart.html";
        });
    });
});
