import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        tags: ["tag1","tag2","tag3"],
        tehguis: [],
    };

    styles = {
      fontSize: 30,
        fontWeight: "bold"
    };

//    constructor () {
//        super();
//        this.handleIncrement = this.handleIncrement.bind(this);
//    }

    handleIncrement = () => {
        console.log('Incremento Clicado', this);
    };

    renderTehguis() {
        if (this.state.tehguis.length === 0) return <p>Não existem "tehguis"! Haha!</p>;

        return <ul>{this.state.tehguis.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }
    render() {
       return (
            <div>
                <img src={this.state.imageUrl} alt=""/>
                <span style={{fontSize: 30 }} className={this.getBadgeClasses()}>{this.formatCount()}</span>

            <h1 style={this.styles} >Olá dumbo! </h1>
            <button onClick={this.handleIncrement} className={this.styles}>Incremento</button>
                <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                {this.state.tehguis.length === 0 && "Por favor crie uma nova 'tehgui!'"}
                {this.renderTehguis()}
            </div>

    );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0 ) ? "warning" : "primary"
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;