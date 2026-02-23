'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MessageCircle,
    X,
    Send,
    Bot,
    ArrowRight,
    Smartphone,
    Globe,
    Code2,
    Search,
    Cloud,
    MessageSquare
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from './ui/Button';

interface Message {
    id: string;
    type: 'bot' | 'user';
    content: string | React.ReactNode;
    timestamp: Date;
}

const SERVICES = [
    { id: 'web', name: 'Website Development', icon: Globe },
    { id: 'software', name: 'Custom Software', icon: Code2 },
    { id: 'mobile', name: 'Mobile App', icon: Smartphone },
    { id: 'seo', name: 'SEO Services', icon: Search },
    { id: 'cloud', name: 'Cloud Solutions', icon: Cloud },
];

export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [step, setStep] = useState<'welcome' | 'service' | 'name' | 'email' | 'details' | 'completing' | 'done'>('welcome');
    const [formData, setFormData] = useState({
        service: '',
        name: '',
        email: '',
        details: '',
    });

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            startChat();
        }
    }, [isOpen]);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const addMessage = (content: string | React.ReactNode, type: 'bot' | 'user') => {
        const newMessage: Message = {
            id: Math.random().toString(36).substring(7),
            type,
            content,
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, newMessage]);
    };

    const botResponse = async (text: string, delay = 1000) => {
        setIsTyping(true);
        await new Promise((resolve) => setTimeout(resolve, delay));
        setIsTyping(false);
        addMessage(text, 'bot');
    };

    const startChat = async () => {
        setIsTyping(true);
        await new Promise((resolve) => setTimeout(resolve, 800));
        setIsTyping(false);
        addMessage(
            "Hi there! 👋 I'm Andi, your AI assistant from AnD Innovatech. I'd love to help you grow your business. What service are you interested in today?",
            'bot'
        );
        setStep('service');
    };

    const handleServiceSelect = async (service: string, serviceName: string) => {
        setFormData({ ...formData, service: serviceName });
        addMessage(serviceName, 'user');
        setStep('name');

        await botResponse(`Excellent choice! ${serviceName} is one of our core specialties. 🚀`);
        await botResponse("To get started, what's your full name?");
    };

    const handleInputSubmit = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const val = inputValue.trim();
        setInputValue('');
        addMessage(val, 'user');

        if (step === 'name') {
            setFormData({ ...formData, name: val });
            await botResponse(`Nice to meet you, ${val.split(' ')[0]}! 😊`);
            await botResponse("What is your professional email address? We'll use this to send you a formal proposal.");
            setStep('email');
        } else if (step === 'email') {
            if (!val.includes('@')) {
                await botResponse("That doesn't look like a valid email. Could you please double-check?");
                return;
            }
            setFormData({ ...formData, email: val });
            await botResponse("Perfect! Almost there. 🕒");
            await botResponse("Do you have any specific requirements, timeline, or a budget range in mind for this project?");
            setStep('details');
        } else if (step === 'details') {
            setFormData({ ...formData, details: val });
            setStep('completing');
            await botResponse("Processing your request... ⚙️");

            // Send to API
            try {
                await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        service: formData.service,
                        message: `[CHATBOT LEAD] ${val}`,
                        budget: 'Chatbot Interactive',
                        phone: 'Provided via email',
                    }),
                });
            } catch (_err) {
                console.error("Chatbot submit error:", _err);
            }

            await botResponse("All set! I've sent your details to our strategy team. One of our experts will reach out to you within the next 2-4 hours to schedule a free consultation.");
            await botResponse("Is there anything else I can help you with today? ✨");
            setStep('done');
        } else if (step === 'done') {
            await botResponse("Thank you for choosing AnD Innovatech! Have a wonderful day.");
        }
    };

    return (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[calc(100vw-2rem)] sm:w-[380px] md:w-[420px] max-h-[85vh] md:max-h-[600px] h-[80vh] bg-white dark:bg-navy rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-7 bg-primary text-white flex items-center justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center relative border border-white/30">
                                    <Bot size={24} />
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-primary rounded-full" />
                                </div>
                                <div>
                                    <div className="font-extrabold text-lg tracking-tight">Andi</div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                        <div className="text-[10px] text-white/80 uppercase tracking-[0.2em] font-black">Online Helpdesk</div>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-xl transition-all relative z-10"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 scrollbar-hide bg-slate-50/50 dark:bg-navy/30">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={cn(
                                        "flex flex-col max-w-[85%] group",
                                        msg.type === 'user' ? "ml-auto items-end" : "items-start"
                                    )}
                                >
                                    <div className={cn(
                                        "px-5 py-4 rounded-[1.5rem] text-sm leading-relaxed shadow-sm transition-all",
                                        msg.type === 'user'
                                            ? "bg-primary text-white rounded-tr-none shadow-glow-primary"
                                            : "bg-white dark:bg-slate-800 text-navy dark:text-slate-100 rounded-tl-none border border-slate-100 dark:border-slate-700"
                                    )}>
                                        {msg.content}
                                    </div>
                                    <div className="text-[9px] text-slate-400 mt-2 px-2 uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                </div>
                            ))}

                            {step === 'service' && !isTyping && (
                                <div className="grid grid-cols-1 gap-2.5 mt-4">
                                    {SERVICES.map((s) => (
                                        <button
                                            key={s.id}
                                            onClick={() => handleServiceSelect(s.id, s.name)}
                                            className="flex items-center gap-4 p-4 text-left rounded-2xl bg-white dark:bg-slate-800 border-2 border-transparent hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all text-sm font-bold group border border-slate-100 dark:border-slate-700"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                                <s.icon size={18} />
                                            </div>
                                            <span className="text-navy dark:text-white">{s.name}</span>
                                            <ArrowRight size={16} className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                                        </button>
                                    ))}
                                </div>
                            )}

                            {isTyping && (
                                <div className="flex gap-2 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 w-fit shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-navy backdrop-blur-xl">
                            <form
                                onSubmit={handleInputSubmit}
                                className="relative flex items-center gap-3"
                            >
                                <input
                                    disabled={step === 'service' || step === 'completing'}
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder={step === 'service' ? "Click an option above..." : "Message Andi..."}
                                    className="w-full pl-5 pr-14 py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-primary/20 rounded-2xl text-[16px] focus:bg-white dark:focus:bg-slate-800 transition-all outline-none disabled:opacity-50 text-navy dark:text-white placeholder:text-slate-400 font-medium"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim() || step === 'service'}
                                    className="absolute right-2 p-3 bg-primary text-white rounded-xl hover:bg-primary-700 transition-all disabled:opacity-20 disabled:grayscale transform active:scale-95 shadow-lg shadow-primary/20"
                                >
                                    <Send size={20} />
                                </button>
                            </form>
                            <div className="flex items-center justify-center gap-1.5 mt-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Expert Strategists Available</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-glow-primary transition-all duration-500 overflow-hidden relative",
                    isOpen ? "bg-white text-navy rotate-90" : "bg-primary text-white"
                )}
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50" />
                {isOpen ? <X size={32} className="relative z-10" /> : <MessageSquare size={32} className="relative z-10 fill-current" />}

                {!isOpen && (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-4 border-white dark:border-navy rounded-full z-20"
                    />
                )}
            </motion.button>
        </div>
    );
}
