'use client'
import { useRouter } from 'next/navigation'

interface ConfirmButtonProps {
  href: string
  label?: string   // 선택적 텍스트 prop
}

export function ConfirmButton({ href, label = "확인했습니다" }: ConfirmButtonProps) {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push(href)}
      className="
        mt-10 px-6 py-3 rounded-lg
        bg-blue-600 text-white font-medium
        hover:bg-blue-700
        transition-colors duration-200
        shadow-sm hover:shadow-lg
        cursor-pointer
      "
    >
      {label}
    </button>
  )
}
