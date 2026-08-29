// scripts.js - Core UI functionality

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Hamburger Menu Logic ---
    const mobileMenuBtn = document.querySelector('button.md\\:hidden');
    const desktopNav = document.querySelector('nav');
    const contactBtn = document.querySelector('header a.hidden.md\\:inline-block');

    if (mobileMenuBtn && desktopNav) {
        mobileMenuBtn.addEventListener('click', () => {
            
            // Toggle the display properties for the navigation menu
            desktopNav.classList.toggle('hidden');
            desktopNav.classList.toggle('flex');
            desktopNav.classList.toggle('flex-col');
            
            // Add mobile-specific styling (absolute positioning, background, spacing)
            desktopNav.classList.toggle('absolute');
            desktopNav.classList.toggle('top-[72px]'); // Positions it right below the header
            desktopNav.classList.toggle('left-0');
            desktopNav.classList.toggle('w-full');
            desktopNav.classList.toggle('bg-white');
            desktopNav.classList.toggle('shadow-lg');
            desktopNav.classList.toggle('p-6');
            desktopNav.classList.toggle('border-t');
            
            // Toggle the contact button visibility inside the mobile menu
            if (contactBtn) {
                contactBtn.classList.toggle('hidden');
                contactBtn.classList.toggle('block');
                contactBtn.classList.toggle('text-center');
                contactBtn.classList.toggle('mt-4');
            }

            // Animate the icon (Switch from Hamburger 'bars' to 'times' cross)
            const icon = mobileMenuBtn.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});