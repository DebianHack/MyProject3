// Главный файл для вызова функции и действия игры

// Запускаем функцию при загрузке страницы
function start()
{
	// создаем стартовый блок
	sozdanieStartBlock();
	// создаем блок таймера
	sozdanieTimerBlock();
	// при клике на кнопку начать запускаем игру
	startknopka.onclick = nachat;

 	
}

// при начале игры выполняем эту функцию
function nachat()
{
	status = "nachat";
	// удалить стартовый блок
	udalenieStartBlock();
	// создаем блок очков
	sozdanieStarsBlock();
	// создаем блок жизней
	sozdanieLifesBlock();
	// создаем шарик
	sozdanieBall();
	// запускаем таймер
	timerIgra();
}

 start();

 function GameOver()
{
	status = "GameOver";
	// удаляем блок жизней
	udalenieLifesBlock();
	// удаляем блок очков
	udalenieStarsBlock();


	setTimeout(function()
		{
	// очищяем игровое поле
	ochistitIgraPole();
	// создаем блое конца игры
	sozdanieKoniecIgra();
		}
		,200)

	
}


function timerIgra()
{
	// Таймер
 	var chasy = setInterval(function(){
 		timerBlock.innerText = timerBlock.innerText - 1;
 		if (timerBlock.innerText == 0)
 		{
 			clearInterval (chasy);
 			GameOver();
 			timerBlock.innerText = 20;
 			var RemoveLifes = document.querySelectorAll("#lifes")
 			console.log(RemoveLifes.length);
 			while (u < RemoveLifes.length)
 			{
 				RemoveLifes[u].remove();
 				u = u + 1;
 			}
 			
 			startBlock.style.display = "block";
 			igraLifes.style.background = "#FFF";
  	var RemoveBall = document.querySelectorAll("#ball");
 		// console.log(RemoveBall.length);
 		while (j < RemoveBall.length)
 		{
 		RemoveBall[j].remove();
 		 j = j + 1;
 		}
 		
 			
 			console.log(i-1);
			// timerBlock.innerText = 40;
 		}
 	}, 1000) 
 	// Сделай обратный отсчет.
// Когда счет дошел до нуля заканчивать игру.
// По окончании игры выводить набранное количество очков в консоли.
 }

