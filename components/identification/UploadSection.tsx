import { ChangeEvent } from "react";
import { Button } from "@/components/ui/Button";
import { validateFile } from "@/lib/validation";
import { toast } from "@/lib/toast";
import { JSX } from "react/jsx-dev-runtime";

type Props = {
    onFileSelected: (file: File) => void;
};

export function UploadSection({ onFileSelected }: Props): JSX.Element {
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const file = e.target.files?.[0];
        if (!file) return;

        const validation = validateFile(file);
        if (!validation.isValid) {
            toast.error(validation.error);
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
