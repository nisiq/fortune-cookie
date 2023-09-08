import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: 'Ataque é veneno, e veneno só funciona se eu tomar.',
      img: require('./assets/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [ 'Se a educação não for provocativa, não constrói, não se cria, não se inventa, só se repete.',
                    'Só um imbecil gostaria de fazer o que não gosta.', 'Cuidado com gente que concorda contigo o tempo todo!',
                    'Quem sabe, divide. Quem não sabe, pergunta.', 'Tem gente que esquece que você não precisa diminuir o outro para crescer.',
                    'O ataque pessoal é a falência da razão.', 'O que todo estado fundamentalista teme é a educação das pessoas.',
                    'É você quem vai fazer o seu diploma, ninguém vai fazer por você.', 'É no conhecimento que existe uma chance de libertação. ',
                    'Ataque é veneno, e veneno só funciona se eu tomar.' 
                  ];

  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      img: require('./assets/biscoitoAberto.png'),
    });

    // Define um atraso de 1 segundo para exibir a nova frase
    setTimeout(() => {
      this.setState({
        textoFrase: ' "' + this.frases[numeroAleatorio] + '"',
      });
    }, 1000);

    // Define um segundo atraso de 2 segundos para voltar à imagem fechada e limpar a frase
    setTimeout(() => {
      this.setState({
        img: require('./assets/biscoito.png'),
        textoFrase: '',
      });
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img} />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#fff',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default App;
