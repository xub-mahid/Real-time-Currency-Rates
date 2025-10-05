# 💱 Real-Time Currency Converter

এই প্রজেক্টটি একটি সহজ JavaScript-ভিত্তিক কারেন্সি কনভার্টার যা **রিয়েল-টাইম এক্সচেঞ্জ রেট API** ব্যবহার করে মুদ্রা রূপান্তর করে।

---

## ⚙️ ব্যবহৃত টেকনোলজি
- HTML
- CSS
- JavaScript (ES6+)
- [Open Exchange Rate API](https://open.er-api.com/v6/latest/USD)

---

## 🧠 ফাংশনের ব্যাখ্যা

নিচে দেওয়া কোডটি মূলত ইনপুটকৃত মানকে (amount), একটি মুদ্রা থেকে অন্য মুদ্রায় রূপান্তর করে এবং ওয়েবপেজে রেজাল্ট দেখায় 👇

```javascript
async function currencyFun() {
    const ammount = Number(document.getElementById("ammount").value)
    const from = document.getElementById("from").value
    const to = document.getElementById("to").value
    const api = await fetch(`https://open.er-api.com/v6/latest/${from}`)
    const apiInJson =
