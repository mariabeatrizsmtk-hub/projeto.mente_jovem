// Elementos
const mainScreen = document.getElementById('main-screen');
const chatScreen = document.getElementById('chat-screen');
const chatTitle = document.getElementById('chat-title');
const chatBody = document.getElementById('chat-body');
const chatForm = document.getElementById('chat-form');
const chatSuggestions = document.getElementById('chat-suggestions');
const allCloseButtons = document.querySelectorAll('.btn-close');

// Mostrar chat
function showChat(type) {
  mainScreen.style.display = 'none';
  chatScreen.style.display = 'flex';
  chatBody.innerHTML = '';
  chatTitle.textContent = type;
  addMessage("Mensagem inicial do chat: " + type, "response");
}

// Fechar chat
function closeChat() {
  mainScreen.style.display = 'flex';
  chatScreen.style.display = 'none';
}

// Adicionar mensagem
function addMessage(text, type) {
  const div = document.createElement('div');
  div.classList.add('message', type);
  div.textContent = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Sugestões clicáveis
chatSuggestions.addEventListener('click', e => {
  if (e.target.classList.contains('suggestion')) {
    addMessage(e.target.textContent, 'user');
  }
});

// Enviar mensagem
chatForm.addEventListener('submit', e => {
  e.preventDefault();
  const input = chatForm.querySelector('input');
  if (input.value.trim() !== '') {
    addMessage(input.value.trim(), 'user');
    input.value = '';
  }
});

// Botões iniciais
document.getElementById('btn-conversar').addEventListener('click', () => showChat('Conversar'));
document.getElementById('btn-desabafar').addEventListener('click', () => showChat('Desabafar'));
document.getElementById('btn-dicas').addEventListener('click', () => showChat('Dicas'));

// Fechar chat
allCloseButtons.forEach(btn => btn.addEventListener('click', closeChat));