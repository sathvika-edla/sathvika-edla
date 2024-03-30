const starsContainer = document.querySelector('.stars');
const numStars = 200;
for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animation = `twinkle ${(Math.random() * 5) + 1}s linear infinite`;
    starsContainer.appendChild(star);
}

// Generate random galaxies
const galaxiesContainer = document.querySelector('.galaxies');
const numGalaxies = 5;
for (let i = 0; i < numGalaxies; i++) {
    const galaxy = document.createElement('div');
    galaxy.classList.add('galaxy');
    galaxy.style.left = `${Math.random() * 100}%`;
    galaxy.style.top = `${Math.random() * 100}%`;
    galaxiesContainer.appendChild(galaxy);
}
