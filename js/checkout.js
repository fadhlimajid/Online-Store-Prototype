function checkout() {
   if (parseInt(($('#price').text()).slice(2))) {
      const cart = JSON.parse(localStorage.getItem('cart'))

      // window.location = '/payment.html'
      const data = {
         users_id: JSON.parse(localStorage.getItem('tokennya')).id,
         data: cart,
         total: parseInt(($('#price').text()).slice(2))
      }
      $.ajax({
         type: 'POST',
         url: 'http://localhost:3000/api/orders',
         data: JSON.stringify(data),
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
         },
         contentType: "application/json; charset=utf-8",
         success: function (msg) {
            window.location = msg.redirect_url
         }  
      });
   } else { alert(('Please Insert Your Items')) }
}

