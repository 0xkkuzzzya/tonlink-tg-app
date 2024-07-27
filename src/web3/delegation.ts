export async function GetAllDelegationAndReward(wallet: string): Promise<[string, string, string, boolean]> {
        try {
                let res = await (await fetch(`https://api.tonlink.network/api/api/v1/delegation/all_delegation?address=${wallet}`)).json()
                if (res.ok == "true") {
                        return [
                                res.result.all_delegation != "0" ? res.result.all_delegation : "", 
                                res.result.all_reward != "0" ? res.result.all_reward : "", 
                                res.result.balance != "0" ? res.result.balance : "",
                                true
                        ]
                } else {
                        return ["", "", "", true]
                }
        } catch (e) {
                console.error(e)
        }
        return ["", "", "", false]
}

export async function GetDelegationByValidator(wallet: string, validator: string): Promise<[number, number, string]> {
        try {
                let res = await (await fetch(`https://api.tonlink.network/api/api/v1/delegation/delegation_by_validator?address=${wallet}&val_address=${validator}`)).json()
                console.log(`https://api.tonlink.network/api/api/v1/delegation/delegation_by_validator?address=${wallet}&val_address=${validator}`)
                if (res.ok == "true") {
                        return [
                                (res.result.delegation_amount), 
                                (res.result.rewards_amount), 
                                (res.result.delegation_manager_address)
                        ]
                } else {
                        return [0, 0, ""]
                }
        } catch (e) {
                console.error(e)
        }
        return [0, 0, ""]
}