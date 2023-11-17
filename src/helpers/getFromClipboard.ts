export const getFromClipboard = async () => {
  try {
    const permissionStatus = await (navigator.permissions.query as any)({
      name: 'clipboard-read',
    });

    // Si el permiso es concedido, lee el portapapeles
    if (
      permissionStatus.state == 'granted' ||
      permissionStatus.state == 'prompt'
    ) {
      const text = await navigator.clipboard.readText();
      return text;
    } else {
      throw new Error('Permiso para leer el portapapeles no concedido');
    }
  } catch (err) {
    console.error('Error al leer el portapapeles:', err);
  }
};
