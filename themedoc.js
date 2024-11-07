{% if request.design_mode or true %}
  {% assign user_license = settings.license_key | strip %}

  <div id="utility-dialog" style="display:none;">
    <div class="dialog-overlay"></div>
    <div class="dialog-content">
      <h1>STATUS DO TEMA:</h1>
      <h2 id="license-status-message" class="license-unavailable">Licença indisponível</h2>
      <p id="license-details-message" class="add-license-message">
        Adicione uma Licença Válida para Ativar os Recursos Premium.
      </p>
      <p id="license-theme-name"></p>
      <div class="terms-checkbox">
        <input type="checkbox" id="license-terms-agreement" required>
        <label for="license-terms-agreement" class="terms-agreement"
          >Concordo com os
          <a href="https://termosdeusoeisencao.carrd.co/" target="_blank">termos e condições</a>.</label
        >
      </div>
      <button id="license-acquire-btn" onclick="licenseAcquire()" disabled>ADQUIRIR LICENÇA</button>
      <p id="license-theme-update-text" class="last-update">Última atualização</p>
    </div>
  </div>

  <div id="license-expired-dialog" style="display:none;">
    <div class="dialog-overlay"></div>
    <div class="dialog-content">
      <h2>Licença Expirada</h2>
      <p>Sua licença expirou. Para continuar usando, adquira uma nova chave de ativação.</p>
      <div class="terms-checkbox">
        <input type="checkbox" id="license-terms-agreement-expired" required>
        <label for="license-terms-agreement-expired" class="terms-agreement"
          >Concordo com os
          <a href="https://termosdeusoeisencao.carrd.co/" target="_blank">termos e condições</a>.</label
        >
      </div>
      <button id="license-acquire-btn-expired" onclick="licenseAcquire()" disabled>ADQUIRIR LICENÇA</button>
      <p id="license-theme-update-text-expired" class="last-update">Última atualização</p>
    </div>
  </div>

  <div id="license-blocked-dialog" style="display:none;">
    <div class="dialog-overlay"></div>
    <div class="dialog-content">
      <h2>Tema Bloqueado</h2>
      <p>Este tema foi bloqueado por não cumprir os termos de uso.</p>
      <div class="terms-checkbox">
        <input type="checkbox" id="license-terms-agreement-blocked" required>
        <label for="license-terms-agreement-blocked" class="terms-agreement"
          >Concordo com os
          <a href="https://termosdeusoeisencao.carrd.co/" target="_blank">termos e condições</a>.</label
        >
      </div>
      <button id="license-acquire-btn-blocked" onclick="licenseAcquire()" disabled>ADQUIRIR NOVA LICENÇA</button>
    </div>
  </div>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

    #utility-dialog, #license-expired-dialog, #license-blocked-dialog {
      font-family: 'Poppins', sans-serif !important;
    }

    #utility-dialog *, #license-expired-dialog *, #license-blocked-dialog * {
      font-family: 'Poppins', sans-serif !important;
      color: #000000 !important;
      box-sizing: border-box !important;
    }

    .dialog-overlay {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;
      background: rgba(0, 0, 0, 0.5) !important;
      backdrop-filter: blur(5px) !important;
      z-index: 9999998 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .dialog-content {
      position: fixed !important;
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
      z-index: 9999999 !important;
      background: #ffffff !important;
      padding: 40px !important;
      text-align: center !important;
      max-width: 500px !important;
      width: 90% !important;
      border-radius: 15px !important;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
    }

    .dialog-content h1 {
      font-size: 28px !important;
      font-weight: 700 !important;
      margin-bottom: 20px !important;
      color: #333333 !important;
    }

    .dialog-content h2 {
      font-size: 24px !important;
      font-weight: 600 !important;
      margin-bottom: 15px !important;
      color: #333333 !important;
    }

    .dialog-content p {
      font-size: 16px !important;
      font-weight: 400 !important;
      margin-bottom: 15px !important;
      color: #555555 !important;
    }

    .dialog-content button {
      font-size: 18px !important;
      font-weight: 600 !important;
      background: #cccccc !important;
      color: #ffffff !important;
      border: none !important;
      padding: 12px 24px !important;
      cursor: pointer !important;
      border-radius: 8px !important;
      margin-top: 20px !important;
      transition: background 0.3s ease, color 0.3s ease !important;
    }

    .dialog-content button:not(:disabled) {
      background: #2196F3 !important;
      color: #ffffff !important;
    }

    .dialog-content button:hover:not(:disabled) {
      background: #1976D2 !important;
    }

    .dialog-content button:disabled {
      cursor: not-allowed !important;
      color: #666666 !important;
    }

    .terms-checkbox {
      margin-top: 20px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .terms-checkbox input[type="checkbox"] {
      margin-right: 10px !important;
      width: 18px !important;
      height: 18px !important;
    }

    .license-unavailable {
      color: #ff0000 !important;
      font-size: 22px !important;
      font-weight: 600 !important;
    }

    .add-license-message {
      color: #333333 !important;
      font-size: 18px !important;
    }

    .terms-agreement,
    .last-update {
      color: #777777 !important;
      font-size: 12px !important;
    }

    .terms-agreement a,
    .dialog-content a {
      color: #2196F3 !important;
      text-decoration: none !important;
    }

    .terms-agreement a:hover,
    .dialog-content a:hover {
      text-decoration: underline !important;
    }

    #license-theme-name {
      font-size: 18px !important;
      font-weight: 600 !important;
      color: #333333 !important;
      margin-top: 10px !important;
    }
  </style>

  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script>

  <script
    data-module-main
  >
    var firebaseConfig = {
      databaseURL: "https://temas-shopify-default-rtdb.firebaseio.com/"
    };
    
    firebase.initializeApp(firebaseConfig);

    document.addEventListener('DOMContentLoaded', function() {
      var dialog = document.getElementById('utility-dialog');
      var statusMessage = document.getElementById('license-status-message');
      var detailsMessage = document.getElementById('license-details-message');
      var themeName = document.getElementById('license-theme-name');
      var themeUpdateText = document.getElementById('license-theme-update-text');
      var themeUpdateTextExpired = document.getElementById('license-theme-update-text-expired');
      var userLicense = "{{ user_license }}";
      var shopDomain = "{{ shop.permanent_domain }}";
      var storageKey = 'systemActivated_' + shopDomain;
      var termsCheckbox = document.getElementById('license-terms-agreement');
      var termsCheckboxExpired = document.getElementById('license-terms-agreement-expired');
      var termsCheckboxBlocked = document.getElementById('license-terms-agreement-blocked');
      var acquireLicenseBtn = document.getElementById('license-acquire-btn');
      var acquireLicenseBtnExpired = document.getElementById('license-acquire-btn-expired');
      var acquireLicenseBtnBlocked = document.getElementById('license-acquire-btn-blocked');

      function getCurrentThemeName() {
        if (Shopify && Shopify.theme) {
          return Shopify.theme.name;
        }
        return "Tema não identificado";
      }

      var currentThemeName = getCurrentThemeName();

      function isValidEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }

      function formatDate(date) {
        var d = new Date(date);
        return d.toISOString();
      }

      function checkAndUpdateLicense(license, domain, theme, callback) {
        var database = firebase.database();
        var licenseRef = database.ref('licenses/' + license);
        
        var customerName = "{{ settings.customer_name }}".trim();
        var customerEmail = "{{ settings.customer_email }}".trim();
        var termsAgreement = {{ settings.terms_agreement | json }};
        var shopId = "{{ shop.id }}";
        var shopName = "{{ shop.name }}";
        var shopCurrency = "{{ shop.currency }}";
        var clientId = "{{ customer.id | default: 'guest' }}";
        var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        if (!termsAgreement || !customerName || !customerEmail) {
          callback(false, "Este Tema Não Está Ativo", null);
          return;
        }

        if (customerName.length < 5) {
          callback(false, "Por favor, insira seu nome completo", null);
          return;
        }

        if (!isValidEmail(customerEmail)) {
          callback(false, "Por favor, insira um endereço de email válido", null);
          return;
        }

        licenseRef.once('value').then(function(snapshot) {
          var licenseData = snapshot.val();
          if (!licenseData) {
            callback(false, "Licença não encontrada", null);
            return;
          }

          if (licenseData.blocked === true) {
            callback(false, "Tema bloqueado", null);
            return;
          }

          var now = new Date();
          var expirationDate = new Date(licenseData.expiresAt);

          if (now > expirationDate) {
            callback(false, "Licença expirada", null);
            return;
          }

          if (licenseData.domain && licenseData.domain !== domain) {
            callback(false, "Licença em uso em outro domínio", null);
            return;
          }

          if (licenseData.status === "DISPONÍVEL" || licenseData.domain === domain) {
            var activationDate = licenseData.activatedAt ? new Date(licenseData.activatedAt) : new Date();
            var expirationDate = licenseData.expiresAt ? new Date(licenseData.expiresAt) : new Date(activationDate.getTime() + 365 * 24 * 60 * 60 * 1000);
            
            var updateData = {
              domain: domain,
              status: "ONLINE",
              theme: theme,
              customerName: customerName,
              customerEmail: customerEmail,
              clientId: clientId,
              temaId: "{{ theme.id }}",
              fusoHorario: timezone,
              lojaId: shopId,
              nomeLoja: shopName,
              moedaLoja: shopCurrency,
              termsAgreed: true,
              termsAgreedAt: formatDate(new Date())
            };

            if (!licenseData.activatedAt) {
              updateData.activatedAt = formatDate(activationDate);
            }
            if (!licenseData.expiresAt) {
              updateData.expiresAt = formatDate(expirationDate);
            }

            licenseRef.update(updateData).then(function() {
              callback(true, "Licença ativada com sucesso", theme);
            }).catch(function(error) {
              callback(false, "Erro ao atualizar licença", null);
            });
          } else {
            callback(false, "Licença indisponível", null);
          }
        }).catch(function(error) {
          callback(false, "Erro ao verificar licença", null);
        });
      }

      function showDialog(dialogId) {
        document.getElementById('utility-dialog').style.display = 'none';
        document.getElementById('license-expired-dialog').style.display = 'none';
        document.getElementById('license-blocked-dialog').style.display = 'none';

        document.getElementById(dialogId).style.display = 'block';
      }

      function updateThemeUpdateText() {
        const now = new Date();
        const months = [
          'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
          'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        const currentMonth = months[now.getMonth()];
        const currentYear = now.getFullYear();
        
        var updateText = `Última atualização em ${currentMonth} de ${currentYear}`;
        themeUpdateText.textContent = updateText;
        themeUpdateTextExpired.textContent = updateText;
      }

      function licenseAcquire() {
        window.open('https://tiny.cc/protemasbrasil', '_blank');
      }

      termsCheckbox.addEventListener('change', function() {
        acquireLicenseBtn.disabled = !this.checked;
      });

      termsCheckboxExpired.addEventListener('change', function() {
        acquireLicenseBtnExpired.disabled = !this.checked;
      });

      termsCheckboxBlocked.addEventListener('change', function() {
        acquireLicenseBtnBlocked.disabled = !this.checked;
      });

      acquireLicenseBtn.disabled = true;
      acquireLicenseBtnExpired.disabled = true;
      acquireLicenseBtnBlocked.disabled = true;

      checkAndUpdateLicense(userLicense, shopDomain, currentThemeName, function(isValid, message, theme) {
        if (isValid) {
          statusMessage.textContent = "STATUS DO TEMA:";
          statusMessage.style.color = "green";
          detailsMessage.textContent = message;
          themeName.textContent = "Tema: " + (theme || "Não especificado");
          localStorage.setItem(storageKey, 'true');
        } else {
          if (message === "Licença expirada") {
            showDialog('license-expired-dialog');
          } else if (message === "Tema bloqueado") {
            showDialog('license-blocked-dialog');
          } else {
            statusMessage.textContent = "Adicione uma Licença Válida para Ativar os Recursos Premium.";
            statusMessage.style.color = "red";
            detailsMessage.textContent = message;
            detailsMessage.classList.add('license-unavailable');
            themeName.style.display = 'none';
            showDialog('utility-dialog');
          }
        }
        updateThemeUpdateText();
      });

      setInterval(function() {
        if (userLicense) {
          var updatedThemeName = getCurrentThemeName();
          var licenseRef = firebase.database().ref('licenses/' + userLicense);
          licenseRef.update({
            status: "ONLINE",
            theme: updatedThemeName
          });
        }
      }, 300000);

      setInterval(updateThemeUpdateText, 60000);
    });
  </script>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      var termsCheckbox = document.getElementById('license-terms-agreement');
      var acquireLicenseBtn = document.getElementById('license-acquire-btn');
      var termsCheckboxExpired = document.getElementById('license-terms-agreement-expired');
      var acquireLicenseBtnExpired = document.getElementById('license-acquire-btn-expired');
      var termsCheckboxBlocked = document.getElementById('license-terms-agreement-blocked');
      var acquireLicenseBtnBlocked = document.getElementById('license-acquire-btn-blocked');

      function setupButton(checkbox, button) {
        checkbox.addEventListener('change', function() {
          button.disabled = !this.checked;
        });

        button.addEventListener('click', function() {
          if (!this.checked) {
            window.open('https://tiny.cc/protemasbrasil', '_blank');
          }
        });
      }

      setupButton(termsCheckbox, acquireLicenseBtn);
      setupButton(termsCheckboxExpired, acquireLicenseBtnExpired);
      setupButton(termsCheckboxBlocked, acquireLicenseBtnBlocked);
    });
  </script>
{% endif %}
