import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    variant?: 'primary' | 'accent' | 'outline' | 'ghost';
    size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'default', asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(
                    'inline-flex items-center justify-center rounded-full text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a962]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50',
                    {
                        'bg-white text-black hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(255,255,255,0.15)]':
                            variant === 'primary',
                        'bg-[#c9a962] text-black hover:bg-[#d4b978] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(201,169,98,0.25)]':
                            variant === 'accent',
                        'bg-transparent border border-white/25 text-white hover:bg-white/10 hover:border-white/40':
                            variant === 'outline',
                        'hover:bg-white/10 text-white': variant === 'ghost',
                        'h-10 px-5 py-2': size === 'default',
                        'h-9 px-4': size === 'sm',
                        'h-14 px-10 py-4': size === 'lg',
                        'h-10 w-10': size === 'icon',
                    },
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button };
