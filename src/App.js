import "./App.css";
import { Route, Switch } from "react-router";
import { useState } from "react";

//components
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";

//data
import data from "./data";

//react-intl
import { IntlProvider } from "react-intl";

function App() {
  const [locale, setLocale] = useState("ara");

  const handleChange = (e) => {
    setLocale(e.target.value);
  };
  return (
    <div>
      <select onChange={handleChange} defaultValue={"ara"}>
        <option value="ara">العربية</option>
        <option value="en">english</option>
      </select>
      <IntlProvider locale={locale} messages={data[locale]}>
        <NavBar />
        <Switch>
          <Route path="/contactus">
            <ContactUs locale={locale} />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            <Home locale={locale} />
          </Route>
        </Switch>
      </IntlProvider>
    </div>
  );
}

export default App;
