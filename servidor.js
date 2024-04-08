const net = require('net');
const readline = require('readline');

const porta = 3001;

// Criar um servidor de socket
const server = net.createServer((socket) => {
  console.log('Cliente conectado');
  
  // Enviar uma mensagem para o cliente
  socket.write(`Requisição de ${socket.remoteAddress.toString('utf8')} na porta porta ${socket.remotePort}`)

  // Lidar com mensagens do cliente
  socket.on('data', (mensagem) => {
    console.log('Cliente:', mensagem.toString('utf8'));
  });

  // Lidar com a desconexão do cliente
  socket.on('close', () => {
    console.log('Conexão fechada');
  });

  // Leitura de entradas do servidor e envio para o cliente
  rl.on('line', (input) => {
    socket.write(`${input}\n`);
});
});

//Leitura de entrada
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



// Começar a escutar por novas conexões
server.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`)
});