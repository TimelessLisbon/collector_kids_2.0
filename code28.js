gdjs.S_46_32CarlosCode = {};
gdjs.S_46_32CarlosCode.GDanswerObjects1_1final = [];

gdjs.S_46_32CarlosCode.GDclueObjects1_1final = [];

gdjs.S_46_32CarlosCode.GDfundoObjects1= [];
gdjs.S_46_32CarlosCode.GDfundoObjects2= [];
gdjs.S_46_32CarlosCode.GDfundoObjects3= [];
gdjs.S_46_32CarlosCode.GDVideo_9595ENObjects1= [];
gdjs.S_46_32CarlosCode.GDVideo_9595ENObjects2= [];
gdjs.S_46_32CarlosCode.GDVideo_9595ENObjects3= [];
gdjs.S_46_32CarlosCode.GDvideobannerObjects1= [];
gdjs.S_46_32CarlosCode.GDvideobannerObjects2= [];
gdjs.S_46_32CarlosCode.GDvideobannerObjects3= [];
gdjs.S_46_32CarlosCode.GDVideo_9595PTObjects1= [];
gdjs.S_46_32CarlosCode.GDVideo_9595PTObjects2= [];
gdjs.S_46_32CarlosCode.GDVideo_9595PTObjects3= [];
gdjs.S_46_32CarlosCode.GDanswerObjects1= [];
gdjs.S_46_32CarlosCode.GDanswerObjects2= [];
gdjs.S_46_32CarlosCode.GDanswerObjects3= [];
gdjs.S_46_32CarlosCode.GDokObjects1= [];
gdjs.S_46_32CarlosCode.GDokObjects2= [];
gdjs.S_46_32CarlosCode.GDokObjects3= [];
gdjs.S_46_32CarlosCode.GDclueObjects1= [];
gdjs.S_46_32CarlosCode.GDclueObjects2= [];
gdjs.S_46_32CarlosCode.GDclueObjects3= [];
gdjs.S_46_32CarlosCode.GDVideo_9595FRObjects1= [];
gdjs.S_46_32CarlosCode.GDVideo_9595FRObjects2= [];
gdjs.S_46_32CarlosCode.GDVideo_9595FRObjects3= [];
gdjs.S_46_32CarlosCode.GDVideo_9595ESObjects1= [];
gdjs.S_46_32CarlosCode.GDVideo_9595ESObjects2= [];
gdjs.S_46_32CarlosCode.GDVideo_9595ESObjects3= [];
gdjs.S_46_32CarlosCode.GDstickersObjects1= [];
gdjs.S_46_32CarlosCode.GDstickersObjects2= [];
gdjs.S_46_32CarlosCode.GDstickersObjects3= [];
gdjs.S_46_32CarlosCode.GDscoreObjects1= [];
gdjs.S_46_32CarlosCode.GDscoreObjects2= [];
gdjs.S_46_32CarlosCode.GDscoreObjects3= [];
gdjs.S_46_32CarlosCode.GDnext_9595sceneObjects1= [];
gdjs.S_46_32CarlosCode.GDnext_9595sceneObjects2= [];
gdjs.S_46_32CarlosCode.GDnext_9595sceneObjects3= [];
gdjs.S_46_32CarlosCode.GDURLObjects1= [];
gdjs.S_46_32CarlosCode.GDURLObjects2= [];
gdjs.S_46_32CarlosCode.GDURLObjects3= [];
gdjs.S_46_32CarlosCode.GDfundopistagmObjects1= [];
gdjs.S_46_32CarlosCode.GDfundopistagmObjects2= [];
gdjs.S_46_32CarlosCode.GDfundopistagmObjects3= [];
gdjs.S_46_32CarlosCode.GDpistagmObjects1= [];
gdjs.S_46_32CarlosCode.GDpistagmObjects2= [];
gdjs.S_46_32CarlosCode.GDpistagmObjects3= [];
gdjs.S_46_32CarlosCode.GDdigitsObjects1= [];
gdjs.S_46_32CarlosCode.GDdigitsObjects2= [];
gdjs.S_46_32CarlosCode.GDdigitsObjects3= [];
gdjs.S_46_32CarlosCode.GDlocal_9595erradoObjects1= [];
gdjs.S_46_32CarlosCode.GDlocal_9595erradoObjects2= [];
gdjs.S_46_32CarlosCode.GDlocal_9595erradoObjects3= [];
gdjs.S_46_32CarlosCode.GDtask_9595confirmationObjects1= [];
gdjs.S_46_32CarlosCode.GDtask_9595confirmationObjects2= [];
gdjs.S_46_32CarlosCode.GDtask_9595confirmationObjects3= [];
gdjs.S_46_32CarlosCode.GDgmapsObjects1= [];
gdjs.S_46_32CarlosCode.GDgmapsObjects2= [];
gdjs.S_46_32CarlosCode.GDgmapsObjects3= [];


