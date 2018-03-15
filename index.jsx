//////////////// HOC EXAMPLE ////////////

const LoaderHOC = (WrappedComponent) => {
    return class LoaderHOC extends Component {
        render() {
            return (
                this.props.contacts.length === 0 ?
                <div>LOADING ...</div> :
                <WrappedComponent {...this.props} /> // here we need to pass props 
                                                 // which originally were destinated to this
                                                 // wrapped component
                                                 // but we slole them
            )
        }
    }
}


// now you can call it like connect in redux - LoaderHOC(Component)
// or with decorators like this 
@LoaderHOC
class Name extends React.Component {
    ....
}




/////////////////// Functions as Child Component /////////

class MyComponent extends React.Component { 
  render() {
    return (
      <div>
        {this.props.children('Scuba Steve')}
      </div>
    );
  }
}
MyComponent.propTypes = {
  children: React.PropTypes.func.isRequired,
};


<MyComponent>
  {(name) => (
    <div>{name}</div>
  )}
</MyComponent>


// Used for decoupling child from parents
