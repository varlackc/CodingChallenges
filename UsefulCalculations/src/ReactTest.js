const ListItem = props => {
    return React.createElement('li', {className: 'list-Item', onClick: props.onDelete}, props.title);
}

class List extends React.Component {
    constructor(){
        super();
        this.state = {items: ['Squares', 'Rectangles', 'circles']};
    }

    //Add new elementes
    addItemHandler(){
        this.setState((prevState) => {
            return {items: prevState.items.concat("Triangle")}
        });
    }

    // delete item
    deleteItemHandler(text){
        this.setState(prevState => {
            return {items: prevState.items.filter(item => {
                return item !== text;
            }) };
        });
    }

    render() {
        return React.createElement('div', null, [
            React.createElement('ul', {key: 'geometry-list'}, this.state.items.map(item => {
                return React.createElement(ListItem, {title: item, key: item, onDelete: this.deleteItemHandler.bind(this, item)});
            })), 
            React.createElement('button', {key:'geometry-list', onClick: this.addItemHandler.bind(this)}, 'Add Geometry')
        ]);
    }
}

ReactDOM.render(React.createElement(List), document.getElementById("geometry-list"));

// Mathematical Calculations

// Area of a rectangle
function RectangleArea(width, height)
{
    var area = width * height;
    return area;
}

// Perimeter of rectangle
function RectanglePerimeter(width, height)
{
    var perimeter = (2*width) + (2*height);
    return perimeter;
}

// Triangle Area
function TriangleArea(base, height)
{
    var area = (base*height)/2;
    return area;
}

// Triangle Perimeter
function TrianglePerimeter(base, side1, side2){
    var perimeter = base + side1 + side2;
    return perimeter;
}