console.log("SheetMarket loaded");

// interaksi kecil
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.03)";
        });

        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });
});
