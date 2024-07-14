import { NetworkUpgrades } from "@/types";
import { exec } from "child_process";
import { version } from "os";

export const networkUpgrades: NetworkUpgrades[] = [
    {
        upgrade: "Dencun",
        image:'/network_upgrades/dencun.jpeg',
        links: [
            {
                linkTitle: "EIP-1153",
                link: "https://eips.ethereum.org/EIPS/eip-1153"
            },
            {
                linkTitle: "EIP-4788",
                link: "https://eips.ethereum.org/EIPS/eip-4788"
            },
            {
                linkTitle: "EIP-4844",
                link: "https://eips.ethereum.org/EIPS/eip-4844"
            },
            {
                linkTitle: "EIP-5656",
                link: "https://eips.ethereum.org/EIPS/eip-5656"
            },
            {
                linkTitle: "EIP-6780",
                link: "https://eips.ethereum.org/EIPS/eip-6780"
            },
            {
                linkTitle: "EIP-7044",
                link: "https://eips.ethereum.org/EIPS/eip-7044"
            },
            {
                linkTitle: "EIP-7045",
                link: "https://eips.ethereum.org/EIPS/eip-7045"
            },
            {
                linkTitle: "EIP-7514",
                link: "https://eips.ethereum.org/EIPS/eip-7514"
            },
            {
                linkTitle: "EIP-7516",
                link: "https://eips.ethereum.org/EIPS/eip-7516"
            },
            {
                linkTitle: "Execution Specs",
                link: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/cancun.md"
            },
            {
                linkTitle: "Consensus Specs",
                link: "https://github.com/ethereum/consensus-specs/tree/dev/specs/deneb"
            }
        ],
        number: "269568",
        readMore: "https://medium.com/ethereum-cat-herders/dencun-deneb-cancun-upgrade-e84e2055768c",
        date: " 03/13/2024"
    },
    {
        upgrade: "Shapella",
        image:'/network_upgrades/shapella.jpg',
        links: [
            {
                linkTitle: "EIP-3651",
                link: "https://eips.ethereum.org/EIPS/eip-3651"
            },
            {
                linkTitle: "EIP-3855",
                link: "https://eips.ethereum.org/EIPS/eip-3855"
            },
            {
                linkTitle: "EIP-3860",
                link: "https://eips.ethereum.org/EIPS/eip-3860"
            },
            {
                linkTitle: "EIP-4895",
                link: "https://eips.ethereum.org/EIPS/eip-4895"
            },
            {
                linkTitle: "EIP-6049",
                link: "https://eips.ethereum.org/EIPS/eip-6049"
            },
            {
                linkTitle: "Execution Specs",
                link: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/shanghai.md"
            },
            {
                linkTitle: "Consensus Specs",
                link: "https://github.com/ethereum/consensus-specs/tree/dev/specs/capella"
            }
        ],
        number: "194048",
        readMore: "https://medium.com/ethereum-cat-herders/welcome-to-the-ethereum-shapella-upgrade-3c6f90d5fcf",
        date: " 12/04/2023"
    },
    {
        upgrade: "The Merge",
        image:'/network_upgrades/themerge.jpeg',
        links: [
            {
                linkTitle: "EIP-4399",
                link: "https://eips.ethereum.org/EIPS/eip-4399"
            },
            {
                linkTitle: "EIP-3675",
                link: "https://eips.ethereum.org/EIPS/eip-3675"
            },
            {
                linkTitle: "Execution Specs",
                link: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/paris.md"
            },
            {
                linkTitle: "Consensus Specs",
                link: "https://github.com/ethereum/consensus-specs/tree/dev/specs/bellatrix"
            }
        ],
        number: "50000000000000000",
        readMore: "https://blog.ethereum.org/2022/08/24/mainnet-merge-announcement",
        date: " 15/09/2022"
    },
    {
        upgrade: "Gray Glacier",
        image:'/network_upgrades/grayglacier.jpg',
        links: [
            {
                linkTitle: "EIP-5133",
                link: "https://eips.ethereum.org/EIPS/eip-5133"
            },
            {
                linkTitle: "Specification",
                link: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/gray-glacier.md"
            }
        ],
        number: "15050000",
        readMore: "https://blog.ethereum.org/2022/06/16/gray-glacier-announcement/",
        date: "29/06/2022"
    },
    {
        upgrade: "Altair Upgrade",
        image: '/network_upgrades/altair.jpg',
        links: [
            {
                linkTitle: "Specification",
                link: "https://github.com/ethereum/consensus-specs/tree/dev/specs/altair"
            }
        ],
        number: "74240",
        readMore: "https://blog.ethereum.org/2021/10/05/altair-announcement/",
        date: "21/10/2021"
    },
    {
        upgrade: "Arrow Glacier",
        image: '/network_upgrades/arrowglacier.jpg',
        links: [
            {
                linkTitle: "EIP-4345",
                link: "https://eips.ethereum.org/EIPS/eip-4345"
            },
            {
                linkTitle: "Specification",
                link: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/arrow-glacier.md"
            }
        ],
        number: "13773000",
        readMore: "https://medium.com/ethereum-cat-herders/ethereum-arrow-glacier-upgrade-e8d20fa4c002",
        date: "10/11/2021 "
    },
    {
        upgrade: "London",
        image: '/network_upgrades/london.jpg',
        links: [
            {
                linkTitle: "EIP-1559",
                link: "https://eips.ethereum.org/EIPS/eip-1559"
            },
            {
                linkTitle: "EIP-3198",
                link: "https://eips.ethereum.org/EIPS/eip-3198"
            },
            {
                linkTitle: "EIP-3529",
                link: "https://eips.ethereum.org/EIPS/eip-3529"
            },
            {
                linkTitle: "EIP-3541",
                link: "https://eips.ethereum.org/EIPS/eip-3541"
            },
            {
                linkTitle: "EIP-3554",
                link: "https://eips.ethereum.org/EIPS/eip-3554"
            },
            {
                linkTitle: "Specification",
                link: "https://github.com/ethereum/eth1.0-specs/blob/master/network-upgrades/mainnet-upgrades/london.md"
            }
        ],
        number: "12965000",
        readMore: "https://medium.com/ethereum-cat-herders/london-upgrade-overview-8eccb0041b41",
        date: " 05/08/2021 "
    },
    {
        upgrade: "Berlin",
        image: '/network_upgrades/berlin.png',
        links: [
            {
                linkTitle: "EIP-2565",
                link: "https://eips.ethereum.org/EIPS/eip-2565"
            },
            {
                linkTitle: "EIP-2929",
                link: "https://eips.ethereum.org/EIPS/eip-2929"
            },
            {
                linkTitle: "EIP-2718",
                link: "https://eips.ethereum.org/EIPS/eip-2718"
            },
            {
                linkTitle: "EIP-2930",
                link: "https://eips.ethereum.org/EIPS/eip-2930"
            },
            {
                linkTitle: "HFM-2070",
                link: "https://eips.ethereum.org/EIPS/eip-2070"
            },
            {
                linkTitle: "Specification",
                link: "https://github.com/ethereum/eth1.0-specs/blob/master/network-upgrades/mainnet-upgrades/berlin.md"
            }
        ],
        number: "12244000",
        readMore: "https://medium.com/ethereum-cat-herders/the-berlin-upgrade-overview-2f7ad710eb80",
        date: " 04/15/2021"
    },
    {
        upgrade: "Muir Glacier",
        image: '/network_upgrades/muir.png',
        links: [
            {
                linkTitle: "EIP-2384",
                link: "https://eips.ethereum.org/EIPS/eip-2384"
            },
            {
                linkTitle: "HFM-2387",
                link: "https://eips.ethereum.org/EIPS/eip-2387"
            }
        ],
        number: "9200000",
        readMore: "https://medium.com/ethereum-cat-herders/ethereum-muir-glacier-upgrade-89b8cea5a210",
        date: " 01/02/2020"
    },
    {
        upgrade: "St. Petersburg",
        image: '/network_upgrades/saint.png',
        links: [
            {
                linkTitle: "EIP-145",
                link: "https://eips.ethereum.org/EIPS/eip-145"
            },
            {
                linkTitle: "EIP-1014",
                link: "https://eips.ethereum.org/EIPS/eip-1014"
            },
            {
                linkTitle: "EIP-1052",
                link: "https://eips.ethereum.org/EIPS/eip-1052"
            },
            {
                linkTitle: "EIP-1234",
                link: "https://eips.ethereum.org/EIPS/eip-1234"
            },
            {
                linkTitle: "HFM-1716",
                link: "https://github.com/ethereum/EIPs/pull/1716/"
            }
        ],
        number: "7280000",
        readMore: "https://blog.ethereum.org/2019/02/22/ethereum-constantinople-st-petersburg-upgrade-announcement/",
        date: " 02/28/2019"
    },
    {
        upgrade: "Spurious Dragon",
        image: '/network_upgrades/dragon.png',
        links: [
            {
                linkTitle: "EIP-155",
                link: "https://github.com/ethereum/EIPs/issues/155"
            },
            {
                linkTitle: "EIP-160",
                link: "https://github.com/ethereum/EIPs/issues/160"
            },
            {
                linkTitle: "EIP-161",
                link: "https://github.com/ethereum/EIPs/issues/161"
            },
            {
                linkTitle: "EIP-170",
                link: "https://github.com/ethereum/EIPs/issues/170"
            },
            {
                linkTitle: "HFM-607",
                link: "https://eips.ethereum.org/EIPS/eip-607"
            }
        ],
        number: "2675000",
        readMore: "https://blog.ethereum.org/2016/11/18/hard-fork-no-4-spurious-dragon/",
        date: " 11/22/2016"
    },
    {
        upgrade: "Tangerine Whistle",
        image: '/network_upgrades/tangerine.png',
        links: [
            {
                linkTitle: "EIP-150",
                link: "https://eips.ethereum.org/EIPS/eip-150"
            },
            {
                linkTitle: "HFM-608",
                link: "https://eips.ethereum.org/EIPS/eip-608"
            }
        ],
        number: "2463000",
        readMore: "https://blog.ethereum.org/2016/10/13/announcement-imminent-hard-fork-eip150-gas-cost-changes/",
        date: " 10/18/2016"
    },
    {
        upgrade: "Dao Fork",
        image: '/network_upgrades/dao.png',
        links: [
            {
                linkTitle: "HFM-779",
                link: "https://eips.ethereum.org/EIPS/eip-779"
            }
        ],
        number: "1920000",
        readMore: "https://blog.ethereum.org/2016/07/15/to-fork-or-not-to-fork/",
        date: " 07/20/2016"
    },
    {
        upgrade: "Dao Wars",
        image: '/network_upgrades/dao.png',
        links: [
            {
                linkTitle: "",
                link: "https://eips.ethereum.org/EIPS/eip-779"
            }
        ],
        number: "Aborted",
        readMore: "https://blog.ethereum.org/2016/06/24/dao-wars-youre-voice-soft-fork-dilemma/",
        date: " 06/24/2016"
    },
    {
        upgrade: "Homestead",
        image: '/network_upgrades/homestead.png',
        links: [
            {
                linkTitle: "EIP-2",
                link: "https://eips.ethereum.org/EIPS/eip-2"
            },
            {
                linkTitle: "EIP-7",
                link: "https://eips.ethereum.org/EIPS/eip-7"
            },
            {
                linkTitle: "EIP-8",
                link: "https://eips.ethereum.org/EIPS/eip-8"
            },
            {
                linkTitle: "HFM-606",
                link: "https://eips.ethereum.org/EIPS/eip-606"
            }
        ],
        number: "1150000",
        readMore: "https://blog.ethereum.org/2016/02/29/homestead-release/",
        date: " 03/14/2016"
    }
  ]


