// Click to play video and show page with cool animation
const video = document.getElementById('bg-video');
const playOverlay = document.getElementById('play-overlay');
const container = document.querySelector('.container');

if (video && playOverlay && container) {
    // Hide container initially
    container.style.opacity = '0';
    container.style.pointerEvents = 'none';
    
    // Play video and show page when clicking overlay
    playOverlay.addEventListener('click', () => {
        console.log('User clicked to play - starting animations');
        
        // Overlay zoom out and fade animation
        playOverlay.style.animation = 'zoomOut 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, fadeOut 0.8s ease forwards';
        
        // Show video with fade in
        video.style.display = 'block';
        video.style.visibility = 'visible';
        video.style.transition = 'opacity 0.8s ease';
        video.style.opacity = '1';
        
        // Unmute and play video with sound
        video.muted = false;
        video.volume = 1;
        
        // Play video
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('Video playing with sound');
                
                // Delay profile appearance slightly for cool effect
                setTimeout(() => {
                    // Show profile container with fade in
                    container.style.transition = 'opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s';
                    container.style.opacity = '1';
                    container.style.pointerEvents = 'auto';
                }, 100);
                
            }).catch(error => {
                console.log('Play error:', error);
            });
        }
        
        // Hide overlay after animation
        setTimeout(() => {
            playOverlay.style.display = 'none';
        }, 800);
    });
    
    // Make overlay clickable
    playOverlay.style.cursor = 'pointer';
    playOverlay.style.userSelect = 'none';
}