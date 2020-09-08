const ListItem = props => {
    return React.createElement('li', {className: 'listItem'}, props.title);
}

class List extends React.Component {
    constructor(){
        super();
        this.state = {items: ['Squares', 'Rectangles', 'circles']};
    }

    render() {
        return React.createElement('div', null, [
            React.createElement('ul', null, this.state.items.map(item => {
                return React.createElement(ListItem, {title: item});
            }))
        ]);
    }
}