import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react"; // 🧠 QR generator

const wallets = [
  {
    name: "Bitcoin",
    address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  },
  {
    name: "Ethereum",
    address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  },
  {
    name: "USDT (TRC20)",
    address: "TXYZ1234abcd5678efgh9012ijkl3456mnop7890qr",
  },
];

interface DonationModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  customAmount?: string;
  selectedAmount?: number;
  donationType?: string;
}
export default function DonationModal({
  showModal,
  setShowModal,
  customAmount,
  selectedAmount,
  donationType,
}: DonationModalProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const amount = customAmount || selectedAmount;

  const handleCopy = async (address: string, index: number) => {
    await navigator.clipboard.writeText(address);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-xl relative border border-pink-100">
        <h2 className="text-2xl font-bold text-[#b497bd] mb-3 text-center">
          Confirm Donation
        </h2>
        <p className="text-gray-600 mb-5 text-center">
          You're about to donate <strong>${amount}</strong> as a{" "}
          <strong>{donationType}</strong> donation.
        </p>

        <div className="space-y-4 mb-6">
          {wallets.map((wallet, i) => (
            <div
              key={wallet.name}
              className="p-4 rounded-lg bg-gradient-to-br from-pink-50 to-white border border-pink-100"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-[#b497bd]">{wallet.name}</h3>
              </div>

              <div className="flex items-center justify-between  gap-3">
                <div className="shrink-0">
                  <QRCodeCanvas
                    value={wallet.address}
                    size={80}
                    bgColor="transparent"
                    fgColor="#b497bd"
                    includeMargin={false}
                  />
                </div>
                <p className="text-xs break-all font-mono text-gray-600">
                  {wallet.address}
                </p>

                <div>
                  <button
                    onClick={() => handleCopy(wallet.address, i)}
                    className="p-1 rounded-md hover:bg-pink-100 text-pink-300 hover:text-pink-400 transition-colors"
                    title="Copy address"
                  >
                    {copiedIndex === i ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={() => setShowModal(false)}
            className="rounded-full px-5"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              console.log(`Donated $${amount} as ${donationType}`);
              setShowModal(false);
            }}
            className="bg-gradient-to-r from-pink-300 to-[#b497bd] text-white rounded-full px-5 shadow"
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}
