document.getElementById('myButton').addEventListener('click', function() {
    const title = document.getElementById('title');
    title.textContent = 'Button Clicked!';
    title.style.color = 'red';
    
    console.log('Button was clicked!');
});