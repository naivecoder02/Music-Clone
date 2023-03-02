console.log("SANGEET me aapka SWAGAT HAI");
// Initialize the variables
let songIndex=0;
let audioElement=new Audio('1.mp3');
// let audioElement=new Audio('Tere Liye');
let masterPlay=document.getElementById('masterPlay'); 
let masternext=document.getElementById('masternext'); 
let masterprevious=document.getElementById('masterprevious'); 
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songTitle=document.getElementById('songTitle');
let songItem=Array.from(document.getElementsByClassName("songItem"));  
let songs=[
    {songName:"Chup Gaye Sare Nazare",filepath:"1.mp3",coverPath:'1.jpeg'},
    {songName:"Tere Liye",filepath:"2.mp3",coverPath:'2.jpeg'},
    {songName:"Ajab Si",filepath:"3.mp3",coverPath:'3.jpeg'},
    {songName:"Bhula Denge Tum Ko Sanam",filepath:"4.mp3",coverPath:'4.jpeg'},
    {songName:"Chanda Ki Doli Mein",filepath:"5.mp3",coverPath:'5.jpeg'},
    {songName:"Dil Mere Tu Deewana Hai",filepath:"6.mp3",coverPath:'6.jpeg'},
    {songName:"Dulhe-Ka-Sehra",filepath:"7.mp3",coverPath:'7.jpeg'},
    {songName:"Hui annekh num",filepath:"8.mp3",coverPath:'8.jpeg'}
]
songItem.forEach((element,i)=> {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress;  
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    }) 
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-play');
    e.target.classList.add('fa-pause');
    audioElement.src=`songs/${songIndex+1}.mp3`;
    songTitle.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity=1;
    })
})
document.getElementById('masternext').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    songTitle.innerText=songs[songIndex].songName;
    gif.style.opacity=1;
})
document.getElementById('masterprevious').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=8;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    // songTitle.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    songTitle.innerText=songs[songIndex].songName;
    gif.style.opacity=1;
})

