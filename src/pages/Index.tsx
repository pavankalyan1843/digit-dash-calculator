
import React from 'react';
import Calculator from '@/components/Calculator/Calculator';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-100 to-purple-200 p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-purpleDark">Digit Dash Calculator</h1>
      <Calculator />
      <p className="mt-8 text-sm text-purple-700">Press the buttons to perform calculations</p>
    </div>
  );
};

export default Index;
