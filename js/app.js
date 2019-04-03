// 1 tamagatchi year is 24hrs
class TamagatchiChar{
	constructor(name) {
		this.name = name;
		this.fullness = 10;
		this.rest = 10;
		this.fun = 10;
		this.age = 0;
	}
	getHungry() {
		if(game.time % 4 === 0){
			this.fullness--;
		}
	}
	feed() {
		if (this.fullness < 9) {
			this.fullness += 2;
		}else if (this.fullness >= 10) {
			this.fullness = 10;
		}else{
			this.fullness++
		}
	}
	getTired() {
		if (game.time % 10 === 0) {
			this.rest--;
		}
	}
	goRest() {
		this.rest = 10
	}

	getBored() {
		if(game.time % 3 === 0){
			this.fun--;
		}
	}
	play() {
		if (this.fun < 9) {
			this.fun += 2;
		}else if (this.fun >= 10) {
			this.fun = 10;
		} else {
			this.fun++;
		}
	}
	getOlder(){
		if(game.time % 20 === 0){
			this.age++;
		}
	}
};

//i understand that i should have flipped placement of the
// functions in the class to the game

const game = {
	time: 0,
	gameStarted: false,
	tama: undefined,
	hatch(name) {
		const character = new TamagatchiChar(name);
		this.tama = character;
	},
	grow(){
		if (game.tama.age == 2) {
			$('#tamagotchi > img').replaceWith('<img src="images/tamagotchi teen.gif">')
		}

	},
	die(){
		
	},
	startTime() { setInterval(() => {
			this.time++
			this.tama.getHungry()
			$('#fullness').text(`Fullness:
				${this.tama.fullness}`)
			this.tama.getTired()
			$('#rest').text(`Rest:
				${this.tama.rest}`)
			this.tama.getBored()
			$('#fun').text(`Fun:
				${this.tama.fun}`)
			this.tama.getOlder()
			$('#age').text(`Age:
				${this.tama.age}`)
			this.grow()
			this.die()
			console.log(this.tama)
		}, 1000)

	},

};


$('#form').on('submit', (e) => {
	e.preventDefault();
	game.hatch($('#input-name').val())
	$('#form').replaceWith(`<h2>${game.tama.name}<h2>`);
	$('#tamagotchi > img').replaceWith('<img src="images/tamagotchi baby.gif">');
	game.startTime();
});

$('#feed').on('click', () => {
	game.tama.feed()
});
$('#light').on('click', () => {
	game.tama.goRest()
});
$('#play').on('click', () => {
	game.tama.play()
});







