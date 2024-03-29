export const getImage = (fileName: string) => {
  try {
    const modules: { [key: string]: any } = import.meta.glob(
      "@/assets/img/**/*.{png,svg}",
      { eager: true }
    );
    const moduleKeys = Object.keys(modules);
    const fileSrc = moduleKeys.find((key) => key.includes(fileName));

    return fileSrc ? modules[fileSrc].default : "";
  } catch (err) {
    console.log(err);
  }
}
