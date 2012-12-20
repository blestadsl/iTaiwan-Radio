//volume = -3500 ~ -0
//var strPlayer = "<embed id='Player' type='application/x-mplayer2' pluginspage='http://www.microsoft.com/Windows/MediaPlayer/' src='{0}' name='Player' autostart='true' volume='{1}' showcontrol='1' showtracker='false' width='250' height='45'></embed>";
//var init_Params = {"AudioStream":"-1", "AutoSize":"0", "AutoStart":"-1", "AnimationAtStart":"0", "AllowScan":"-1", "AllowChangeDisplaySize":"-1", "AutoRewind":"0", "Balance":"0", "BaseURL":"", "BufferingTime":"5", "CaptioningID":"", "ClickToPlay":"-1", "CursorType":"0", "CurrentPosition":"-1", "CurrentMarker":"0", "DefaultFrame":"", "DisplayBackColor":"0", "DisplayForeColor":"16777215", "DisplayMode":"0", "DisplaySize":"4", "Enabled":"-1", "EnableContextMenu":"-1", "EnablePositionControls":"-1", "EnableFullScreenControls":"0", "EnableTracker":"-1", "Filename":"http://video.vdat.com/playfile.asp?brand=VN&file=countdown_56.asf&stream=w", "InvokeURLs":"-1", "Language":"-1", "Mute":"0", "PlayCount":"1", "PreviewMode":"0", "Rate":"1", "SAMILang":"", "SAMIStyle":"", "SAMIFileName":"", "SelectionStart":"-1", "SelectionEnd":"-1", "SendOpenStateChangeEvents":"-1", "SendWarningEvents":"-1", "SendErrorEvents":"-1", "SendKeyboardEvents":"0", "SendMouseClickEvents":"0", "SendMouseMoveEvents":"0", "SendPlayStateChangeEvents":"-1", "ShowCaptioning":"0", "ShowControls":"-1", "ShowAudioControls":"-1", "ShowDisplay":"0", "ShowGotoBar":"0", "ShowPositionControls":"0", "ShowStatusBar":"-1", "ShowTracker":"0", "TransparentAtStart":"0", "VideoBorderWidth":"0", "VideoBorderColor":"0", "VideoBorder3D":"0", "Volume":"-600", "WindowlessVideo":"0"};

function setStation(radioStation) { chrome.extension.getBackgroundPage().setmmsURL(radioStation); }
function setVolume(iVolume) { chrome.extension.getBackgroundPage().setVolume(iVolume); }
function callBGRadioPlayer(Func) { chrome.extension.getBackgroundPage().radioPlayerFunc(Func); }

function getInputState() { var strState = chrome.extension.getBackgroundPage().getInputState(); return strState; }

function doChkRadioPlayerState() {
    var timer_is_on = chrome.extension.getBackgroundPage().gettimer_is_on();
    if (!timer_is_on) {
        // 0 = False; 1 = True
        timer_is_on = 1;
        chrome.extension.getBackgroundPage().settimer_is_on(timer_is_on);
        chkRadioPlayerState(true);
    }
}

function chkRadioPlayerState(funcFlag) {

    var strState = getInputState();
    var strStateHTML = ""
    var dv_radioPlayerState = document.getElementById("dv_radioPlayerState");

    if (strState == "PLAYING" || strState == "playing") {
        strStateHTML = "<img src='images/okay.png' alt='Playing' /> : " + strState.toLowerCase();
    } else if (strState == "OPENING" || strState == "BUFFERING" || strState == "buffering" || strState == "waiting" || strState == "preparing") {
        strStateHTML = "<img src='images/ajax-loader.gif' alt='Loading' width='24' height='24' /> : " + strState.toLowerCase();
    } else if (strState == "ERROR" || strState == "Unknown State Code.") {
        strStateHTML = "<img src='images/warning.png' alt='Warning' /> : " + strState.toLowerCase();
    } else {
        strStateHTML = "<img src='images/info.png' alt='Info' /> : " + strState.toLowerCase();
    }

    dv_radioPlayerState.innerHTML = strStateHTML;

    // Set timeOutID.
    if (funcFlag) {
        var timeOutID = chrome.extension.getBackgroundPage().gettimeOutID();
        timeOutID = setTimeout(function () { chkRadioPlayerState(true); }, 1000);
        chrome.extension.getBackgroundPage().settimeOutID(timeOutID);
    }
}

function genRadioPlayer(playerType) {

    var embed = document.createElement("embed");

    switch (playerType) {
        //case 'real':
        //    embed.id = "realPlayer";
        //    embed.type = "audio/x-pn-realaudio-plugin"
        //    embed.setAttribute("autostart", "false");
        //    embed.setAttribute("hidden", "true");
        //    break;
        case 'vlc':
            embed.id = "vlcPlayer";
            embed.type = "application/x-vlc-plugin"
            embed.setAttribute("version", "VideoLAN.VLCPlugin.2")
            embed.setAttribute("hidden", "true");
            break;
        case 'wmp':
            embed.id = "mediaPlayer";
            embed.type = "application/x-mplayer2";
            embed.setAttribute("autostart", "false");
            embed.uiMode = "invisible";
            break;
        default:
            //Unknown playerType...
            embed = null;
            break
    }

    return embed;
}

