/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-contract-base'
import { MulticallRequest } from '@reflexer-finance/geb-contract-base'
import { TransactionRequest } from '@reflexer-finance/geb-contract-base'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class UniswapLiquidityManagerLike extends BaseContractAPI {
    getLiquidityFromToken0(uinteger: BigNumberish): Promise<BigNumber>
    getLiquidityFromToken0(
        uinteger: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    getLiquidityFromToken0(
        uinteger: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"getLiquidityFromToken0","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [uinteger], multicall)
    }

    getLiquidityFromToken1(uinteger: BigNumberish): Promise<BigNumber>
    getLiquidityFromToken1(
        uinteger: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    getLiquidityFromToken1(
        uinteger: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"getLiquidityFromToken1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [uinteger], multicall)
    }

    getToken0FromLiquidity(uinteger: BigNumberish): Promise<BigNumber>
    getToken0FromLiquidity(
        uinteger: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    getToken0FromLiquidity(
        uinteger: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"getToken0FromLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [uinteger], multicall)
    }

    getToken1FromLiquidity(uinteger: BigNumberish): Promise<BigNumber>
    getToken1FromLiquidity(
        uinteger: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    getToken1FromLiquidity(
        uinteger: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"getToken1FromLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [uinteger], multicall)
    }

    removeLiquidity(
        liquidity: BigNumberish,
        amount0Min: BigNumberish,
        amount1Min: BigNumberish,
        to: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint128","name":"amount0Min","type":"uint128"},{"internalType":"uint128","name":"amount1Min","type":"uint128"},{"internalType":"address","name":"to","type":"address"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            liquidity,
            amount0Min,
            amount1Min,
            to,
        ])
    }
}