export const accordionData = [
    {
        upgradeName: "Dencun",
        links: [
            {
                link: "https://eips.ethereum.org/EIPS/eip-1153",
                linkTitle: "EIP-1153: Transient storage opcodes"
            },
            {
                link: "https://eips.ethereum.org/EIPS/eip-4788",
                linkTitle: "EIP-4788: Beacon block root in the EVM"
            },
            {
                link: "https://eips.ethereum.org/EIPS/eip-4844",
                linkTitle: "EIP-4844: Shard Blob Transactions"
            },
            {
                link: "https://eips.ethereum.org/EIPS/eip-5656",
                linkTitle: "EIP-5656: MCOPY - Memory copying instructions"
            },
            {
                link: "https://eips.ethereum.org/EIPS/eip-6780",
                linkTitle: "EIP-6780: SELFDESTRUCT only in same transaction"
            },
            {
                link: "https://eips.ethereum.org/EIPS/eip-7044",
                linkTitle: "EIP-7044: Perpetually Valid Signed Voluntary Exits"
            },
            {
                link: "https://eips.ethereum.org/EIPS/eip-7045",
                linkTitle: "EIP-7045: Increase Max Attestation Inclusion Slot"
            },
            {
                link: "https://eips.ethereum.org/EIPS/eip-7514",
                linkTitle: "EIP-7514: Add Max Epoch Churn Limit"
            },
            {
                link: "https://eips.ethereum.org/EIPS/eip-7516",
                linkTitle: "EIP-7516: BLOBBASEFEE opcode"
            },
            {
                link: "https://blog.ethereum.org/2024/02/27/dencun-mainnet-announcement",
                linkTitle: "Dencun Mainnet Announcement"
            },
        ]
    },
    {
        upgradeName: "Shapella",
        links: [
            {
                link: "https://eips.ethereum.org/EIPS/eip-3651",
                linkTitle: "EIP-3651: Warm COINBASE"
            },
            {
                link: "https://eips.ethereum.org/EIPS/eip-3855",
                linkTitle: "EIP-3855: PUSH0 instruction"
            },
            {
                link: "https://eips.ethereum.org/EIPS/eip-3860",
                linkTitle: "EIP-3860: Limit and meter initcode"
            },
            {
                link: "https://eips.ethereum.org/EIPS/eip-4895",
                linkTitle: "EIP-4895 : Beacon chain push withdrawals as operations"
            },
            {
                link: "https://eips.ethereum.org/EIPS/eip-6049",
                linkTitle: "EIP-6049: Deprecate SELFDESTRUCT"
            },
            {
                link: "https://blog.ethereum.org/2023/03/28/shapella-mainnet-announcement",
                linkTitle: "Shapella Mainnet Announcement"
            },
        ]
    },
    {
        upgradeName: "The Merge",
        links: [
            {
                link: "https://eips.ethereum.org/EIPS/eip-4399",
                linkTitle: "EIP-4399 : Supplant DIFFICULTY opcode with PREVRANDAO"
            },
            {
                link: "https://eips.ethereum.org/EIPS/eip-3675",
                linkTitle: "EIP-3675 : Upgrade consensus to Proof-of-Stake"
            },
            {
                link: "https://blog.ethereum.org/2022/08/24/mainnet-merge-announcement",
                linkTitle: "Mainnet Merge Announcement"
            },
        ]
    },
    {
        upgradeName: "Gray Glacier",
        links: [
            {
                link: "https://eips.ethereum.org/EIPS/eip-5133",
                linkTitle: "EIP-5133: Delaying Difficulty Bomb to mid-September 2022"
            },
            {
                link: "https://blog.ethereum.org/2022/06/16/gray-glacier-announcement/",
                linkTitle: "Gray Glacier Upgrade Announcement"
            },
        ]
    },
    {
        upgradeName: "Arrow Glacier",
        links: [
            {
                link: "https://eips.ethereum.org/EIPS/eip-4345",
                linkTitle: "EIP-4345: Difficulty Bomb Delay to June 2022"
            },
            {
                link: "https://medium.com/ethereum-cat-herders/ethereum-arrow-glacier-upgrade-e8d20fa4c002",
                linkTitle: "Ethereum Arrow Glacier Upgrade"
            },
            {
                link: "https://medium.com/ethereum-cat-herders/ethereum-arrow-glacier-upgrade-e8d20fa4c002",
                linkTitle: "Arrow Glacier Upgrade Announcement"
            }
        ]
    },
    {
        upgradeName: "Altair Upgrade",
        links: [
            {
                link: "https://blog.ethereum.org/2021/10/05/altair-announcement/",
                linkTitle: "Altair Mainnet Announcement"
            },
        ]
    }
]


