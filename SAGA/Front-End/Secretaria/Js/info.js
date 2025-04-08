// Função para formatar a data no padrão dd/mm/yyyy
function formatDate(dateString) {
    const date = new Date(dateString);
    if (isNaN(date)) return ''; // caso a data seja inválida, retorna vazio
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // Exemplo de matrícula. Em um cenário real, esse valor pode vir de um login ou de outra fonte.
    const matricula = 3; // Substitua pela matrícula real
  
    // URL do endpoint da API, considerando a rota com parâmetro
    const apiUrl = `http://localhost:8081/info/${matricula}`;
  
    fetch(apiUrl, {
      method: 'POST', // Método POST
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}) // Envia um body vazio, se o backend não precisar de outros dados
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        if (data && data.length > 0) {
          const user = data[0];
          document.getElementById('nome').value = user.nome || '';
          // Trata a data de nascimento, formatando-a para dd/mm/yyyy
          document.getElementById('nascimento').value = user.dt_nasc ? formatDate(user.dt_nasc) : '';
          document.getElementById('matricula').value = user.matricula || '';
          document.getElementById('email').value = user.email || '';
          document.getElementById('telefone').value = user.telefone || '';
  
          // Se houver outros campos para serem atualizados, faça-os aqui.
        } else {
          console.error('Usuário não encontrado');
        }
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
      });
  });
  