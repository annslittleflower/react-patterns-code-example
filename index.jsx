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





///////////////////// REDUX MIDDLEWARE /////////////////
const myCustomMiddleware = store => next => action => {
  console.log('something');
  next(action); // we need to pass action further in middleware chain
}
// this is an example of curried function





////////////////////// REDUX SELECTORS //////////////
/* if you want to filter or find something in state
  declare that filter/find function near index reducer
  to have access to whole state.
  Then use it in mapStateToProps function in component:
  roomsThatBelongsToUser: selectRoomsForUser(state)

  Also it is very important to use reselect library,
  because it memoize stuff
 */


/////////////////// SERVER SIDE RENDERING //////////////

https://www.youtube.com/watch?v=tsEHfL-Ul1Y
https://www.youtube.com/watch?v=duhudXkHRf4



//TODO pick up some info from this beutiful site
https://reactpatterns.com/#children-types
