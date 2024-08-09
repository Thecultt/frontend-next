export const scrollToBlock = (id: string, position: ScrollLogicalPosition = 'start') => {
    const block = document.getElementById(id);
    block?.scrollIntoView({ behavior: 'smooth', block: position });
};
