$("#register-form").submit((res) => {
   res.preventDefault();
   let abc = $("#register-form").serializeArray()
   $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/users/register',
      data: abc,
      success: function () {
         // if()?
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
   // let abcdef = $("#login-form").serializeArray()
   let abcdef = {
      username: $("#username").val(),
      password: $("#password").val()
   }
   $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/users/login',
      data: JSON.stringify(abcdef),
      contentType: "application/json; charset=utf-8",
      success: function (res) {
         // console.log(res)
         if (res) {
            localStorage.setItem("tokennya", "cihuy");
            console.log('Login successful')
            window.location = "/store.html"
         } else {
            console.log('no ok')
         }
      }
   })
})