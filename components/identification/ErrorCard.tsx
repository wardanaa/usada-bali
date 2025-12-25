import { Button } from "@/components/ui/Button";

type Props = {
    message: string;
    onRetry: () => void;
    onEnd: () => void;
};

export function ErrorCard({ message, onRetry, onEnd }: Props) {
    return (
        <section className="mx-auto max-w-4xl px-4 py-10 md:px-6 md:py-14">
            <div className="rounded-3xl bg-white shadow-md">
                <div className="border-b border-slate-100 px-6 py-4">
                    <h2 className="text-base font-semibold text-slate-900">
                        Objek Tidak Dikenali
                    </h2>
                </div>
                <div className="space-y-4 px-6 py-6 text-sm text-slate-700">
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700">
                        <p className="font-semibold mb-1">Objek Tidak Dikenali</p>
                        <p>{message}</p>
                    </div>
                    <p>
                        Silakan unggah kembali citra daun yang lebih jelas dan sesuai
                        format untuk dilakukan identifikasi.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Button variant="outline" onClick={onRetry}>
                            Unggah Citra Kembali
                        </Button>
                        <Button variant="danger" onClick={onEnd}>
                            Akhiri Proses
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
