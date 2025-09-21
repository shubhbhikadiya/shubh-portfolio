import React from 'react'

export function Badge({ className = '', ...props }) {
  return <span className={['inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300', className].join(' ')} {...props} />;
}