function initPlayerType() {
    var bgPlayerType = chrome.extension.getBackgroundPage().getplayerType();
    if (bgPlayerType == null) {
        var mimeTypes = window.navigator.mimeTypes;
        var playerType = null;

        if (mimeTypes.namedItem('application/x-vlc-plugin') != null) {
            playerType = "vlc";
        } else if (mimeTypes.namedItem('application/x-mplayer2') != null) {
            playerType = "wmp";
        }

        // Force to use WMP Player.
        playerType = "wmp";       // For Test ONLY.

        if (playerType != null) {
            // Create Player Object.
            var objEmbed = genRadioPlayer(playerType);
            if (objEmbed != null) {
                //Send Player into BackgroundPage.
                chrome.extension.getBackgroundPage().initBGRadioPlayer(objEmbed);
                //Set playerType to BackgroundPage.
                chrome.extension.getBackgroundPage().setplayerType(playerType);
                //Try to Initialize the VLC Player.
                if (playerType == "vlc") {
                    callBGRadioPlayer("play");
                }
            } else {
                alert("播放器 初始化 失敗！");
            }
        } else {
            alert("請至少安裝 VLC Player(32bit) 或 Windows Media Player！");
        }
    }
}

function detectRedioStatus() {
    var strState = getInputState();
    var strStateHTML = ""
    var dv_radioPlayerState = document.getElementById("dv_radioPlayerState");

    // Check timeOutID.
    var timeOutID = chrome.extension.getBackgroundPage().gettimeOutID();
    if (timeOutID != null) {
        // Kill Last Time setTimeout ID.
        clearTimeout(timeOutID);
        // Initialize Params.
        chrome.extension.getBackgroundPage().settimeOutID(null);
        // 0 = False; 1 = True
        chrome.extension.getBackgroundPage().settimer_is_on(0);
    } else {
        // 0 = False; 1 = True
        chrome.extension.getBackgroundPage().settimer_is_on(0);
    }

    if (strState == "PLAYING" || strState == "playing") {
        strStateHTML = "<img src='images/okay.png' alt='Playing' /> : " + strState.toLowerCase();
    } else if (strState == "OPENING" || strState == "BUFFERING" || strState == "buffering" || strState == "waiting" || strState == "preparing") {
        strStateHTML = "<img src='images/ajax-loader.gif' alt='Loading' width='24' height='24' /> : " + strState.toLowerCase();
        // Call Interval Function.
        doChkRadioPlayerState();
    } else if (strState == "ERROR" || strState == "Unknown State Code.") {
        strStateHTML = "<img src='images/warning.png' alt='Warning' /> : " + strState.toLowerCase();
    } else {
        strStateHTML = "<img src='images/info.png' alt='Info' /> : " + strState.toLowerCase();
    }

    dv_radioPlayerState.innerHTML = strStateHTML;
}

function pageInit() {

    initPlayerType();
    detectRedioStatus();


    // Initialize Mute Button.
    var isMute = chrome.extension.getBackgroundPage().isMute();
    if (isMute) {
        document.getElementById("btn_Mute").style.color = "#FF0000";
    }

    var slcRadioStation = document.getElementById("Stations");
    var slcVolume = document.getElementById("volume");
    var mmsURL = chrome.extension.getBackgroundPage().getmmsURL() != null ? chrome.extension.getBackgroundPage().getmmsURL() : "n/a";
    var volume = chrome.extension.getBackgroundPage().getVolume() != null ? chrome.extension.getBackgroundPage().getVolume() : 60;
    //Initialize Volume.
    if (chrome.extension.getBackgroundPage().getVolume() == null) {
        chrome.extension.getBackgroundPage().setVolume(volume);
    }

    var init_slcRadioStation = function () {
        // $('select#Stations').selectmenu({ maxHeight: 150 });
    };

    var init_slcVolume = function () {
        $(function () {
            var select = $("#volume");
            var slider = $("<div id='slider' style='top:45px;'></div>").insertAfter(select).slider({
                min: 0,
                max: 100,
                range: "min",
                value: volume,
                slide: function (event, ui) {
                    select[0].selectedIndex = ui.value;
                    $("#amount").text(ui.value);
                    //Set Volume to BackgroundPage.
                    setVolume(ui.value);
                }
            });
            $("#volume").change(function () {
                slider.slider("value", this.selectedIndex + 1);
            });
            $("#amount").text($("#slider").slider("value"));
        });
    };


    for (var i = 0; i <= slcRadioStation.length - 1; i++) {
        if (slcRadioStation[i].value == mmsURL) {
            slcRadioStation[i].selected = true;
        }
    }

    init_slcRadioStation();

    for (var i = 0; i <= slcVolume.length - 1; i++) {
        if (slcVolume[i].value == volume) {
            slcVolume[i].selected = true;
        }
    }

    init_slcVolume();

    // Initialize Version Info.
    var dv_VersionInfo = document.getElementById("dv_VersionInfo");
    var strVersionInfo = chrome.extension.getBackgroundPage().getVersionInfo();
    dv_VersionInfo.innerHTML = strVersionInfo;
}





$(function () {
    $.fn.addItems = function (data) {
        return this.each(function () {
            var list = this;
            $.each(data, function (index, itemData) {
                list.add(new Option(itemData.title, itemData.uri));
            });
        });
    };

    $("#Stations").addItems(jsonStations);
    $(window).load(function () { pageInit(); });
    $("button").button();



    var $Stations = $('#Stations').change(function () {
        var StationVal = $(this).val();
        if (StationVal != 'n/a') { setStation(StationVal); }
    });

    $('#btn_Play').click(function () {        
        if ($Stations.val() != 'n/a') {
            callBGRadioPlayer('play');
            doChkRadioPlayerState();
        } else {
            alert('請選擇電台！');
        }
    });

    $('#btn_Stop').click(function () {
        callBGRadioPlayer('stop');
        chkRadioPlayerState(false);
    });

    $('#btn_Mute').click(function () {

        callBGRadioPlayer('mute');
        if (this.style.color == 'rgb(255, 255, 255)' || this.style.color == '') {
            this.style.color = '#FF0000';
        } else {
            this.style.color = '#FFFFFF';
        };
    });
});