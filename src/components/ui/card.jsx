import React from 'react'

export function Card({ className = '', ...props }) {
  return <div className={['rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900', className].join(' ')} {...props} />;
}
export function CardHeader({ className = '', ...props }) {
  return <div className={['px-6 pt-6', className].join(' ')} {...props} />;
}
export function CardTitle({ className = '', ...props }) {
  return <h3 className={['font-inter text-lg font-bold tracking-tight', className].join(' ')} {...props} />;
}
export function CardContent({ className = '', ...props }) {
  return <div className={['px-6 pb-6', className].join(' ')} {...props} />;
}
