let selectedRating = 0;

function rate(stars) {
    selectedRating = stars;
    highlightStars(stars);
}

function highlightStars(stars) {
    for (let i = 1; i <= 5; i++) {
        const star = document.querySelector(`.rating span:nth-child(${i})`);
        star.style.color = i <= stars ? 'gold' : 'gray';
    }
}

function submitFeedback() {
    const feedbackMsg = document.getElementById('feedbackMsg').value;

    // You can send the selectedRating and feedbackMsg to your server or perform any desired actions.
    // For now, let's just log them.
    console.log('Rating:', selectedRating);
    console.log('Feedback:', feedbackMsg);

    // Optionally, you can clear the feedback form or show a thank you message.
    clearFeedbackForm();
}

function clearFeedbackForm() {
    selectedRating = 0;
    highlightStars(0);
    document.getElementById('feedbackMsg').value = '';
}
