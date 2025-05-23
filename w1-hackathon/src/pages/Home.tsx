import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import LogoW1 from "../assets/logos/logo_w1.png"

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-white p-4">
        <img
            src={LogoW1} // Coloca o logo em /public/logo-w1.png
            alt="W1 Consultoria"
            className="w-48 mb-8"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Bem-vindo à W1</h1>
        <div className="flex gap-4">
            <Link to="/chat">
            <Button className="text-lg px-6 py-4 rounded-2xl shadow-md">💬 Chat com W1LL</Button>
            </Link>
            <Link to="/admin">
            <Button variant="outline" className="text-lg px-6 py-4 rounded-2xl shadow-md">🗂️ Área do Admin</Button>
            </Link>
        </div>
        </div>
    )
    }
