'use strict';

    // Компьютер случайным образом выбирает ход
    // Сохраняем случайное число в переменной randomNumber
    function pickComputerMove() {
      const randomNumber = Math.random();
      
      let computerMove = '';
  
      // 1. Преаброзуем чмсло в движение задав диапозон от 0 до 1 , разделив его на 3 равные части
      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Камень';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Бумага';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Ножницы';
        }
        return computerMove;
    }
  
      // 5.2 получение данных из локального хранилища
      //JSON.parse(localStorage.getItem('score')); // получаем строку в формате JSON из локального хранилища и преобразуем в обьект
  
      function playGame(playerMove) {
      const computerMove =  pickComputerMove();
      
      // 2. Сравниваем свой ходы с ходом Компьютера, чтобы получить результат
      let result = '';
      
      if (playerMove === 'Ножницы') {
        if (computerMove === 'Камень') {
          result = 'Ты проиграл !!!';
        } else if (computerMove === 'Бумага') {
          result = 'Ты выйграл !!!';
        } else if (computerMove === 'Ножницы') {
          result = 'Ничья !!!';
        }
      
      } else if (playerMove === 'Бумага') {
        if (computerMove === 'Камень') {
          result = 'Ты выйграл !!!';
        } else if (computerMove === 'Бумага') {
          result = 'Ничья !!!';
        } else if (computerMove === 'Ножницы') {
          result = 'Ты проиграл !!!';
        }
      
      } else if (playerMove === 'Камень') {
        if (computerMove === 'Камень') {
          result = 'Ничья !!!';
        } else if (computerMove === 'Бумага') {
          result = 'Ты проиграл !!!';
        } else if (computerMove === 'Ножницы') {
          result = 'Ты выйграл !!!';
        }
      }
  
      // 4.2 Обновляет счет в игре
      if (result === 'Ты выйграл !!!') {
        score.wins += 1;
      } else if (result === 'Ты проиграл !!!') {
        score.losses += 1;
      } else if (result === 'Ничья !!!') {
        score.ties += 1;
      }
  
      // 5.1 содаём локалное хранилеще для результатов игры, сохраняем результаты
      localStorage.setItem('score', JSON.stringify(score)); // приобразовываем и сохраняем обьект score в строковом формате JSON 
  
      // 9.2 Добавляем обновление  счета на стронице
      updateScoreElement();
  
      // Меняем вывод результатов игры
      document.querySelector('.js-result').innerHTML = result;
      document.querySelector('.js-moves').innerHTML = `Ты: ${playerMove} - Компьютер: ${computerMove}`;
  
    }
  
     // 4.1 Обновляет счет в игре
     let score = JSON.parse(localStorage.getItem('score')); // 6 меняем значения переменной score 
  
     // 8 проверяем  являеться ли оценка нулевой
    if (score === null) {
      score = {
        wins: 0,
        losses: 0,
        ties: 0,
      };
    }
  
    // 9.1 Добавляем счет на строницу
     function updateScoreElement() {
          document.querySelector('.js-score').innerHTML = `Побед: ${score.wins}, Поражения: ${score.losses}, Ничья: ${score.ties}`;
      }
     
      updateScoreElement();