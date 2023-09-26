import React, { Component } from 'react';

class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      perfil: '',
      livros:[
{titulo: 'Livro 1', lido: false},
{ titulo: 'Livro 2', lido: true },
{ titulo: 'Livro 3', lido: false }

      ]
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleSenhaChange = (event) => {
    this.setState({ senha: event.target.value });
  }

  handleLogin = () => {
    const { email, senha } = this.state;

    // Verificar as credenciais
    if (email === 'user@email.com' && senha === '12345678') {
      this.setState({ perfil: 'Usuário' });
    } else if (email === 'admin@email.com' && senha === '12345678') {
      this.setState({ perfil: 'Admin' });
    } else {
      alert('Credenciais inválidas. Por favor, tente novamente.');
    }
  }
  handleMarcarComoLido = (index) => {
    const livrosAtualizados = [...this.state.livros];
    livrosAtualizados[index].lido = true;
    this.setState({ livros: livrosAtualizados });
  }

  handleMarcarComoNaoLido = (index) => {
    const livrosAtualizados = [...this.state.livros];
    livrosAtualizados[index].lido = false;
    this.setState({ livros: livrosAtualizados });
  }

  render() {
    const { perfil, livros } = this.state;

    return (
      <div>
        {perfil ? (
          <div>
            <h2>Perfil: {perfil}</h2>
            <button onClick={() => this.setState({ perfil: '' })}>Sair</button>
            <h3>Biblioteca</h3>
            <ul>
              {livros.map((livro, index) => (
                <li key={index}>
                  {livro.titulo} - {livro.lido ? 'Lido' : 'Não Lido'}
                  <button onClick={() => this.handleMarcarComoLido(index)}>Marcar como Lido</button>
                  <button onClick={() => this.handleMarcarComoNaoLido(index)}>Marcar como Não Lido</button>
                </li>
                 ))}
                 </ul>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Email"
              onChange={this.handleEmailChange}
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={this.handleSenhaChange}
            />
            <button onClick={this.handleLogin}>Login</button>
          </div>
        )}
      </div>
    );
  }
}

export default App1;
