var musicBackground_Intro;

var SplashState = function() 
{
	this.prototype = BaseState;
}

SplashState.prototype.load = function() 
{
}

SplashState.prototype.unload = function() 
{
}

SplashState.prototype.update = function(dt) 
{
	if( keyboard.isKeyDown( keyboard.KEY_SPACE ) == true )
	{
		stateManager.switchState( new GameState() );
	}
}

SplashState.prototype.draw = function() 
{
    musicBackground_Intro = new Howl(
{
    urls: ["Night-Winds_Intro_Music.mp3"],
    loop: true,
    buffer: true,
    volume: 0.5,

});
    musicBackground_Intro.play();

	context.font="72px Verdana";	
	context.fillStyle = "#FF0";	
	var width =  context.measureText("SPLASH SCREEN").width;
	context.fillText("Start Game", SCREEN_WIDTH / 1.5 - width / 2, SCREEN_HEIGHT / 2);
	
	context.font="18px Verdana";	
	context.fillStyle = "#000";	
	width =  context.measureText("Press SPACE to Continue.").width;
	context.fillText("Press SPACE to Continue.", SCREEN_WIDTH/2 - width/2, 300);	
}