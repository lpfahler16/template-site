import Head from "next/head";
import Link from "next/link";
import {
  Button,
  TextInput,
  Card,
  Badge,
  Alert,
  Switch,
  Group,
  Paper,
  Title,
  Text,
} from "@mantine/core";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Logan Pfahler</title>
        <meta name="description" content="Learn about Logan Pfahler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-darkest-gray min-h-screen overflow-hidden flex flex-col gap-6 justify-center items-center p-8">
        <Group>
          <Button variant="filled">Filled Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="subtle">Subtle Button</Button>
        </Group>

        <TextInput
          label="Your name"
          placeholder="Type here..."
          styles={{
            label: { color: "#EDEDED" },
          }}
        />

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group justify="space-between" mb="sm">
            <Text fw={500} c="lightest-gray">
              Card Title
            </Text>
            <Badge>Accent</Badge>
          </Group>
          <Text size="sm" c="lightest-gray">
            This is a card with your custom background and text colors.
          </Text>
        </Card>

        <Alert title="Heads up!" radius="md" w={300}>
          This is an alert with your accent color.
        </Alert>

        <Switch label="Toggle something" />

        <Paper shadow="md" radius="lg" p="md" w={300}>
          <Text c="lightest-gray">Paper block with gray background</Text>
        </Paper>
      </main>
    </div>
  );
}
