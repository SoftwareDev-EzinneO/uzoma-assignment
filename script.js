function sumTotal() {
    const table = document.getElementsByClassName("price");
    let total = 0;

    for (let i = 0; i < table.length; i++) {
        let tableText = table[i].textcontent;
        let cleaned = tableText.replace("₦", "").replace(/,/g, "");
        let tableValue = Number(cleaned);
        total = total + tableValue;
    }

    document.getElementById("total").textContent = "₦" + total.toLocaleString();
   
}

