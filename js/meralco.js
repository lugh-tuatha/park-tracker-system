
const myForm = document.getElementById("myForm");
const totalBill = document.getElementById("total-bill");
const kilowattHour = document.getElementById("kilowatt-hour");
const kilowattPerHour = document.getElementById("kilowatt-per-hour");

const previousKWH = document.getElementById("prev-kwh")
const currentKWH = document.getElementById("curr-kwh")
const tenantKwh = document.getElementById("tenant-kwh");
const tenantBill = document.getElementById("bill")

myForm.addEventListener("submit", function(event){
  event.preventDefault();
  kilowattPerHour.innerText = totalBill.value / kilowattHour.value;

  console.log(kilowattPerHour);

  tenantKwh.innerText = currentKWH.value - previousKWH.value;
  tenantBill.innerText = tenantKwh.innerText * kilowattPerHour.innerText;
  console.log(tenantKwh)
  console.log(tenantBill);

})