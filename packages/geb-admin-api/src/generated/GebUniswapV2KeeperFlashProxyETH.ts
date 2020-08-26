/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-contract-base'
import { MulticallRequest } from '@reflexer-finance/geb-contract-base'
import { TransactionRequest } from '@reflexer-finance/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'

export class GebUniswapV2KeeperFlashProxyEth extends BaseContractAPI {
    auctionHouse(): Promise<string>
    auctionHouse(multicall: true): MulticallRequest<string>
    auctionHouse(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"auctionHouse","outputs":[{"internalType":"contract AuctionHouseLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    bid(auctionId: BigNumberish, amount: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"bid","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [auctionId, amount])
    }

    caller(): Promise<string>
    caller(multicall: true): MulticallRequest<string>
    caller(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"caller","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    coin(): Promise<string>
    coin(multicall: true): MulticallRequest<string>
    coin(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"coin","outputs":[{"internalType":"contract CollateralLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    coinJoin(): Promise<string>
    coinJoin(multicall: true): MulticallRequest<string>
    coinJoin(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"coinJoin","outputs":[{"internalType":"contract CoinJoinLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    collateralType(): Promise<string>
    collateralType(multicall: true): MulticallRequest<string>
    collateralType(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"collateralType","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    ethJoin(): Promise<string>
    ethJoin(multicall: true): MulticallRequest<string>
    ethJoin(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"ethJoin","outputs":[{"internalType":"contract CoinJoinLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    liquidateAndSettleSAFE(safe: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"safe","type":"address"}],"name":"liquidateAndSettleSAFE","outputs":[{"internalType":"uint256","name":"auction","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [safe])
    }

    liquidationEngine(): Promise<string>
    liquidationEngine(multicall: true): MulticallRequest<string>
    liquidationEngine(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"liquidationEngine","outputs":[{"internalType":"contract LiquidationEngineLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    multipleBid(
        auctionIds: BigNumberish[],
        amounts: BigNumberish[]
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256[]","name":"auctionIds","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"multipleBid","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [auctionIds, amounts])
    }

    safeEngine(): Promise<string>
    safeEngine(multicall: true): MulticallRequest<string>
    safeEngine(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"safeEngine","outputs":[{"internalType":"contract SAFEEngineLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    settleAuction(auctionId: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"}],"name":"settleAuction","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [auctionId])
    }

    uniswapPair(): Promise<string>
    uniswapPair(multicall: true): MulticallRequest<string>
    uniswapPair(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"uniswapPair","outputs":[{"internalType":"contract IUniswapV2Pair","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    uniswapV2Call(
        _sender: string,
        _amount0: BigNumberish,
        _amount1: BigNumberish,
        _data: BytesLike
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"uint256","name":"_amount0","type":"uint256"},{"internalType":"uint256","name":"_amount1","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"uniswapV2Call","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            _sender,
            _amount0,
            _amount1,
            _data,
        ])
    }

    weth(): Promise<string>
    weth(multicall: true): MulticallRequest<string>
    weth(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"weth","outputs":[{"internalType":"contract CollateralLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }
}
