"use client"

import { useState } from "react"
import { MessageSquareText, ArrowLeft, Send } from "lucide-react"
import { Button } from "../ui/button"
import logow1ll from "../../assets/logos/logo_w1ll.png"

export default function Chat() {
    const [messages, setMessages] = useState([
        {
        type: "bot",
        text: "Olá, cliente! Meu nome é W1LL, sou o assistente virtual da W1. Como posso ajudar hoje?"
        }
    ])
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)

    const sendMessage = async () => {
        if (!input.trim()) return

        // adiciona a mensagem do usuário na lista
        const newMessages = [...messages, { type: "user", text: input }]
        setMessages(newMessages)
        setInput("")
        setLoading(true)

        try {
        const res = await fetch("http://localhost:8000/chat", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({ mensagem: input })
        })

        const data = await res.json()
        const resposta = data.resposta || "Desculpe, não consegui entender."

        setMessages([...newMessages, { type: "bot", text: resposta }])
        } catch (err) {
        console.error(err)
        setMessages([...newMessages, { type: "bot", text: "Erro ao se comunicar com a assistente W1LL 💔" }])
        }

        setLoading(false)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") sendMessage()
    }

    return (
        <div className="flex flex-col h-screen bg-[#f7f9f8]">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
            <button
                className="flex items-center gap-2"
                onClick={() => window.location.href = "/"}
                type="button"
            >
                <ArrowLeft className="text-[#00252F]" />
                <span className="text-[#00252F] text-lg font-medium">Voltar</span>
            </button>
            <Button variant="ghost" className="text-white bg-[#00252F] rounded-lg px-4 py-1 text-sm font-medium">
            TELA CHAT
            </Button>
        </div>

        {/* Logo + título */}
        <div className="flex flex-col items-center mb-4">
            <img src={logow1ll} alt="Logo W1" className="w-16 h-16" />
            <p className="text-[#00252F] text-sm mt-2">Assistente Virtual | <b>W1 Patrimonial</b></p>
        </div>

        {/* Mensagens */}
        <div className="flex-1 px-4 space-y-3 overflow-y-auto">
            {messages.map((msg, i) => (
            <div key={i} className={`max-w-[80%] whitespace-pre-wrap ${msg.type === "bot" ? "bg-[#00252F] text-white self-start rounded-xl p-3" : "bg-[#e6e6e6] text-black self-end rounded-xl p-3 ml-auto"}`}>
                {msg.text}
            </div>
            ))}
            {loading && (
            <div className="max-w-[80%] bg-[#00252F] text-white self-start rounded-xl p-3">
                W1LL está digitando...
            </div>
            )}
        </div>

        {/* Input */}
        <div className="p-4">
            <div className="flex items-center border border-gray-300 rounded-2xl px-4 py-2 bg-white">
            <input
                type="text"
                placeholder="Digite aqui sua mensagem..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 outline-none bg-transparent text-sm"
            />
            <button onClick={sendMessage}>
                <Send className="text-[#00252F]" />
            </button>
            </div>
        </div>

        {/* Bottom nav */}
        <div className="flex justify-around border-t border-gray-200 p-2 bg-white text-[#00252F]">
            <div className="flex flex-col items-center text-xs">
            🌳
            <span>Bens</span>
            </div>
            <div className="flex flex-col items-center text-xs">
            📄
            <span>Holdings</span>
            </div>
            <div className="flex flex-col items-center text-xs font-bold">
            🏠
            <span>Home</span>
            </div>
            <div className="flex flex-col items-center text-xs">
            💳
            <span>S1NC</span>
            </div>
            <div className="flex flex-col items-center text-xs text-[#34E7D0]">
            ⚙️
            <span>Mais</span>
            </div>
        </div>
        </div>
    )
}
