
const shareButton = document.querySelector('.share-button');
const toggleSocials = () => {
    const socialsWrapper = document.querySelector('.socials-wrapper')
    const shareButtonImage = shareButton.querySelector('img')
    
    socialsWrapper.classList.toggle('active')

    if (shareButtonImage.src.includes('share')) {
        shareButtonImage.src = 'pictures/close.svg';
    } else {
        shareButtonImage.src = 'pictures/share.svg';
    }
}

shareButton.addEventListener('click', toggleSocials);

