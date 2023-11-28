// script.js

const tweets = [
    {
        user: 'Kanye West',
        image: 'img/yetweet1.jpg',
    },
    {
        user: 'Ye',
        image: 'img/yetweet2.jpg',
    },
    {
        user: 'Ye',
        image: 'img/elontweet1.png',
    },
    {
        user: 'Ye',
        image: 'img/gretavtate.png',
    },
    {
        user: 'Ye',
        image: 'img/lilnasx.png',
    },
    {
        user: 'Ye',
        image: 'img/posty.png',
    },
    {
        user: 'Ye',
        image: 'img/tiktok.png',
    },
    {
        user: 'Ye',
        image: 'img/malala.png',
    },
    {
        user: 'Ye',
        image: 'img/jamescharles.jpg',
    },
    {
        user: 'Ye',
        image: 'img/jamescharles2.jpg',
    },
    {
        user: 'Ye',
        image: 'img/grabrielz.JPG',
    },
    {
        user: 'Ye',
        image: 'img/duolingo.png',
    },
    {
        user: 'Ye',
        image: 'img/azealia.png',
    },
    {
        user: 'Ye',
        image: 'img/trumptweet1.JPG',
    },
    {
        user: 'Ye',
        image: 'img/tip.png',
    },
    {
        user: 'Ye',
        image: 'img/timmythick.jpg',
    },
    {
        user: 'Ye',
        image: 'img/rudy.jpg',
    },
    {
        user: 'Ye',
        image: 'img/elontweet2.png',
    },
    {
        user: 'Ye',
        image: 'img/elontweet3.png',
    },
    {
        user: 'Ye',
        image: 'img/abortion.png',
    },
    // Add more tweets as needed
];

let currentTweetIndex = 0;
let isLoading = false;

function showNextTweet() {
    if (isLoading) return;

    const tweetElement = document.getElementById('tweet');
    const loadingSpinner = document.getElementById('loading-spinner');

    loadingSpinner.style.display = 'block';

    // Simulate an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
        const nextTweet = tweets[currentTweetIndex];
        tweetElement.innerHTML = `
            <div class="tweet-content">
                <img src="${nextTweet.image}" alt="${nextTweet.user}'s Tweet Image" style="width: 100%; height: auto;">
            </div>
        `;

        loadingSpinner.style.display = 'none';
        isLoading = false;
        currentTweetIndex = (currentTweetIndex + 1) % tweets.length;
    }, 1000); // Adjust the timeout as needed
}

// Function to reset to initial state
function resetToInitialState() {
    const tweetElement = document.getElementById('tweet');
    const loadingSpinner = document.getElementById('loading-spinner');

    loadingSpinner.style.display = 'none';
    
    // Set the initial content
    tweetElement.innerHTML = `
        <div class="avatar">
            <img src="img/Twitterlogo.png" alt="User Avatar">
        </div>
        <div class="tweet-content">
            <div class="user-name">Twitter Archive</div>
            <div class="tweet-text">Welcome to Twitter Archive. Click the button for a new tweet. #TwitterArchive</div>
        </div>
    `;
}

// Dark Mode Function
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Initialize Intersection Observer after the button click
document.getElementById('tweet').onclick = function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                isLoading = true;
                showNextTweet();
            }
        });
    });

    observer.observe(document.getElementById('tweet'));
};

// Event listener for the "Home" button
document.getElementById('home').addEventListener('click', function () {
    resetToInitialState();
});