gdjs.S_46_32CarlosCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15136084);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().get("hour"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().get("minute"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Leaderboard", "ID", runtimeScene.getScene().getVariables().get("leaderboard"), runtimeScene.getScene().getVariables().get("error"));
}}

}


};gdjs.S_46_32CarlosCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15140836);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "PT_Codigo_Bomba.MP3", 1, true, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15141996);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "bomb_EN.mp3", 1, true, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15143284);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "FR_Codigo_Bomba.AAC", 1, true, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15144660);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ES_Codigo_Bomba.AAC", 1, true, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32CarlosCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32CarlosCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32CarlosCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32CarlosCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.S_46_32CarlosCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15158684);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.S_46_32CarlosCode.GDanswerObjects1, gdjs.S_46_32CarlosCode.GDanswerObjects2);

{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", (( gdjs.S_46_32CarlosCode.GDanswerObjects2.length === 0 ) ? "" :gdjs.S_46_32CarlosCode.GDanswerObjects2[0].getText()), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue"))), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15160428);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.asyncCallback15164900 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects3);

{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects3.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects3[i].setText("");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}}
gdjs.S_46_32CarlosCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.S_46_32CarlosCode.GDanswerObjects2) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.S_46_32CarlosCode.asyncCallback15164900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.S_46_32CarlosCode.asyncCallback15167068 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects2);

{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects2[i].setText("");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}}
gdjs.S_46_32CarlosCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.S_46_32CarlosCode.GDanswerObjects1) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.S_46_32CarlosCode.asyncCallback15167068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.S_46_32CarlosCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15162948);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects2);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects2[i].setText("INCORRECTO");
}
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].setText("INCORRECT");
}
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.S_46_32CarlosCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15169260);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15171588);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15174004);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15174500);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.mapOfGDgdjs_9546S_959546_959532CarlosCode_9546GDvideobannerObjects1Objects = Hashtable.newFrom({"videobanner": gdjs.S_46_32CarlosCode.GDvideobannerObjects1});
gdjs.S_46_32CarlosCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15412644);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/shorts/XocGPYBXfgA", runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://youtube.com/shorts/_BVwlMtAaYw", runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://youtube.com/shorts/KeSvNwvgaeY", runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://youtube.com/shorts/wFk7Ql2G2GM", runtimeScene);
}}

}


};gdjs.S_46_32CarlosCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15146876);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("hour_finish").setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "hour"));
}{runtimeScene.getGame().getVariables().get("min_finish").setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "min"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.S_46_32CarlosCode.GDanswerObjects1, gdjs.S_46_32CarlosCode.GDanswerObjects2);

