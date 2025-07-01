import { Layout, ConfigProvider } from "antd";
import MyHeader from "./widgets/MyHeader/MyHeader";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import FormPage from "./pages/FormPage/FormPage";
import { useTelegram } from "./hooks/useTelegram";
import { useEffect } from "react";

const { Content } = Layout;

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: "var(--tg-theme-bg-color)",
          colorText: "var(--tg-theme-text-color)",
        },
      }}
    >
      <Layout className="layout">
        <MyHeader />
        <Layout className="layout-content">
          <Content className="content">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/form" element={<FormPage />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
