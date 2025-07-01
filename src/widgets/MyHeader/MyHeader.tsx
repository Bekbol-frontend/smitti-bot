import { Button, Flex, Layout, Typography } from "antd";
import styles from "./MyHeader.module.css";
import { useTelegram } from "../../hooks/useTelegram";

const { Header } = Layout;
const { Text } = Typography;

function MyHeader() {
  const { close, tg, onToggleButton } = useTelegram();

  return (
    <Header className={styles.header}>
      <Flex align="center" justify="space-between" flex={1} gap={10}>
        <Text
          style={{
            color: "#fff",
          }}
        >
          {tg.initDataUnsafe.user
            ? tg.initDataUnsafe.user.username
            : "Username"}
        </Text>
        <Flex gap={10}>
          <Button type="primary" onClick={onToggleButton}>
            Toggle Main Button
          </Button>
          <Button type="primary" onClick={close}>
            Close
          </Button>
        </Flex>
      </Flex>
    </Header>
  );
}

export default MyHeader;
