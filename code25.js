gdjs.Camoes_32EnigmaCode = {};
gdjs.Camoes_32EnigmaCode.GDclueObjects1_1final = [];

gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1_1final = [];

gdjs.Camoes_32EnigmaCode.GDplace1Objects1_1final = [];

gdjs.Camoes_32EnigmaCode.GDplace2Objects1_1final = [];

gdjs.Camoes_32EnigmaCode.GDplace3Objects1_1final = [];

gdjs.Camoes_32EnigmaCode.GDokObjects1= [];
gdjs.Camoes_32EnigmaCode.GDokObjects2= [];
gdjs.Camoes_32EnigmaCode.GDokObjects3= [];
gdjs.Camoes_32EnigmaCode.GDfundoObjects1= [];
gdjs.Camoes_32EnigmaCode.GDfundoObjects2= [];
gdjs.Camoes_32EnigmaCode.GDfundoObjects3= [];
gdjs.Camoes_32EnigmaCode.GDclueObjects1= [];
gdjs.Camoes_32EnigmaCode.GDclueObjects2= [];
gdjs.Camoes_32EnigmaCode.GDclueObjects3= [];
gdjs.Camoes_32EnigmaCode.GDanswerObjects1= [];
gdjs.Camoes_32EnigmaCode.GDanswerObjects2= [];
gdjs.Camoes_32EnigmaCode.GDanswerObjects3= [];
gdjs.Camoes_32EnigmaCode.GDplace1Objects1= [];
gdjs.Camoes_32EnigmaCode.GDplace1Objects2= [];
gdjs.Camoes_32EnigmaCode.GDplace1Objects3= [];
gdjs.Camoes_32EnigmaCode.GDplace2Objects1= [];
gdjs.Camoes_32EnigmaCode.GDplace2Objects2= [];
gdjs.Camoes_32EnigmaCode.GDplace2Objects3= [];
gdjs.Camoes_32EnigmaCode.GDplace3Objects1= [];
gdjs.Camoes_32EnigmaCode.GDplace3Objects2= [];
gdjs.Camoes_32EnigmaCode.GDplace3Objects3= [];
gdjs.Camoes_32EnigmaCode.GDscoreObjects1= [];
gdjs.Camoes_32EnigmaCode.GDscoreObjects2= [];
gdjs.Camoes_32EnigmaCode.GDscoreObjects3= [];
gdjs.Camoes_32EnigmaCode.GDnext_9595sceneObjects1= [];
gdjs.Camoes_32EnigmaCode.GDnext_9595sceneObjects2= [];
gdjs.Camoes_32EnigmaCode.GDnext_9595sceneObjects3= [];
gdjs.Camoes_32EnigmaCode.GDURLObjects1= [];
gdjs.Camoes_32EnigmaCode.GDURLObjects2= [];
gdjs.Camoes_32EnigmaCode.GDURLObjects3= [];
gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1= [];
gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects2= [];
gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects3= [];
gdjs.Camoes_32EnigmaCode.GDpistagmObjects1= [];
gdjs.Camoes_32EnigmaCode.GDpistagmObjects2= [];
gdjs.Camoes_32EnigmaCode.GDpistagmObjects3= [];
gdjs.Camoes_32EnigmaCode.GDdigitsObjects1= [];
gdjs.Camoes_32EnigmaCode.GDdigitsObjects2= [];
gdjs.Camoes_32EnigmaCode.GDdigitsObjects3= [];
gdjs.Camoes_32EnigmaCode.GDlocal_9595erradoObjects1= [];
gdjs.Camoes_32EnigmaCode.GDlocal_9595erradoObjects2= [];
gdjs.Camoes_32EnigmaCode.GDlocal_9595erradoObjects3= [];
gdjs.Camoes_32EnigmaCode.GDtask_9595confirmationObjects1= [];
gdjs.Camoes_32EnigmaCode.GDtask_9595confirmationObjects2= [];
gdjs.Camoes_32EnigmaCode.GDtask_9595confirmationObjects3= [];
gdjs.Camoes_32EnigmaCode.GDgmapsObjects1= [];
gdjs.Camoes_32EnigmaCode.GDgmapsObjects2= [];
gdjs.Camoes_32EnigmaCode.GDgmapsObjects3= [];


