export function getCurrentPage(next: string | null, previous: string | null, limit: number): number {
    if (!next && !previous) return 1;
        
    if (next) {
        const offset = new URL(next).searchParams.get('offset') || '0';
        return Math.floor(parseInt(offset) / limit);
    
    }
    
    if (previous) {
        const offset = new URL(previous).searchParams.get('offset') || '0';
        return Math.floor(parseInt(offset) / limit) + 2;   
    }
    
    return 1;
}
