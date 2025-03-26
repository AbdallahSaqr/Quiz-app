document.getElementById('submitBtn').addEventListener('click', function(event) {
    var name = document.getElementById('nameInput').value;
    if (name.trim() === '') {
        alert('Please enter your name');
        event.preventDefault();
    }
});
