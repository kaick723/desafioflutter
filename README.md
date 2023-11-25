# desafioflutter

### Linguagem usada
- O desafio foi feito em javascript , comentado em inglês 
 por ser mais proximo da realidade de programação 

### Forma de Usar
- Basta abrir o arquivo que está dentro da pasta desafio em alguma IDE 
 de sua preferência e executar , no caso foi feito utilizando o Visual Studio Code

### Como foi feito

##### Foi criado uma função que recebe um número inteiro positivo como entrada e calcula a soma de todos os números inteiros positivos que são divisíveis por 3 ou 5 e que são menores que o número de entrada através de um for que checa se os numeros são divisiveis por 3 ou 5 .

function sumMultiplesOf3and5(number) {
    let sum = 0;
  
    for (let i = 1; i < number; i++) {
      // Check if the number is divisible by 3 or 5
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
  
    return sum;
  }


### Como foi testado


  #### esse trecho que está no final do codigo executa o teste 
```   
  const result = sumMultiplesOf3and5(10);//aqui com o numero 10
  console.log(result); 
  
  const result1 = sumMultiplesOf3and5(11);//aqui com o numero 11
  console.log(result1);
``` 
