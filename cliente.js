const net = require('net');
const readline = require('readline');

// Criar um cliente de socket
const client = net.createConnection({
  host: 'localhost',
  port: 3001
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Lidar com mensagens do servidor
client.on('data', (mensagem) => {
  console.log('Servidor:', mensagem.toString('utf8'));
});

// Lidar com a desconexão do servidor
client.on('close', () => {
  console.log('Conexão fechada');
});

// Enviar uma mensagem para o servidor
rl.on('line', (input) => {
    client.write(input);
});
  