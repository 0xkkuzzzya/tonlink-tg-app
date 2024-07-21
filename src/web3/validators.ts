export type ValInfo = {
        address: string
        logo: string,
        name: string,
        fee: number,
}
     
export type ValidatorInfo = {
        validator_manager_address_raw: string,
        validator_stake_amount: number,
        validator_delegation_amount: number,
        validator_link_info: {
            name: string,
            logo: string,
            description: string,
            fee: string,
            website: string
        },
        delegation_pool_list: Array<string>,
        srv_securing: number
}

export async function GetAllValidators(): Promise<Array<ValInfo>> {
        try {
                let arr: Array<ValInfo> = []
                let res = await (await fetch(`https://api.tonlink.network/api/api/v1/validators/all_validator`)).json()
                if (res.ok == "true") {
                        let validator_list = res.result.validator_list
                        validator_list.map((val: any) => {
                                arr.push({
                                        address: val.address,
                                        logo: val.logo,
                                        name: val.name,
                                        fee: val.fee,  
                                })
                        })
                        return arr
                } else {
                        return []
                }
        } catch (e) {
                console.error(e)
        }
        return []
}

export async function GetValidatorInfo(validator: string): Promise<ValidatorInfo> {
        try {
                let res = await (await fetch(`https://api.tonlink.network/api/api/v1/validators/validator?address=${validator}`)).json()
                if (res.ok == "true") { 
                        return {
                                validator_manager_address_raw: res.result.validator_manager_address_raw,
                                validator_stake_amount: res.result.validator_stake_amount,
                                validator_delegation_amount: res.result.validator_delegation_amount,
                                validator_link_info: {
                                    name: res.result.validator_link_info.name,
                                    logo: res.result.validator_link_info.logo,
                                    description: res.result.validator_link_info.description,
                                    fee: res.result.validator_link_info.fee,
                                    website: res.result.validator_link_info.website,
                                },
                                delegation_pool_list: res.result.delegation_pool_list,
                                srv_securing: res.result.srv_securing,
                        } 
                } else {
                        return {
                                validator_manager_address_raw: "",
                                validator_stake_amount: -1,
                                validator_delegation_amount: -1,
                                validator_link_info: {
                                    name: "",
                                    logo: "",
                                    description: "",
                                    fee: "",
                                    website: ""
                                },
                                delegation_pool_list: [],
                                srv_securing: -1,
                        }
                }
        } catch (e) {
                console.error(e)
        }
        return {
                validator_manager_address_raw: "",
                validator_stake_amount: -1,
                validator_delegation_amount: -1,
                validator_link_info: {
                    name: "",
                    logo: "",
                    description: "",
                    fee: "",
                    website: ""
                },
                delegation_pool_list: [],
                srv_securing: -1,
        }
}