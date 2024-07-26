import { getHttpEndpoint } from "@orbs-network/ton-access";
import { Address, TonClient, TupleBuilder, beginCell } from "ton";

export async function GetBalance(wallet: string): Promise<string> {
        try {
                const endpoint = await getHttpEndpoint({
                        network: 'testnet',
                });
                const client = new TonClient({ endpoint });
                let jw_address = (await client.runMethod(Address.parse("kQCZQSYGYeDiLrLObRDi2eAeZxYhWlSRR_aylFpRzUhBIr9d"), 'get_wallet_address', [
                        { type: 'slice', cell: beginCell().storeAddress(Address.parse(wallet)).endCell() },
                ])).stack.readAddress();
                let jw_info = (await client.runMethod(jw_address, 'get_wallet_data')).stack.readNumber();
                return jw_info.toString()
        } catch (e) {
                console.log(e)
        }
        return ""
}