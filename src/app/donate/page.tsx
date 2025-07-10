"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Gift, Star, Users, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Nav from "@/components/nav";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"one-time" | "monthly">(
    "one-time"
  );

  const presetAmounts = [10, 25, 50, 100, 250];

  const impactAreas = [
    {
      icon: Heart,
      title: "Healing Sessions",
      description: "Provide free healing sessions for those in need",
      color: "from-pink-400 to-rose-500",
    },
    {
      icon: Users,
      title: "Community Workshops",
      description: "Support group meditation and wellness workshops",
      color: "from-rose-400 to-pink-500",
    },
    {
      icon: Gift,
      title: "Scholarship Program",
      description: "Help make spiritual guidance accessible to everyone",
      color: "from-pink-500 to-rose-400",
    },
    {
      icon: Sparkles,
      title: "Sacred Space Maintenance",
      description: "Keep our healing environment beautiful and serene",
      color: "from-rose-500 to-pink-400",
    },
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(0);
  };

  const handleDonate = () => {
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;
    console.log(`Donating $${amount} as ${donationType} donation`);
    // Handle donation processing here
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/30 to-rose-50/50 pt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-6">
              Support Our
              <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent font-medium">
                {" "}
                Mission
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your generous contribution helps us continue providing spiritual
              healing and guidance to our community. Every donation, no matter
              the size, makes a meaningful difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white border-pink-100 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-medium text-gray-800 text-center flex items-center justify-center space-x-2">
                    <Heart className="w-6 h-6 text-pink-500" />
                    <span>Make a Donation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  {/* Donation Type */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      Donation Type
                    </h3>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => setDonationType("one-time")}
                        className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all duration-200 ${
                          donationType === "one-time"
                            ? "border-pink-500 bg-pink-50 text-pink-700"
                            : "border-gray-200 text-gray-600 hover:border-pink-300"
                        }`}
                      >
                        One-time
                      </button>
                      <button
                        onClick={() => setDonationType("monthly")}
                        className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all duration-200 ${
                          donationType === "monthly"
                            ? "border-pink-500 bg-pink-50 text-pink-700"
                            : "border-gray-200 text-gray-600 hover:border-pink-300"
                        }`}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      Select Amount
                    </h3>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {presetAmounts.map((amount) => (
                        <button
                          key={amount}
                          onClick={() => handleAmountSelect(amount)}
                          className={`py-3 px-4 rounded-lg border-2 transition-all duration-200 ${
                            selectedAmount === amount
                              ? "border-pink-500 bg-pink-50 text-pink-700"
                              : "border-gray-200 text-gray-600 hover:border-pink-300"
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Or enter custom amount
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                          $
                        </span>
                        <input
                          type="number"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          placeholder="0.00"
                          className="w-full pl-8 pr-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleDonate}
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-4 rounded-lg transition-all duration-200 text-lg font-medium"
                  >
                    Donate ${customAmount || selectedAmount}{" "}
                    {donationType === "monthly" ? "Monthly" : "Now"}
                  </Button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Your donation is secure and processed through our trusted
                    payment partner.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Impact Areas */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-medium text-gray-800 mb-6">
                  Your Impact
                </h2>
                <p className="text-gray-600 mb-8">
                  See how your donation helps us create positive change in our
                  community and beyond.
                </p>
              </div>

              {impactAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="bg-white border-pink-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${area.color} rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <area.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-800 mb-2">
                            {area.title}
                          </h3>
                          <p className="text-gray-600">{area.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200 shadow-lg rounded-2xl">
                  <CardContent className="p-8 text-center">
                    <Star className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
                    <p className="text-gray-700 italic mb-4">
                      "Thanks to the generous donations from our community, I
                      was able to receive the spiritual guidance I desperately
                      needed during a difficult time. This sacred space truly
                      saved my life."
                    </p>
                    <p className="text-pink-600 font-medium">
                      - Sarah M., Community Member
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
