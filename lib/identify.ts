export type IdentifyResult =
  | {
      status: "success";
      name: string;
      confidence: number;
      description: string;
      imageUrl: string;
    }
  | {
      status: "error";
      message: string;
    };

export async function identifyPlantMock(file: File): Promise<IdentifyResult> {
  // Simulasi delay backend
  await new Promise((r) => setTimeout(r, 1200));

  // Dummy logic: kalau nama file mengandung "fail", anggap tidak dikenali
  if (file.name.toLowerCase().includes("fail")) {
    return {
      status: "error",
      message:
        "Sistem tidak berhasil mendeteksi objek daun pada citra yang diunggah.",
    };
  }

  return {
    status: "success",
    name: "Temulawak",
    confidence: 92,
    description:
      "Tanaman ini dikenal memiliki rimpang berwarna kuning kecokelatan yang mengandung senyawa aktif seperti kurkuminoid dan xanthorrhizol, yang berperan penting dalam menjaga kesehatan tubuh.",
    imageUrl: "", // akan diisi dari preview di front-end
  };
}
