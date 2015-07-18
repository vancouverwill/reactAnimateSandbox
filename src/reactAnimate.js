var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var TodoList = React.createClass({
  getInitialState: function() {
    return {items: ['hello', 'world', 'click', 'me'],
            goLeft : "true"};
  },
  handleAdd: function() {
    var newItems =
      this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  },
  handleChangeDirection: function() {
    if (this.state.goLeft == true) {
      this.setState({goLeft: false})
    }
    else {
      this.setState({goLeft: true})
    }
  },
  handleRemove: function(i) {
    console.log("handleRemove " + i)
    var newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({items: newItems});
  },
  render: function() {
    var items = this.state.items.map(function(item, i) {
      return (
        <div key={item} onClick={this.handleRemove.bind(this, i)} className="items">
          {item}
        </div>
      );
    }.bind(this));

    if (this.state.goLeft) {
      var left = "left"
    }
    else {
      var left = "right"
    }

    var temp = React;
    var cx = React.addons.classSet;
    var classes = cx({
      'oppositeDirection': this.state.goLeft
    });
    
    return (
      <div className={classes} >
        Direction = {left} 
        <button onClick={this.handleChangeDirection}>Change Direction</button>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup transitionName="example">
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

React.render(
          <TodoList />,
        document.getElementById('container')
      );