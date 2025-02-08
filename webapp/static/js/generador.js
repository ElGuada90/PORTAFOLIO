function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    var charset = "";
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) charset += "0123456789";
    if (symbols) charset += "!@#$%^&*()_+{}[]|:;<>,.?/~";
    var password = "";
    for (var i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
  }

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("password-length").addEventListener("input", function() {
      document.getElementById("password-length-display").textContent = this.value;
    });

    document.getElementById("generate-btn").addEventListener("click", function() {
      var length = parseInt(document.getElementById("password-length").value);
      var uppercase = document.getElementById("uppercase").checked;
      var lowercase = document.getElementById("lowercase").checked;
      var numbers = document.getElementById("numbers").checked;
      var symbols = document.getElementById("symbols").checked;

      var password = generatePassword(length, uppercase, lowercase, numbers, symbols);
      document.getElementById("password").value = password;
      document.getElementById("password").type = 'text'; // Cambiar el tipo de input a text para que la contraseña sea visible
    });
  });

  function copyPassword() {
    var passwordInput = document.getElementById("password");
    passwordInput.select();
    document.execCommand("copy");
    passwordInput.type = 'password'; // Restaurar el tipo de input a password
    alert("Password copied to clipboard!");
  }