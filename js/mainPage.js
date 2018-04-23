$("#register-form").submit((res) => {
   res.preventDefault();
   const abc = $("#register-form").serializeArray()
   let obj = {
      username: $("#name").val(),
      firstname: $("#firstname").val(),
      lastname: $("#lastname").val(),
      password: $("#pw").val(),
      email: $("#email").val(),
      address: $("#address").val(),
      phone: $("#phone").val()
   }

   $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/users/register',
      data: JSON.stringify(obj),
      contentType: "application/json; charset=utf-8",
      success: function () {
         if (console && console.log) {
            console.log('JS error report successful.');
         }
      },
      error: function () {
         if (console && console.error) {
            console.error('JS error report submission failed!');
         }
      }
   })
})

$("#login-form").submit((res) => {
   res.preventDefault();
   let abcdef = {
      username: $("#username").val(),
      password: $("#password").val()
   }
   console.log(abcdef)
   $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/users/login',
      data: JSON.stringify(abcdef),
      contentType: "application/json; charset=utf-8",
      success: function (res) {
         if (res) {
            localStorage.setItem("tokennya", JSON.stringify({ tokennya: res.token, id: res.id }));
            console.log('Login successful')
            window.location = "/store.html"
         } else {
            console.log('no ok')
         }
      }
   })
})