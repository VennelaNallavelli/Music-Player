console.log("Welcome to Gaana!");
let songindex=0;
let masterplay=document.getElementById("masterplay");
let myProgressBar=document.getElementById("myProgressBar")
let gif=document.getElementById("gif");
// let mastersongname=document.getElementById("mastersongname");
let audioElement=new Audio("yr.mp3");
let songitems=Array.from(document.getElementsByClassName("songItem"));
const songlist=["yr.mp3","yr.mp3","Pillagali-SenSongsMp3.Co.mp3","Kabhi Tumhe(PagalWorld.com.sb).mp3","Paravaledhu - SenSongsmp3.Co.mp3","Chiru chiru.mp3","Anukoledenadu.mp3"]
let songs=[
    {songname:"yr",filepath:"yr.mp3",coverpath:"yr.jpeg"},
    {songname:"pillagali",filepath:"Pillagali-SenSongsMp3.Co.mp3",coverpath:"pillagali.jpeg"},
    {songname:"Kabhi tumhe",filepath:"Kabhi Tumhe(PagalWorld.com.sb).mp3",coverpath:"kabhi.jpeg"},
    {songname:"paravaledu",filepath:"Paravaledhu - SenSongsmp3.Co.mp3",coverpath:"paravaledu.jpeg"},
    {songname:"chiru chiru",filepath:"Chiru chiru.mp3",coverpath:"chiru.jpeg"},
    {songname:"Anukoledenadu",filepath:"Anukoledenadu.mp3",coverpath:"oye.jpeg"}
]
songitems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
})
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>
{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>
{
    audioElement.currentTime=((myProgressBar.value * audioElement.duration)/100);
})
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{
        makeAllPlays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add('fa-circle-pause');
        audioElement.src=songlist[songindex];
        audioElement.currentTime=0;
        // if(songindex>=5)
        //     {
        //     songindex=0;
        // }
        // if(songindex<=1)
        //     {
        //     songindex=6;
        // }
        // mastersongname.innerText=songs[songindex-1].songname;
        // document.write(songs[songindex])
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    })  
})
document.getElementById("next").addEventListener('click',()=>
{
    if(songindex>=6)
        {
        songindex=0;
    }
    else if(songindex==0){
        songindex=2;
    }
    else
    {
        songindex+=1;
    }
    // audioElement.src="Paravaledhu - SenSongsmp3.Co.mp3";
    audioElement.src=songlist[songindex]
    audioElement.currentTime=0;
    // mastersongname.innerText=songs[songindex-1].songName;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-regular fa-circle-pause');
    gif.style.opacity=1;
})
document.getElementById("previous").addEventListener('click',()=>
    {
        if(songindex<=1)
            {
            songindex=6;
        }
        else
        {
            songindex-=1;
        }
        // audioElement.src="pillagali-SenSongsMp3.Co.mp3";
        audioElement.src=songlist[songindex]
        audioElement.currentTime=0;
        // mastersongname.innerText=songs[songindex-1].songName;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-regular fa-circle-pause');
    })