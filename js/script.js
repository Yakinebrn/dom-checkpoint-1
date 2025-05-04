// function to update the total
function updateTotal() {
    const products = document.querySelectorAll(".card-body");
    let total = 0;

    products.forEach((product) => {
        const priceText = product.querySelector(".unit-price").textContent;
        const price = parseFloat(priceText);
        const quantity = parseInt(
            product.querySelector(".quantity").textContent
        );
        total += price * quantity;
    });

    document.querySelector(".total").textContent = total + "$";
}

// manage the btn + and -
const plusBtns = document.querySelectorAll(".fa-plus-circle");
const minusBtns = document.querySelectorAll(".fa-minus-circle");

plusBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const quantitySpan = btn.nextElementSibling;
        quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
        updateTotal();
    });
});

minusBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const quantitySpan = btn.previousElementSibling;
        const currentQuantity = parseInt(quantitySpan.textContent);
        if (currentQuantity > 0) {
            quantitySpan.textContent = currentQuantity - 1;
            updateTotal();
        }
    });
});

// manage the trash btn
const deleteBtns = document.querySelectorAll(".fa-trash-alt");

deleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const product = btn.closest(".card-body");
        product.remove();
        updateTotal();
    });
});

// manage the like btn
const likeBtns = document.querySelectorAll(".fa-heart");

likeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("liked");
        btn.style.color = btn.classList.contains("liked") ? "red" : "black";
    });
});

// initialization
updateTotal();
