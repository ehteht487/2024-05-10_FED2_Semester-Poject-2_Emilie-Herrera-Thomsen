export function setRegisterFormListener() {
    const form = document.querySelector("#registerForm");

    form.addEventListener("submit", (event) => {event.preventDefault()
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries())

        const avatar = {
        avatarUrl: profile.avatarUrl,
        altText: profile.altText
        };

        delete profile.avatarUrl;
        delete profile.altText;

        profile.avatar = avatar;

        const banner = {
        bannerUrl: profile.bannerUrl,
        bannerAltText: profile.bannerAltText
        };

        delete profile.bannerUrl;
        delete profile.bannerAltText;

        profile.banner = banner;

        console.log(profile)
        });
};

