'use client'
import { useRouter } from 'next/navigation'

interface ConfirmButtonProps {
  href: string
  label?: string
  newTab?: boolean
}

export function ConfirmButton({
  href,
  label = '확인했습니다',
  newTab = false,
}: ConfirmButtonProps) {
  const router = useRouter()
  const isExternal = /^https?:\/\//.test(href)

  const handleClick = () => {
    if (newTab) {
      window.open(href, '_blank', 'noopener,noreferrer')
      return
    }

    if (isExternal) {
      window.location.href = href
      return
    }

    router.push(href)
  }

  return (
    <button
      onClick={handleClick}
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
