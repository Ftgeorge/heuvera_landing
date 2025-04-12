import { LucideLocate } from "lucide-react";

export default function Marketplace() {
    return (
        <>
            <div className="h-screen w-full px-8">
                <div>
                    <h1>Marketplace</h1>
                </div>
                <div className="w-full flex h-full">
                    <div className="w-4/12 h-40 bg-red-300"></div>
                    <div className="w-8/12 h-full bg-red-500 flex flex-col">
                        <div className="w-full gap-3 grid grid-cols-3 h-4/6">
                            <div className="w-full h-full bg-red-800">as</div>
                            <div className="w-full h-full bg-red-800">as</div>
                            <div className="w-full h-full bg-red-800">as</div>
                        </div>
                        <div className="w-full flex justify-between">
                            <div className="flex gap-1">
                                <LucideLocate />
                                <div>
                                    <h1>Gulshan Evenuem, Dhaka</h1>
                                    <h1>Bangledash</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}