// 1 tamagatchi year is 24hrs
class TamagatchiChar{
	constructor(name){
		this.name = name
		this.hunger = 10
		this.sleep = 10
		this.fun = 10
		this.age = 0
	}
	getHungry(){
		this.hunger--
	}
	feed(){
		this.hunger += 2
	}
	getTired(){
		this.sleep--
	}
	goToSleep(){
		this.sleep = 10
	}

	getBored(){
		this.fun--
	}
	play(){
		this.fun += 2
	}
	
}
const tama = new TamagatchiChar("boop");
console.log(tama)
const game = {
	time: 0,
	gameStarted: false,
	tama: undefined,
	hatch(name){
		
	},
	grow(){

	},
	startTime(){

	}

}