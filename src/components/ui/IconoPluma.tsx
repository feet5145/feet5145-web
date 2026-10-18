function IconoPluma({ className = "h-4 w-4" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
            <path d="M20 4C12 4 6 9 5 19m15-15c0 7-5 12-12 12m12-12-9 9" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 20l1-1" strokeLinecap="round" />
        </svg>
    );
}

export default IconoPluma;
