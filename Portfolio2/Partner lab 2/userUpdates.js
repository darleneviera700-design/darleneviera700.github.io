function updatePage()
{
    let greeting = document.getElementById("greeting");
    let message = document.getElementById("message");
    let name = document.getElementById("name");
    let userMessage = document.getElementById("userMessage");
    let color = document.getElementById("colors");
    greeting.textContent = "Hello " + name.value;
    message.textContent = userMessage.value;
    document.body.style.backgroundColor = color.value;
}


