document.addEventListener('DOMContentLoaded', () => {
    const signInTab = document.getElementById('signInTab');
    const signUpTab = document.getElementById('signUpTab');
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');

    // Show the Sign In form by default
    signInForm.classList.add('active');

    // Toggle to Sign In
    signInTab.addEventListener('click', () => {
        signInTab.classList.add('active');
        signUpTab.classList.remove('active');
        signInForm.classList.add('active');
        signUpForm.classList.remove('active');
    });

    // Toggle to Sign Up
    signUpTab.addEventListener('click', () => {
        signUpTab.classList.add('active');
        signInTab.classList.remove('active');
        signUpForm.classList.add('active');
        signInForm.classList.remove('active');
    });
});
