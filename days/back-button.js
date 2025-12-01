// Auto-inject back button into day pages
const backButton = document.createElement('a');
backButton.href = '../../index.html';
backButton.innerHTML = '← Back';
backButton.style.cssText = 'position:fixed;top:1rem;left:1rem;background:#c41e3a;color:white;padding:0.5rem 1rem;border-radius:8px;text-decoration:none;font-family:sans-serif;font-size:14px;box-shadow:0 2px 8px rgba(0,0,0,0.3);z-index:9999;';
document.body.appendChild(backButton);
