
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Wifi, Phone, Gift, AlertTriangle } from 'lucide-react';

const Index = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleClaimRecharge = () => {
    setShowAlert(true);
    setTimeout(() => {
      alert("🚨 This is a demo page for a seminar on digital scams. No real recharge will be provided. 🚨\n\nNever share your OTP or personal details on suspicious websites!");
    }, 100);
  };

  const telecomLogos = [
    { name: 'Jio', color: 'bg-blue-600' },
    { name: 'Airtel', color: 'bg-red-500' },
    { name: 'Vi', color: 'bg-purple-600' },
    { name: 'BSNL', color: 'bg-green-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 p-4">
      {/* Educational Warning Banner */}
      <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-2 px-4 z-50 text-sm font-medium">
        <Shield className="inline-block w-4 h-4 mr-2" />
        EDUCATIONAL DEMO - SCAM AWARENESS SEMINAR
      </div>

      <div className="pt-12 max-w-md mx-auto">
        {/* Main Container with Animation */}
        <Card className="animate-fade-in shadow-2xl border-0 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center p-6">
            <div className="flex items-center justify-center mb-2">
              <Gift className="w-8 h-8 mr-2 animate-pulse" />
              <Wifi className="w-8 h-8" />
            </div>
            <CardTitle className="text-2xl font-bold uppercase tracking-wide">
              FREE RECHARGE VOUCHER
            </CardTitle>
            <p className="text-orange-100 font-medium">EXCLUSIVE OFFER</p>
          </CardHeader>

          <CardContent className="p-6 bg-white">
            {/* Offer Text with Animation */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 animate-pulse">
                Get 3 to 6 Months Free Recharge! 🎉
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Enter your mobile number and OTP to claim this exclusive offer from top Indian telecom providers.
              </p>
            </div>

            {/* Telecom Logos */}
            <div className="mb-6">
              <p className="text-center text-gray-500 text-xs mb-3">Supported Networks</p>
              <div className="grid grid-cols-2 gap-3">
                {telecomLogos.map((logo, index) => (
                  <div
                    key={logo.name}
                    className={`${logo.color} text-white rounded-lg p-3 text-center font-bold text-sm hover:scale-105 transition-transform`}
                  >
                    {logo.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Urgency Badge */}
            <div className="text-center mb-6">
              <Badge variant="destructive" className="animate-pulse">
                ⏰ Limited Time Offer - Only 24 Hours Left!
              </Badge>
            </div>

            {/* Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Mobile Number
                </label>
                <Input
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  pattern="[0-9]{10}"
                  maxLength={10}
                  className="text-lg py-3 border-2 border-orange-200 focus:border-orange-500 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  OTP (One Time Password)
                </label>
                <Input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  pattern="[0-9]{6}"
                  maxLength={6}
                  className="text-lg py-3 border-2 border-orange-200 focus:border-orange-500 rounded-lg text-center tracking-widest font-mono"
                />
                <p className="text-xs text-gray-500 mt-1">
                  * Enter the OTP sent to your mobile number
                </p>
              </div>

              {/* Claim Button */}
              <Button
                onClick={handleClaimRecharge}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                🎁 CLAIM FREE RECHARGE NOW!
              </Button>
            </div>

            {/* Trust Indicators (Fake) */}
            <div className="mt-6 text-center">
              <div className="flex justify-center space-x-4 text-xs text-gray-500">
                <span>✅ SSL Secured</span>
                <span>✅ 1M+ Users</span>
                <span>✅ Instant Process</span>
              </div>
            </div>

            {/* Educational Alert */}
            {showAlert && (
              <Alert className="mt-4 border-red-500 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800 font-medium">
                  ⚠️ SCAM ALERT: This demonstrates how fraudulent sites look convincing!
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Educational Disclaimer */}
        <div className="mt-6 bg-black bg-opacity-80 text-white p-4 rounded-lg text-center">
          <div className="flex items-center justify-center mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="font-bold text-yellow-400">EDUCATIONAL DEMO</span>
          </div>
          <p className="text-sm leading-relaxed">
            This is a demo page for educational purposes to demonstrate digital scams. 
            <strong> Do not enter real personal information.</strong> 
            Real scam sites use similar designs to steal your data!
          </p>
        </div>

        {/* Additional Educational Content */}
        <div className="mt-4 bg-white bg-opacity-90 p-4 rounded-lg">
          <h3 className="font-bold text-gray-800 mb-2 flex items-center">
            <Shield className="w-4 h-4 mr-2 text-blue-600" />
            How to Spot Scam Websites:
          </h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Too-good-to-be-true offers</li>
            <li>• Urgency tactics ("Limited time!")</li>
            <li>• Asking for OTP/passwords</li>
            <li>• Suspicious URLs</li>
            <li>• Poor grammar/spelling</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
