import React from 'react'

export function Button({ className = '', variant = 'default', size = 'md', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-medium transition focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    default: 'bg-emerald-600 text-white hover:bg-emerald-700',
    outline: 'border border-slate-300 text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-900',
    ghost: 'text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-900'
  };
  const sizes = { sm: 'h-8 px-3 rounded-xl text-sm', md: 'h-10 px-4 rounded-xl', lg: 'h-12 px-5 rounded-2xl text-base' };
  return <button className={[base, variants[variant], sizes[size], className].join(' ')} {...props} />;
}