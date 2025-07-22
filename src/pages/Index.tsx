
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Wifi, Phone, Gift, AlertTriangle, Star, Clock, Users, Check } from 'lucide-react';

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
    { name: 'Jio', color: 'bg-gradient-to-r from-blue-600 to-blue-700', textColor: 'text-white' },
    { name: 'Airtel', color: 'bg-gradient-to-r from-red-500 to-red-600', textColor: 'text-white' },
    { name: 'Vi', color: 'bg-gradient-to-r from-purple-600 to-purple-700', textColor: 'text-white' },
    { name: 'BSNL', color: 'bg-gradient-to-r from-green-600 to-green-700', textColor: 'text-white' }
  ];

  const features = [
    { icon: Gift, text: 'Instant Activation' },
    { icon: Shield, text: '100% Secure' },
    { icon: Star, text: 'Premium Benefits' },
    { icon: Check, text: 'Verified Offer' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
      {/* Educational Warning Banner */}
      <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-3 px-4 z-50 text-sm font-semibold shadow-lg">
        <div className="flex items-center justify-center gap-2">
          <Shield className="w-4 h-4" />
          <span>EDUCATIONAL DEMO - SCAM AWARENESS SEMINAR</span>
        </div>
      </div>

      <div className="pt-16 max-w-lg mx-auto">
        {/* Main Container with Professional Design */}
        <div className="animate-fade-in">
          <Card className="shadow-2xl border-0 overflow-hidden bg-white/95 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white text-center p-8 relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-white/20 rounded-full p-3 mr-3">
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-white/20 rounded-full p-3">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold uppercase tracking-wide mb-2">
                  Premium Recharge
                </CardTitle>
                <CardTitle className="text-2xl font-bold uppercase tracking-wide text-yellow-300">
                  Exclusive Voucher
                </CardTitle>
                <p className="text-blue-100 font-medium mt-2">Limited Time Offer</p>
              </div>
            </CardHeader>

            <CardContent className="p-8 bg-gradient-to-b from-white to-gray-50">
              {/* Offer Section */}
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
                  <h2 className="text-3xl font-bold mb-3 animate-pulse">
                    Get 3-6 Months FREE! 🎉
                  </h2>
                </div>
                <p className="text-gray-700 text-base leading-relaxed max-w-md mx-auto">
                  Claim your exclusive recharge voucher from India's leading telecom providers. 
                  Limited slots available - Act now!
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-green-50 p-3 rounded-lg border border-green-200">
                    <feature.icon className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats Section */}
              <div className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-blue-600 mr-1" />
                      <span className="font-bold text-blue-800">2.5M+</span>
                    </div>
                    <p className="text-xs text-blue-600">Users</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="font-bold text-blue-800">4.9★</span>
                    </div>
                    <p className="text-xs text-blue-600">Rating</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Clock className="w-4 h-4 text-green-600 mr-1" />
                      <span className="font-bold text-blue-800">24H</span>
                    </div>
                    <p className="text-xs text-blue-600">Left</p>
                  </div>
                </div>
              </div>

              {/* Telecom Logos */}
              <div className="mb-6">
                <p className="text-center text-gray-600 text-sm font-medium mb-4">Supported Networks</p>
                <div className="grid grid-cols-2 gap-4">
                  {telecomLogos.map((logo, index) => (
                    <div
                      key={logo.name}
                      className={`${logo.color} ${logo.textColor} rounded-xl p-4 text-center font-bold text-sm shadow-lg transform hover:scale-105 transition-all duration-200`}
                    >
                      <div className="text-lg mb-1">{logo.name}</div>
                      <div className="text-xs opacity-90">✓ Verified</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Urgency Badge */}
              <div className="text-center mb-6">
                <Badge className="bg-red-100 text-red-800 border border-red-300 px-4 py-2 text-sm font-semibold animate-pulse">
                  ⏰ Only 47 Vouchers Left - Hurry Up!
                </Badge>
              </div>

              {/* Form */}
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-blue-600" />
                    Mobile Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    pattern="[0-9]{10}"
                    maxLength={10}
                    className="text-lg py-4 border-2 border-gray-200 focus:border-blue-500 rounded-xl bg-white shadow-sm transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-green-600" />
                    OTP Verification
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    pattern="[0-9]{6}"
                    maxLength={6}
                    className="text-xl py-4 border-2 border-gray-200 focus:border-green-500 rounded-xl text-center tracking-widest font-mono bg-white shadow-sm transition-all duration-200"
                  />
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    * OTP will be sent to your registered mobile number
                  </p>
                </div>

                {/* Claim Button */}
                <Button
                  onClick={handleClaimRecharge}
                  className="w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 hover:from-green-600 hover:via-blue-600 hover:to-purple-700 text-white font-bold py-5 px-8 text-lg rounded-xl transform hover:scale-105 transition-all duration-300 shadow-xl animate-pulse-glow"
                >
                  <Gift className="w-5 h-5 mr-2" />
                  CLAIM FREE RECHARGE NOW!
                </Button>
              </div>

              {/* Professional Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-center items-center space-x-6 text-xs text-gray-600">
                  <div className="flex items-center">
                    <Shield className="w-3 h-3 mr-1 text-green-500" />
                    <span>SSL Secured</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-3 h-3 mr-1 text-blue-500" />
                    <span>2.5M+ Users</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1 text-orange-500" />
                    <span>Instant Process</span>
                  </div>
                </div>
              </div>

              {/* Educational Alert */}
              {showAlert && (
                <Alert className="mt-6 border-red-500 bg-red-50 animate-fade-in">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800 font-medium">
                    ⚠️ SCAM ALERT: This demonstrates how fraudulent sites look convincing!
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Educational Disclaimer - Enhanced */}
        <div className="mt-8 bg-gray-900 text-white p-6 rounded-xl shadow-xl">
          <div className="flex items-center justify-center mb-3">
            <AlertTriangle className="w-6 h-6 mr-2 text-yellow-400" />
            <span className="font-bold text-yellow-400 text-lg">EDUCATIONAL DEMONSTRATION</span>
          </div>
          <p className="text-sm leading-relaxed text-center text-gray-300">
            This is a demo page created for educational purposes to demonstrate digital scams. 
            <strong className="text-white"> Never enter real personal information on suspicious websites.</strong> 
            Real scam sites use similar professional designs to steal your data!
          </p>
        </div>

        {/* Scam Awareness Tips - Professional Layout */}
        <div className="mt-6 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center text-lg">
            <Shield className="w-5 h-5 mr-2 text-blue-600" />
            How to Identify Scam Websites:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-700">Too-good-to-be-true offers</span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-700">Urgency tactics & time pressure</span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-700">Requesting OTP/passwords</span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-700">Suspicious URLs & domains</span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-700">Poor grammar & spelling errors</span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-700">Fake testimonials & reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