{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects2[i].setText("CORRECTO");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.S_46_32CarlosCode.GDanswerObjects1 */
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].setText("CORRECT");
}
}}

}


};gdjs.S_46_32CarlosCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Video_PT"), gdjs.S_46_32CarlosCode.GDVideo_9595PTObjects2);
gdjs.copyArray(runtimeScene.getObjects("videobanner"), gdjs.S_46_32CarlosCode.GDvideobannerObjects2);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDvideobannerObjects2.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDvideobannerObjects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDvideobannerObjects2.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDvideobannerObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDVideo_9595PTObjects2.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDVideo_9595PTObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDVideo_9595PTObjects2.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDVideo_9595PTObjects2[i].play();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Video_EN"), gdjs.S_46_32CarlosCode.GDVideo_9595ENObjects2);
gdjs.copyArray(runtimeScene.getObjects("videobanner"), gdjs.S_46_32CarlosCode.GDvideobannerObjects2);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDvideobannerObjects2.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDvideobannerObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDvideobannerObjects2.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDvideobannerObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDVideo_9595ENObjects2.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDVideo_9595ENObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDVideo_9595ENObjects2.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDVideo_9595ENObjects2[i].play();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Video_FR"), gdjs.S_46_32CarlosCode.GDVideo_9595FRObjects2);
gdjs.copyArray(runtimeScene.getObjects("videobanner"), gdjs.S_46_32CarlosCode.GDvideobannerObjects2);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDvideobannerObjects2.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDvideobannerObjects2[i].getBehavior("Animation").setAnimationIndex(2);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDvideobannerObjects2.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDvideobannerObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDVideo_9595FRObjects2.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDVideo_9595FRObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDVideo_9595FRObjects2.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDVideo_9595FRObjects2[i].play();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Video_ES"), gdjs.S_46_32CarlosCode.GDVideo_9595ESObjects1);
gdjs.copyArray(runtimeScene.getObjects("videobanner"), gdjs.S_46_32CarlosCode.GDvideobannerObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDvideobannerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDvideobannerObjects1[i].getBehavior("Animation").setAnimationIndex(3);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDvideobannerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDvideobannerObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDVideo_9595ESObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDVideo_9595ESObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDVideo_9595ESObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDVideo_9595ESObjects1[i].play();
}
}}

}


};gdjs.S_46_32CarlosCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18058028);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18066508);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}}

}


};gdjs.S_46_32CarlosCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18067636);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(7);
}}

}


};gdjs.S_46_32CarlosCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18068756);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(5);
}}

}


};gdjs.S_46_32CarlosCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18069700);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(3);
}}

}


};gdjs.S_46_32CarlosCode.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18062212);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) < 2;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32CarlosCode.eventsList18(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) < 4;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32CarlosCode.eventsList19(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) < 6;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32CarlosCode.eventsList20(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 6;
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32CarlosCode.eventsList21(runtimeScene);} //End of subevents
}

}


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
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fim", false);
}}

}


};gdjs.S_46_32CarlosCode.eventsList23 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18505116);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}}

}


};gdjs.S_46_32CarlosCode.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18513084);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "message-incoming-132126.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.eventsList25 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18515612);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "LIDA", runtimeScene.getScene().getVariables().get("error"));
}}

}


};gdjs.S_46_32CarlosCode.eventsList26 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Video_EN"), gdjs.S_46_32CarlosCode.GDVideo_9595ENObjects1);
gdjs.copyArray(runtimeScene.getObjects("Video_ES"), gdjs.S_46_32CarlosCode.GDVideo_9595ESObjects1);
gdjs.copyArray(runtimeScene.getObjects("Video_FR"), gdjs.S_46_32CarlosCode.GDVideo_9595FRObjects1);
gdjs.copyArray(runtimeScene.getObjects("Video_PT"), gdjs.S_46_32CarlosCode.GDVideo_9595PTObjects1);
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32CarlosCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("videobanner"), gdjs.S_46_32CarlosCode.GDvideobannerObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDVideo_9595ENObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDVideo_9595ENObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDVideo_9595PTObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDVideo_9595PTObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDVideo_9595FRObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDVideo_9595FRObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDVideo_9595ESObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDVideo_9595ESObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDvideobannerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDvideobannerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDVideo_9595ENObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDVideo_9595ENObjects1[i].pause();
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDVideo_9595PTObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDVideo_9595PTObjects1[i].pause();
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDVideo_9595FRObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDVideo_9595FRObjects1[i].pause();
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDVideo_9595ESObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDVideo_9595ESObjects1[i].pause();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scene_start");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(27);
}{runtimeScene.getScene().getVariables().get("video").setNumber(0);
}{runtimeScene.getScene().getVariables().get("clue").setNumber(0);
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32CarlosCode.GDanswerObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDokObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32CarlosCode.GDokObjects1[i].getWidth())) / 2);
}
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 0;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", runtimeScene.getScene().getVariables().get("next"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Language", runtimeScene.getScene().getVariables().get("language"), runtimeScene.getScene().getVariables().get("error"));
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scene_start") >= 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("language")));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32CarlosCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32CarlosCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32CarlosCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.S_46_32CarlosCode.GDfundoObjects1);
gdjs.copyArray(runtimeScene.getObjects("stickers"), gdjs.S_46_32CarlosCode.GDstickersObjects1);
gdjs.copyArray(runtimeScene.getObjects("videobanner"), gdjs.S_46_32CarlosCode.GDvideobannerObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDvideobannerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDvideobannerObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDstickersObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDstickersObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
{runtimeScene.getScene().getVariables().get("answer").setString("LIVRO");
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].setPlaceholder("TOQUE PARA INSERIR");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
{runtimeScene.getScene().getVariables().get("answer").setString("BOOK");
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].setPlaceholder("TOUCH TO ADD");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
{runtimeScene.getScene().getVariables().get("answer").setString("LIVRE");
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].setPlaceholder("TAP POUR INSERER");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
{runtimeScene.getScene().getVariables().get("answer").setString("LIBRO");
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].setPlaceholder("PULSE PARA INSERTAR");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].setText(gdjs.evtTools.string.toUpperCase((gdjs.S_46_32CarlosCode.GDanswerObjects1[i].getText())));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32CarlosCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("stickers"), gdjs.S_46_32CarlosCode.GDstickersObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDstickersObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDstickersObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDstickersObjects1[k] = gdjs.S_46_32CarlosCode.GDstickersObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDstickersObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDokObjects1[k] = gdjs.S_46_32CarlosCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
/* Reuse gdjs.S_46_32CarlosCode.GDstickersObjects1 */
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDstickersObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDstickersObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].hide(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.S_46_32CarlosCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32CarlosCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("stickers"), gdjs.S_46_32CarlosCode.GDstickersObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("digits")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32CarlosCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDclueObjects1[k] = gdjs.S_46_32CarlosCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDfundopistagmObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32CarlosCode.GDfundopistagmObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDfundopistagmObjects1[k] = gdjs.S_46_32CarlosCode.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDfundopistagmObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDstickersObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32CarlosCode.GDstickersObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDstickersObjects1[k] = gdjs.S_46_32CarlosCode.GDstickersObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDstickersObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDokObjects1[k] = gdjs.S_46_32CarlosCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDanswerObjects1[i].getText() != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32CarlosCode.GDanswerObjects1[k] = gdjs.S_46_32CarlosCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDanswerObjects1[i].getText() != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) + " " ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32CarlosCode.GDanswerObjects1[k] = gdjs.S_46_32CarlosCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDanswerObjects1[i].getText() != "" ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32CarlosCode.GDanswerObjects1[k] = gdjs.S_46_32CarlosCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDanswerObjects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("clue").add(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "clue");
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 3;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 5;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 7;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32CarlosCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDclueObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDclueObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) + 4);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDclueObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) + 8);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32CarlosCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDclueObjects1[k] = gdjs.S_46_32CarlosCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDokObjects1[k] = gdjs.S_46_32CarlosCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
/* Reuse gdjs.S_46_32CarlosCode.GDclueObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.S_46_32CarlosCode.GDclueObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.S_46_32CarlosCode.GDclueObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDclueObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDclueObjects2[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32CarlosCode.GDclueObjects2[k] = gdjs.S_46_32CarlosCode.GDclueObjects2[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDclueObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32CarlosCode.GDclueObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32CarlosCode.GDclueObjects1_1final.indexOf(gdjs.S_46_32CarlosCode.GDclueObjects2[j]) === -1 )
            gdjs.S_46_32CarlosCode.GDclueObjects1_1final.push(gdjs.S_46_32CarlosCode.GDclueObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.S_46_32CarlosCode.GDclueObjects1_1final, gdjs.S_46_32CarlosCode.GDclueObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].setDisabled(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32CarlosCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32CarlosCode.GDclueObjects1[k] = gdjs.S_46_32CarlosCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDclueObjects1.length = k;
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].setDisabled(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("videobanner"), gdjs.S_46_32CarlosCode.GDvideobannerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDvideobannerObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDvideobannerObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDvideobannerObjects1[k] = gdjs.S_46_32CarlosCode.GDvideobannerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDvideobannerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S_46_32CarlosCode.mapOfGDgdjs_9546S_959546_959532CarlosCode_9546GDvideobannerObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("video").setNumber(1);
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList14(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32CarlosCode.GDokObjects1);
gdjs.S_46_32CarlosCode.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32CarlosCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDclueObjects1[k] = gdjs.S_46_32CarlosCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDokObjects1[k] = gdjs.S_46_32CarlosCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.S_46_32CarlosCode.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDanswerObjects2[i].getText() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32CarlosCode.GDanswerObjects2[k] = gdjs.S_46_32CarlosCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32CarlosCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32CarlosCode.GDanswerObjects1_1final.indexOf(gdjs.S_46_32CarlosCode.GDanswerObjects2[j]) === -1 )
            gdjs.S_46_32CarlosCode.GDanswerObjects1_1final.push(gdjs.S_46_32CarlosCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDanswerObjects2[i].getText() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) + " " ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32CarlosCode.GDanswerObjects2[k] = gdjs.S_46_32CarlosCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32CarlosCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32CarlosCode.GDanswerObjects1_1final.indexOf(gdjs.S_46_32CarlosCode.GDanswerObjects2[j]) === -1 )
            gdjs.S_46_32CarlosCode.GDanswerObjects1_1final.push(gdjs.S_46_32CarlosCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.S_46_32CarlosCode.GDanswerObjects1_1final, gdjs.S_46_32CarlosCode.GDanswerObjects1);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList15(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.7;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList16(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("next")) == gdjs.evtTools.firebaseTools.auth.userManagement.getUID();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().get("next").setString("");
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList17(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 50;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("video")) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("next")) == gdjs.evtTools.firebaseTools.auth.userManagement.getUID();
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList22(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.S_46_32CarlosCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.S_46_32CarlosCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDfundopistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDpistagmObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().get("cluegiven").setNumber(0);
}{runtimeScene.getScene().getVariables().get("clueGM").setString("");
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList23(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.S_46_32CarlosCode.GDfundopistagmObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDfundopistagmObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", runtimeScene.getScene().getVariables().get("clueGM"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("clueGM")) != "";
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("cluegiven").setNumber(1);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "RECEBIDA", runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("cluegiven")) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.S_46_32CarlosCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.S_46_32CarlosCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDpistagmObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("clueGM")));
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDpistagmObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDpistagmObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDpistagmObjects1[i].setWrappingWidth(535);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDpistagmObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32CarlosCode.GDpistagmObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDpistagmObjects1[i].setY(575 - (gdjs.S_46_32CarlosCode.GDpistagmObjects1[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDfundopistagmObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDpistagmObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList24(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.S_46_32CarlosCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32CarlosCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDfundopistagmObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDfundopistagmObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDfundopistagmObjects1[k] = gdjs.S_46_32CarlosCode.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDfundopistagmObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDokObjects1[k] = gdjs.S_46_32CarlosCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
/* Reuse gdjs.S_46_32CarlosCode.GDfundopistagmObjects1 */
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.S_46_32CarlosCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDfundopistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDpistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().get("clueGM").setString("");
}{runtimeScene.getScene().getVariables().get("cluegiven").setNumber(0);
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList25(runtimeScene);} //End of subevents
}

}


};

