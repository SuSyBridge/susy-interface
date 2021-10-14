import _ from "lodash"
import { WalletProvider } from "../../store/n_wallet"

export type Chain = { id: string; chainId?: number; label: string; icon: string; walletProviders: WalletProvider[]; nodeURL?: string }

export type AvailableChainsDict = {
  Ethereum: Chain
  Heco: Chain
  BSC: Chain
  Fantom: Chain
  Avax: Chain
  Polygon: Chain
  Solana: Chain
}

export const SOLANA_CHAIN: string = "7"

export const AvailableChains: AvailableChainsDict = {
  Ethereum: {
    id: "1",
    chainId: 1,
    label: "ETH",
    icon: "/img/icons/ethereum.svg",
    walletProviders: [WalletProvider.Metamask],
  },
  BSC: {
    id: "3",
    chainId: 56,
    label: "BSC",
    icon: "https://cryptoai.trade/wp-content/uploads/2020/03/bnb-2.png",
    walletProviders: [WalletProvider.Metamask],
    nodeURL: "https://bsc-dataseed3.binance.org",
  },
  Heco: {
    id: "4",
    label: "HECO",
    icon: "/img/icons/heco.jpg",
    walletProviders: [WalletProvider.Metamask],
  },
  Fantom: {
    id: "5",
    label: "Fantom Opera",
    icon: "/img/icons/fantom.png",
    walletProviders: [WalletProvider.Metamask],
  },
  Avax: {
    id: "6",
    label: "Avax C-Chain",
    icon: "/img/icons/avax.png",
    walletProviders: [WalletProvider.Metamask],
  },
  Solana: {
    id: SOLANA_CHAIN,
    label: "Solana",
    icon: "/img/icons/solana.svg",
    walletProviders: [WalletProvider.Phantom],
  },
  Polygon: {
    id: "8",
    label: "Polygon",
    icon: "/img/icons/polygon.svg",
    walletProviders: [WalletProvider.Metamask],
  },
}

export const availableEVMChains = () => [AvailableChains.Ethereum, AvailableChains.Avax, AvailableChains.BSC, AvailableChains.Heco, AvailableChains.Fantom, AvailableChains.Polygon]

export const isEVMChain = (inputChain: Chain): boolean => {
  return (
    _.intersection(
      availableEVMChains().map((x) => x.id),
      [inputChain.id]
    ).length > 0
  )
}
