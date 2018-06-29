function checkout() {
   const iou = JSON.parse(localStorage.getItem('tokennya')).id

   fetch(`/api/users/?id=${iou}`).then(res => {
      return res.json()
   }).then(json => {
      if (parseInt(($('#price').text()).slice(2))) {
         const cart = JSON.parse(localStorage.getItem('cart'))

         const data = {
            users_id: iou,
            data: cart,
            total: parseInt(($('#price').text()).slice(2)),
            email: json[0].email
         }
         $.ajax({
            type: 'POST',
            url: '/api/orders',
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
   })
}

