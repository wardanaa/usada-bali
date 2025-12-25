import Image from "next/image";
import { Button } from "@/components/ui/Button";

type Props = {
    imageUrl: string;
    name: string;
    confidence: number;
    description: string;
    onNew: () => void;
    onEnd: () => void;
};

export function ResultCard({
    imageUrl,
    name,
    confidence,
    description,
    onNew,
    onEnd,
}: Props) {
    return (
        <section className="mx-auto max-w-4xl px-4 py-10 md:px-6 md:py-14">
            <div className="rounded-3xl bg-white shadow-md">
                <div className="border-b border-slate-100 px-6 py-4">
                    <h2 className="text-base font-semibold text-slate-900">
                        Hasil Identifikasi Citra
                    </h2>
                </div>
                <div className="grid gap-6 px-6 py-6 md:grid-cols-[2fr,3fr]">
                    <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-slate-100">
                        <Image
                            src={imageUrl}
                            alt={name}
                            fill
                            className="object-cover"
                        />
                        {/* Placeholder bbox label */}
                        <div className="absolute left-3 top-3 rounded bg-red-500/90 px-2 py-1 text-[10px] font-semibold text-white">
                            {name.toLowerCase()} : {confidence}%
                        </div>
                    </div>
                    <div className="space-y-3 text-sm text-slate-700">
                        <p className="font-semibold">
                            Nama tanaman: <span className="text-green-700">{name}</span>
                        </p>
                        <p>Confidence score: {confidence}%</p>
                        <p>{description}</p>

                        <div className="mt-4 flex flex-wrap gap-3">
                            <Button onClick={onNew}>Identifikasi Tanaman Baru</Button>
                            <Button variant="outline" onClick={onEnd}>
                                Akhiri Proses
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
