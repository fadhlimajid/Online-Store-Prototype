let cart = JSON.parse(localStorage.getItem('cart'))
cart ? cart : cart = []

let sum = 0;
let total = function () {
   cart.forEach(e => {
      sum += (e.price * e.qty)
   });
   return sum
}

$(document).ready(function () {
   cart.map(data => {
      $("#cartList tbody").append(
         `<tr id=cart${data.id}>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td class='quantity'>${data.qty}</td>
            <td class='subtotal'>${parseInt(data.price) * parseInt(data.qty)}</td>
            <td><button class="removeItem">-1</button></td>
         </tr>`
      )
   })
   $('#price').text('€ ' + total())
})

function ok(pid, nama, harga, stok) {
   // console.log(stok)
   let qty = 1;
   const item = cart.find(x => x.id == pid)
   if (item && cart[cart.indexOf(item)].stock == 0) {
      alert("UDAH ABIS WOI")
   } else {
      if (item) {
         cart[cart.indexOf(item)].qty++
         let qty_text = $(`#cart${pid} .quantity`).text()
         $(`#cart${pid} .quantity`).text(parseInt(qty_text) + 1)
         cart[cart.indexOf(item)].stock--
         $(`#cart${pid} .subtotal`).text($(`#cart${pid} .quantity`).text() * harga)
      }
      else {
         stok -= qty
         cart.push({ id: pid, name: nama, price: harga, qty: qty, stock: stok })
         $("#cartList tbody").append(
            `<tr id=cart${pid}>
               <td>${pid}</td>
               <td>${nama}</td>
               <td class='quantity'>${qty}</td>
               <td class='subtotal'>${qty * harga}</td>
               <td><button class="removeItem">-1</button></td>
            </tr>`
         )
      }
      localStorage.setItem('cart', JSON.stringify(cart))
   }
   $('#price').text('€ ' + total())
}