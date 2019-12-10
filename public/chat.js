// make connection

var socket = io.connect('http://localhost:4000');

//query dom
var message = document.getElementById('message')
var handle = document.getElementById('handle')

var btn = document.getElementById('send');
var output= document.getElementById('output')


//emit events

btn.addEventListener('click',()=>{
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    })
})


//listen for event
socket.on('chat',function(data){
    output.innerHTML+="<p><strong>"+data.handle+":</strong>"+data.message+"</p>"
})