export const Downloads = [
    {
        upgradeName: "Dencun",
        consensus: [
            {
                client: "Lighthouse",
                version: "v5.0.0",
                link: "https://github.com/sigp/lighthouse/releases/tag/v5.0.0",
                linkTitle: "Download"
            },
            {
                client: "Lodestar",
                version: "v1.17.0",
                link: "https://github.com/ChainSafe/lodestar/releases/tag/v1.17.0",
                linkTitle: "Download"
            },
            {
                client: "Nimbus",
                version: "v24.2.2",
                link: "https://github.com/status-im/nimbus-eth2/releases/tag/v24.2.2",
                linkTitle: "Release"
            },
            {
                client: "Prysm",
                version: "v5.0.2",
                link: "https://github.com/prysmaticlabs/prysm/releases/tag/v5.0.2",
                linkTitle: "Download"
            },
            {
                client: "Teku",
                version: "v24.2.0",
                link: "https://github.com/Consensys/teku/releases/tag/24.2.0",
                linkTitle: "Download"
            },
        ],
        execution: [
            {
                client: "Besu",
                version: "24.3.0",
                link: "https://github.com/hyperledger/besu/releases/tag/24.3.0",
                linkTitle: "Download"
            },
            {
                client: "Erigon",
                version: "v2.58.0",
                link: "https://github.com/ledgerwatch/erigon/releases/tag/v2.58.0",
                linkTitle: "Download"
            },
            {
                client: "go-ethereum (geth)",
                version: "v1.13.12",
                link: "https://github.com/ethereum/go-ethereum/releases/tag/v1.13.12",
                linkTitle: "Download"
            },
            {
                client: "Nethermind",
                version: "v1.25.4",
                link: "https://github.com/NethermindEth/nethermind/releases/tag/1.25.4",
                linkTitle: "Download"
            }
        ]
    },
    {
        upgradeName: "Shapella",
        consensus: [
            {
                client: "Lighthouse",
                version: "v4.0.1",
                link: "https://github.com/sigp/lighthouse/releases/tag/v4.0.1",
                linkTitle: "Download"
            },
            {
                client: "Lodestar",
                version: "v1.7.0",
                link: "https://github.com/ChainSafe/lodestar/releases/tag/v1.7.0",
                linkTitle: "Download"
            },
            {
                client: "Nimbus",
                version: "v23.3.2",
                link: "https://github.com/status-im/nimbus-eth2/releases/tag/v23.3.2",
                linkTitle: "Release"
            },
            {
                client: "Prysm",
                version: "v4.0.0",
                link: "https://github.com/prysmaticlabs/prysm/releases/tag/v4.0.0",
                linkTitle: "Download"
            },
            {
                client: "Teku",
                version: "v23.3.1",
                link: "https://github.com/ConsenSys/teku/releases/tag/23.3.1",
                linkTitle: "Download"
            },
        ],
        execution: [
            {
                client: "Besu",
                version: "v23.1.2",
                link: "https://github.com/hyperledger/besu/releases/tag/23.1.2",
                linkTitle: "Download"
            },
            {
                client: "Erigon",
                version: "v2.42.0",
                link: "https://github.com/ledgerwatch/erigon/releases/tag/v2.42.0",
                linkTitle: "Download"
            },
            {
                client: "go-ethereum (geth)",
                version: "v1.11.5",
                link: "https://github.com/ethereum/go-ethereum/releases/tag/v1.11.5",
                linkTitle: "Download"
            },
            {
                client: "Nethermind",
                version: "v1.17.3",
                link: "https://github.com/NethermindEth/nethermind/releases/tag/1.17.3",
                linkTitle: "Download"
            }
        ]
    },
    {
        upgradeName: "The Merge",
        consensus: [
            {
                client: "Lighthouse",
                version: "v3.1.0",
                link: "https://github.com/sigp/lighthouse/releases/tag/v3.1.0",
                linkTitle: "Download"
            },
            {
                client: "Lodestar",
                version: "v1.0.0",
                link: "https://github.com/ChainSafe/lodestar/releases/tag/v1.0.0",
                linkTitle: "Download"
            },
            {
                client: "Nimbus",
                version: "v22.9.0",
                link: "https://github.com/status-im/nimbus-eth2/releases/tag/v22.9.0",
                linkTitle: "Release"
            },
            {
                client: "Prysm",
                version: "v3.1.1",
                link: "https://github.com/prysmaticlabs/prysm/releases/tag/v3.1.1",
                linkTitle: "Download"
            },
            {
                client: "Teku",
                version: "v22.9.0",
                link: "https://github.com/ConsenSys/teku/releases/tag/22.9.0",
                linkTitle: "Download"
            },
        ],
        execution: [
            {
                client: "Besu",
                version: "v22.7.2",
                link: "https://github.com/hyperledger/besu/releases/tag/22.7.2",
                linkTitle: "Download"
            },
            {
                client: "Erigon",
                version: "v2022.09.01 - alpha",
                link: "https://github.com/ledgerwatch/erigon/releases/tag/v2022.09.01",
                linkTitle: "Release"
            },
            {
                client: "go-ethereum (geth)",
                version: "v1.10.23",
                link: "https://github.com/ethereum/go-ethereum/releases/tag/v1.10.23",
                linkTitle: "Download"
            },
            {
                client: "Nethermind",
                version: "v1.14.1",
                link: "https://github.com/NethermindEth/nethermind/releases/tag/1.14.1",
                linkTitle: "Download"
            }
        ]
    },
    {
        upgradeName: "Gray Glacier",
        clientSpecs: [
            {
                client: "go ethereum (geth)",
                version: "v1.10.19",
                link: "https://github.com/ethereum/go-ethereum/releases/tag/v1.10.19",
                linkTitle: "Download"
            },
            {
                client: "Nethermind",
                version: "v1.13.3",
                link: "https://github.com/NethermindEth/nethermind/releases/tag/1.13.3",
                linkTitle: "Download"
            },
            {
                client: "Erigon",
                version: "v2022.06.03-alpha",
                link: "https://github.com/ledgerwatch/erigon/releases/tag/v2022.06.03",
                linkTitle: "Release"
            },
            {
                client: "Besu",
                version: "v22.4.3",
                link: "https://github.com/hyperledger/besu/releases/tag/22.4.3",
                linkTitle: "Download"
            }
        ]
    },
    {
        upgradeName: "Arrow Glacier",
        clientSpecs: [
            {
                client: "go ethereum (geth)",
                version: "v1.10.12",
                link: "https://github.com/ethereum/go-ethereum/releases/tag/v1.10.12",
                linkTitle: "Download"
            },
            {
                client: "Nethermind",
                version: "v1.11.7",
                link: "https://github.com/NethermindEth/nethermind/releases/tag/1.11.7",
                linkTitle: "Download"
            },
            {
                client: "Erigon",
                version: "v2021.11.01 - alpha",
                link: "https://github.com/ledgerwatch/erigon/releases/tag/v2021.11.01",
                linkTitle: "Release"
            },
            {
                client: "Prysm",
                version: "v2.0.0",
                link: "https://github.com/prysmaticlabs/prysm/releases/tag/v2.0.0",
                linkTitle: "Download"
            },
            {
                client: "Besu",
                version: "v21.10.0",
                link: "https://github.com/hyperledger/besu/releases/tag/21.10.0",
                linkTitle: "Download"
            },
            {
                client: "EthereumJS VM",
                version: "v5.6.0",
                link: "https://github.com/ethereumjs/ethereumjs-monorepo/releases/tag/%40ethereumjs%2Fvm%405.6.0",
                linkTitle: "Download"
            }
        ] 
    }
]
  