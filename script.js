// Form doğrulama fonksiyonu
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun sayfayı yenilemesini engeller
  
    // Gerekli alanları kontrol et
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
  
    // Eğer gerekli alanlar boşsa, bildirim göster
    if (!firstName || !lastName || !email || !subject || !message) {
        // Bildirimi göster
        var notification = document.getElementById("notification");
        notification.style.display = "block";
  
        // 5 saniye sonra bildirimi gizle
        setTimeout(function() {
            notification.style.display = "none";
        }, 5000);
    } else {
        // Gerekli tüm alanlar doluysa, teşekkür mesajını göster
        var now = new Date();
        var messageTime = now.toLocaleString(); // Gönderilme tarihi ve saati
  
        // Teşekkür mesajını göster
        var thankYouMessage = document.getElementById("thankYouMessage");
        thankYouMessage.style.display = "block";
        
        // Mesaj içeriğini ve tarihi ekle
        document.getElementById("messageDetails").innerHTML = 
            `Message: ${message} <br> Sent on: ${messageTime}`;
        
        // Contact Me formunu gizle
        var contactForm = document.getElementById("contactForm");
        contactForm.style.display = "none";
        
        // "Click here" linki tıklanabilir yap
        var newMessageLink = document.getElementById("newMessageLink");
        newMessageLink.addEventListener("click", function() {
            // Formu tekrar göster// Mesaj gönderme sayısını tutmak için bir sayaç
let messageCount = 0;

// Form doğrulama fonksiyonu
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun sayfayı yenilemesini engeller
  
    // Gerekli alanları kontrol et
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
  
    // Eğer gerekli alanlar boşsa, bildirim göster
    if (!firstName || !lastName || !email || !subject || !message) {
        // Bildirimi göster
        var notification = document.getElementById("notification");
        notification.style.display = "block";
  
        // 5 saniye sonra bildirimi gizle
        setTimeout(function() {
            notification.style.display = "none";
        }, 5000);
    } else {
        // Gerekli tüm alanlar doluysa, teşekkür mesajını göster
        var now = new Date();
        var messageTime = now.toLocaleString(); // Gönderilme tarihi ve saati

        // Mesaj sayısını arttır
        messageCount++;

        // Teşekkür mesajını göster
        var thankYouMessage = document.getElementById("thankYouMessage");
        thankYouMessage.style.display = "block";
        
        // Mesaj içeriğini ve tarihi ekle
        document.getElementById("messageDetails").innerHTML = 
            `Message: ${message} <br> Sent on: ${messageTime}`;
        
        // Gönderilen mesaj sayısını göster
        document.getElementById("messageCount").innerHTML = `You have sent ${messageCount} message(s).`;
        
        // Contact Me formunu gizle
        var contactForm = document.getElementById("contactForm");
        contactForm.style.display = "none";
        
        // "Click here" linki tıklanabilir yap
        var newMessageLink = document.getElementById("newMessageLink");
        newMessageLink.addEventListener("click", function() {
            // Formu tekrar göster
            contactForm.style.display = "block";
            thankYouMessage.style.display = "none"; // Teşekkür mesajını gizle
        });
    }
});

            contactForm.style.display = "block";
            thankYouMessage.style.display = "none"; // Teşekkür mesajını gizle
        });
    }
});
