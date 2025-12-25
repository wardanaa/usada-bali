"use client";

import { useState } from "react";
import { UploadSection } from "@/components/identification/UploadSection";
import { PreviewCard } from "@/components/identification/PreviewCard";
import { ResultCard } from "@/components/identification/ResultCard";
import { ErrorCard } from "@/components/identification/ErrorCard";
import { identifyPlantMock } from "@/lib/identify";

type Step = "UPLOAD" | "PREVIEW" | "LOADING" | "SUCCESS" | "ERROR";

export default function IdentifikasiPage() {
    const [step, setStep] = useState<Step>("UPLOAD");
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [result, setResult] = useState<{
        name: string;
        confidence: number;
        description: string;
    } | null>(null);

    const handleFileSelected = (f: File) => {
        setFile(f);
        const objectUrl = URL.createObjectURL(f);
        setPreviewUrl(objectUrl);
        setResult(null);
        setErrorMessage(null);
        setStep("PREVIEW");
    };

    const resetAll = () => {
        if (previewUrl) URL.revokeObjectURL(previewUrl);
        setFile(null);
        setPreviewUrl(null);
        setResult(null);
        setErrorMessage(null);
        setStep("UPLOAD");
    };

    const handleIdentify = async () => {
        if (!file || !previewUrl) return;
        setStep("LOADING");

        try {
            const res = await identifyPlantMock(file);

            if (res.status === "success") {
                setResult({
                    name: res.name,
                    confidence: res.confidence,
                    description: res.description,
                });
                setStep("SUCCESS");
            } else {
                setErrorMessage(res.message);
                setStep("ERROR");
            }
        } catch (err) {
            console.error(err);
            setErrorMessage("Terjadi kesalahan pada server. Coba lagi beberapa saat.");
            setStep("ERROR");
        }
    };

    const loading = step === "LOADING";

    return (
        <div className="relative overflow-hidden">
            {/* Ornamen daun kiri/kanan – nanti bisa diganti SVG/PNG sendiri */}
            <div className="pointer-events-none absolute left-0 top-32 hidden h-40 w-40 rounded-full bg-green-100 blur-3xl md:block" />
            <div className="pointer-events-none absolute right-0 top-40 hidden h-40 w-40 rounded-full bg-green-100 blur-3xl md:block" />

            {step === "UPLOAD" && <UploadSection onFileSelected={handleFileSelected} />}

            {(step === "PREVIEW" || step === "LOADING") &&
                file &&
                previewUrl && (
                    <PreviewCard
                        file={file}
                        previewUrl={previewUrl}
                        onIdentify={handleIdentify}
                        onReset={resetAll}
                        loading={loading}
                    />
                )}

            {step === "SUCCESS" && file && previewUrl && result && (
                <ResultCard
                    imageUrl={previewUrl}
                    name={result.name}
                    confidence={result.confidence}
                    description={result.description}
                    onNew={resetAll}
                    onEnd={resetAll}
                />
            )}

            {step === "ERROR" && errorMessage && (
                <ErrorCard
                    message={errorMessage}
                    onRetry={resetAll}
                    onEnd={resetAll}
                />
            )}
        </div>
    );
}
