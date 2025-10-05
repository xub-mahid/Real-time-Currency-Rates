
async function currencyFun() {
    const ammount = Number(document.getElementById("ammount").value)
    const from =document.getElementById("from").value
    const to =document.getElementById("to").value
    const api = await fetch(`https://open.er-api.com/v6/latest/${from}`)
    const apiInJson = await api.json()
    const rateTo = apiInJson.rates[to]
    const values = ammount * rateTo.toFixed(2)
    const result = document.getElementById("result").innerHTML=to+": "+values
}



// {
//   "result": "success",
//   "provider": "https://www.exchangerate-api.com",
//   "documentation": "https://www.exchangerate-api.com/docs/free",
//   "terms_of_use": "https://www.exchangerate-api.com/terms",
//   "time_last_update_unix": 1727740801,
//   "time_last_update_utc": "Tue, 01 Oct 2024 00:00:01 +0000",
//   "time_next_update_unix": 1727827201,
//   "time_next_update_utc": "Wed, 02 Oct 2024 00:00:01 +0000",
//   "time_eol_unix": 0,
//   "base_code": "USD",
//   "rates": {
//     "USD": 1,
//     "EUR": 0.93,
//     "GBP": 0.79,
//     "JPY": 149.22,
//     "INR": 83.11,
//     "BDT": 118.5,
//     "AUD": 1.52,
//     "CAD": 1.36,
//     "CNY": 7.29,
//     "SAR": 3.75,
//     "AED": 3.67,
    
//   }
// }