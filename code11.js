gdjs.Percurso_32CarmoCode = {};
gdjs.Percurso_32CarmoCode.GDGMObjects1_1final = [];

gdjs.Percurso_32CarmoCode.GDgmapsObjects1_1final = [];

gdjs.Percurso_32CarmoCode.GDpercursoObjects1_1final = [];

gdjs.Percurso_32CarmoCode.GDnoObjects1= [];
gdjs.Percurso_32CarmoCode.GDnoObjects2= [];
gdjs.Percurso_32CarmoCode.GDnoObjects3= [];
gdjs.Percurso_32CarmoCode.GDyesObjects1= [];
gdjs.Percurso_32CarmoCode.GDyesObjects2= [];
gdjs.Percurso_32CarmoCode.GDyesObjects3= [];
gdjs.Percurso_32CarmoCode.GDpercursoObjects1= [];
gdjs.Percurso_32CarmoCode.GDpercursoObjects2= [];
gdjs.Percurso_32CarmoCode.GDpercursoObjects3= [];
gdjs.Percurso_32CarmoCode.GDGMObjects1= [];
gdjs.Percurso_32CarmoCode.GDGMObjects2= [];
gdjs.Percurso_32CarmoCode.GDGMObjects3= [];
gdjs.Percurso_32CarmoCode.GDscoreObjects1= [];
gdjs.Percurso_32CarmoCode.GDscoreObjects2= [];
gdjs.Percurso_32CarmoCode.GDscoreObjects3= [];
gdjs.Percurso_32CarmoCode.GDnext_9595sceneObjects1= [];
gdjs.Percurso_32CarmoCode.GDnext_9595sceneObjects2= [];
gdjs.Percurso_32CarmoCode.GDnext_9595sceneObjects3= [];
gdjs.Percurso_32CarmoCode.GDURLObjects1= [];
gdjs.Percurso_32CarmoCode.GDURLObjects2= [];
gdjs.Percurso_32CarmoCode.GDURLObjects3= [];
gdjs.Percurso_32CarmoCode.GDfundopistagmObjects1= [];
gdjs.Percurso_32CarmoCode.GDfundopistagmObjects2= [];
gdjs.Percurso_32CarmoCode.GDfundopistagmObjects3= [];
gdjs.Percurso_32CarmoCode.GDpistagmObjects1= [];
gdjs.Percurso_32CarmoCode.GDpistagmObjects2= [];
gdjs.Percurso_32CarmoCode.GDpistagmObjects3= [];
gdjs.Percurso_32CarmoCode.GDdigitsObjects1= [];
gdjs.Percurso_32CarmoCode.GDdigitsObjects2= [];
gdjs.Percurso_32CarmoCode.GDdigitsObjects3= [];
gdjs.Percurso_32CarmoCode.GDlocal_9595erradoObjects1= [];
gdjs.Percurso_32CarmoCode.GDlocal_9595erradoObjects2= [];
gdjs.Percurso_32CarmoCode.GDlocal_9595erradoObjects3= [];
gdjs.Percurso_32CarmoCode.GDtask_9595confirmationObjects1= [];
gdjs.Percurso_32CarmoCode.GDtask_9595confirmationObjects2= [];
gdjs.Percurso_32CarmoCode.GDtask_9595confirmationObjects3= [];
gdjs.Percurso_32CarmoCode.GDgmapsObjects1= [];
gdjs.Percurso_32CarmoCode.GDgmapsObjects2= [];
gdjs.Percurso_32CarmoCode.GDgmapsObjects3= [];


