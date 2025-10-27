import React, { createContext, useContext, useEffect, useState } from "react";
import { API_URL } from "../api_url";
import Account from "../models/account";

type AccountContextProps = {
    accountList: Account[];
    isLoading: boolean;
    refetch: () => void;
}

const AccountContext = createContext<AccountContextProps | undefined>(undefined);

export function AccountProvider({ children }: { children: React.ReactNode }) {
    const [accountList, setAccountList] = useState<Account[]>([]);
    const [isLoading, setLoadingState] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(API_URL + "AccountManager/Index?handler=PullRecords");

            if (!response.ok) {
                throw new Error("Cannot load account records from web server");
            }

            const result = await response.json();
            console.log("Fetched records:", result);
            setLoadingState(true);
            setAccountList(result);
            setLoadingState(false);
        }
        catch (err) {
            console.error("Error: ", err);
        }
    };

    return (
        <AccountContext.Provider value={{ accountList, isLoading, refetch: fetchData }}>
            {children}
        </AccountContext.Provider>
    );
}

export function useAccountContext() {
    const context = useContext(AccountContext);

    if (!context) {
        throw new Error("Method useAccountContext must be in AccountProvider");
    }

    return context;
}