gdjs.S_46_32CarlosCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S_46_32CarlosCode.GDfundoObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDfundoObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDfundoObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDVideo_9595ENObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDVideo_9595ENObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDVideo_9595ENObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDvideobannerObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDvideobannerObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDvideobannerObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDVideo_9595PTObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDVideo_9595PTObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDVideo_9595PTObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDanswerObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDanswerObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDanswerObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDokObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDokObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDokObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDclueObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDclueObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDclueObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDVideo_9595FRObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDVideo_9595FRObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDVideo_9595FRObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDVideo_9595ESObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDVideo_9595ESObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDVideo_9595ESObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDstickersObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDstickersObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDstickersObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDscoreObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDscoreObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDscoreObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDnext_9595sceneObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDnext_9595sceneObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDnext_9595sceneObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDURLObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDURLObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDURLObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDfundopistagmObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDfundopistagmObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDfundopistagmObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDpistagmObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDpistagmObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDpistagmObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDdigitsObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDdigitsObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDdigitsObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDgmapsObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDgmapsObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDgmapsObjects3.length = 0;

gdjs.S_46_32CarlosCode.eventsList26(runtimeScene);

return;

}

gdjs['S_46_32CarlosCode'] = gdjs.S_46_32CarlosCode;
