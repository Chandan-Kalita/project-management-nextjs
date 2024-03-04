import { Provider } from "react-redux";
import { useStore } from "@/store";
import 'reflect-metadata';

const withRedux = (WrappedComponent: React.ComponentType<any>) => {
  const ComponentWithRedux = (props: any) => {
    const store = useStore((props as any).initialReduxState);

    return (
      <Provider store={store}>
        <WrappedComponent {...props} />
      </Provider>
    );
  };
  return ComponentWithRedux;
};

export default withRedux;