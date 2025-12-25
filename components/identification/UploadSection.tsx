import { ChangeEvent } from "react";
import { Button } from "@/components/ui/Button";

type Props = {
    onFileSelected: (file: File) => void;
};

export function UploadSection({ onFileSelected }: Props) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const validTypes = ["image/jpeg", "image/jpg", "image/png"];
        if (!validTypes.includes(file.type)) {
            alert("Format file tidak didukung. Gunakan JPG/JPEG/PNG.");
            return;
        }

        if (file.size > 8 * 1024 * 1024) {
            alert("Ukuran file terlalu besar. Maksimal 8MB.");
            return;
        }

        onFileSelected(file);
    };

    return (
        <section className="mx-auto flex max-w-4xl flex-col items-center px-4 py-10 text-center md:px-6 md:py-14">
            <h1 className="mb-3 text-2xl font-semibold text-slate-900 md:text-3xl">
                Identifikasi Tanaman Usada
            </h1>
            <p className="mb-8 max-w-xl text-sm text-slate-600 md:text-base">
                Silakan unggah citra daun tanaman Usada Bali dalam format JPG/JPEG/PNG
                untuk dilakukan proses identifikasi.
            </p>

            <label className="cursor-pointer">
                <input
                    type="file"
                    accept="image/jpeg,image/jpg,image/png"
                    className="hidden"
                    onChange={handleChange}
                />
                <Button>Unggah Foto</Button>
            </label>
        </section>
    );
}
