import { Card } from "@repo/ui/card"

export const OnRampTransactions = ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        // TODO: Can the type of `status` be more specific?
        status: string,
        provider: string
    }[]
}) => {
    const reversedTransactions = [...transactions].reverse();
    if (!reversedTransactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="Recent Transactions">
        <div className="pt-2">
            {reversedTransactions.map(t => <div className="flex justify-between">
                <div>
                    <div className="text-sm text-[#8B8D8F]">
                        Received INR
                    </div>
                    <div className="text-slate-500 text-xs">
                        {t.time.toDateString()} at {t.time.toLocaleTimeString()}
                    </div>
                </div>
                <div className="flex flex-col justify-center text-[#8B8D8F]">
                    + Rs {t.amount / 100}
                </div>

            </div>)}
        </div>
    </Card>
}