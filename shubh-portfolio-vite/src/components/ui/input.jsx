import React from 'react'

export function Input({ className = '', ...props }) {
  return <input className={['h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none ring-emerald-500 placeholder:text-slate-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100', className].join(' ')} {...props} />;
}