gdjs.Percurso_32CarmoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_amarela"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_azul"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_castanha"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_rosa"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_roxa"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_verde"));
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Logout", false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "UID");
}}

}


};gdjs.Percurso_32CarmoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18339500);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().get("hour"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().get("minute"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "notification-140376.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "message-incoming-132126.mp3", false, 0, 1);
}}

}


};gdjs.Percurso_32CarmoCode.userFunc0xaa2168 = function GDJSInlineCode(runtimeScene) {
"use strict";
var myVar = runtimeScene.getVariables().get("Longitude");
function geoFindMe() {
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        myVar.setNumber(`${longitude}`);
    }

    function error(error) {
        myVar.setString("unable to retrieve your location" + error.code + error.message);
    }

    if (!navigator.geolocation) {
        myVar.setString('Geolocation is not supported by your browser');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }

}
geoFindMe();
};
gdjs.Percurso_32CarmoCode.userFunc0x108d418 = function GDJSInlineCode(runtimeScene) {
"use strict";
var myVar = runtimeScene.getVariables().get("Latitude");
function geoFindMe() {
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        myVar.setNumber(`${latitude}`);
    }

    function error(error) {
        myVar.setString("unable to retrieve your location" + error.code + error.message);
    }

    if (!navigator.geolocation) {
        myVar.setString('Geolocation is not supported by your browser');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }

}
geoFindMe();
};
gdjs.Percurso_32CarmoCode.mapOfGDgdjs_9546Percurso_959532CarmoCode_9546GDpercursoObjects2Objects = Hashtable.newFrom({"percurso": gdjs.Percurso_32CarmoCode.GDpercursoObjects2});
gdjs.Percurso_32CarmoCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18359836);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "notification-140376.mp3", false, 100, 1);
}}

}


};gdjs.Percurso_32CarmoCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18362124);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32CarmoCode.GDgmapsObjects1);
/* Reuse gdjs.Percurso_32CarmoCode.GDnoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32CarmoCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDgmapsObjects1[i].hide();
}
}}

}


};gdjs.Percurso_32CarmoCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18364892);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("URL"), gdjs.Percurso_32CarmoCode.GDURLObjects1);
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32CarmoCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32CarmoCode.GDnoObjects1);
/* Reuse gdjs.Percurso_32CarmoCode.GDyesObjects1 */
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDgmapsObjects1[i].hide();
}
}{gdjs.evtTools.window.openURL((( gdjs.Percurso_32CarmoCode.GDURLObjects1.length === 0 ) ? "" :gdjs.Percurso_32CarmoCode.GDURLObjects1[0].getString()), runtimeScene);
}}

}


};gdjs.Percurso_32CarmoCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) != "4a6bed99-f0a7-4a39-a974-6a4e0dceeae5";
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18375996);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Percurso_32CarmoCode.GDnext_9595sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.Percurso_32CarmoCode.GDnext_9595sceneObjects1.length === 0 ) ? "" :gdjs.Percurso_32CarmoCode.GDnext_9595sceneObjects1[0].getString()), false);
}}

}


};gdjs.Percurso_32CarmoCode.eventsList6 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "UID");
}{gdjs.evtsExt__Geolocation__LocatePlayer.func(runtimeScene, runtimeScene.getScene().getVariables().get("GPS"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().get("UID_atual").setString(gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Amarela", runtimeScene.getScene().getVariables().get("UID_amarela"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Azul", runtimeScene.getScene().getVariables().get("UID_azul"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Castanha", runtimeScene.getScene().getVariables().get("UID_castanha"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Rosa", runtimeScene.getScene().getVariables().get("UID_rosa"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Roxa", runtimeScene.getScene().getVariables().get("UID_roxa"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Verde", runtimeScene.getScene().getVariables().get("UID_verde"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "UID") > 5;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Percurso_32CarmoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("URL"), gdjs.Percurso_32CarmoCode.GDURLObjects1);
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Percurso_32CarmoCode.GDnext_9595sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(10);
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDnext_9595sceneObjects1[i].setString("Carmo Escadas");
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDURLObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDURLObjects1[i].setString("https://maps.app.goo.gl/bRCtgGAKGVgHp8CN7?g_st=iw");
}
}{runtimeScene.getScene().getVariables().get("latif").setNumber(38.7116);
}{runtimeScene.getScene().getVariables().get("latsup").setNumber(38.7124);
}{runtimeScene.getScene().getVariables().get("longsup").setNumber(-(9.1393));
}{runtimeScene.getScene().getVariables().get("longinf").setNumber(-(9.1401));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("URL"), gdjs.Percurso_32CarmoCode.GDURLObjects1);
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32CarmoCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Percurso_32CarmoCode.GDnext_9595sceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32CarmoCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32CarmoCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDgmapsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDnext_9595sceneObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDURLObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDURLObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scene_start");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "desvio");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps2");
}
{ //Subevents
gdjs.Percurso_32CarmoCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("hour")));
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("minute")));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", runtimeScene.getScene().getVariables().get("next"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Language", runtimeScene.getScene().getVariables().get("language"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scene_start") >= 2;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("language")));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) != "TESTE";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GM"), gdjs.Percurso_32CarmoCode.GDGMObjects1);
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDGMObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDGMObjects1[i].hide();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32CarmoCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 100;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32CarmoCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32CarmoCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32CarmoCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("percurso"), gdjs.Percurso_32CarmoCode.GDpercursoObjects1);
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDpercursoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDpercursoObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDgmapsObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32CarmoCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32CarmoCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDyesObjects1[i].SetLabelText("SIM", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDnoObjects1[i].SetLabelText("NÃO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32CarmoCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32CarmoCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDyesObjects1[i].SetLabelText("YES", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDnoObjects1[i].SetLabelText("NO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32CarmoCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32CarmoCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDyesObjects1[i].SetLabelText("OUI", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDnoObjects1[i].SetLabelText("NON", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32CarmoCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32CarmoCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDyesObjects1[i].SetLabelText("SI", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDnoObjects1[i].SetLabelText("NO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


gdjs.Percurso_32CarmoCode.userFunc0xaa2168(runtimeScene);

}


{


gdjs.Percurso_32CarmoCode.userFunc0x108d418(runtimeScene);

}


{



}


{

gdjs.Percurso_32CarmoCode.GDgmapsObjects1.length = 0;

gdjs.Percurso_32CarmoCode.GDpercursoObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Percurso_32CarmoCode.GDgmapsObjects1_1final.length = 0;
gdjs.Percurso_32CarmoCode.GDpercursoObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32CarmoCode.GDgmapsObjects2);
gdjs.copyArray(runtimeScene.getObjects("percurso"), gdjs.Percurso_32CarmoCode.GDpercursoObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32CarmoCode.GDgmapsObjects2.length;i<l;++i) {
    if ( !(gdjs.Percurso_32CarmoCode.GDgmapsObjects2[i].isVisible()) ) {
        isConditionTrue_2 = true;
        gdjs.Percurso_32CarmoCode.GDgmapsObjects2[k] = gdjs.Percurso_32CarmoCode.GDgmapsObjects2[i];
        ++k;
    }
}
gdjs.Percurso_32CarmoCode.GDgmapsObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.cursorOnObject(gdjs.Percurso_32CarmoCode.mapOfGDgdjs_9546Percurso_959532CarmoCode_9546GDpercursoObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Percurso_32CarmoCode.GDgmapsObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Percurso_32CarmoCode.GDgmapsObjects1_1final.indexOf(gdjs.Percurso_32CarmoCode.GDgmapsObjects2[j]) === -1 )
            gdjs.Percurso_32CarmoCode.GDgmapsObjects1_1final.push(gdjs.Percurso_32CarmoCode.GDgmapsObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Percurso_32CarmoCode.GDpercursoObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Percurso_32CarmoCode.GDpercursoObjects1_1final.indexOf(gdjs.Percurso_32CarmoCode.GDpercursoObjects2[j]) === -1 )
            gdjs.Percurso_32CarmoCode.GDpercursoObjects1_1final.push(gdjs.Percurso_32CarmoCode.GDpercursoObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "maps") >= 3;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Percurso_32CarmoCode.GDgmapsObjects1_1final, gdjs.Percurso_32CarmoCode.GDgmapsObjects1);
gdjs.copyArray(gdjs.Percurso_32CarmoCode.GDpercursoObjects1_1final, gdjs.Percurso_32CarmoCode.GDpercursoObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "maps2");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "maps2") >= 0.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32CarmoCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32CarmoCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32CarmoCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDgmapsObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Percurso_32CarmoCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32CarmoCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32CarmoCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32CarmoCode.GDnoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32CarmoCode.GDnoObjects1[k] = gdjs.Percurso_32CarmoCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32CarmoCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32CarmoCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32CarmoCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32CarmoCode.GDnoObjects1[k] = gdjs.Percurso_32CarmoCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32CarmoCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps2");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps2");
}
{ //Subevents
gdjs.Percurso_32CarmoCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32CarmoCode.GDyesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32CarmoCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32CarmoCode.GDyesObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32CarmoCode.GDyesObjects1[k] = gdjs.Percurso_32CarmoCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32CarmoCode.GDyesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32CarmoCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32CarmoCode.GDyesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32CarmoCode.GDyesObjects1[k] = gdjs.Percurso_32CarmoCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32CarmoCode.GDyesObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps2");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps2");
}
{ //Subevents
gdjs.Percurso_32CarmoCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.Percurso_32CarmoCode.GDGMObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Percurso_32CarmoCode.GDGMObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Latitude")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("latinf"));
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Latitude")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("latsup"));
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Longitude")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("longsup"));
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Longitude")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("longinf"));
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("GM"), gdjs.Percurso_32CarmoCode.GDGMObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32CarmoCode.GDGMObjects2.length;i<l;++i) {
    if ( gdjs.Percurso_32CarmoCode.GDGMObjects2[i].isVisible() ) {
        isConditionTrue_2 = true;
        gdjs.Percurso_32CarmoCode.GDGMObjects2[k] = gdjs.Percurso_32CarmoCode.GDGMObjects2[i];
        ++k;
    }
}
gdjs.Percurso_32CarmoCode.GDGMObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32CarmoCode.GDGMObjects2.length;i<l;++i) {
    if ( gdjs.Percurso_32CarmoCode.GDGMObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.Percurso_32CarmoCode.GDGMObjects2[k] = gdjs.Percurso_32CarmoCode.GDGMObjects2[i];
        ++k;
    }
}
gdjs.Percurso_32CarmoCode.GDGMObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Percurso_32CarmoCode.GDGMObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Percurso_32CarmoCode.GDGMObjects1_1final.indexOf(gdjs.Percurso_32CarmoCode.GDGMObjects2[j]) === -1 )
            gdjs.Percurso_32CarmoCode.GDGMObjects1_1final.push(gdjs.Percurso_32CarmoCode.GDGMObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("next")) == gdjs.evtTools.firebaseTools.auth.userManagement.getUID();
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Percurso_32CarmoCode.GDGMObjects1_1final, gdjs.Percurso_32CarmoCode.GDGMObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().get("next").setString("");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.Percurso_32CarmoCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.Percurso_32CarmoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Percurso_32CarmoCode.GDnoObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDnoObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDnoObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDyesObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDyesObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDyesObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDpercursoObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDpercursoObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDpercursoObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDGMObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDGMObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDGMObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDscoreObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDscoreObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDscoreObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDnext_9595sceneObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDnext_9595sceneObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDnext_9595sceneObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDURLObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDURLObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDURLObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDfundopistagmObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDfundopistagmObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDfundopistagmObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDpistagmObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDpistagmObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDpistagmObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDdigitsObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDdigitsObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDdigitsObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDgmapsObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDgmapsObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDgmapsObjects3.length = 0;

gdjs.Percurso_32CarmoCode.eventsList6(runtimeScene);

return;

}

gdjs['Percurso_32CarmoCode'] = gdjs.Percurso_32CarmoCode;
