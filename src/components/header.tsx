'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from "@nextui-org/react";
import { IconMoonFilled, IconSunFilled } from '@/icons/icons';

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="h-12 bg-yellow-300 text-slate-900 flex justify-center items-center gap-x-2 text-xl font-bold">
      Code News
      { mounted &&
        theme === 'dark' ?
          <Button isIconOnly aria-label="Like" onClick={() => setTheme("light")}>
            <IconSunFilled />
          </Button>
          :
          <Button isIconOnly variant="faded" aria-label="Take a photo" onClick={() => setTheme("dark")}>
            <IconMoonFilled />
          </Button>
      }
    </header>
  )
}