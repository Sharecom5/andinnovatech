export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-grey-light dark:bg-navy">
            <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-slate-700" />
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" />
                </div>
                <p className="text-sm text-grey dark:text-slate-400 animate-pulse">Loading...</p>
            </div>
        </div>
    );
}
