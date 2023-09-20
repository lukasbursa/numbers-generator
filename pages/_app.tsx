import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/Components/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}
