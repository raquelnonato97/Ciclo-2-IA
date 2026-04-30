"use client";

import React from 'react';
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Bot, Image as ImageIcon, MessageSquare, Code, Search, Languages, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const aiTools = [
  { name: "ChatGPT", desc: "A IA mais popular para conversas e textos.", url: "https://chat.openai.com", icon: MessageSquare, category: "Texto" },
  { name: "Claude", desc: "IA focada em escrita criativa e segurança.", url: "https://claude.ai", icon: Sparkles, category: "Texto" },
  { name: "Gemini", desc: "A poderosa IA multimodal do Google.", url: "https://gemini.google.com", icon: Bot, category: "Multimodal" },
  { name: "Perplexity", desc: "Buscador inteligente com fontes reais.", url: "https://perplexity.ai", icon: Search, category: "Busca" },
  { name: "Leonardo.ai", desc: "Geração de imagens de alta qualidade.", url: "https://leonardo.ai", icon: ImageIcon, category: "Imagem" },
  { name: "Microsoft Copilot", desc: "Assistente integrado ao ecossistema Windows.", url: "https://copilot.microsoft.com", icon: Code, category: "Produtividade" },
  { name: "Hugging Face", desc: "A maior comunidade de modelos open-source.", url: "https://huggingface.co", icon: Bot, category: "Desenvolvimento" },
  { name: "Canva Magic", desc: "Design gráfico potencializado por IA.", url: "https://canva.com", icon: ImageIcon, category: "Design" },
  { name: "DeepL", desc: "O tradutor mais preciso do mundo.", url: "https://deepl.com", icon: Languages, category: "Tradução" },
  { name: "Poe", desc: "Acesso a múltiplos modelos em um só lugar.", url: "https://poe.com", icon: MessageSquare, category: "Chat" },
];

const AIList = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#030712] text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-8 text-slate-400 hover:text-white hover:bg-white/5"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Voltar
        </Button>

        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Ferramentas Gratuitas</h1>
          <p className="text-slate-400">Explore as melhores IAs disponíveis gratuitamente no mercado.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aiTools.map((tool, index) => (
            <motion.a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all duration-300 flex items-start justify-between"
            >
              <div className="flex gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <tool.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{tool.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{tool.desc}</p>
                  <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-widest text-indigo-400/70">{tool.category}</span>
                </div>
              </div>
              <ExternalLink size={18} className="text-slate-600 group-hover:text-indigo-400 transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIList;