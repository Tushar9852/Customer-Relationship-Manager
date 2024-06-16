let customers = [];

document.addEventListener("DOMContentLoaded", function () {
    renderCustomerList();

    document.getElementById("add-customer").addEventListener("click", addCustomer);
});

function renderCustomerList() {
    const customerList = document.getElementById("customer-list");
    customerList.innerHTML = "";

    customers.forEach(function (customer) {
        const listItem = document.createElement("li");
        listItem.textContent = `${customer.name} - ${customer.email} - ${customer.phone}`;
        customerList.appendChild(listItem);
    });
}

function addCustomer(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const newCustomer = {
        name: name,
        email: email,
        phone: phone
    };

    customers.push(newCustomer);

    renderCustomerList();

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}