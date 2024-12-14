const BASE_URL = 'https://valorant-api.com/v1';
const iconContainer = document.getElementById('icon-container');
const videoSection = document.getElementById('weapon-video');

fetch(`${BASE_URL}/weapons`)
  .then((res) => res.json())
  .then((jsonResponse) => {
    jsonResponse.data.forEach((weapon) => {
      addImage(weapon.displayIcon, () => {
        const skinWithVideo = weapon.skins.find((skin) =>
          skin.levels.some((level) => level.streamedVideo)
        );

        if (skinWithVideo) {
          const videoUrl = skinWithVideo.levels.find(
            (level) => level.streamedVideo
          ).streamedVideo;

          
          videoSection.src = videoUrl;
          videoSection.classList.remove('hidden');
        }
      });
    });
  });


const addImage = (src, click) => {
  const img = document.createElement('img');
  img.src = src;
  img.onclick = click;
  iconContainer.appendChild(img);
};


