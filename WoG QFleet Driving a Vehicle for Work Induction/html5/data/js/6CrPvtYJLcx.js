window.globalProvideData('slide', '{"title":"If you need to reverse into or out of a parking space and you are driving alone, before reversing you should inspect behind the vehicle to check the path is clear of obstacles.","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide14","width":1024,"height":768,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6CrPvtYJLcx","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5maLWjFgzzH.66GCITqxYRp.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"5maLWjFgzzH.6okeB5aqiui.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.5YREWvDXrik"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6MVHJx68CwF.InvalidPromptSlide"}}]}]},"ReviewInt_5maLWjFgzzH":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5maLWjFgzzH.66GCITqxYRp"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5maLWjFgzzH.6okeB5aqiui"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5YREWvDXrik.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5maLWjFgzzH_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5maLWjFgzzH_IncorrectReview"}}]}]},"ReviewIntCorrectIncorrect_5maLWjFgzzH":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5maLWjFgzzH.66GCITqxYRp.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5maLWjFgzzH.66GCITqxYRp"}}]},{"kind":"adjustvar","variable":"5maLWjFgzzH.66GCITqxYRp._down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"5maLWjFgzzH.66GCITqxYRp._disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"5maLWjFgzzH.66GCITqxYRp.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"5maLWjFgzzH.66GCITqxYRp"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5maLWjFgzzH.6okeB5aqiui"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_5maLWjFgzzH":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5maLWjFgzzH"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000110101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000110101"}]}]},"DisableChoices_5maLWjFgzzH":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"5maLWjFgzzH.66GCITqxYRp.ActGrpSetDisabledState"},{"kind":"exe_actiongroup","id":"5maLWjFgzzH.6okeB5aqiui.ActGrpSetDisabledState"}]},"5maLWjFgzzH_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6fAcxW4Iemi","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5YREWvDXrik.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6OEcJA2VPZ2.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5maLWjFgzzH"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5YREWvDXrik.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5YREWvDXrik.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5maLWjFgzzH"}]}]}]}]},"SetLayout_pxabnsnfns00000110101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000110101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000110101"}]}]},"NavigationRestrictionNextSlide_6CrPvtYJLcx":{"kind":"actiongroup","actions":[{"kind":"playnextdrawslide"}]},"NavigationRestrictionPreviousSlide_6CrPvtYJLcx":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#audioshouldplay","typea":"var","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"media_play","objRef":{"type":"string","value":"6r7PdxSoelz"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"6r7PdxSoelz"}}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000110101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000110101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6MVHJx68CwF","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6MVHJx68CwF","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6fAcxW4Iemi","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6fAcxW4Iemi","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5maLWjFgzzH"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6fAcxW4Iemi","typea":"var","valueb":"6OEcJA2VPZ2","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000110101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6OEcJA2VPZ2.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5maLWjFgzzH"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6OEcJA2VPZ2.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5maLWjFgzzH"}]}]}],"elseActions":[{"kind":"exe_actiongroup","id":"5maLWjFgzzH_CheckAnswered"}]}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6fAcxW4Iemi","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5maLWjFgzzH","typea":"var","valueb":"6OEcJA2VPZ2","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6OEcJA2VPZ2"},"completed_slide_ref":{"type":"string","value":"_player.6cJGlNvrbGI.6DXQpyR0wpW"},"status_filter":""}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6fAcxW4Iemi","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5maLWjFgzzH","typea":"var","valueb":"6OEcJA2VPZ2","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6OEcJA2VPZ2"},"completed_slide_ref":{"type":"string","value":"_player.6cJGlNvrbGI.6DXQpyR0wpW"},"status_filter":""}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6CrPvtYJLcx"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6CrPvtYJLcx"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":134,"id":"6r7PdxSoelz"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":13536,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5maLWjFgzzH"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5maLWjFgzzH.6okeB5aqiui"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5maLWjFgzzH.66GCITqxYRp"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5kNikXhTRs2"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5dsEs7k7OuK"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":120,"id":"01","url":"story_content/5waT9AFdWbg_80_DX1598_DY1598.swf","type":"normal","altText":"","width":1250,"height":450,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":544,"yPos":560,"tabIndex":4,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":234,"rotateYPos":84,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":468,"bottom":168,"altText":"","pngfb":false,"pr":{"l":"Lib","i":636}},"html5data":{"xPos":0,"yPos":0,"width":468,"height":168,"strokewidth":0}},"width":468,"height":168,"resume":true,"useHandCursor":true,"id":"5dsEs7k7OuK"},{"kind":"scrollarea","contentwidth":945,"contentheight":94,"objects":[{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6N4BmLaMJ5G_-2076815359","id":"01","linkId":"txt__default_6okeB5aqiui","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":88,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":731}}}],"shapemaskId":"","xPos":24,"yPos":47,"tabIndex":3,"tabEnabled":true,"radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":461,"rotateYPos":23.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":922,"bottom":47,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":638}},"html5data":{"xPos":0,"yPos":0,"width":922,"height":47,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":922,"bottom":47,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":638}},"html5data":{"xPos":-1,"yPos":-1,"width":923,"height":48,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":922,"bottom":47,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":638}},"html5data":{"xPos":-1,"yPos":-1,"width":923,"height":48,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":922,"bottom":47,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":639}},"html5data":{"xPos":-1,"yPos":-1,"width":923,"height":48,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":922,"bottom":47,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":639}},"html5data":{"xPos":-1,"yPos":-1,"width":923,"height":48,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":922,"bottom":47,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":639}},"html5data":{"xPos":-1,"yPos":-1,"width":923,"height":48,"strokewidth":3}}}],"width":922,"height":47,"resume":true,"useHandCursor":true,"id":"6okeB5aqiui","variables":[{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.66GCITqxYRp.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.66GCITqxYRp._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.66GCITqxYRp"}}]}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5mW7azXb2dR_-881084847","id":"01","linkId":"txt__default_66GCITqxYRp","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":82,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":732}}}],"shapemaskId":"","xPos":24,"yPos":0,"tabIndex":2,"tabEnabled":true,"radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":461,"rotateYPos":23.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":922,"bottom":47,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":638}},"html5data":{"xPos":0,"yPos":0,"width":922,"height":47,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":922,"bottom":47,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":638}},"html5data":{"xPos":-1,"yPos":-1,"width":923,"height":48,"strokewidth":3}}},{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-9,"top":-1,"right":922,"bottom":47,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":641}},"html5data":{"xPos":-9,"yPos":-1,"width":931,"height":48,"strokewidth":3}}},{"kind":"state","name":"_default_Disabled_Review","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-9,"top":-1,"right":922,"bottom":47,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":641}},"html5data":{"xPos":-9,"yPos":-1,"width":931,"height":48,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":922,"bottom":47,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":638}},"html5data":{"xPos":-1,"yPos":-1,"width":923,"height":48,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":922,"bottom":47,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":639}},"html5data":{"xPos":-1,"yPos":-1,"width":923,"height":48,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":922,"bottom":47,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":639}},"html5data":{"xPos":-1,"yPos":-1,"width":923,"height":48,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Review","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-9,"top":-1,"right":922,"bottom":47,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":642}},"html5data":{"xPos":-9,"yPos":-1,"width":931,"height":48,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled_Review","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-9,"top":-1,"right":922,"bottom":47,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":642}},"html5data":{"xPos":-9,"yPos":-1,"width":931,"height":48,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":922,"bottom":47,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":639}},"html5data":{"xPos":-1,"yPos":-1,"width":923,"height":48,"strokewidth":3}}}],"width":922,"height":47,"resume":true,"useHandCursor":true,"id":"66GCITqxYRp","variables":[{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_review","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6okeB5aqiui.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6okeB5aqiui._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6okeB5aqiui"}}]}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetReviewState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"shuffle":false,"depth":1,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""}],"shapemaskId":"","xPos":32,"yPos":134,"tabIndex":1,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":461,"rotateYPos":164.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":56,"yPos":134,"width":921,"height":329,"strokewidth":0}},"width":945,"height":329,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":946,"bottom":329,"altText":"True/False","pngfb":false,"pr":{"l":"Lib","i":730}}},"id":"5maLWjFgzzH"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5kNikXhTRs2_2050419871","id":"01","linkId":"txt__default_5kNikXhTRs2","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":885,"bottom":93,"pngfb":false,"pr":{"l":"Lib","i":734}}}],"shapemaskId":"","xPos":51,"yPos":31,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":446.5,"rotateYPos":48.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":893,"bottom":97,"altText":"Question: If you need to reverse into or out of a parking space and you are driving alone, before reversing you should inspect behind the vehicle to check the path is clear of obstacles.","pngfb":false,"pr":{"l":"Lib","i":733}},"html5data":{"xPos":0,"yPos":0,"width":893,"height":97,"strokewidth":0}},"width":893,"height":97,"resume":true,"useHandCursor":true,"id":"5kNikXhTRs2"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5maLWjFgzzH_CorrectReview","id":"01","linkId":"5maLWjFgzzH_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":554,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":648}}}],"shapemaskId":"","xPos":0,"yPos":728,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":512,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1024,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":647}},"html5data":{"xPos":1,"yPos":1,"width":1021,"height":37,"strokewidth":2}},"width":1024,"height":40,"resume":false,"useHandCursor":true,"id":"5maLWjFgzzH_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5maLWjFgzzH_IncorrectReview","id":"01","linkId":"5maLWjFgzzH_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":563,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":650}}}],"shapemaskId":"","xPos":0,"yPos":728,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":512,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1024,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":649}},"html5data":{"xPos":1,"yPos":1,"width":1021,"height":37,"strokewidth":2}},"width":1024,"height":40,"resume":false,"useHandCursor":true,"id":"5maLWjFgzzH_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');