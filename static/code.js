function myFunc() {
    return myVar
}
var emotiondetected = myFunc();

function _(query){
	return document.querySelector(query);
}
function _all(query){
	return document.querySelectorAll(query);
}



console.log(emotiondetected);
let songList = [];
if (emotiondetected==='happy'){
	songList = [
	
	{
		thumbnail:"musical.png",
		audio:"04 - Labb Par Aaye - DownloadMing.ME.mp3",
		songname:"Labb Par Aaye",
		artistname:"Javed Ali"
	},
	{
		thumbnail:"musical.png",
		audio:"[Songs.PK] 02 - Gunday - Tune Maari Entriyaan.mp3",
		songname:"Tune Maari Entriyaan",
		artistname:"Bappi Lahiri,KK,Neeti Mohan & Vishal Dadlani"
	},
	{
		thumbnail:"musical.png",
		audio:"[Songs.PK] 05 - Dhating Naach.mp3",
		songname:"Dhating Naach",
		artistname:"Nakash Aziz,Shefali Alvares,Neha Kakkar"
	},
	{
		thumbnail:"musical.png",
		audio:"[Songs.PK] Chennai Express - 01 - One Two Three Four - Get On The Dance Floor.mp3",
		songname:"One Two Three Four",
		artistname:"Vishal Dadlani,Hamshika Iyer"
	},
	{
		thumbnail:"musical.png",
		audio:"[Songs.PK] Cocktail - 01 - Tum Hi Ho Bandhu.mp3",
		songname:"Tum Hi Ho Bandhu",
		artistname:"Neeraj Sridhar,Kavita Seth"
	},
	{
		thumbnail:"musical.png",
		audio:"03 - Khaike Paan Banaraswala.mp3",
		songname:" Khaike Paan Banaraswala",
		artistname:"Kishor Kumar"
	},
	{
		thumbnail:"musical.png",
		audio:"Butta Bomma-Naasongs.fm.mp3",
		songname:"Butta Bomma",
		artistname:"Armaan Malik"
	},
	{
		thumbnail:"musical.png",
		audio:"Morni Banke.mp3",
		songname:"Morni Banke",
		artistname:"Guru Randhawa,Neha Kakkar"
	},
	{
		thumbnail:"musical.png",
		audio:"Dil Chahata Hai.mp3",
		songname:"Dil Chahata Hai",
		artistname:"Shankar Mavadevan"
	},
	{
		thumbnail:"musical.png",
		audio:"Lehanga-(Mr-Jatt.com).mp3",
		songname:"Lehanga",
		artistname:"Jass Manak"
	}
	
	];
}
else if (emotiondetected==='neutral'){
	songList = [
		{
			thumbnail:"musical.png",
			audio:	"01. Hai Junoon.mp3",
			songname:"Hai Junoon",
			artistname:"KK"
	},
	{
		thumbnail:"musical.png",
		audio:	"01. Jaane Kyun.mp3",
		songname:"Jaane Kyun",
		artistname:"Vishal Dadlani"
},
{
	thumbnail:"musical.png",
	audio:	"03 Heartquake - Karwaan.mp3",
	songname:"Heartquake",
	artistname:"Papon"
},
{
	thumbnail:"musical.png",
	audio:	"03 Kabhi Kabhi Aditi Zindagi - Rashid Ali a.mp3",
	songname:"Kabhi Kabhi Aditi Zindagi",
	artistname:"Rashid Ali"
},
{
	thumbnail:"musical.png",
	audio:	"Afreen Afreen - Rahat Fateh Ali Khan - 320kbps.mp3",
	songname:"Afreen Afreen",
	artistname:"Rahat Fateh Ali Khan,Momina Mustehsan"
},
{
	thumbnail:"musical.png",
	audio:	"Daru Badnam Kardi.mp3",
	songname:"Daru Badnam Kardi",
	artistname:"Param Singh,Kamal Kahlon"
},
{
	thumbnail:"musical.png",
	audio:	"Fikar Not - Chhichhore 320 Kbps.mp3",
	songname:"Fikar Not",
	artistname:" Amitabh Bhattacharya, Nakash Aziz, Sreerama Chandra, Dev Negi, Amit Mishra, Antara Mitra"
},
{
	thumbnail:"musical.png",
	audio:	"Na Ja - Pav Dharia.mp3",
	songname:"Na Ja",
	artistname:"Pav Dharia"
},
{
	thumbnail:"musical.png",
	audio:	"Pal Bhar Ke Liye-(Mr-Jatt.com).mp3",
	songname:"Pal Bhar Ke Liye",
	artistname:"Kishore Kumar"
}
		

	];
}
else if (emotiondetected==='surprise'){
	songList = [
		{
			thumbnail:"musical.png",
			audio:"Chedkhaniyaan - (Mp3Song.fm).mp3",
			songname:"Chedkhaniyaan",
			artistname:"Shivam Mahadevan"
	},
		{
				thumbnail:"musical.png",
				audio:"02 idhar chala mein udhar chala.mp3",
				songname:"Idhar chala mein udhar chala",
				artistname:"Rajesh Roshan"
		
		},
		{
			thumbnail:"musical.png",
			audio:"06. Tumhain Jo Meine Dekha.mp3",
			songname:"Tumhain Jo Meine Dekha",
			artistname:"Abhijeet Bhattacharya,Shreya Ghoshal"
	
	},
	{
		thumbnail:"musical.png",
		audio:"Ek Ladki Ko Dekha - (amlijatt.in).mp3",
		songname:"Ek Ladki Ko Dekha",
		artistname:"Kumar Sanu"

},
{
	thumbnail:"musical.png",
	audio:"Haule Haule.mp3",
	songname:"Haule Haule",
	artistname:"Sukhwinder Singh"

},
{
	thumbnail:"musical.png",
	audio:"KAL_HO_NAA_HO_KUCH_TO_HUA_H.mp3",
	songname:"Kuch toh hua hai",
	artistname:" Alka Yagnik, Shankar–Ehsaan–Loy, Shaan"

},
{
	thumbnail:"musical.png",
	audio:"Khwab-Ho-Tum-Ya-Koi-Haqeeqat-Kishore-Kumar.mp3",
	songname:"Khwab-Ho-Tum-Ya-Koi-Haqeeqat",
	artistname:"Kishore Kumar"

},
{
	thumbnail:"musical.png",
	audio:"kishore_kumar_solo (7).mp3",
	songname:"Yeh kya hua",
	artistname:"Kishore Kumar"

},
{
	thumbnail:"musical.png",
	audio:"Kya Kare Kya Na Kare-(Mr-Jatt.com).mp3",
	songname:"Kya Kare Kya Na Kare",
	artistname:"Udit Narayan"

},
{
	thumbnail:"musical.png",
	audio:"Mere Khwabon Mein.mp3",
	songname:"Mere Khwabon Mein",
	artistname:"Lata Mangeshkar"

},
{
	thumbnail:"musical.png",
	audio:"wakeupsid06(www.songs.pk).mp3",
	songname:"Wakeup Sid",
	artistname:" Loy Mendonsa, Shankar Mahadevan, and Shankar–Ehsaan–Loy"

}
	];
}

