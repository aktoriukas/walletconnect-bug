import Image from "next/image"
import { Inter } from "next/font/google"
import Connects_wallet from "@/components/Connects_wallet"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main>
      <Connects_wallet />
    </main>
  )
}
