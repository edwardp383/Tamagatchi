// 1 tamagatchi year is 24hrs
class TamagatchiChar{
	constructor(name) {
		this.name = name;
		this.hunger = 10;
		this.sleep = 10;
		this.fun = 10;
		this.age = 0;
	}
	getHungry() {
		if(game.time % 4 === 0){
			this.hunger--;
		}
	}
	feed() {
		this.hunger += 2
	}
	getTired() {
		if (game.time % 10 === 0) {
			this.sleep--;
		}
	}
	goToSleep() {
		this.sleep = 10
	}

	getBored() {
		if(game.time % 3 === 0){
			this.fun--;
		}
	}
	play() {
		this.fun += 2
	}
	getOlder(){
		if(game.time % 20 === 0){
			this.age++;
		}
	}
};


const game = {
	time: 0,
	gameStarted: false,
	tama: undefined,
	hatch(name) {
		const character = new TamagatchiChar(name);
		this.tama = character;
	},
	grow(){

	},
	die(){
		
	},
	startTime() { setInterval(() => {
			this.time++
			this.tama.getHungry()
			this.tama.getTired()
			this.tama.getBored()
			this.tama.getOlder()
			console.log(this.tama)
		}, 1000)

	},

};

game.hatch("boop")
game.startTime()






