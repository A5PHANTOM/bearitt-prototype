let navbarHTML = `
<link rel="stylesheet" href="navibar-footer.css">

  <!-- Bootstrap CSS -->
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    
  <!-- Zen Dot Font -->
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
 <!-- Footer Wrapper for Full Width Background -->
 <div class="footer-wrapper">
    <div class="footer">
        <div class="footer-content">
            <div class="footer-left">
                <!-- Replace footer title with logo image -->
                <div class="footer-logo">
                    <img src="assets/logo white bearitt.png" alt="Bearitt Logo" class="footer-logo-img">
                </div>
                
                <p class="footer-slogan">Join us on our mission to make 50 million people fit!</p>
                <div class="contact-info">
                    <i class="fas fa-envelope mail-icon"></i>
                    <span class="email">bearitt.fit@gmail.com</span>
                </div>
                <div class="phone-info">
                    <i class="fas fa-phone phone-icon"></i>
                    <span class="phone-number">+91 9846-66-55-99</span>
                </div>
                <div class="social-icons">
                    <a href="https://www.facebook.com/YourPage" target="_blank">
                        <i class="fab fa-facebook-square"></i>
                    </a>
                    <a href="https://www.instagram.com/YourProfile" target="_blank">
                        <i class="fab fa-instagram-square"></i>
                    </a>
                    <a href="https://twitter.com/YourProfile" target="_blank">
                        <i class="fab fa-twitter-square"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/YourProfile" target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
    
            <div class="footer-center">
                <div class="footer-label">SERVICES</div>
                <ul class="footer-links">
                    <li><a href="#" class="footer-link">FITNESS (coming soon)</a></li>   
                    <li><a href="nutrition.html" class="footer-link">NUTRITION</a></li>
                </ul>
                <h4 class="footer-tools">TOOLS</h4>
                <ul class="footer-links">
                    <li><a href="/footer/bmr.html" class="footer-link">BMR Calculator</a></li>
                    <li><a href="/footer/macro.html" class="footer-link">Macro Calculator</a></li>
                    <li><a href="/footer/bfatcalc.html" class="footer-link">Body Fat Calculator</a></li>
                    <!-- <li><a href="#" class="footer-link">1RM Calculator</a></li> -->
                </ul>
            </div>
    
            <div class="footer-company">
                <div class="footer-label">COMPANY</div>
                <ul class="footer-links">
                    <li><a href="aboutus/aboutus.html" class="footer-link">OUR STORY</a></li>
                    <li><a href="#" class="footer-link">HELP</a></li>
                    <li><a href="contact.html" class="footer-link">CONTACT US</a></li>
                </ul>
            </div>
    
            <div class="footer-community">
                <div class="footer-community-label">COMMUNITY</div>
                <ul class="footer-community-links">
                    <li><a href="community.html" class="footer-community-link">Our Community</a></li>
                    <li><a href="#" class="footer-community-link">Discord Channel</a></li>
                    <li><a href="https://t.me/+LiLIgX6FZEk2NDJl" class="footer-community-link">Telegram Channel</a></li>
                    <li><a href="https://chat.whatsapp.com/BU9eXdSU76D9VDkvzIkPn9" class="footer-community-link">WhatsApp Group</a></li>
                </ul> 
            </div>
        </div>
    </div>
</footer>
`;

document.getElementById('footer-placeholder').innerHTML = navbarHTML;
