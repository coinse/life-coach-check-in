import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import clsx from 'clsx'
import { Anchor } from 'nextra/components'

interface NewTabLinkProps extends ComponentPropsWithoutRef<typeof Anchor> {
  children: ReactNode
}

export function NewTabLink({
  children,
  className,
  rel,
  target = '_blank',
  ...props
}: NewTabLinkProps) {
  const resolvedRel =
    rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)

  return (
    <Anchor
      {...props}
      className={clsx(
        'x:mt-4 x:block x:text-primary-600 x:underline x:hover:no-underline x:decoration-from-font x:[text-underline-position:from-font]',
        className
      )}
      target={target}
      rel={resolvedRel}
    >
      {children}
    </Anchor>
  )
}
