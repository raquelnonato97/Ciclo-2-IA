"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Bot, Cpu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#030712] text-white selection:bg-indigo-500/30">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md text-center"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <Sparkles size={14} className="text-indigo-400" />
            <span className="text-xs font-medium tracking-wider uppercase text-indigo-200/80">Nova Era da Inteligência</span>
          </motion.div>

          {/* Hero Title */}
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
            Olá <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400">
              IA Generativa
            </span>
          </h1>

          <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
            Explore o potencial ilimitado da colaboração entre humanos e máquinas em uma interface projetada para o futuro.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 w-full">
            <Button className="h-14 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white border-none shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-300 group">
              Começar Agora
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="h-14 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white transition-all">
              Ver Documentação
            </Button>
          </div>

          {/* Feature Grid (Mobile Friendly) */}
          <div className="grid grid-cols-3 gap-4 mt-16">
            {[
              { icon: Bot, label: "Smart" },
              { icon: Cpu, label: "Fast" },
              { icon: Zap, label: "Power" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/5"
              >
                <item.icon size={20} className="text-indigo-400" />
                <span className="text-[10px] font-medium uppercase tracking-widest text-slate-500">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      <footer className="relative z-10 w-full pb-8 flex flex-col items-center justify-center gap-1">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-slate-500 text-sm font-light tracking-wide"
        >
          Desenvolvido por <span className="text-indigo-400 font-medium">Raquel Nonato</span>
        </motion.div>
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;