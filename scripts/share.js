const shareButtons = document.querySelectorAll('.link_share_btn');
const sharePageButton = document.querySelector('.share_page_btn');
console.log(shareButtons);

async function copyLink(e) {
    e.preventDefault();
    const link = this.getAttribute('link');
    try {
        await navigator.clipboard.writeText(link);
        alert("Link copied in clipboard.");
    } catch(err) {
        console.error(err);
    };
};

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyLink));

sharePageButton(sharePageButton.addEventListener('click', copyPageLink));

async function copyPageLink(e) {
    const link = 'https://itswhiteline.github.io/links/';
    try {
        await navigator.clipboard.writeText(link);
        alert("Link copied in clipboard.");
    } catch(err) {
        console.error(err);
    };
};