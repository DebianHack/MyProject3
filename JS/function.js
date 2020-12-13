

 



function random(max)
{
	 var rand = 1 + Math.random() * (max + 1);
	 
	 rand = Math.floor(rand);
	 return rand;
}

/*------------------------
Функции для создания игры
------------------------*/
/*<div id = "start-block">

			<button id = "start-knopka" 
			>Начать</button> 
		</div>*/
// Создание блока старта
function sozdanieStartBlock()
{
	// создаем блок div <div id = "start-block">
	startBlock = document.createElement("div");
	startBlock.id = "start-block";
	/* создаем кнопку <button id = "start-knopka" 
			>Начать</button>*/
	startknopka = document.createElement("button");
	startknopka.id = "start-knopka";
	startknopka.innerText = "Начать";
	// добавляем кнопку в стартовый блок
	startBlock.appendChild(startknopka);
	// добавляем стартовый блок в игровое поле
	igraPole.appendChild(startBlock);
}


// <div id = "stars">
// 			0
// 		</div>
// Создание блока очков
function sozdanieStarsBlock()
{
	// создаем блок очков <div id = "stars">
	stars = document.createElement("div");
	stars.id = "stars";
	stars.innerText = 0;
	// добавляем блок очков в игровое поле
	igraPole.appendChild(stars);

}

// <div id = "lifes">
	// 		<span></span>
	// 		<span></span>
	// 		<span></span>
	// 	</div>
// Создание блока жизней
function sozdanieLifesBlock()
{
	// создаем блок див <div id = "lifes">
		 lifes = document.createElement("div");
	    lifes.id = "lifes";
	// переменнная в которой храним текущее количество отображенных жизней
	    var tekucheeColichestvo = 0;
	// пока текущее количество жизней на игровом поле меньше чем мы хотим видеть
  	  	while (tekucheeColichestvo < colichestvoLifes )
  	{
  		// создаем тег span
  		var span = document.createElement("span");
  		// помещаем span в блок жизни
 		lifes.appendChild(span);
 		// lifes.style.display = "block";
 		// увеличиваем количество текущих отображенных жизней на 1
  		tekucheeColichestvo = tekucheeColichestvo + 1;

  	}
	// добавляем блок жизней на игровом поле
  	igraLifes.appendChild(lifes);
}

// <h2>Время : <span id ="timer">40</span></h2>
// функция для создания блока таймера
function sozdanieTimerBlock()
{
	// Создаем заголовок h2 с текстом "Время: "
	var h2 = document.createElement("h2");
		h2.innerText = "Время : ";
    //в коробку timerBlock добавляем тег span
	timerBlock = document.createElement("span");
	// прописываем span id="timer" и текст 40
		timerBlock.id = "timer";
		timerBlock.innerText = "20";
	// добавляем в заголовок h2 тег span
	h2.appendChild(timerBlock);
	// добавляем в информационны блок заголовок с таймером
	infoBlock.appendChild(h2);
}


// <div id = "ball"></div>
// функция для создания шарика
function sozdanieBall() {
	// создаем блок div
	var ball = document.createElement("div");
	
		
		
	ball.onmousemove = function() {  

		if (ball.className != "ball ojidayet-udaleniya")
		{
			 
  		ball.style.opacity = "0";
		setTimeout(function(){
			// удаляем шарик
			ball.remove();
			var sushestvuetBall = document.querySelectorAll(".ball");
 			if (sushestvuetBall.length == 2)
 			{
 					// текущее количество шариков
 					var tekucheeColichestvoBall = 0;
 					// сколько шариков я хочу сделать
	 				var colichestvoBall = random(5);
	 			 	
	 			 	
	 			 while ( tekucheeColichestvoBall <= colichestvoBall)
	 			 {
					// создаем шарик
	 			 	sozdanieBall();
	 			 	tekucheeColichestvoBall = tekucheeColichestvoBall + 1;
					
	 			 };
 			};
 			// увеличиваем счеи игры
 			i = i + 1;
 			// меняем текст счета игры, текст будет из переменной i
  			stars.innerText = i;
 		}, 200) // конец таймера
 	}
  		ball.className = "ball ojidayet-udaleniya";
 		
  	
}// конец события onmousemove

		
	// сторона вылета шарика 
	var napravnenie = random(2); // 1 - left, 2 - right

	if (napravnenie == 1)
	{
		ball.className = "ball left";
	}
	else
	{
		ball.className = "ball right";
	}
	ball.style.display = "block";

	// вылет мячика из координат
		setTimeout(function()
	{
		ball.style.top = random(350) + "px";
		ball.style.left = random(550) + "px";
 	} ,200);

	// падение шарика 
	setTimeout(function()
	{
		// стиль сss с задержкой
		ball.style.transition = "all 0s"
		// таймер, который каждые 10 мсек опускает шарика вниз
		var timerBall = setInterval(function()
		{
			// шарик вниз
			ball.style.top = ball.offsetTop + 1 + "px";
			// шарика вышел за пределы поля
			if (ball.offsetTop > 700)
			{ 
				// удалили шарик, если он за игровым полем
				ball.remove();
				// создаем шарик
				sozdanieBall();
				// упал шарик, - 1 жизнь
				colichestvoLifes = colichestvoLifes - 1;
				// окончиваем игру, если ноль жизней
				if (colichestvoLifes == 0)
				{
					GameOver();
				}
				// удаляем блок жизней
				udalenieLifesBlock();
				// создаем блок жизней
				sozdanieLifesBlock();
				// останавливаем таймер
				clearInterval(timerBall);
			}
		},10)

	},1000)
	

	if (status != "GameOver")
		{
			igraPole.appendChild(ball);

		}
}

	




// <div id ="koniec-igra"> 

// 		<h2>Игра окончена</h2>

// 		<h3>Вы набрали: 100 очков</h3>
// 	</div>

function sozdanieKoniecIgra()
{
	var div = document.createElement("div");
	div.id = "koniec-igra";

	var h2 = document.createElement("h2");
	h2.innerText = "Игра окончена";

	var h3 = document.createElement("h3");
	h3.innerText = " Вы набрали " + i + " очков ";

	div.appendChild(h2);

	div.appendChild(h3);

	igraPole.appendChild(div);
}



/*------------------------
Удаление элементов
------------------------*/

// Удалить стартовый блок
function udalenieStartBlock()
{
	// выбрать стартовый блок
	// var startBlock = document.querySelector("#start-block");
	// удалить стартовый блок
		startBlock.remove();
		 // startBlock.style.display = "none";
}
// Удалить блок жизней
function udalenieLifesBlock()
{
	lifes.remove();

}
// Удалить блок очков
function udalenieStarsBlock()
{
	stars.remove();
}
// Удалить таймер
function udalenieTimerBlock()
{
	timerBlock.remove();
}
// Очистить игровое поле
function ochistitIgraPole()
{
	igraPole.innerText = "";
}