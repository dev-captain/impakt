const usePascalCase = () => {
  const convertToPascalCase = (label: string) => {
    const convertedLabel = label.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

    return convertedLabel;
  };

  return { convertToPascalCase };
};

export default usePascalCase;
