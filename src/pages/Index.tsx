"use client";

import React from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl">
        <Card className="w-full border-none shadow-2xl bg-white/80 backdrop-blur-sm rounded-[2rem] overflow-hidden">
          <CardContent className="pt-12 pb-12 px-8 flex flex-col items-center text-center">
            <div className="mb-6 p-4 bg-indigo-100 rounded-full text-indigo-600 animate-bounce">
              <Sparkles size={48} />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-6">
              Olá <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">IA</span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-md">
              Seja muito bem-vindo ao futuro! Estamos felizes em ter você aqui para explorar novas possibilidades.
            </p>
            
            <div className="mt-10 flex gap-4">
              <div className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
              <div className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse delay-75" />
              <div className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse delay-150" />
            </div>
          </CardContent>
        </Card>
      </main>
      
      <footer className="w-full py-6">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;