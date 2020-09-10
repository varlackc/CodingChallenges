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

function RectanglePerimeter(width, height)
{
    var perimeter = (2*width) + (2*height);
    return perimeter;
}

function TriangleArea(base, height)
{
    var area = (base*height)/2;
    return area;
}

function TrianglePerimeter(base, side1, side2){
    var perimeter = base + side1 + side2;
    return perimeter;
}

function CircleArea(radius)
{
    var area = (radius*radius*Math.PI);
    return area;
}

/**
 * List of usefull calculations
 * 
 * Area of a rectangle
 * 
 * perimeter of a rectangle
 * 
 * Area of a triangle
 * 
 * Perimeter of a triangle
 * 
 * Area of a circle
 * 
 * Perimeter of a circle
 * 
 * surface area of a box
 * 
 * volume of a box
 * 
 * surface area of a sphere, 
 * 
 * volume of a sphere
 * 
 * Surface area of a cylinder
 * 
 * volume of a cylinder
 * 
 * Intercepts of a linear equation
 * 
 * Auadratic formula, find vertex, quadratic regression
 * 
 * Exponential functions
 * 
 * Logarithmic functions
 * 
 * Exponential equations
 * 
 * Non linear modelx
 * 
 * syustems of linear equations
 * 
 */