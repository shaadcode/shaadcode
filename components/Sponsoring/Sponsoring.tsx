import { Alert, Button, CopyButton, Group, Stack, Text } from '@mantine/core'
import { IconCash, IconHeartFilled, IconInfoCircle, IconNetwork } from '@tabler/icons-react'
import classes from './Sponsoring.module.css'

const data = [
  {
    cryptocurrency: 'USDT',
    network: 'Tron (TRC20)',
    walletAddress: 'TH3KLfcQhDqLovZhYdU7QF4jartR3gkMnW',
  },
  {
    cryptocurrency: 'BTC',
    network: 'Bitcoin',
    walletAddress: 'bc1q8a6tw5vxuhywrt70keqppv9x2fxxujs9up7yc6',
  },
] as Array<{
  network: 'Tron (TRC20)' | 'Bitcoin'
  cryptocurrency: 'USDT' | 'BTC'
  walletAddress: string
}>

function Sponsoring() {
  const wallets = data.map((walletData, index) => (
    <Stack className={classes['walletCardContainer']} key={index}>

      <Group grow wrap="nowrap" justify="center">
        <Group
          className={classes['currencyContainer']}
        >
          <IconCash color="var(--mantine-color-green-9)" size={18} />
          <Text fz="sm" fw={600}>
            {walletData.cryptocurrency}
          </Text>
        </Group>

        <Group
          className={classes['networkContainer']}
        >
          <IconNetwork color="var(--mantine-color-blue-9)" size={18} />
          <Text fz="sm" fw={600} ta="center">
            {walletData.network}
          </Text>
        </Group>
      </Group>
      <CopyButton value={walletData.walletAddress}>
        {
          ({ copied, copy }) => (
            <Button color={copied ? 'teal' : 'orange'} onClick={copy}>
              {copied ? 'Copied!' : 'Copy Wallet Address'}
            </Button>
          )
        }
      </CopyButton>
    </Stack>
  ))

  return (
    <Stack p="lg" gap="lg" h="90dvh" justify="center" align="center">
      <Stack justify="center" align="center">
        <Group gap="sm">
          <Text ta="center" fz="h3" fw={900}>
            Thank You
          </Text>
          <IconHeartFilled className={classes['heartIcon']} color="red" size={30} />
        </Group>
        <Text>
          Your support allows me to contribute more to the open source community.
        </Text>
        <Alert variant="light" color="yellow" icon={<IconInfoCircle />}>
          When depositing funds, make sure to verify the correctness of the wallet address and the network.
        </Alert>
      </Stack>
      <Group>
        {wallets}
      </Group>
    </Stack>
  )
}

export default Sponsoring