let currentSongIndex = 0;

let player = _(".player"),
	toggleSongList = _(".player .toggle-list");

let main = {
	audio:_(".player .main audio"),
	thumbnail:_(".player .main img"),
	seekbar:_(".player .main input"),
	songname:_(".player .main .details h2"),
	artistname:_(".player .main .details p"),
	prevControl:_(".player .main .controls .prev-control"),
	playPauseControl:_(".player .main .controls .play-pause-control"),
	nextControl:_(".player .main .controls .next-control")
}

toggleSongList.addEventListener("click", function(){
	toggleSongList.classList.toggle("active");
	player.classList.toggle("activeSongList");
});

_(".player .player-list .list").innerHTML = (songList.map(function(song,songIndex){
	return `
		<div class="item" songIndex="${songIndex}">
			<div class="thumbnail">
				<img src="static/files/${song.thumbnail}">
			</div>
			<div class="details">
				<h2>${song.songname}</h2>
				<p>${song.artistname}</p>
			</div>
		</div>
	`;
}).join(""));

let songListItems = _all(".player .player-list .list .item");
for(let i=0;i<songListItems.length;i++){
	songListItems[i].addEventListener("click",function(){
		currentSongIndex = parseInt(songListItems[i].getAttribute("songIndex"));
		loadSong(currentSongIndex);
		player.classList.remove("activeSongList");
	});
}

function loadSong(songIndex){
	let song = songList[songIndex];
	main.thumbnail.setAttribute("src","static/files/"+song.thumbnail);
	document.body.style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url("static/files/${song.thumbnail}") center no-repeat`;
	document.body.style.backgroundSize = "cover";	
	main.songname.innerText = song.songname;
	main.artistname.innerText = song.artistname;
	main.audio.setAttribute("src","static/files/"+song.audio);
	main.seekbar.setAttribute("value",0);
	main.seekbar.setAttribute("min",0);
	main.seekbar.setAttribute("max",0);
	main.audio.addEventListener("canplay",function(){
		main.audio.play();
		if(!main.audio.paused){
			main.playPauseControl.classList.remove("paused");
		}
		main.seekbar.setAttribute("max",parseInt(main.audio.duration));
		main.audio.onended = function(){
			main.nextControl.click();
		}
	})
}
setInterval(function(){
	main.seekbar.value = parseInt(main.audio.currentTime);
},1000);

main.prevControl.addEventListener("click",function(){
	currentSongIndex--;
	if(currentSongIndex < 0){
		currentSongIndex = songList.length + currentSongIndex;
	}
	loadSong(currentSongIndex);
});
main.nextControl.addEventListener("click",function(){
	currentSongIndex = (currentSongIndex+1) % songList.length;
	loadSong(currentSongIndex);
});
main.playPauseControl.addEventListener("click",function(){
	if(main.audio.paused){
		main.playPauseControl.classList.remove("paused");
		main.audio.play();
	} else {
		main.playPauseControl.classList.add("paused");
		main.audio.pause();
	}
});
main.seekbar.addEventListener("change",function(){
	main.audio.currentTime = main.seekbar.value;
});
loadSong(currentSongIndex);