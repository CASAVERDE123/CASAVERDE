let cusName, cusMail, cusNum, cusTime, cusDate, selectedVenue, selectedPrice;

function collectValues() {
    cusName = document.getElementById('customerName').value;
    cusMail = document.getElementById('customerMail').value;
    cusNum = document.getElementById('customerNum').value;
    cusTime = document.getElementById('time').value;
    cusDate = document.getElementById('date').value;

    selectedVenue = document.querySelector('.plan-type-description').innerHTML;
    selectedPrice = document.querySelector('.plan-type-amount').innerHTML.replace(',', '');
}

const plansSelectors = document.querySelectorAll(".plans");

plansSelectors.forEach((planSelector) => {
    planSelector.addEventListener("change", (event) => {
        if (event.target.checked) {
            const planType = event.target.value;

            switch (planType) {
                case "hallA-select":
                    selectedVenue = "Ballroom";
                    selectedPrice = 70000-7000 ;
                    break;
                case "hallB-select":
                    selectedVenue = "Party Room";
                    selectedPrice = 60000-6000;
                    break;
                case "pool-select":
                    selectedVenue = "Pool Side";
                    selectedPrice = 30000-3000;
                    break;
                case "Garden-select":
                    selectedVenue = "Magic Garden";
                    selectedPrice = 25000-2500;
                    break;
                default:
                    break;
            }

            document.querySelector(".plan-type-description").innerHTML = selectedVenue;
            document.querySelector(".plan-type-amount").innerHTML = selectedPrice.toLocaleString();
            document.querySelector(".billing-amount").innerHTML = selectedPrice.toLocaleString();
            document.querySelector(".billing-period").innerHTML = selectedVenue + " type";

            collectValues(); 
        }
    });
});

document.querySelector(".checkout-btn").onclick = () => {
    collectValues();

    const receiptContainer = document.querySelector('.container');
    receiptContainer.innerHTML =
        `<div class="receipt-container">
            <div class="receipt-details">
                <h1> Thank you for Choosing Casa Verde! </h1>
                <button class="back-btn">Back</button>
            </div>
        </div>`;

    const infoContainer = document.querySelector('.info');
    infoContainer.innerHTML =
        `<div class="receipt-info">
            <h1>RECEIPT</h1>
            <h2>Name: ${cusName}</h2>
            <h2>E-Mail: ${cusMail}</h2>
            <h2>Number: ${cusNum}</h2>
            <h2>Date: ${cusDate}</h2>
            <h2>Time: ${cusTime}</h2>
            <h2>Venue: <span class="receipt-venue">${selectedVenue || ""}</span></h2>
            <h2>Price 10% off: <br><hr><h2 align="right"><span class="receipt-price" id="receipt">${selectedPrice ? selectedPrice.toLocaleString() : ""}</span></h2></h2>
        </div>`;

    document.querySelector(".back-btn").onclick = () => {
        location.reload();
    };
};
