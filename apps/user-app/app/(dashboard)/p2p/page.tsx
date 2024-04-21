// @ts-nocheck

import prisma from "@repo/db/client";
import { SendCard } from "../../../components/SendCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { P2PTransactions } from "../../../components/P2PTransactions";

async function getP2PTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.p2pTransfer.findMany({
        where: {
            fromUserId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        time: t.timestamp,
        amount: t.amount,
        recipient: t.toUserId
        
    }))
}


export default async function() {
    const transactions = await getP2PTransactions();

    return <div className="w-full">
        <div className="text-4xl text-white pt-8 font-bold mb-8">
            P2P Transfer
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4 pl-1">
            <SendCard />
            <P2PTransactions transactions={transactions} />
        </div>
        
        
    </div>
}