"use strict";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const GAMEWIDTH = 500;
const GAMEHEIGHT = 500;

canvas.width = GAMEWIDTH;
canvas.height = GAMEHEIGHT;

const FPS = 30;

const _interval = setInterval(function() {
	ctx.clearRect(0, 0, GAMEWIDTH, GAMEHEIGHT);

	// animation code here
}, 1000 / FPS);