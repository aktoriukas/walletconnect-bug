import type { FC } from "react"
import { Web3Button } from "@web3modal/react"

interface Connects_walletProps {}

const Connects_wallet: FC<Connects_walletProps> = ({}) => {
  return (
    <>
      <Web3Button />
    </>
  )
}
export default Connects_wallet
