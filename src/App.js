import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Contact from "./routes/contact/contact.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        {/* index 表示这个是默认的 子 route（也就是当其他的都不匹配的时候，会匹配这个） */}
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
        {/* "*" 仅仅只会在其他 route 不匹配的时候进行匹配 */}

        {/*
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        用来匹配 "/invoices/1998" 这种类型，并可读取 url 中的参数；
        The :invoiceId part of the path is a "URL param", meaning it can match any value as long as the pattern is the same；
        在 Invoice 组件中（src/routes/invoice.jsx），需要 hook 来使用 url参数，如下：

        import { useParams } from "react-router-dom";
import Contact from './routes/contact/contact.component';

        export default function Invoice() {
          let params = useParams();  // hook
          return <h2>Invoice: {params.invoiceId}</h2>;  // 注意这里在 params 上的 key 是和 在前面 path 中指定的动态部分相同
          // 注意 URL params 都是 string，如果需要 number 要 parseInt()
          // :invoiceId -> params.invoiceId
        }
         */}
      </Route>
    </Routes>
  );
};

export default App;
