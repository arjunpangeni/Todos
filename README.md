# Context Api
> useContext hook is used to access the value of a context directly within a functional component. Context in React is a way to pass data through the component tree without having to pass props manually at every level.It overcome the problem of `prop-driling`, where data is need to pass down through multiple level of components. 

> ## How to use useContext ?
> * Creating a context .
>   > At first we need to create a context object using CreateContext . ```export const TodoContext = createContext()```
>
> * Providing the context.
>   > Wrap the children component tree which need to excess to the context . `<TodoContex.provider value={}>{children}</TodoContext>`
>   > the value props is used to share the data from context to the children components within the context provider.
>  
>
> * Using `useContext` to consume the context.
>   > At any function component with in the context provider, `useContext` can be used to excess the values ,functions within context.
>   > 'const useTodo= useContext(TodoContext)'

   
>  [!WARNING]
> > ## Common mistakes.
> > 1. Missing Context Provider . `Ensure that the component where you use useContext is nested inside the Provider.`
> > 2. Not providing Default value.
> > >When creating the context using React.createContext(), provide a default value as an argument. This default value will be used when a component is outside the scope of a Provider.

> [!NOTE]
> > ## Best practice.
> > 1.Use Context for Global Data:
> > > Context is best suited for providing global data that many components in your application need. Avoid using it for every piece of state.

> > 2.Separate Context Creation:
> > > Consider creating a separate file for your context creation and exporting the context along with its provider. This helps in keeping your code modular and organized.
> > > 
> > 3.Memoize the Context Value:
> > > Use useMemo to memoize the creation of the context value within the provider. This ensures that the value is only recalculated when the dependencies change.