gdjs.Camoes_32EnigmaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15391548);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue"))), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().get("hour"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().get("minute"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList1 = function(runtimeScene) {

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


};gdjs.Camoes_32EnigmaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18513084);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "message-incoming-132126.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList3 = function(runtimeScene) {

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


};gdjs.Camoes_32EnigmaCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15518788);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15624604);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15689828);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15692140);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace1Objects1 */
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace2Objects1 */
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace3Objects1 */
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", (( gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length === 0 ) ? "" :gdjs.Camoes_32EnigmaCode.GDplace1Objects1[0].LabelText((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + ";" + (( gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length === 0 ) ? "" :gdjs.Camoes_32EnigmaCode.GDplace2Objects1[0].LabelText((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + ";" + (( gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length === 0 ) ? "" :gdjs.Camoes_32EnigmaCode.GDplace3Objects1[0].LabelText((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue"))), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15009908);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15188260);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15190740);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14910172);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15239556);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15239428);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15098324);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15483140);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15481892);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14781548);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14759868);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(7);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14760828);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(5);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14761772);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(3);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14782692);
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
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 0;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList18(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 2;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList19(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 3;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList20(runtimeScene);} //End of subevents
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
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Camoes Fim", false);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList22 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.Camoes_32EnigmaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDokObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Camoes_32EnigmaCode.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDpistagmObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scene_start");
}{runtimeScene.getScene().getVariables().get("clue").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(24);
}{runtimeScene.getScene().getVariables().get("cluegiven").setNumber(0);
}{runtimeScene.getScene().getVariables().get("clueGM").setString("");
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.Camoes_32EnigmaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDpistagmObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().get("cluegiven").setNumber(0);
}{runtimeScene.getScene().getVariables().get("clueGM").setString("");
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
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
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Camoes_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.Camoes_32EnigmaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDpistagmObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("clueGM")));
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDpistagmObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDpistagmObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDpistagmObjects1[i].setWrappingWidth(535);
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDpistagmObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Camoes_32EnigmaCode.GDpistagmObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDpistagmObjects1[i].setY(575 - (gdjs.Camoes_32EnigmaCode.GDpistagmObjects1[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDpistagmObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[k] = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDokObjects1[k] = gdjs.Camoes_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Camoes_32EnigmaCode.GDanswerObjects1);
/* Reuse gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1 */
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.Camoes_32EnigmaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDpistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDanswerObjects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().get("clueGM").setString("");
}{runtimeScene.getScene().getVariables().get("cluegiven").setNumber(0);
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList3(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Camoes_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Camoes_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Camoes_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Camoes_32EnigmaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("place1"), gdjs.Camoes_32EnigmaCode.GDplace1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace1Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].returnVariable(gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariables().getFromIndex(0)).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariables().getFromIndex(0))) + 1);
}
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("place1"), gdjs.Camoes_32EnigmaCode.GDplace1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace1Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].SetLabelText("Pedro Nunes", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place1"), gdjs.Camoes_32EnigmaCode.GDplace1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace1Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].SetLabelText("Vasco M. Quevedo", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place1"), gdjs.Camoes_32EnigmaCode.GDplace1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace1Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].SetLabelText("Gomes Eanes", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place1"), gdjs.Camoes_32EnigmaCode.GDplace1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace1Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].SetLabelText("João de Barros", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place1"), gdjs.Camoes_32EnigmaCode.GDplace1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace1Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].SetLabelText("F. Sá de Menezes", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place1"), gdjs.Camoes_32EnigmaCode.GDplace1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace1Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].SetLabelText("Fernão Lopes", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place1"), gdjs.Camoes_32EnigmaCode.GDplace1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariables().getFromIndex(0)) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace1Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].SetLabelText("Fernão L. Castanhede", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place1"), gdjs.Camoes_32EnigmaCode.GDplace1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariables().getFromIndex(0)) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace1Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].SetLabelText("Corte Real", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place1"), gdjs.Camoes_32EnigmaCode.GDplace1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariables().getFromIndex(0)) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace1Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].returnVariable(gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("place2"), gdjs.Camoes_32EnigmaCode.GDplace2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace2Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace2Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].returnVariable(gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariables().getFromIndex(0)).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariables().getFromIndex(0))) + 1);
}
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("place2"), gdjs.Camoes_32EnigmaCode.GDplace2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace2Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace2Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].SetLabelText("Pedro Nunes", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place2"), gdjs.Camoes_32EnigmaCode.GDplace2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace2Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace2Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].SetLabelText("Vasco M. Quevedo", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place2"), gdjs.Camoes_32EnigmaCode.GDplace2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace2Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace2Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].SetLabelText("Gomes Eanes", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place2"), gdjs.Camoes_32EnigmaCode.GDplace2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace2Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace2Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].SetLabelText("João de Barros", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place2"), gdjs.Camoes_32EnigmaCode.GDplace2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace2Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace2Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].SetLabelText("F. Sá de Menezes", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place2"), gdjs.Camoes_32EnigmaCode.GDplace2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace2Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace2Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].SetLabelText("Fernão Lopes", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place2"), gdjs.Camoes_32EnigmaCode.GDplace2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariables().getFromIndex(0)) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace2Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace2Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].SetLabelText("Fernão L. Castanhede", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place2"), gdjs.Camoes_32EnigmaCode.GDplace2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariables().getFromIndex(0)) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace2Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace2Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].SetLabelText("Corte Real", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place2"), gdjs.Camoes_32EnigmaCode.GDplace2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariables().getFromIndex(0)) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace2Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace2Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].returnVariable(gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("place3"), gdjs.Camoes_32EnigmaCode.GDplace3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace3Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].returnVariable(gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariables().getFromIndex(0)).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariables().getFromIndex(0))) + 1);
}
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("place3"), gdjs.Camoes_32EnigmaCode.GDplace3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace3Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].SetLabelText("Pedro Nunes", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place3"), gdjs.Camoes_32EnigmaCode.GDplace3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace3Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].SetLabelText("Vasco M. Quevedo", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place3"), gdjs.Camoes_32EnigmaCode.GDplace3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace3Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].SetLabelText("Gomes Eanes", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place3"), gdjs.Camoes_32EnigmaCode.GDplace3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace3Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].SetLabelText("João de Barros", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place3"), gdjs.Camoes_32EnigmaCode.GDplace3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace3Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].SetLabelText("F. Sá de Menezes", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place3"), gdjs.Camoes_32EnigmaCode.GDplace3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace3Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].SetLabelText("Fernão Lopes", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place3"), gdjs.Camoes_32EnigmaCode.GDplace3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariables().getFromIndex(0)) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace3Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].SetLabelText("Fernão L. Castanhede", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place3"), gdjs.Camoes_32EnigmaCode.GDplace3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariables().getFromIndex(0)) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace3Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].SetLabelText("Corte Real", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("place3"), gdjs.Camoes_32EnigmaCode.GDplace3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariables().getFromIndex(0)) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDplace3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDplace3Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].returnVariable(gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);
gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length = 0;

gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length = 0;

gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[k] = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDokObjects1[k] = gdjs.Camoes_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Camoes_32EnigmaCode.GDplace1Objects1_1final.length = 0;
gdjs.Camoes_32EnigmaCode.GDplace2Objects1_1final.length = 0;
gdjs.Camoes_32EnigmaCode.GDplace3Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("place1"), gdjs.Camoes_32EnigmaCode.GDplace1Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace1Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace1Objects2[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace1Objects2[i].getVariables().getFromIndex(0)) != 1 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDplace1Objects2[k] = gdjs.Camoes_32EnigmaCode.GDplace1Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace1Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDplace1Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDplace1Objects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDplace1Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDplace1Objects1_1final.push(gdjs.Camoes_32EnigmaCode.GDplace1Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("place2"), gdjs.Camoes_32EnigmaCode.GDplace2Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace2Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace2Objects2[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace2Objects2[i].getVariables().getFromIndex(0)) != 5 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDplace2Objects2[k] = gdjs.Camoes_32EnigmaCode.GDplace2Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace2Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDplace2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDplace2Objects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDplace2Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDplace2Objects1_1final.push(gdjs.Camoes_32EnigmaCode.GDplace2Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("place3"), gdjs.Camoes_32EnigmaCode.GDplace3Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace3Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace3Objects2[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace3Objects2[i].getVariables().getFromIndex(0)) != 6 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDplace3Objects2[k] = gdjs.Camoes_32EnigmaCode.GDplace3Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace3Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDplace3Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDplace3Objects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDplace3Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDplace3Objects1_1final.push(gdjs.Camoes_32EnigmaCode.GDplace3Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDplace1Objects1_1final, gdjs.Camoes_32EnigmaCode.GDplace1Objects1);
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDplace2Objects1_1final, gdjs.Camoes_32EnigmaCode.GDplace2Objects1);
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDplace3Objects1_1final, gdjs.Camoes_32EnigmaCode.GDplace3Objects1);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("clue").add(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "clue");
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) + 4);
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) + 8);
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = 0;

gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Camoes_32EnigmaCode.GDclueObjects1_1final.length = 0;
gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDclueObjects2[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects2[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDclueObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDclueObjects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDclueObjects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDclueObjects1_1final.push(gdjs.Camoes_32EnigmaCode.GDclueObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects2[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects2[k] = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1_1final.push(gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDclueObjects1_1final, gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1_1final, gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDokObjects1[k] = gdjs.Camoes_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDclueObjects1 */
/* Reuse gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[i].hide();
}
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = 0;

gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Camoes_32EnigmaCode.GDclueObjects1_1final.length = 0;
gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDclueObjects2[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects2[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDclueObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDclueObjects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDclueObjects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDclueObjects1_1final.push(gdjs.Camoes_32EnigmaCode.GDclueObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects2[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects2[k] = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1_1final.push(gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDclueObjects1_1final, gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1_1final, gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Camoes_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDanswerObjects1[i].setDisabled(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[k] = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Camoes_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDanswerObjects1[i].setDisabled(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("place1"), gdjs.Camoes_32EnigmaCode.GDplace1Objects1);
gdjs.copyArray(runtimeScene.getObjects("place2"), gdjs.Camoes_32EnigmaCode.GDplace2Objects1);
gdjs.copyArray(runtimeScene.getObjects("place3"), gdjs.Camoes_32EnigmaCode.GDplace3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[k] = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDokObjects1[k] = gdjs.Camoes_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDplace1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDplace2Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariables().getFromIndex(0)) == 6 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDplace3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("place1"), gdjs.Camoes_32EnigmaCode.GDplace1Objects1);
gdjs.copyArray(runtimeScene.getObjects("place2"), gdjs.Camoes_32EnigmaCode.GDplace2Objects1);
gdjs.copyArray(runtimeScene.getObjects("place3"), gdjs.Camoes_32EnigmaCode.GDplace3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[k] = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDokObjects1[k] = gdjs.Camoes_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDplace1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDplace2Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariables().getFromIndex(0)) == 6 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDplace3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("place1"), gdjs.Camoes_32EnigmaCode.GDplace1Objects1);
gdjs.copyArray(runtimeScene.getObjects("place2"), gdjs.Camoes_32EnigmaCode.GDplace2Objects1);
gdjs.copyArray(runtimeScene.getObjects("place3"), gdjs.Camoes_32EnigmaCode.GDplace3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[k] = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDokObjects1[k] = gdjs.Camoes_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDplace1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDplace2Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariables().getFromIndex(0)) == 6 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDplace3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("place1"), gdjs.Camoes_32EnigmaCode.GDplace1Objects1);
gdjs.copyArray(runtimeScene.getObjects("place2"), gdjs.Camoes_32EnigmaCode.GDplace2Objects1);
gdjs.copyArray(runtimeScene.getObjects("place3"), gdjs.Camoes_32EnigmaCode.GDplace3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[k] = gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDokObjects1[k] = gdjs.Camoes_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDplace1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDplace2Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace2Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariableNumber(gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i].getVariables().getFromIndex(0)) == 6 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDplace3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDplace3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList15(runtimeScene);} //End of subevents
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
gdjs.Camoes_32EnigmaCode.eventsList16(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList21(runtimeScene);} //End of subevents
}

}


};

gdjs.Camoes_32EnigmaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Camoes_32EnigmaCode.GDokObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDokObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDokObjects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDfundoObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDfundoObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDfundoObjects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDclueObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDclueObjects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDanswerObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDanswerObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDanswerObjects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDplace1Objects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDplace1Objects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDplace1Objects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDplace2Objects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDplace2Objects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDplace2Objects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDplace3Objects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDplace3Objects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDplace3Objects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDscoreObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDscoreObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDscoreObjects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDnext_9595sceneObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDnext_9595sceneObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDnext_9595sceneObjects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDURLObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDURLObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDURLObjects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDfundopistagmObjects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDpistagmObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDpistagmObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDpistagmObjects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDdigitsObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDdigitsObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDdigitsObjects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDgmapsObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDgmapsObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDgmapsObjects3.length = 0;

gdjs.Camoes_32EnigmaCode.eventsList22(runtimeScene);

return;

}

gdjs['Camoes_32EnigmaCode'] = gdjs.Camoes_32EnigmaCode;
