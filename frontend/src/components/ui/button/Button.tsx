import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { LuLoader2 } from 'react-icons/lu';
import styles from './Button.module.scss';

const buttonVariants = cva(cn(styles.variants_base, styles.sizes_base), {
  variants: {
    variant: {
      default: styles.variants_default,
      default_50_opacity: styles.variants_default_50_opacity,
      hover_background: styles.variants_hover_background,
      underline_hover_background: styles.variants_underline_hover_background,
      no_background: styles.variants_no_background,
      accent: styles.variants_accent,
    },
    size: {
      default: styles.sizes_default,
      sm: styles.sizes_sm,
      lg: styles.sizes_lg,
      icon: styles.sizes_icon,
      cube: styles.sizes_cube,
      cube_sm: styles.sizes_cube_sm,
      identical_paddings: styles.sizes_identical_paddings,
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading,
      children,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <LuLoader2 className='animate-spin' /> : children}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
