interface boxProps {
  children: React.ReactNode
}

export function Box({ children }: boxProps) {
  return (
    <div className="bg-white p-5 rounded-[0.625rem] shadow-card max-w-[294px] lg:max-w-[380px] ">
      {children}
    </div>
  )
}
