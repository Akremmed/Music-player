var song=document.getElementById("song");
var icon=document.getElementById("icon");
var next=document.getElementById("next");
var back=document.getElementById("back");
var playPause=document.getElementById("playPause-btn");
var progress=document.getElementById("progress");
var repeatBtn=document.getElementById("repeat-btn");
var audio=document.getElementById("audio");
var rap=["rap/- 50 Cent - Ayo Technology (Official Music Video).mp3","rap/- Tyga - Girls Have Fun (Official Video).mp3","rap/50 Cent - In Da Club (Official Music Video).mp3","rap/Coolio - Gangsta's Paradise (feat. L.V.) [Official Music Video].mp3","rap/Desiigner - Panda (Official Music Video).mp3","rap/Dr. Dre - Still D.R.E. ft. Snoop Dogg.mp3","rap/Eminem - Lose Yourself[1080p].mp3","rap/Rilès - PESETAS (Music Video).mp3","rap/Tyga - Dip (Official Video).mp3"]
var sad=["sadmusic/Alan Walker - Ignite (feat. Julie Bergan & Seungri).mp3","sadmusic/Alok & Alan Walker - Headlights (feat. KIDDO) [Official Lyric Video].mp3","sadmusic/Arman Cekin & Faydee - Better Days (Lyrics).mp3","sadmusic/DHARIA - Sugar & Brownies (by Monoir) [Official Video].mp3","sadmusic/Rilès - BETTER DAYS.mp3","sadmusic/Rilès - SHOULD I (Music Video).mp3","sadmusic/TheFatRat - Rise Up (Lyrics).mp3","sadmusic/twenty one pilots_ Heathens (from Suicide Squad_ The Album) [OFFICIAL VIDEO].mp3"]
var love=["lovemusic/Drenchill - Freed From Desire.mp3","lovemusic/DJ Snake ft. Justin Bieber - Let Me Love You [Lyric Video].mp3","lovemusic/Elley Duhé - Middle of the Night (Lyrics).mp3","lovemusic/Ellie Goulding - Love Me Like You Do (Official Video).mp3","lovemusic/Glimmer of Blooms - I Cant Get You Out Of My Head (LYRICS).mp3","lovemusic/My Baby Love song.mp3","lovemusic/Outlandish - Callin U (Official Video).mp3","lovemusic/SLANDER - Love Is Gone ft. Dylan Matthew (Acoustic).mp3"]
var motivate=["motivation/Eminem - Not Afraid.mp3","motivation/Roy Jones Jr. - Can't Be Touched.mp3","motivation/Fat Joe, Remy Ma - All The Way Up ft. French Montana, Infared.mp3","motivation/Eminem - Lose Yourself[1080p].mp3","rap/50 Cent - Just A Lil Bit.mp3","motivation/Gustavo Santaolalla - Babel (Otnicka Remix).mp3","motivation/Imagine Dragons - Believer (Official Music Video).mp3"]
var mood=["mood/Pharrell Williams - Happy (Video).mp3","mood/Tyga - Taste (Official Video) ft. Offset.mp3","mood/J Balvin, Willy William - Mi Gente (Official Video).mp3","mood/Major Lazer & DJ Snake - Lean On (Official Music Video).mp3","mood/Ayo & Teo - Rolex (Official Video).mp3","mood/Clean Bandit - Rockabye (feat. Sean Paul & Anne-Marie) [Official Video].mp3","mood/DJ Snake, J Balvin, Tyga - Loco Contigo.mp3","mood/Sia - Cheap Thrills (Performance Edit).mp3"]
var songs=["defaultmusic/DJ Snake ft. Justin Bieber - Let Me Love You [Lyric Video].mp3",
"defaultmusic/Rilès - PESETAS (Music Video).mp3",
"defaultmusic/Sia - Cheap Thrills (Performance Edit).mp3",
"defaultmusic/Zubi -  Sugar (feat. Anatu) (Lyrics).mp3"
]
var playedSong=0;

song.onloadedmetadata = function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}



song.src=songs[playedSong]

