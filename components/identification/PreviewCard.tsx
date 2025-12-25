import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { JSX } from "react/jsx-dev-runtime";

type Props = {
    previewUrl: string;
    file: File;
    onIdentify: () => void;
    onReset: () => void;
    loading?: boolean;
};

export function PreviewCard({
    previewUrl,
    file,
    onIdentify,
    onReset,
    loading,
}: Props): JSX.Element {
    return (
        <section className="mx-auto max-w-4xl px-4 py-10 md:px-6 md:py-14">
            <div className="rounded-3xl bg-white shadow-md">
                <div className="border-b border-slate-100 px-6 py-4">
                    <h2 className="text-base font-semibold text-slate-900">
                        Pratinjau Citra
                    </h2>
                </div>
                <div className="grid gap-6 px-6 py-6 md:grid-cols-[2fr,3fr]">
                    <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-slate-100">
                        <Image
                            src={previewUrl}
                            alt="Pratinjau daun"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-4 text-sm text-slate-700">
                        <p>
                            Nama file: <span className="font-medium">{file.name}</span>
                        </p>
                        <p>
                            Ukuran:{" "}
                            {(file.size / (1024 * 1024)).toFixed(2)}
                            {" MB"}
                        </p>
                        <p className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-xs text-green-700">
                            <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                            Citra valid dan siap untuk identifikasi
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <Button onClick={onIdentify} disabled={loading}>
                                {loading ? "Mengidentifikasi..." : "Identifikasi Tanaman"}
                            </Button>
                            <Button variant="outline" onClick={onReset} disabled={loading}>
                                Unggah Ulang Citra
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
