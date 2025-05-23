import React, { useState } from 'react';
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Loader2 } from 'lucide-react';

const AdminExtractPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [jsonResult, setJsonResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    async function processarPDF(arquivo: File) {
        const formData = new FormData();
        formData.append("file", arquivo);
        
        try {
            const res = await fetch("http://localhost:8000/processar-pdf", {
                method: "POST",
                body: formData
            });
            
            return await res.json();
        } catch (error) {
            console.error("Erro ao processar PDF:", error);
            return { erro: "Falha ao processar PDF" };
        }
    }

    const handleUpload = async () => {
        if (!file) return;
        setLoading(true);
        setJsonResult(null);
        setError(null);

        try {
            const resultado = await processarPDF(file);
            
            if (resultado.erro) {
                setError(resultado.erro);
                return;
            }

            // Limpa o JSON (remove marcações de código e espaços)
            let jsonClean = resultado.texto_estruturado;
            if (jsonClean.includes("```json")) {
                jsonClean = jsonClean.replace("```json", "").replace("```", "").trim();
            }

            // Converte para objeto e depois para string formatada
            const jsonObj = JSON.parse(jsonClean);
            const jsonText = JSON.stringify(jsonObj, null, 2); // Formata com 2 espaços

            setJsonResult(jsonText);
        } catch (err) {
            console.error(err);
            setError("Erro ao processar o JSON. Verifique o formato do documento.");
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = () => {
        if (!jsonResult) return;
        const blob = new Blob([jsonResult], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "documento_estruturado.json";
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="max-w-2xl mx-auto p-4 space-y-4">
            <h1 className="text-2xl font-bold">📄 Extração de Documentos (Admin)</h1>
            <Card>
                <CardContent className="p-4 space-y-4">
                    <Input type="file" accept="application/pdf" onChange={handleFileChange} />
                    <Button onClick={handleUpload} disabled={loading || !file}>
                        {loading ? (<><Loader2 className="animate-spin mr-2" />Extraindo...</>) : '📤 Enviar e Extrair'}
                    </Button>

                    {error && <div className="text-red-600 font-semibold">{error}</div>}

                    {jsonResult && (
                        <>
                            <Textarea
                                className="w-full h-64"
                                value={jsonResult}
                                readOnly
                            />
                            <Button onClick={handleDownload} variant="secondary">
                                📥 Baixar JSON
                            </Button>
                        </>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default AdminExtractPage;