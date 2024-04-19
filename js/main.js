/*
Name: Niran Abdulqader 
*/

document.addEventListener('DOMContentLoaded', function() {
    // An array of social media platforms with their URLs and icon 
    const socialMediaPlatforms = [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/Niranabdulqader', iconClass: 'fab fa-linkedin' },
        { name: 'Email', url: 'mailto:niran.abdulqader@example.com', iconClass: 'fas fa-envelope' },
        { name: 'Instagram', url: 'https://www.instagram.com/Niran_aldoury', iconClass: 'fab fa-instagram' },
        { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=1000075372158911', iconClass: 'fab fa-facebook' }
    ];

    // container element where social media icons will be
    const socialIconsContainer = document.getElementById('social-icons-container');

    // Loop through the social media platforms array and create icons with links
    socialMediaPlatforms.forEach(platform => {
        // Create <a> tag for the social media platform
        const linkElement = document.createElement('a');
        linkElement.href = platform.url;
        linkElement.target = '_blank'; // Open link in a new tab

        // Create <i> tag for the icon using Font Awesome classes
        const iconElement = document.createElement('i');
        iconElement.className = platform.iconClass;

        // Append the icon to link element
        linkElement.appendChild(iconElement);

        // Append the link element to the social icons container
        socialIconsContainer.appendChild(linkElement);

        // Add space between icons using a span element 
        socialIconsContainer.appendChild(document.createElement('span')).innerHTML = '&nbsp;';
    });
});
