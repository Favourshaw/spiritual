import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";

const wallets = [
  {
    name: "Bitcoin",
    key: "btc",
    address: "bc1qe4nx8gp42e8hemy485yvd80gxpqlgkkuc3sh5h",
  },
  {
    name: "Ethereum",
    key: "eth",
    address: "0xe636DF204B94bB2d24975e72da0BdD25F921cf8a",
  },
  {
    name: "USDT (TRC20)",
    key: "usdt",
    address: "TBxFapCx7TKFb5umhCrjfEwxQsmnjiNrHg",
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
  const [selectedCurrency, setSelectedCurrency] = useState("btc");

  const amount = customAmount || selectedAmount;

  const handleCopy = async (address: string, index: number) => {
    await navigator.clipboard.writeText(address);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleConfirm = () => {
    const wallet = wallets.find((w) => w.key === selectedCurrency);
    if (!wallet) return;

    let uri = "";

    if (wallet.key === "btc") {
      uri = `bitcoin:${wallet.address}?amount=${amount}`;
    } else if (wallet.key === "eth") {
      uri = `https://metamask.app.link/send/${wallet.address}`;
    } else if (wallet.key === "usdt") {
      uri = `https://tronscan.io/#/address/${wallet.address}`;
    }

    window.open(uri, "_blank");
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-xl relative border border-pink-100">
        <h2 className="text-2xl font-bold text-[#b497bd] mb-3 text-center">
          Confirm Donation
        </h2>
        <p className="text-gray-600 mb-5 text-center">
          You&apos;re about to donate <strong>${amount}</strong> as a{" "}
          <strong>{donationType}</strong> donation.
        </p>

        {/* Currency Selector */}
        <div className="flex justify-center gap-3 mb-6">
          {wallets.map((w) => (
            <button
              key={w.key}
              onClick={() => setSelectedCurrency(w.key)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                selectedCurrency === w.key
                  ? "bg-pink-300 text-white border-pink-400"
                  : "bg-white text-pink-400 border-pink-200 hover:bg-pink-50"
              }`}
            >
              {w.name}
            </button>
          ))}
        </div>

        {/* Wallet Cards */}
        <div className="space-y-4 mb-6">
          {wallets.map((wallet, i) => (
            <div
              key={wallet.name}
              className={`p-4 rounded-lg bg-gradient-to-br from-pink-50 to-white border ${
                selectedCurrency === wallet.key
                  ? "border-pink-300 ring-2 ring-pink-300/30"
                  : "border-pink-100"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-[#b497bd]">{wallet.name}</h3>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="shrink-0">
                  <QRCodeCanvas
                    value={wallet.address}
                    size={80}
                    bgColor="transparent"
                    fgColor="#b497bd"
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

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={() => setShowModal(false)}
            className="rounded-full px-5"
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            className="bg-gradient-to-r from-pink-300 to-[#b497bd] text-white rounded-full px-5 shadow"
          >
            Confirm & Open Wallet
          </Button>
        </div>
      </div>
    </div>
  );
}
