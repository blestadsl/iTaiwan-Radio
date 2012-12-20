
var playerType;
var mmsURL;
var volume;
var timeOutID;
var timer_is_on;

function settimeOutID(itimeOutID){
	timeOutID = itimeOutID;
}

function gettimeOutID(){
	return timeOutID;
}

function settimer_is_on(itimer_is_on){
	timer_is_on = itimer_is_on;
}

function gettimer_is_on(){
	return timer_is_on != null ? timer_is_on : 0;
}

function setplayerType(iplayerType){
	playerType = iplayerType;
}

function getplayerType(){
	return playerType;
}

function setmmsURL(immsURL){
	mmsURL = immsURL;
}

function getmmsURL(){
	return mmsURL != null ? mmsURL : "";
}

function getInputState(){
	
    var playerID = getPlayerID();
	var radioPlayer = document.getElementById(playerID);
	var stateCode = null;
		
	if(playerType == "vlc"){
		
		stateCode = parseInt(radioPlayer.input.state);
		
		if(stateCode == 0){
			return "IDLE/CLOSE";
		}else if(stateCode == 1){
			return "OPENING";
		}else if(stateCode == 2){
			return "BUFFERING";
		}else if(stateCode == 3){
			return "PLAYING";
		}else if(stateCode == 4){
			return "PAUSED";
		}else if(stateCode == 5){
			return "STOPPING";
		}else if(stateCode == 6){
			return "ENDED";
		}else if(stateCode == 7){
			return "ERROR";
		}else{
			return "Unknown State Code..";
		}
		
	}else if(playerType == "wmp"){
		
		stateCode = parseInt(radioPlayer.playState);
		
		if(stateCode == 1){
			return "stopped";
		}else if(stateCode == 2){
			return "paused";
		}else if(stateCode == 3){
			return "playing";
		}else if(stateCode == 4){
			return "forward";
		}else if(stateCode == 5){
			return "reverse";
		}else if(stateCode == 6){
			return "buffering";
		}else if(stateCode == 7){
			return "waiting";
		}else if(stateCode == 8){
			return "reached the end of the media";
		}else if(stateCode == 9){
			return "preparing";
		}else if(stateCode == 10){
			return "ready";
		}else{
			return "Unknown State Code.";
		}
		
	}
	
}

function setVolume(iVolume){
	
	volume = parseInt(iVolume);
	
	var playerID = getPlayerID();
	var radioPlayer = document.getElementById(playerID);
	
	if(playerType == "vlc"){
		
		if(radioPlayer != null){
			if(!isMute()){
				radioPlayer.audio.volume = parseInt(volume);
			}
		}else{
			alert("radioPlayer init Error !");
		}
		
	}else if(playerType == "wmp"){
		
		if(radioPlayer != null && radioPlayer.controls != null){
			if(!isMute()){
				var clearErrors = function() {
	            if (radioPlayer.error != null && radioPlayer.error.errorCount > 0)
	            	radioPlayer.error.clearErrorQueue();
		        };
				clearErrors();
				radioPlayer.settings.volume = parseInt(volume);
			}
		}else{
			alert("radioPlayer init Error !");
		}
		
	}
	
}

function getVolume(){
	return volume;
}

function getPlayerID() {    
	return this.playerType == "vlc" ? "vlcPlayer" : "mediaPlayer";
}

function isMute(){
	
	var playerID = getPlayerID();
	var radioPlayer = document.getElementById(playerID);
	var isMute = null;
	
	if(playerType == "vlc"){
		isMute = radioPlayer.audio.mute;
	}else if(playerType == "wmp"){
		isMute = radioPlayer.settings.mute;
	}
	
	return isMute;
}

function getVersionInfo(){
	
	var playerID = getPlayerID();
	var radioPlayer = document.getElementById(playerID);
	
	if(playerType == "vlc"){
		return "<img src='images/VLC.png' alt='VLC Player' width='16' height='16' /> VLC Player " + radioPlayer.versionInfo();
	}else if(playerType == "wmp"){
	    return "<img src='images/WMP.png' alt='Windows Media Player' width='20' height='15' /> WMP " + radioPlayer.versionInfo;
	}else{
		return null;
	}
}

function initBGRadioPlayer(radioPlayer) {
	
	// clear all elements first.
	clearBGRadioPlayer();
	
	// then add radioPlayer into body tag.
	document.body.appendChild(radioPlayer);
	
}

function radioPlayerFunc(Func){
	
	var playerID = getPlayerID();
	var radioPlayer = document.getElementById(playerID);
	
	if (radioPlayer == null) { alert("radioPlayer init Error !"); return false; }

	switch (playerType) {
	    case 'real':
	        switch (Func) {
	            case 'play': radioPlayer.CanPlay(); break;
	            case 'stop': radioPlayer.CanStop(); break;
	            case 'pause': radioPlayer.CanPause(); break;
	            //case 'mute': break;
	            default: break;
	        }
	        break;
	    case 'vlc':
	        switch (Func) {
	            case 'play':
	                var trackId = radioPlayer.playlist.add(getmmsURL());
	                radioPlayer.playlist.playItem(trackId);
	                // Try to Init Volume Once Again. Only for VLC Player.
	                if (volume != null) setVolume(volume);
	                break;
	            case 'stop': radioPlayer.playlist.stop(); break;
	            case 'pause': radioPlayer.playlist.togglePause(); break;
	            case 'mute': radioPlayer.audio.toggleMute(); break;
	            default: alert("Func Error : " + Func); break;
	        }
            break;
	    case 'wmp':
	        if (radioPlayer.controls == null) { alert("radioPlayer init Error !!"); return false; }
	        else {
	            var clearErrors = function () {
	                if (radioPlayer.error != null && radioPlayer.error.errorCount > 0)
	                    radioPlayer.error.clearErrorQueue();
	            };
	            clearErrors();
	        }
	        switch (Func) {
	            case 'play': radioPlayer.URL = getmmsURL(); radioPlayer.controls.play(); break;
	            case 'stop': radioPlayer.controls.stop(); break;
	            case 'pause': radioPlayer.controls.pause(); break;
	            case 'mute': radioPlayer.settings.mute = !radioPlayer.settings.mute; setVolume(volume); break;
	            default: alert("Func Error : " + Func); break;
	        }
	        break;
	    default:
	        break;

	}
	
}

function clearBGRadioPlayer() {
	
	var objChilds = document.body.getElementsByTagName("embed");
	for (i = 0; i <= objChilds.length - 1; i = i++)
	{
		document.body.removeChild(objChilds[i]);
	}
	
}
