import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useLanguage, usePortfolioData } from '@/context/LanguageContext';

export const Chatbot = () => {
  const { language } = useLanguage();
  const portfolioData = usePortfolioData();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: `Hi, I'm Mohamed's AI Assistant. Ask me anything about his skills, projects, or experience!` }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input.trim().toLowerCase();
    setMessages(prev => [...prev, { type: 'user', text: input }]);
    setInput('');

    // Simple Rule-Based AI Logic
    setTimeout(() => {
      let botReply = "I'm still learning! But you can check out Mohamed's projects, skills, and experience sections or contact him directly.";

      if (userMsg.includes('skill') || userMsg.includes('know') || userMsg.includes('tech')) {
        botReply = `Mohamed is highly skilled in: ${portfolioData.allSkills.slice(0, 5).join(', ')} and many more. He specializes in AI and Data Analysis.`;
      } else if (userMsg.includes('project') || userMsg.includes('work') || userMsg.includes('portfolio')) {
        botReply = `Mohamed has worked on ${portfolioData.projects.length} amazing projects, including ${portfolioData.projects[0].title} and ${portfolioData.projects[1].title}.`;
      } else if (userMsg.includes('contact') || userMsg.includes('email') || userMsg.includes('hire')) {
        botReply = `You can reach Mohamed at ${portfolioData.personal.email} or connect with him on LinkedIn!`;
      } else if (userMsg.includes('education') || userMsg.includes('study') || userMsg.includes('degree')) {
        botReply = `Mohamed holds a B.Sc. in Agricultural Engineering and completed an intensive Applied AI & Data Analysis Training at the Digital Pioneers Initiative.`;
      } else if (userMsg.includes('hello') || userMsg.includes('hi ') || userMsg === 'hi') {
        botReply = `Hello! How can I help you learn more about Mohamed's expertise today?`;
      } else if (userMsg.includes('محمد') || userMsg.includes('mohamed') || userMsg.includes('name')) {
        botReply = `Mohamed is a dedicated Applied AI and Data Analysis specialist bridging engineering principles and advanced data-driven solutions!`;
      }

      setMessages(prev => [...prev, { type: 'bot', text: botReply }]);
    }, 600);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 ${language === 'ar' ? 'left-6' : 'right-6'} z-50 p-4 rounded-full bg-gradient-to-r from-primary to-highlight text-primary-foreground shadow-lg shadow-primary/30 glow-border ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className={`fixed bottom-6 ${language === 'ar' ? 'left-6' : 'right-6'} z-50 w-[350px] h-[500px] max-h-[80vh] flex flex-col glass-strong rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 bg-background/95`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-primary/10 bg-gradient-to-r from-background to-primary/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: msg.type === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex gap-3 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.type === 'bot' && (
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-3.5 h-3.5 text-primary" />
                    </div>
                  )}
                  <div className={`p-3 rounded-2xl max-w-[80%] text-sm ${
                    msg.type === 'user' 
                      ? 'bg-primary text-primary-foreground rounded-tr-none' 
                      : 'bg-surface border border-border rounded-tl-none text-foreground'
                  }`}>
                    {msg.text}
                  </div>
                  {msg.type === 'user' && (
                    <div className="w-6 h-6 rounded-full bg-surface border border-border flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-3.5 h-3.5 text-muted-foreground" />
                    </div>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-primary/10 bg-background">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="w-full bg-surface border border-border rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
                />
                <button
                  onClick={handleSend}
                  className="absolute right-2 p-1.5 bg-primary rounded-full text-foreground hover:bg-highlight transition-colors"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
