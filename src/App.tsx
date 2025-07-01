import { Layout } from "antd";
import MyHeader from "./widgets/MyHeader/MyHeader";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import FormPage from "./pages/FormPage/FormPage";

const { Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <MyHeader />
      <Layout className="layout-content">
        <Content>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/form" element={<FormPage />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
