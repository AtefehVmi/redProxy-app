export function formatBytes(bytes: number): string {
    if (bytes === 0) return '0B';

    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    const index = Math.floor(Math.log10(bytes) / 3);
    const sizeInUnit = bytes / Math.pow(1024, index);

    return `${sizeInUnit.toFixed(1)} ${units[index]}`;
}