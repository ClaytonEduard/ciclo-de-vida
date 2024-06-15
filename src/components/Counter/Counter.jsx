import React from "react";

export class Counter extends React.Component {

    constructor() {
        super()
        this.state = { contador: 0 }
        console.log('Construrindo a classe counter')

    }
    UNSAFE_componentWillMount() {
        console.log("O nosso componente contador será montado!")
    }

    componentDidMount() {
        console.log('O componente foi montado! ');
        document.addEventListener('scroll', this.consoleScroll)
    }

    // sempre que tiver uma mudança de props ou estado
    shouldComponentUpdate() {
        // return true;
        if (this.state.contador === 2) return false;
        return true
    }

    UNSAFE_componentWillUpdate() {
        console.log('O componente será atualiazado! ');
    }

    // componente atualizou
    componentDidUpdate() {
        console.log('O componente Atualizou! ');
    }

    // componente vai desmontar
    componentWillUnmount() {
        console.log('O componente será desmonstado! ');
        document.removeEventListener('scroll', this.consoleScroll)
    }
    consoleScroll() {
        console.log('Rolando a pagina')
    }

    render() {
        console.log('Renderizando o nosso componente!')
        return (
            <div>
                <h1>{this.state.contador}</h1>
                <button onClick={() => this.setState({ contador: this.state.contador - 1 })}>Diminuir</button>
                <button onClick={() => this.setState({ contador: this.state.contador + 1 })}>Aumentar</button>
            </div>
        )
    }

}