function playpause(){
    if(song.paused){    
        song.play()
        playPause.src="images/pause.png";
        playPause.title="Pause";
    }
    else{
        song.pause();
        playPause.src="images/play.png";
        playPause.title="Play";
    }



}



if (song.play){
    setInterval(()=>{
        progress.value=song.currentTime;
    },500)

}

song.addEventListener('play', function() {
    let songTitle=document.querySelector(".title");
    let str = songs[playedSong];
    let pos=str.indexOf("/");
    let subStr = str.slice(pos+1, str.length-4); 
    songTitle.innerHTML=subStr
});


function edit_progress(){
    song.currentTime=progress.value;
    song.play();
    playPause.src="images/pause.png";
}

song.addEventListener("ended", () => {
    if (playedSong >= songs.length-1) {
        playedSong = 0
        song.src=songs[playedSong]
        song.play()
    }else{
        playedSong++
        song.src=songs[playedSong]
        song.play()
    }

})

var home = document.getElementById("home");

function changeBackground(source){
    home.style.backgroundImage = "url(" + source + ")";
}


function next_song(){
    playedSong++
    if(song.paused){
        song.src=songs[playedSong]
        song.play()
        playPause.src="images/pause.png"
    }
    else{
        if (playedSong >= songs.length) {
            playedSong = 0
        }
        song.src=songs[playedSong]
        song.play()
    }


}

function prev_song(){
    if (progress.value>= 5){
        song.currentTime=0
        song.play()
        playPause.src="images/pause.png"
    }
    else{
        playedSong-=1
        if(song.paused){
            song.src=songs[playedSong]
            song.play()
            playPause.src="images/pause.png"
        }
        else{
            if (playedSong < 0) {
                playedSong = songs.length-1
            }
            song.src=songs[playedSong]
            song.play()
        }
    }

}


const container = document.querySelector('.volume-progress');
const volumeProgress = container.querySelector('#volume-bar');





function ChangeRapPlaylist(){
    songs=rap;
    song.src=songs[0]
    song.play()
    if(playPause.src="images/play.png"){
        playPause.src="images/pause.png"
    }
}

function ChangeLovePlaylist(){
    songs=love;
    song.src=songs[0]
    song.play()
    if(playPause.src="images/play.png"){
        playPause.src="images/pause.png"
    }
}

function ChangeSadPlaylist(){
    songs=sad;
    song.src=songs[0]
    song.play()
    if(playPause.src="images/play.png"){
        playPause.src="images/pause.png"
    }
}

function ChangeMoodPlaylist(){
    songs=mood;
    song.src=songs[0]
    song.play()
    if(playPause.src="images/play.png"){
        playPause.src="images/pause.png"
    }
}

function ChangeMotivatePlaylist(){
    songs=motivate;
    song.src=songs[0]
    song.play()
    if(playPause.src="images/play.png"){
        playPause.src="images/pause.png"
    }
}


const volumeBtn=document.getElementById("volume-icon");

function changeVolume(volume){
    song.volume = volume / 100;

    // Update the volume label
    var volumeLabel = document.getElementById("volumeLabel");
    volumeLabel.textContent = volume;
    volumeIcon=document.getElementById("volume-icon");
    if(volume==0){
        volumeBtn.src="images/muted.png"
    } 
    else if (volume>70){
        volumeBtn.src="images/volume-up.png"

    }
    else if(0<volume<=70){
        volumeBtn.src="images/volume-down.png"
    }

}

volumeRange=document.getElementById("volumeRange");


volumeBtn.addEventListener("click", () => {
    if(song.muted){
        song.muted = !song.muted;
        volumeBtn.title="Mute"
        if(volumeRange.value>70){
            volumeBtn.src="images/volume-up.png"
        }else{
            volumeBtn.src="images/volume-down.png"
        }
        volumeRange.disabled = false;

    }
    else{
        song.muted = !song.muted;
        volumeBtn.src="images/muted.png"
        volumeBtn.title="Unmute";
        volumeRange.disabled = true;
    }


  });