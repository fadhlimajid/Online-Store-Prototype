fetch('http://localhost:3000/api/products').then(res => {
   return res.json()
}).then(json => {
   json.map(data => {
      $("#products_table tbody").append(
         `<tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.description}</td>
            <td>${data.price}</td>
            <td>${data.stock}</td>
         </tr>`
      )
   })
})