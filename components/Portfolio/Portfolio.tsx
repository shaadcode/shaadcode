import { Button, Image, Stack, Text } from '@mantine/core'

function Portfolio() {
  return (
    <Stack px="md" justify="center" align="center" h="90dvh">
      <Image
        h={300}
        w={300}
        src="/shaadcode/mojtaba-profile.png"
      />

      <Stack justify="center" ta="center">
        <Text tt="capitalize" fz={50} fw={800}>
          👋 hi
        </Text>
        <Text tt="capitalize" fz={50} fw={800}>
          i`m seyed mojtaba shadab
        </Text>

        <Text fz={20}>
          Visit my main website to get to know me.
        </Text>

        <Button
          mx="auto"
          w="fit-content"
          tt="capitalize"
          variant="gradient"
          gradient={{ from: 'orange.4', to: 'orange.9', deg: 45 }}
          href="https://shaadcode.ir/"
          component="a"
        >
          website
        </Button>
      </Stack>

    </Stack>
  )
}

export default Portfolio
