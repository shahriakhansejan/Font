document.getElementById('bold').addEventListener('click',function(){
   const boldText = document.getElementById('text-field');

    if(boldText.style.fontWeight === 'bold'){
        boldText.style.fontWeight = 'normal';
    }
    else{
        boldText.style.fontWeight = 'bold' 
    }

})

document.getElementById('italic').addEventListener('click',function(){
    const italicText = document.getElementById('text-field');

    if(italicText.style.fontStyle === 'italic'){
        italicText.style.fontStyle = 'normal' 
    }
    else{
        italicText.style.fontStyle = 'italic'
    }
})


document.getElementById('underline').addEventListener('click', function(){
    const underlineText = document.getElementById('text-field');

    if(underlineText.style.textDecoration === 'underline'){
        underlineText.style.textDecoration = 'none'
    }
    else{
        underlineText.style.textDecoration= 'underline'
    }
})



// 2nd Part

document.getElementById('left-align').addEventListener('click', function(){
    const leftAlign = document.getElementById('text-field');
    leftAlign.style.textAlign = 'left';
})

document.getElementById('center-align').addEventListener('click', function(){
    const centerAlign = document.getElementById('text-field');
    if(centerAlign.style.textAlign === 'center'){
        centerAlign.style.textAlign = 'left';
    }
    else{
        centerAlign.style.textAlign = 'center';
    }
})

document.getElementById('right-align').addEventListener('click', function(){
    const rightAlign = document.getElementById('text-field');
    if(rightAlign.style.textAlign === 'right'){
        rightAlign.style.textAlign = 'left';
    }
    else{
        rightAlign.style.textAlign = 'right';
    }
})

document.getElementById('justify-align').addEventListener('click', function(){
    const justifyAlign = document.getElementById('text-field');
    if(justifyAlign.style.textAlign === 'justify'){
        justifyAlign.style.textAlign = 'left';
    }
    else{
        justifyAlign.style.textAlign = 'justify';
    }
})


// part 3
document.getElementById('color-input').addEventListener('input', function(event){
    document.getElementById('text-field').style.color = event.target.value;
}) 

document.getElementById('size-input').addEventListener('input', function(event){
    document.getElementById('text-field').style.fontSize = event.target.value + 'px';
})
