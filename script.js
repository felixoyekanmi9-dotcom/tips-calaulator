function calculateTip() {
    let amount = document.getElementById("amount").value;

    if (amount === "") {
        alert("Please enter an amount!");
        return;
    }

    let tip = amount * 0.05; // 5% tip

    document.getElementById("result").textContent =
        "Tip: ₦" + tip.toFixed(2);
}